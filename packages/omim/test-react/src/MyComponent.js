import React from 'react';
import '@omim/core/icon-button'
import '@omim/core/button'
import '@omim/core/checkbox'
import '@omim/core/radio'
import '@omim/core/pagination'

class MyComponent extends React.Component {
  onClick = (evt) => {

    import('@omim/core/loading').then(() => {
      this.showLoading = true
      this.forceUpdate()
    })
  }

  componentDidMount() {
    this.iconBtn.addEventListener('change', (evt) => {
      console.log(evt.detail.isOn)
      this.checked = !this.checked
      this.forceUpdate()
    })
  }

  checked = true
  render() {
    return (
      <div>

        <m-button onClick={this.onClick}>Click me to dynamic Import @omim/core/loading</m-button>
        <div>
          <m-loading size="25"></m-loading>
          <m-loading size="35"></m-loading>
          <m-loading size="45"></m-loading>
          <m-loading size="55"></m-loading>

          <br />
          <m-loading size="25" color="#2d7418"></m-loading>
          <m-loading size="35" color="#f37736"></m-loading>
          <m-loading size="45" color="#7bc043"></m-loading>
          <m-loading size="55" color="#2170b8"></m-loading>
        </div>
        <m-radio checked='0'></m-radio>
        <m-radio checked></m-radio>
        <m-checkbox checked={this.checked}></m-checkbox>
        <m-checkbox></m-checkbox>
        <m-icon-button ref={e => { this.iconBtn = e }} color="red" icons="['favorite', 'favorite_border']"></m-icon-button>

        <m-icon-button>
          <svg viewBox="0 0 24 24" width="2em" height="2em" aria-hidden="true">
            <path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" width="2em" height="2em" aria-hidden="true">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
              fill="#F98080"></path>
            <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
              fill="#F95050"></path>
          </svg>
        </m-icon-button>
        <br />
        <m-pagination total="125" css={`
         button,li{
           background: white;
        }
        `} current-page="1" page-size="5" id="myPagination">
        </m-pagination>

      </div>
    );
  }
}

export default MyComponent