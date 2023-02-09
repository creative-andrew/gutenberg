"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8331],{"./packages/components/build-module/toggle-group-control/context.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return useToggleGroupControlContext}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ToggleGroupControlContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useToggleGroupControlContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ToggleGroupControlContext);__webpack_exports__.Z=ToggleGroupControlContext},"./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return component}});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{ButtonContentView:function(){return ButtonContentView},LabelView:function(){return LabelView},buttonView:function(){return buttonView},labelBlock:function(){return labelBlock}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),Radio=__webpack_require__("./node_modules/reakit/es/Radio/Radio.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),context=__webpack_require__("./packages/components/build-module/toggle-group-control/context.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),reduce_motion=__webpack_require__("./packages/components/build-module/utils/reduce-motion.js");const LabelView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"et6ln9s1"})({name:"sln1fl",styles:"display:inline-flex;max-width:100%;min-width:0;position:relative"}),labelBlock={name:"82a6rk",styles:"flex:1"},buttonView=_ref=>{let{isDeselectable:isDeselectable,isIcon:isIcon,isPressed:isPressed,size:size}=_ref;return(0,emotion_react_browser_esm.iv)("align-items:center;appearance:none;background:transparent;border:none;border-radius:",config_values.Z.controlBorderRadius,";color:",colors_values.D.gray[700],";fill:currentColor;cursor:pointer;display:flex;font-family:inherit;height:100%;justify-content:center;line-height:100%;outline:none;padding:0 12px;position:relative;text-align:center;transition:background ",config_values.Z.transitionDurationFast," linear,color ",config_values.Z.transitionDurationFast," linear,font-weight 60ms linear;",(0,reduce_motion.r)("transition")," user-select:none;width:100%;z-index:2;&::-moz-focus-inner{border:0;}&:active{background:",config_values.Z.toggleGroupControlBackgroundColor,";}",isDeselectable&&deselectable," ",isIcon&&isIconStyles({size:size})," ",isPressed&&pressed,";","","","")},pressed=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.white,";&:active{background:transparent;}","","",""),deselectable=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";&:focus{box-shadow:inset 0 0 0 1px ",colors_values.D.white,",0 0 0 ",config_values.Z.borderWidthFocus," ",colors_values.D.ui.theme,";outline:2px solid transparent;}","","",""),ButtonContentView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"et6ln9s0"})("display:flex;font-size:",config_values.Z.fontSize,";line-height:1;"),isIconStyles=_ref2=>{let{size:size="default"}=_ref2;return(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";width:",{default:"30px","__unstable-large":"34px"}[size],";padding-left:0;padding-right:0;","","","")};var use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),tooltip=__webpack_require__("./packages/components/build-module/tooltip/index.js");const{ButtonContentView:component_ButtonContentView,LabelView:component_LabelView}=styles_namespaceObject,WithToolTip=_ref=>{let{showTooltip:showTooltip,text:text,children:children}=_ref;return showTooltip&&text?(0,react.createElement)(tooltip.Z,{text:text,position:"top center"},children):(0,react.createElement)(react.Fragment,null,children)};const ConnectedToggleGroupControlOptionBase=(0,context_connect.Iq)((function ToggleGroupControlOptionBase(props,forwardedRef){const toggleGroupControlContext=(0,context.L)(),id=(0,use_instance_id.Z)(ToggleGroupControlOptionBase,toggleGroupControlContext.baseId||"toggle-group-control-option-base"),buttonProps=(0,use_context_system.y)({...props,id:id},"ToggleGroupControlOptionBase"),{isBlock:isBlock=!1,isDeselectable:isDeselectable=!1,size:size="default",...otherContextProps}=toggleGroupControlContext,{className:className,isIcon:isIcon=!1,value:value,children:children,showTooltip:showTooltip=!1,...otherButtonProps}=buttonProps,isPressed=otherContextProps.state===value,cx=(0,use_cx.I)(),labelViewClasses=cx(isBlock&&labelBlock),classes=cx(buttonView({isDeselectable:isDeselectable,isIcon:isIcon,isPressed:isPressed,size:size}),className),commonProps={...otherButtonProps,className:classes,"data-value":value,ref:forwardedRef};return(0,react.createElement)(component_LabelView,{className:labelViewClasses},(0,react.createElement)(WithToolTip,{showTooltip:showTooltip,text:otherButtonProps["aria-label"]},isDeselectable?(0,react.createElement)("button",(0,esm_extends.Z)({},commonProps,{"aria-pressed":isPressed,type:"button",onClick:()=>{isDeselectable&&isPressed?otherContextProps.setState(void 0):otherContextProps.setState(value)}}),(0,react.createElement)(component_ButtonContentView,null,children)):(0,react.createElement)(Radio.Y,(0,esm_extends.Z)({},commonProps,otherContextProps,{as:"button",value:value}),(0,react.createElement)(component_ButtonContentView,null,children))))}),"ToggleGroupControlOptionBase");var component=ConnectedToggleGroupControlOptionBase},"./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js");const ToggleGroupControlOption=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function UnforwardedToggleGroupControlOption(props,ref){const{label:label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({},restProps,{"aria-label":optionLabel,ref:ref}),label)}));__webpack_exports__.Z=ToggleGroupControlOption},"./packages/components/build-module/toggle-group-control/toggle-group-control/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return toggle_group_control_component}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),base_control=__webpack_require__("./packages/components/build-module/base-control/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),reduce_motion=__webpack_require__("./packages/components/build-module/utils/reduce-motion.js");const enclosingBorders=isBlock=>{const enclosingBorder=(0,emotion_react_browser_esm.iv)("border-color:",colors_values.D.ui.border,";","","","");return(0,emotion_react_browser_esm.iv)(isBlock&&enclosingBorder," &:hover{border-color:",colors_values.D.ui.borderHover,";}&:focus-within{border-color:",colors_values.D.ui.borderFocus,";box-shadow:",config_values.Z.controlBoxShadowFocus,";outline:none;z-index:1;}","","","")},toggleGroupControlSize=size=>(0,emotion_react_browser_esm.iv)("min-height:",{default:"36px","__unstable-large":"40px"}[size],";","","",""),block={name:"7whenc",styles:"display:flex;width:100%"},BackdropView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"eakva831"})("background:",colors_values.D.gray[900],";border-radius:",config_values.Z.controlBorderRadius,";left:0;position:absolute;top:2px;bottom:2px;transition:transform ",config_values.Z.transitionDurationFast," ease;",(0,reduce_motion.r)("transition")," z-index:1;"),VisualLabelWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"eakva830"})({name:"zjik7",styles:"display:flex"});var RadioState=__webpack_require__("./node_modules/reakit/es/Radio/RadioState.js"),RadioGroup=__webpack_require__("./node_modules/reakit/es/Radio/RadioGroup.js"),use_resize_observer=__webpack_require__("./packages/compose/build-module/hooks/use-resize-observer/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_previous=__webpack_require__("./packages/compose/build-module/hooks/use-previous/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),component=__webpack_require__("./packages/components/build-module/view/component.js");var toggle_group_control_backdrop=(0,react.memo)((function ToggleGroupControlBackdrop(_ref){let{containerRef:containerRef,containerWidth:containerWidth,isAdaptiveWidth:isAdaptiveWidth,state:state}=_ref;const[left,setLeft]=(0,react.useState)(0),[width,setWidth]=(0,react.useState)(0),[canAnimate,setCanAnimate]=(0,react.useState)(!1),[renderBackdrop,setRenderBackdrop]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const containerNode=null==containerRef?void 0:containerRef.current;if(!containerNode)return;const targetNode=containerNode.querySelector(`[data-value="${state}"]`);if(setRenderBackdrop(!!targetNode),!targetNode)return;const dimensionsRequestId=window.setTimeout((()=>{const{width:offsetWidth,x:x}=targetNode.getBoundingClientRect(),{x:parentX}=containerNode.getBoundingClientRect();setLeft(x-parentX-1),setWidth(offsetWidth)}),100);let animationRequestId;return canAnimate||(animationRequestId=window.requestAnimationFrame((()=>{setCanAnimate(!0)}))),()=>{window.clearTimeout(dimensionsRequestId),window.cancelAnimationFrame(animationRequestId)}}),[canAnimate,containerRef,containerWidth,state,isAdaptiveWidth]),renderBackdrop?(0,react.createElement)(BackdropView,{role:"presentation",style:{transform:`translateX(${left}px)`,transition:canAnimate?void 0:"none",width:width}}):null})),context=__webpack_require__("./packages/components/build-module/toggle-group-control/context.js"),use_update_effect=__webpack_require__("./packages/components/build-module/utils/hooks/use-update-effect.js");const ToggleGroupControlAsRadioGroup=(0,react.forwardRef)((function UnforwardedToggleGroupControlAsRadioGroup(_ref,forwardedRef){let{children:children,isAdaptiveWidth:isAdaptiveWidth,label:label,onChange:onChange,size:size,value:value,...otherProps}=_ref;const containerRef=(0,react.useRef)(),[resizeListener,sizes]=(0,use_resize_observer.Z)(),baseId=(0,use_instance_id.Z)(ToggleGroupControlAsRadioGroup,"toggle-group-control-as-radio-group").toString(),radio=(0,RadioState.i)({baseId:baseId,state:value}),previousValue=(0,use_previous.Z)(value);return(0,use_update_effect.Z)((()=>{previousValue!==radio.state&&onChange(radio.state)}),[radio.state]),(0,use_update_effect.Z)((()=>{value!==radio.state&&radio.setState(value)}),[value]),(0,react.createElement)(context.Z.Provider,{value:{...radio,isBlock:!isAdaptiveWidth,size:size}},(0,react.createElement)(RadioGroup.E,(0,esm_extends.Z)({},radio,{"aria-label":label,as:component.Z},otherProps,{ref:(0,use_merge_refs.Z)([containerRef,forwardedRef])}),resizeListener,(0,react.createElement)(toggle_group_control_backdrop,{state:radio.state,containerRef:containerRef,containerWidth:sizes.width,isAdaptiveWidth:isAdaptiveWidth}),children))}));const ToggleGroupControlAsButtonGroup=(0,react.forwardRef)((function UnforwardedToggleGroupControlAsButtonGroup(_ref,forwardedRef){let{children:children,isAdaptiveWidth:isAdaptiveWidth,label:label,onChange:onChange,size:size,value:value,...otherProps}=_ref;const containerRef=(0,react.useRef)(),[resizeListener,sizes]=(0,use_resize_observer.Z)(),baseId=(0,use_instance_id.Z)(ToggleGroupControlAsButtonGroup,"toggle-group-control-as-button-group").toString(),[selectedValue,setSelectedValue]=(0,react.useState)(value),groupContext={baseId:baseId,state:selectedValue,setState:setSelectedValue},previousValue=(0,use_previous.Z)(value);return(0,use_update_effect.Z)((()=>{previousValue!==groupContext.state&&onChange(groupContext.state)}),[groupContext.state]),(0,use_update_effect.Z)((()=>{value!==groupContext.state&&groupContext.setState(value)}),[value]),(0,react.createElement)(context.Z.Provider,{value:{...groupContext,isBlock:!isAdaptiveWidth,isDeselectable:!0,size:size}},(0,react.createElement)(component.Z,(0,esm_extends.Z)({"aria-label":label},otherProps,{ref:(0,use_merge_refs.Z)([containerRef,forwardedRef]),role:"group"}),resizeListener,(0,react.createElement)(toggle_group_control_backdrop,{state:groupContext.state,containerRef:containerRef,containerWidth:sizes.width,isAdaptiveWidth:isAdaptiveWidth}),children))})),noop=()=>{};var toggle_group_control_component=(0,context_connect.Iq)((function UnconnectedToggleGroupControl(props,forwardedRef){const{__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,className:className,isAdaptiveWidth:isAdaptiveWidth=!1,isBlock:isBlock=!1,isDeselectable:isDeselectable=!1,label:label,hideLabelFromVision:hideLabelFromVision=!1,help:help,onChange:onChange=noop,size:size="default",value:value,children:children,...otherProps}=(0,use_context_system.y)(props,"ToggleGroupControl"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx((_ref=>{let{isBlock:isBlock,isDeselectable:isDeselectable,size:size}=_ref;return(0,emotion_react_browser_esm.iv)("background:",colors_values.D.ui.background,";border:1px solid transparent;border-radius:",config_values.Z.controlBorderRadius,";display:inline-flex;min-width:0;padding:2px;position:relative;transition:transform ",config_values.Z.transitionDurationFastest," linear;",(0,reduce_motion.r)("transition")," ",toggleGroupControlSize(size)," ",!isDeselectable&&enclosingBorders(isBlock),";","","","")})({isBlock:isBlock,isDeselectable:isDeselectable,size:size}),isBlock&&block,className)),[className,cx,isBlock,isDeselectable,size]),MainControl=isDeselectable?ToggleGroupControlAsButtonGroup:ToggleGroupControlAsRadioGroup;return(0,react.createElement)(base_control.ZP,{help:help,__nextHasNoMarginBottom:__nextHasNoMarginBottom},!hideLabelFromVision&&(0,react.createElement)(VisualLabelWrapper,null,(0,react.createElement)(base_control.ZP.VisualLabel,null,label)),(0,react.createElement)(MainControl,(0,esm_extends.Z)({},otherProps,{children:children,className:classes,isAdaptiveWidth:isAdaptiveWidth,label:label,onChange:onChange,ref:forwardedRef,size:size,value:value})))}),"ToggleGroupControl")},"./packages/compose/build-module/hooks/use-previous/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return usePrevious}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value}),[value]),ref.current}},"./packages/compose/build-module/hooks/use-resize-observer/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useResizeAware}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useResolvedElement(subscriber,refOrElement){const callbackRefElement=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),lastReportRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),cleanupRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),callSubscriber=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{let element=null;callbackRefElement.current?element=callbackRefElement.current:refOrElement&&(element=refOrElement instanceof HTMLElement?refOrElement:refOrElement.current),lastReportRef.current&&lastReportRef.current.element===element&&lastReportRef.current.reporter===callSubscriber||(cleanupRef.current&&(cleanupRef.current(),cleanupRef.current=null),lastReportRef.current={reporter:callSubscriber,element:element},element&&(cleanupRef.current=subscriber(element)))}),[refOrElement,subscriber]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callSubscriber()}),[callSubscriber]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>{callbackRefElement.current=element,callSubscriber()}),[callSubscriber])}const extractSize=(entry,boxProp,sizeType)=>entry[boxProp]?entry[boxProp][0]?entry[boxProp][0][sizeType]:entry[boxProp][sizeType]:"contentBoxSize"===boxProp?entry.contentRect["inlineSize"===sizeType?"width":"height"]:void 0;function useResizeAware(){const{ref:ref,width:width,height:height}=function useResizeObserver(){let opts=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const onResize=opts.onResize,onResizeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);onResizeRef.current=onResize;const round=opts.round||Math.round,resizeObserverRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[size,setSize]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({width:void 0,height:void 0}),didUnmount=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(didUnmount.current=!1,()=>{didUnmount.current=!0})),[]);const previous=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({width:void 0,height:void 0}),refCallback=useResolvedElement((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>(resizeObserverRef.current&&resizeObserverRef.current.box===opts.box&&resizeObserverRef.current.round===round||(resizeObserverRef.current={box:opts.box,round:round,instance:new ResizeObserver((entries=>{const entry=entries[0];let boxProp="borderBoxSize";boxProp="border-box"===opts.box?"borderBoxSize":"device-pixel-content-box"===opts.box?"devicePixelContentBoxSize":"contentBoxSize";const reportedWidth=extractSize(entry,boxProp,"inlineSize"),reportedHeight=extractSize(entry,boxProp,"blockSize"),newWidth=reportedWidth?round(reportedWidth):void 0,newHeight=reportedHeight?round(reportedHeight):void 0;if(previous.current.width!==newWidth||previous.current.height!==newHeight){const newSize={width:newWidth,height:newHeight};previous.current.width=newWidth,previous.current.height=newHeight,onResizeRef.current?onResizeRef.current(newSize):didUnmount.current||setSize(newSize)}}))}),resizeObserverRef.current.instance.observe(element,{box:opts.box}),()=>{resizeObserverRef.current&&resizeObserverRef.current.instance.unobserve(element)})),[opts.box,round]),opts.ref);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({ref:refCallback,width:size.width,height:size.height})),[refCallback,size?size.width:null,size?size.height:null])}(),sizes=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({width:null!=width?width:null,height:null!=height?height:null})),[width,height]);return[(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",opacity:0,overflow:"hidden",zIndex:-1},"aria-hidden":"true",ref:ref}),sizes]}},"./packages/icons/build-module/library/check.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const check=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));__webpack_exports__.Z=check},"./packages/icons/build-module/library/menu.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const menu=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"}));__webpack_exports__.Z=menu},"./packages/icons/build-module/library/more-vertical.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const moreVertical=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}));__webpack_exports__.Z=moreVertical}}]);