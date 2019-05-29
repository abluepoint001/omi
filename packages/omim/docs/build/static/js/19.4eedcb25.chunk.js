webpackJsonp([19],{101:function(n,t){n.exports="## List\n\n\u5217\u8868\u662f\u6587\u672c\u6216\u56fe\u50cf\u7684\u8fde\u7eed\u5782\u76f4\u7d22\u5f15\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-list\n  onChange=\"onChange(event)\"\n  css=\"\n    .mdc-list,.mdc-list-group {\n      max-width: 600px;\n      border: 1px solid rgba(0,0,0,.1);\n    }\n  \">\n  <item text='Inbox'>\n    <graphic><m-icon-button icon='inbox'></m-icon-button></graphic>\n  </item>\n  <item activated='true' text='Star'>\n    <graphic><m-icon-button icon='star'></m-icon-button></graphic>\n  </item>\n  <item text='Send'>\n    <graphic><m-icon-button icon='send'></m-icon-button></graphic>\n  </item>\n  <item text='Drafts'>\n    <graphic><m-icon-button icon='drafts'></m-icon-button></graphic>\n  </item>\n</m-list>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n```jsx\n<m-list onChange={this.onChange} css={this.css}>\n  <item graphic={<m-icon-button icons={['bookmark_border', 'inbox']}></m-icon-button>}>Inbox</item>\n  <item activated graphic={<m-icon-button icons={['check_circle_outline', 'star']}></m-icon-button>}>Star</item>\n  <item graphic={<m-icon-button icons={['search', 'send']}></m-icon-button>}>Send</item>\n  <item graphic={<m-icon-button icons={['settings', 'drafts']}></m-icon-button>}>Drafts</item>\n</m-list>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| **m-list \u5c5e\u6027** | -- | -- | -- |\n| group | boolean | -- | \u4f7f\u7528\u5217\u8868\u7ec4 |\n| disabled | boolean | -- | \u7981\u7528 |\n| dense | boolean | -- | \u7d27\u51d1\u9ad8\u5ea6 |\n| avatar | boolean | -- | \u4e2d\u7b49\u9ad8\u5ea6 |\n| two-line | boolean | -- | \u4e24\u500d\u884c\u8ddd\u9ad8\u5ea6 |\n| **item \u5c5e\u6027** | -- | -- | -- |\n| divider | boolean | -- | \u5206\u5272\u7ebf |\n| padded | boolean | -- | \u5de6\u53f3\u4e24\u8fb9\u4e0d\u586b\u5145\u5206\u5272\u7ebf |\n| inset | boolean | -- | \u5934\u50cf\u5904\u4e0d\u586b\u5145\u5206\u5272\u7ebf |\n| disabled | boolean | -- | \u7981\u7528 |\n| selected | element | -- | \u9009\u4e2d |\n| activated | boolean | -- | \u4e00\u76f4\u9009\u4e2d |\n| graphic | element | -- | \u6700\u5de6\u8fb9\u5185\u5bb9 |\n| text | string | -- | \u4e2d\u95f4\u6587\u672c |\n| primary-text | string | -- | \u4e2d\u95f4\u4e0a\u65b9\u6587\u672c |\n| secondary-text | string | -- | \u4e2d\u95f4\u4e0b\u65b9\u6587\u672c |\n| meta | element | -- | \u6700\u53f3\u8fb9\u5185\u5bb9 |\n"}});
//# sourceMappingURL=19.4eedcb25.chunk.js.map