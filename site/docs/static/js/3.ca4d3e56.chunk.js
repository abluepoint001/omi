webpackJsonp([3],{63:function(n,e){n.exports="## Ref\n\n```jsx\ndefine('my-element', class extends WeElement {\n  onClick = (evt) => {\n    console.log(this.h1)\n  }\n\n  render(props) {\n    return (\n      <div>\n        <h1 ref={e => { this.h1 = e }} onClick={this.onClick}>Hello, world!</h1>\n      </div>\n    )\n  }\n})\n```\n\n\u5728\u5143\u7d20\u4e0a\u6dfb\u52a0 `ref={e => { this.anyNameYouWant = e }}` \uff0c\u7136\u540e\u4f60\u5c31\u53ef\u4ee5 JS \u4ee3\u7801\u91cc\u4f7f\u7528 `this.anyNameYouWant` \u8bbf\u95ee\u8be5\u5143\u7d20\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u65b9\u5f0f\u6765\u63d0\u9ad8 update \u7684\u6027\u80fd\uff1a\n\n* \u63d0\u524d\u8d4b\u503c\n* createRef\n\n### \u63d0\u524d\u8d4b\u503c\n\n```jsx\ndefine('my-element', class extends WeElement {\n  onClick = (evt) => {\n    console.log(this.h1)\n  }\n\n  myRef = e => { this.h1 = e }\n\n  render(props) {\n    return (\n      <div>\n        <h1 ref={this.myRef} onClick={this.onClick}>Hello, world!</h1>\n      </div>\n    )\n  }\n})\n```\n\n### createRef\n\n\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 `createRef` \u6765\u5f97\u5230\u66f4\u9ad8\u7684\u6027\u80fd:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  onClick = (evt) => {\n    console.log(this.myRef.current)  //h1\n  }\n\n  myRef = createRef()\n\n  render(props) {\n    return (\n      <div>\n        <h1 ref={this.myRef} onClick={this.onClick}>Hello, world!</h1>\n      </div>\n    )\n  }\n})\n```"}});
//# sourceMappingURL=3.ca4d3e56.chunk.js.map