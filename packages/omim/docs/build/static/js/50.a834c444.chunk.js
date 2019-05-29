webpackJsonp([50],{70:function(e,n){e.exports="## Slider\n\nSlider provides an implementation of the Material Design slider component. Sliders are fully RTL-aware, and conform to the WAI-ARIA slider authoring practices.\n\n## Usage\n\n```html\n<m-slider onchange='change(event)'> </m-slider>\n<m-slider value=\"10\" discrete> </m-slider>\n<m-slider disabled > </m-slider>\n<m-slider discrete display-markers step=\"2\"> </m-slider>\n```\n\n## Usage in Omi\n\nJSX:\n\n```jsx\n<m-slider onChange={(evt) => {\n  console.log(evt.detail.value)\n}}> </m-slider>\n<m-slider value={10} onChange={(evt) => {\n  console.log(evt.detail.value)\n}} discrete> </m-slider>\n<m-slider disabled > </m-slider>\n<m-slider discrete displayMarkers step={2}> </m-slider>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| discrete | boolean | -- | Coordinate 'display-markers' display markers |\n| value | number | 0 | The initial value of the slider |\n| disabled | boolean | -- | Disable the slider |\n| min | number | 0 | Least value |\n| max | number | 100 | Peak value |\n| step | number | 1 | Span |\n| display-markers | boolean | -- | Coordinate 'discrete' display markers |\n| onChange | function | -- | Select the trigger |\n"}});
//# sourceMappingURL=50.a834c444.chunk.js.map