import {
  SYNC_RENDER,
  NO_RENDER,
  ASYNC_RENDER,
  ATTR_KEY
} from '../constants'
import options from '../options'
import { extend, applyRef, removeItem } from '../util'
import { enqueueRender } from '../render-queue'
import { getNodeProps } from './index'
import {
  diff,
  mounts,
  diffLevel,
  flushMounts,
  recollectNodeTree,
  removeChildren
} from './diff'
import { createComponent, collectComponent } from './component-recycler'
import { removeNode } from '../dom/index'
import {
  addScopedAttrStatic,
  getCtorName,
  scopeHost
} from '../style'

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
export function setComponentProps(component, props, opts, store, mountAll) {
  if (component._disable) return
  component._disable = true

  if ((component.__ref = props.ref)) delete props.ref
  if ((component.__key = props.key)) delete props.key

  if (!component.base || mountAll) {
    if (component.beforeInstall) component.beforeInstall()
    if (component.install) component.install()
  }

  if (!component.prevProps) component.prevProps = component.props
  component.props = props

  component._disable = false

  if (opts !== NO_RENDER) {
    if (
      opts === SYNC_RENDER ||
      options.syncComponentUpdates !== false ||
      !component.base
    ) {
      renderComponent(component, SYNC_RENDER, mountAll)
    } else {
      enqueueRender(component)
    }
  }

  applyRef(component.__ref, component)
}


/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
export function renderComponent(component, opts, mountAll, isChild, updateSelf) {
  if (component._disable) return

  let props = component.props,
    store = component.store,
    previousProps = component.prevProps || props,
    isUpdate = component.base,
    nextBase = component.nextBase,
    initialBase = isUpdate || nextBase,
    initialChildComponent = component._component,
    skip = false,
    rendered,
    inst,
    cbase

  // if updating
  if (isUpdate) {
    component.props = previousProps
    
    let receiveResult = true
    if (component.receiveProps) {
      receiveResult = component.receiveProps(props, previousProps)
    }
    if (receiveResult !== false) {
      skip = false
      if (component.beforeUpdate) {
        component.beforeUpdate(props, store)
      }
    } else {
      skip = true
    }
    component.props = props
  }

  component.prevProps = component.nextBase = null

  if (!skip) {
    component.beforeRender && component.beforeRender()
    rendered = component.render(props, store)

    //don't rerender
    if (component.constructor.css || component.css) {
      addScopedAttrStatic(
        rendered,
        '_s' + getCtorName(component.constructor)
      )
    }

    scopeHost(rendered, component.scopedCssAttr)


    let childComponent = rendered && rendered.nodeName,
      toUnmount,
      base,
      ctor = options.mapping[childComponent]

    if (ctor) {
      // set up high order component link

      let childProps = getNodeProps(rendered)
      inst = initialChildComponent

      if (inst && inst.constructor === ctor && childProps.key == inst.__key) {
        setComponentProps(inst, childProps, SYNC_RENDER, store, false)
      } else {
        toUnmount = inst

        component._component = inst = createComponent(ctor, childProps, store)
        inst.nextBase = inst.nextBase || nextBase
        inst._parentComponent = component
        setComponentProps(inst, childProps, NO_RENDER, store, false)
        renderComponent(inst, SYNC_RENDER, mountAll, true)
      }

      base = inst.base
    } else {
      cbase = initialBase

      // destroy high order component link
      toUnmount = initialChildComponent
      if (toUnmount) {
        cbase = component._component = null
      }

      if (initialBase || opts === SYNC_RENDER) {
        if (cbase) cbase._component = null
        base = diff(
          cbase,
          rendered,
          store,
          mountAll || !isUpdate,
          initialBase && initialBase.parentNode,
          true,
          updateSelf
        )
      }
    }

    if (initialBase && base !== initialBase && inst !== initialChildComponent) {
      let baseParent = initialBase.parentNode
      if (baseParent && base !== baseParent) {
        baseParent.replaceChild(base, initialBase)

        if (!toUnmount) {
          initialBase._component = null
          recollectNodeTree(initialBase, false)
        }
      }
    }

    if (toUnmount) {
      unmountComponent(toUnmount)
    }

    component.base = base
    if (base && !isChild) {
      let componentRef = component,
        t = component
      while ((t = t._parentComponent)) {
        ;(componentRef = t).base = base
      }
      base._component = componentRef
      base._componentConstructor = componentRef.constructor
    }
  }

  if (!isUpdate || mountAll) {
    mounts.unshift(component)
  } else if (!skip) {
    // Ensure that pending componentDidMount() hooks of child components
    // are called before the componentDidUpdate() hook in the parent.
    // Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
    // flushMounts();

    if (component.afterUpdate) {
      //deprecated
      component.afterUpdate(previousProps, store)
    }
    if (component.updated) {
      component.updated(previousProps, store)
    }
    if (options.afterUpdate) options.afterUpdate(component)
  }

  if (component._renderCallbacks != null) {
    while (component._renderCallbacks.length)
      component._renderCallbacks.pop().call(component)
  }

  if (!diffLevel && !isChild) flushMounts()
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
export function buildComponentFromVNode(dom, vnode, store, mountAll, updateSelf) {
  let c = dom && dom._component,
    originalComponent = c,
    oldDom = dom,
    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
    isOwner = isDirectOwner,
    props = getNodeProps(vnode)
  while (c && !isOwner && (c = c._parentComponent)) {
    isOwner = c.constructor === vnode.nodeName
  }

  if (c && isOwner && (!mountAll || c._component)) {
    if(!updateSelf){
      setComponentProps(c, props, ASYNC_RENDER, store, mountAll)
    }
    dom = c.base
  } else {
    if (originalComponent && !isDirectOwner) {
      unmountComponent(originalComponent)
      dom = oldDom = null
    }

    c = createComponent(vnode.nodeName, props, store, vnode)
    if (dom && !c.nextBase) {
      c.nextBase = dom
      // passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
      oldDom = null
    }
    setComponentProps(c, props, SYNC_RENDER, store, mountAll)
    dom = c.base

    if (oldDom && dom !== oldDom) {
      oldDom._component = null
      recollectNodeTree(oldDom, false)
    }
  }

  return dom
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
export function unmountComponent(component) {
  if (options.beforeUnmount) options.beforeUnmount(component)

  let base = component.base

  component._disable = true

	if (component.uninstall) component.uninstall()

	if (component.store) {
    if(options.isMultiStore){
      for(let key in component.store){
        const current = component.store[key]
        current.instances && removeItem(component, current.instances)
        current.updateSelfInstances && removeItem(component, current.updateSelfInstances)
      }
    } else {
      component.store.instances && removeItem(component, component.store.instances)
      component.store.updateSelfInstances && removeItem(component, component.store.updateSelfInstances)
    }
	}

  component.base = null

  // recursively tear down & recollect high-order component children:
  let inner = component._component
  if (inner) {
    unmountComponent(inner)
  } else if (base) {
    if (base[ATTR_KEY] != null) applyRef(base[ATTR_KEY].ref, null)

    component.nextBase = base

    removeNode(base)
    collectComponent(component)

    removeChildren(base)
  }

  applyRef(component.__ref, null)
}
