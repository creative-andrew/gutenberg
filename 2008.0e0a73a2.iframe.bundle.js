"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2008],{"./packages/components/src/card/card-body/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return card_body_component}});var context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/scrollable/component.tsx"),view_component=__webpack_require__("./packages/components/src/view/component.tsx"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),styles=__webpack_require__("./packages/components/src/card/styles.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedCardBody(props,forwardedRef){const{isScrollable:isScrollable,...otherProps}=function useCardBody(props){const{className:className,isScrollable:isScrollable=!1,isShady:isShady=!1,size:size="medium",...otherProps}=(0,use_context_system.y)(props,"CardBody"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>cx(styles.uT,styles.E0,styles.F0[size],isShady&&styles.mT,"components-card__body",className)),[className,cx,isShady,size]),isScrollable:isScrollable}}(props);return isScrollable?(0,jsx_runtime.jsx)(component.Z,{...otherProps,ref:forwardedRef}):(0,jsx_runtime.jsx)(view_component.Z,{...otherProps,ref:forwardedRef})}UnconnectedCardBody.displayName="UnconnectedCardBody";const CardBody=(0,context_connect.Iq)(UnconnectedCardBody,"CardBody");var card_body_component=CardBody;try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"`CardBody` renders an optional content area for a `Card`.\nMultiple `CardBody` components can be used within `Card` if needed.\n\n```jsx\nimport { Card, CardBody } from `@wordpress/components`;\n\n<Card>\n\t<CardBody>\n\t\t...\n\t</CardBody>\n</Card>\n```",displayName:"CardBody",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xSmall"'},{value:'"extraSmall"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isShady:{defaultValue:{value:"false"},description:"Renders with a light gray background color.",name:"isShady",required:!1,type:{name:"boolean"}},isScrollable:{defaultValue:{value:"false"},description:"Determines if the component is scrollable.",name:"isScrollable",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-body/component.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"packages/components/src/card/card-body/component.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/card/card/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return card_component}});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/elevation/component.tsx"),view_component=__webpack_require__("./packages/components/src/view/component.tsx"),styles=__webpack_require__("./packages/components/src/card/styles.ts"),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/surface/hook.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useCard(props){const{className:className,elevation:elevation=0,isBorderless:isBorderless=!1,isRounded:isRounded=!0,size:size="medium",...otherProps}=(0,use_context_system.y)(function useDeprecatedProps(_ref){let{elevation:elevation,isElevated:isElevated,...otherProps}=_ref;const propsToReturn={...otherProps};let computedElevation=elevation;var _computedElevation;return isElevated&&((0,build_module.Z)("Card isElevated prop",{since:"5.9",alternative:"elevation"}),null!==(_computedElevation=computedElevation)&&void 0!==_computedElevation||(computedElevation=2)),void 0!==computedElevation&&(propsToReturn.elevation=computedElevation),propsToReturn}(props),"Card"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(styles.Zb,isBorderless&&styles.fW,isRounded&&styles.eP,className)),[className,cx,isBorderless,isRounded]);return{...(0,hook.v)({...otherProps,className:classes}),elevation:elevation,isBorderless:isBorderless,isRounded:isRounded,size:size}}var config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedCard(props,forwardedRef){const{children:children,elevation:elevation,isBorderless:isBorderless,isRounded:isRounded,size:size,...otherProps}=useCard(props),elevationBorderRadius=isRounded?config_values.Z.cardBorderRadius:0,cx=(0,use_cx.I)(),elevationClassName=(0,react.useMemo)((()=>cx((0,emotion_react_browser_esm.iv)({borderRadius:elevationBorderRadius},"",""))),[cx,elevationBorderRadius]),contextProviderValue=(0,react.useMemo)((()=>{const contextProps={size:size,isBorderless:isBorderless};return{CardBody:contextProps,CardHeader:contextProps,CardFooter:contextProps}}),[isBorderless,size]);return(0,jsx_runtime.jsx)(context_system_provider.G8,{value:contextProviderValue,children:(0,jsx_runtime.jsxs)(view_component.Z,{...otherProps,ref:forwardedRef,children:[(0,jsx_runtime.jsx)(view_component.Z,{className:cx(styles.VY),children:children}),(0,jsx_runtime.jsx)(component.Z,{className:elevationClassName,isInteractive:!1,value:elevation?1:0}),(0,jsx_runtime.jsx)(component.Z,{className:elevationClassName,isInteractive:!1,value:elevation})]})})}UnconnectedCard.displayName="UnconnectedCard";const Card=(0,context_connect.Iq)(UnconnectedCard,"Card");var card_component=Card;try{Card.displayName="Card",Card.__docgenInfo={description:"`Card` provides a flexible and extensible content container.\n`Card` also provides a convenient set of sub-components such as `CardBody`,\n`CardHeader`, `CardFooter`, and more.\n\n```jsx\nimport {\n  Card,\n  CardHeader,\n  CardBody,\n  CardFooter,\n  Text,\n  Heading,\n} from `@wordpress/components`;\n\nfunction Example() {\n  return (\n    <Card>\n      <CardHeader>\n        <Heading size={ 4 }>Card Title</Heading>\n      </CardHeader>\n      <CardBody>\n        <Text>Card Content</Text>\n      </CardBody>\n      <CardFooter>\n        <Text>Card Footer</Text>\n      </CardFooter>\n    </Card>\n  );\n}\n```",displayName:"Card",props:{backgroundSize:{defaultValue:{value:"12"},description:'Determines the grid size for "dotted" and "grid" variants.',name:"backgroundSize",required:!1,type:{name:"number"}},borderBottom:{defaultValue:{value:"false"},description:"Renders a bottom border.",name:"borderBottom",required:!1,type:{name:"boolean"}},borderLeft:{defaultValue:{value:"false"},description:"Renders a left border.",name:"borderLeft",required:!1,type:{name:"boolean"}},borderRight:{defaultValue:{value:"false"},description:"Renders a right border.",name:"borderRight",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"Renders a top border.",name:"borderTop",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'primary'"},description:"Modifies the background color of `Surface`.\n\n* `primary`: Used for almost all cases.\n* `secondary`: Used as a secondary background for inner `Surface` components.\n* `tertiary`: Used as the app/site wide background. Visible in **dark mode** only. Use case is rare.\n* `grid`: Used to show a grid.\n* `dotted`: Used to show a dots grid.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"dotted"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xSmall"'},{value:'"extraSmall"'}]}},elevation:{defaultValue:{value:"0"},description:"Size of the elevation shadow, based on the Style system's elevation system.\nElevating a `Card` can be done by adjusting the `elevation` prop. This may\nbe helpful in highlighting certain content. For more information, check out\n`Elevation`.",name:"elevation",required:!1,type:{name:"number"}},isBorderless:{defaultValue:{value:"false"},description:"Renders without a border.",name:"isBorderless",required:!1,type:{name:"boolean"}},isRounded:{defaultValue:{value:"true"},description:"Renders with rounded corners.",name:"isRounded",required:!1,type:{name:"boolean"}},isElevated:{defaultValue:{value:"false"},description:"Renders with elevation styles (box shadow).\n@deprecated",name:"isElevated",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card/component.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"packages/components/src/card/card/component.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/card/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Zb:function(){return Card},h4:function(){return Header},$_:function(){return Footer},VY:function(){return Content},uT:function(){return Body},pU:function(){return Media},iz:function(){return Divider},E0:function(){return borderRadius},tv:function(){return borderColor},fW:function(){return boxShadowless},oB:function(){return borderless},eP:function(){return rounded},F0:function(){return cardPaddings},mT:function(){return shady}});var _emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/utils/config-values.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/utils/colors-values.js");const adjustedBorderRadius=`calc(${_utils__WEBPACK_IMPORTED_MODULE_0__.Z.cardBorderRadius} - 1px)`,Card=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("box-shadow:0 0 0 1px ",_utils__WEBPACK_IMPORTED_MODULE_0__.Z.surfaceBorderColor,";outline:none;",""),Header={name:"1showjb",styles:"border-bottom:1px solid;box-sizing:border-box;&:last-child{border-bottom:none;}"},Footer={name:"14n5oej",styles:"border-top:1px solid;box-sizing:border-box;&:first-of-type{border-top:none;}"},Content={name:"13udsys",styles:"height:100%"},Body={name:"6ywzd",styles:"box-sizing:border-box;height:auto;max-height:100%"},Media={name:"dq805e",styles:"box-sizing:border-box;overflow:hidden;&>img,&>iframe{display:block;height:auto;max-width:100%;width:100%;}"},Divider={name:"c990dr",styles:"box-sizing:border-box;display:block;width:100%"},borderRadius=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("&:first-of-type{border-top-left-radius:",adjustedBorderRadius,";border-top-right-radius:",adjustedBorderRadius,";}&:last-of-type{border-bottom-left-radius:",adjustedBorderRadius,";border-bottom-right-radius:",adjustedBorderRadius,";}",""),borderColor=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("border-color:",_utils__WEBPACK_IMPORTED_MODULE_0__.Z.colorDivider,";",""),boxShadowless={name:"1t90u8d",styles:"box-shadow:none"},borderless={name:"1e1ncky",styles:"border:none"},rounded=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("border-radius:",adjustedBorderRadius,";",""),xSmallCardPadding=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("padding:",_utils__WEBPACK_IMPORTED_MODULE_0__.Z.cardPaddingXSmall,";",""),cardPaddings={large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("padding:",_utils__WEBPACK_IMPORTED_MODULE_0__.Z.cardPaddingLarge,";",""),medium:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("padding:",_utils__WEBPACK_IMPORTED_MODULE_0__.Z.cardPaddingMedium,";",""),small:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("padding:",_utils__WEBPACK_IMPORTED_MODULE_0__.Z.cardPaddingSmall,";",""),xSmall:xSmallCardPadding,extraSmall:xSmallCardPadding},shady=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("background-color:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.ui.backgroundDisabled,";","")},"./packages/components/src/scrollable/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return scrollable_component}});var context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const scrollableScrollbar=(0,emotion_react_browser_esm.iv)("@media only screen and ( min-device-width: 40em ){&::-webkit-scrollbar{height:12px;width:12px;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-track{background:",config_values.Z.colorScrollbarTrack,";border-radius:8px;}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",config_values.Z.colorScrollbarThumb,";border:2px solid rgba( 0, 0, 0, 0 );border-radius:7px;}&:hover::-webkit-scrollbar-thumb{background-color:",config_values.Z.colorScrollbarThumbHover,";}}",""),Scrollable={name:"13udsys",styles:"height:100%"},styles_smoothScroll={name:"7zq9w",styles:"scroll-behavior:smooth"},scrollX={name:"q33xhg",styles:"overflow-x:auto;overflow-y:hidden"},scrollY={name:"103x71s",styles:"overflow-x:hidden;overflow-y:auto"},scrollAuto={name:"umwchj",styles:"overflow-y:auto"};var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedScrollable(props,forwardedRef){const scrollableProps=function useScrollable(props){const{className:className,scrollDirection:scrollDirection="y",smoothScroll:smoothScroll=!1,...otherProps}=(0,use_context_system.y)(props,"Scrollable"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>cx(Scrollable,scrollableScrollbar,smoothScroll&&styles_smoothScroll,"x"===scrollDirection&&scrollX,"y"===scrollDirection&&scrollY,"auto"===scrollDirection&&scrollAuto,className)),[className,cx,scrollDirection,smoothScroll])}}(props);return(0,jsx_runtime.jsx)(component.Z,{...scrollableProps,ref:forwardedRef})}UnconnectedScrollable.displayName="UnconnectedScrollable";const component_Scrollable=(0,context_connect.Iq)(UnconnectedScrollable,"Scrollable");var scrollable_component=component_Scrollable;try{component_Scrollable.displayName="Scrollable",component_Scrollable.__docgenInfo={description:"`Scrollable` is a layout component that content in a scrollable container.\n\n```jsx\nimport { __experimentalScrollable as Scrollable } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<Scrollable style={ { maxHeight: 200 } }>\n\t\t\t<div style={ { height: 500 } }>...</div>\n\t\t</Scrollable>\n\t);\n}\n```",displayName:"Scrollable",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},scrollDirection:{defaultValue:{value:"'y'"},description:"Renders a scrollbar for a specific axis when content overflows.",name:"scrollDirection",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"x"'},{value:'"y"'}]}},smoothScroll:{defaultValue:{value:"false"},description:"Enables (CSS) smooth scrolling.",name:"smoothScroll",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/scrollable/component.tsx#Scrollable"]={docgenInfo:component_Scrollable.__docgenInfo,name:"Scrollable",path:"packages/components/src/scrollable/component.tsx#Scrollable"})}catch(__react_docgen_typescript_loader_error){}}}]);