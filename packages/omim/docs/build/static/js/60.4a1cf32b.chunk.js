webpackJsonp([60],{60:function(n,t){n.exports="## List\n\nLists are continuous, vertical indexes of text or images.\n\n## Usage\n\n```html\n<m-list\n  onChange=\"onChange(event)\"\n  css=\"\n    .mdc-list,.mdc-list-group {\n      max-width: 600px;\n      border: 1px solid rgba(0,0,0,.1);\n    }\n  \">\n  <item text='Inbox'>\n    <graphic><m-icon-button icon='inbox'></m-icon-button></graphic>\n  </item>\n  <item activated='true' text='Star'>\n    <graphic><m-icon-button icon='star'></m-icon-button></graphic>\n  </item>\n  <item text='Send'>\n    <graphic><m-icon-button icon='send'></m-icon-button></graphic>\n  </item>\n  <item text='Drafts'>\n    <graphic><m-icon-button icon='drafts'></m-icon-button></graphic>\n  </item>\n</m-list>\n```\n\n## Usage in Omi\n\nJSX:\n\n```jsx\n<m-list onChange={this.onChange} css={this.css}>\n  <item graphic={<m-icon-button icons={['bookmark_border', 'inbox']}></m-icon-button>}>Inbox</item>\n  <item activated graphic={<m-icon-button icons={['check_circle_outline', 'star']}></m-icon-button>}>Star</item>\n  <item graphic={<m-icon-button icons={['search', 'send']}></m-icon-button>}>Send</item>\n  <item graphic={<m-icon-button icons={['settings', 'drafts']}></m-icon-button>}>Drafts</item>\n</m-list>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| **m-list attribute** | -- | -- | -- |\n| group | boolean | -- | Using list groups |\n| disabled | boolean | -- | Disabled |\n| dense | boolean | -- | Compact height |\n| avatar | boolean | -- | Medium height |\n| two-line | boolean | -- | Double line height |\n| **item attribute** | -- | -- | -- |\n| divider | boolean | -- | Dividing line |\n| padded | boolean | -- | The left and right sides are not filled with dividing lines |\n| inset | boolean | -- | The avatar is not filled with dividing lines |\n| disabled | boolean | -- | Disabled |\n| selected | element | -- | Selected |\n| activated | boolean | -- | Always selected |\n| graphic | element | -- | Leftmost content |\n| text | string | -- | Intermediate text |\n| primary-text | string | -- | Upper middle text |\n| secondary-text | string | -- | Secondary text |\n| meta | element | -- | Rightmost content |\n"}});
//# sourceMappingURL=60.4a1cf32b.chunk.js.map