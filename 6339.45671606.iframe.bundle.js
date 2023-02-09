"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6339],{"./packages/components/build-module/input-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{gs:function(){return InputControl},ZP:function(){return input_control}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),input_base=__webpack_require__("./packages/components/build-module/input-control/input-base.js"),use_gesture_react_esm=__webpack_require__("./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js");var input_control_styles=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js");const initialStateReducer=state=>state,initialInputControlState={error:null,initialValue:"",isDirty:!1,isDragEnabled:!1,isDragging:!1,isPressEnterToChange:!1,value:""};var actions=__webpack_require__("./packages/components/build-module/input-control/reducer/actions.js");function mergeInitialState(){let initialState=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialInputControlState;const{value:value}=initialState;return{...initialInputControlState,...initialState,initialValue:value}}function inputControlStateReducer(composedStateReducers){return(state,action)=>{const nextState={...state};switch(action.type){case actions.jx:return nextState.value=action.payload.value,nextState.isDirty=!1,nextState._event=void 0,nextState;case actions.Oh:case actions.LX:nextState.isDirty=!1;break;case actions.nv:nextState.isDragging=!0;break;case actions.Sv:nextState.isDragging=!1;break;case actions.Ve:nextState.error=null,nextState.value=action.payload.value,state.isPressEnterToChange&&(nextState.isDirty=!0);break;case actions.g:nextState.value=action.payload.value,nextState.isDirty=!1;break;case actions.td:nextState.error=null,nextState.isDirty=!1,nextState.value=action.payload.value||state.initialValue;break;case actions.WT:nextState.error=action.payload.error}return nextState._event=action.payload.event,composedStateReducers(nextState,action)}}const noop=()=>{};const ForwardedComponent=(0,react.forwardRef)((function InputField(_ref,ref){let{disabled:disabled=!1,dragDirection:dragDirection="n",dragThreshold:dragThreshold=10,id:id,isDragEnabled:isDragEnabled=!1,isFocused:isFocused,isPressEnterToChange:isPressEnterToChange=!1,onBlur:onBlur=noop,onChange:onChange=noop,onDrag:onDrag=noop,onDragEnd:onDragEnd=noop,onDragStart:onDragStart=noop,onFocus:onFocus=noop,onKeyDown:onKeyDown=noop,onValidate:onValidate=noop,size:size="default",setIsFocused:setIsFocused,stateReducer:stateReducer=(state=>state),value:valueProp,type:type,...props}=_ref;const{state:state,change:change,commit:commit,drag:drag,dragEnd:dragEnd,dragStart:dragStart,invalidate:invalidate,pressDown:pressDown,pressEnter:pressEnter,pressUp:pressUp,reset:reset}=function useInputControlStateReducer(){let stateReducer=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialStateReducer,initialState=arguments.length>1&&void 0!==arguments[1]?arguments[1]:initialInputControlState,onChangeHandler=arguments.length>2?arguments[2]:void 0;const[state,dispatch]=(0,react.useReducer)(inputControlStateReducer(stateReducer),mergeInitialState(initialState)),createChangeEvent=type=>(nextValue,event)=>{dispatch({type:type,payload:{value:nextValue,event:event}})},createKeyEvent=type=>event=>{dispatch({type:type,payload:{event:event}})},createDragEvent=type=>payload=>{dispatch({type:type,payload:payload})},change=createChangeEvent(actions.Ve),invalidate=(error,event)=>dispatch({type:actions.WT,payload:{error:error,event:event}}),reset=createChangeEvent(actions.td),commit=createChangeEvent(actions.g),dragStart=createDragEvent(actions.nv),drag=createDragEvent(actions.Wp),dragEnd=createDragEvent(actions.Sv),pressUp=createKeyEvent(actions.Oh),pressDown=createKeyEvent(actions.LX),pressEnter=createKeyEvent(actions.Q4),currentState=(0,react.useRef)(state),refProps=(0,react.useRef)({value:initialState.value,onChangeHandler:onChangeHandler});return(0,react.useLayoutEffect)((()=>{currentState.current=state,refProps.current={value:initialState.value,onChangeHandler:onChangeHandler}})),(0,react.useLayoutEffect)((()=>{var _state$value;void 0===currentState.current._event||state.value===refProps.current.value||state.isDirty||refProps.current.onChangeHandler(null!==(_state$value=state.value)&&void 0!==_state$value?_state$value:"",{event:currentState.current._event})}),[state.value,state.isDirty]),(0,react.useLayoutEffect)((()=>{var _initialState$value;initialState.value===currentState.current.value||currentState.current.isDirty||dispatch({type:actions.jx,payload:{value:null!==(_initialState$value=initialState.value)&&void 0!==_initialState$value?_initialState$value:""}})}),[initialState.value]),{change:change,commit:commit,dispatch:dispatch,drag:drag,dragEnd:dragEnd,dragStart:dragStart,invalidate:invalidate,pressDown:pressDown,pressEnter:pressEnter,pressUp:pressUp,reset:reset,state:state}}(stateReducer,{isDragEnabled:isDragEnabled,value:valueProp,isPressEnterToChange:isPressEnterToChange},onChange),{value:value,isDragging:isDragging,isDirty:isDirty}=state,wasDirtyOnBlur=(0,react.useRef)(!1),dragCursor=function useDragCursor(isDragging,dragDirection){const dragCursor=function getDragCursor(dragDirection){let dragCursor="ns-resize";switch(dragDirection){case"n":case"s":dragCursor="ns-resize";break;case"e":case"w":dragCursor="ew-resize"}return dragCursor}(dragDirection);return(0,react.useEffect)((()=>{document.documentElement.style.cursor=isDragging?dragCursor:null}),[isDragging,dragCursor]),dragCursor}(isDragging,dragDirection),handleOnCommit=event=>{const nextValue=event.currentTarget.value;try{onValidate(nextValue),commit(nextValue,event)}catch(err){invalidate(err,event)}},dragGestureProps=(0,use_gesture_react_esm.c0)((dragProps=>{const{distance:distance,dragging:dragging,event:event,target:target}=dragProps;if(dragProps.event={...dragProps.event,target:target},distance){if(event.stopPropagation(),!dragging)return onDragEnd(dragProps),void dragEnd(dragProps);onDrag(dragProps),drag(dragProps),isDragging||(onDragStart(dragProps),dragStart(dragProps))}}),{axis:"e"===dragDirection||"w"===dragDirection?"x":"y",threshold:dragThreshold,enabled:isDragEnabled,pointer:{capture:!1}}),dragProps=isDragEnabled?dragGestureProps():{};let handleOnMouseDown;return"number"===type&&(handleOnMouseDown=event=>{var _props$onMouseDown;null===(_props$onMouseDown=props.onMouseDown)||void 0===_props$onMouseDown||_props$onMouseDown.call(props,event),event.currentTarget!==event.currentTarget.ownerDocument.activeElement&&event.currentTarget.focus()}),(0,react.createElement)(input_control_styles.II,(0,esm_extends.Z)({},props,dragProps,{className:"components-input-control__input",disabled:disabled,dragCursor:dragCursor,isDragging:isDragging,id:id,onBlur:event=>{onBlur(event),null==setIsFocused||setIsFocused(!1),!isDirty&&event.target.validity.valid||(wasDirtyOnBlur.current=!0,handleOnCommit(event))},onChange:event=>{const nextValue=event.target.value;change(nextValue,event)},onFocus:event=>{onFocus(event),null==setIsFocused||setIsFocused(!0)},onKeyDown:event=>{const{key:key}=event;switch(onKeyDown(event),key){case"ArrowUp":pressUp(event);break;case"ArrowDown":pressDown(event);break;case"Enter":pressEnter(event),isPressEnterToChange&&(event.preventDefault(),handleOnCommit(event));break;case"Escape":isPressEnterToChange&&isDirty&&(event.preventDefault(),reset(valueProp,event))}},onMouseDown:handleOnMouseDown,ref:ref,inputSize:size,value:null!=value?value:"",type:type}))}));var input_field=ForwardedComponent,space=__webpack_require__("./packages/components/build-module/ui/utils/space.js"),base_control=__webpack_require__("./packages/components/build-module/base-control/index.js");const input_control_noop=()=>{};const InputControl=(0,react.forwardRef)((function UnforwardedInputControl(_ref,ref){let{__next36pxDefaultSize:__next36pxDefaultSize,__unstableStateReducer:stateReducer=(state=>state),__unstableInputWidth:__unstableInputWidth,className:className,disabled:disabled=!1,help:help,hideLabelFromVision:hideLabelFromVision=!1,id:idProp,isPressEnterToChange:isPressEnterToChange=!1,label:label,labelPosition:labelPosition="top",onChange:onChange=input_control_noop,onValidate:onValidate=input_control_noop,onKeyDown:onKeyDown=input_control_noop,prefix:prefix,size:size="default",style:style,suffix:suffix,value:value,...props}=_ref;const[isFocused,setIsFocused]=(0,react.useState)(!1),id=function useUniqueId(idProp){const instanceId=(0,use_instance_id.Z)(InputControl);return idProp||`inspector-input-control-${instanceId}`}(idProp),classes=classnames_default()("components-input-control",className),draftHookProps=function useDraft(props){const refPreviousValue=(0,react.useRef)(props.value),[draft,setDraft]=(0,react.useState)({}),value=void 0!==draft.value?draft.value:props.value;return(0,react.useLayoutEffect)((()=>{const{current:previousValue}=refPreviousValue;refPreviousValue.current=props.value,void 0===draft.value||draft.isStale?draft.isStale&&props.value!==previousValue&&setDraft({}):setDraft({...draft,isStale:!0})}),[props.value,draft]),{value:value,onBlur:event=>{var _props$onBlur;setDraft({}),null===(_props$onBlur=props.onBlur)||void 0===_props$onBlur||_props$onBlur.call(props,event)},onChange:(nextValue,extra)=>{setDraft((current=>Object.assign(current,{value:nextValue,isStale:!1}))),props.onChange(nextValue,extra)}}}({value:value,onBlur:props.onBlur,onChange:onChange}),helpProp=help?{["string"==typeof help?"aria-describedby":"aria-details"]:`${id}__help`}:{};return(0,react.createElement)(base_control.ZP,{className:classes,help:help,id:id,__nextHasNoMarginBottom:!0},(0,react.createElement)(input_base.Z,{__next36pxDefaultSize:__next36pxDefaultSize,__unstableInputWidth:__unstableInputWidth,disabled:disabled,gap:3,hideLabelFromVision:hideLabelFromVision,id:id,isFocused:isFocused,justify:"left",label:label,labelPosition:labelPosition,prefix:prefix,size:size,style:style,suffix:suffix},(0,react.createElement)(input_field,(0,esm_extends.Z)({},props,helpProp,{__next36pxDefaultSize:__next36pxDefaultSize,className:"components-input-control__input",disabled:disabled,id:id,isFocused:isFocused,isPressEnterToChange:isPressEnterToChange,onKeyDown:onKeyDown,onValidate:onValidate,paddingInlineStart:prefix?(0,space.D)(2):void 0,paddingInlineEnd:suffix?(0,space.D)(2):void 0,ref:ref,setIsFocused:setIsFocused,size:size,stateReducer:stateReducer},draftHookProps))))}));var input_control=InputControl},"./packages/components/build-module/input-control/reducer/actions.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ve:function(){return CHANGE},g:function(){return COMMIT},jx:function(){return CONTROL},Sv:function(){return DRAG_END},nv:function(){return DRAG_START},Wp:function(){return DRAG},WT:function(){return INVALIDATE},LX:function(){return PRESS_DOWN},Q4:function(){return PRESS_ENTER},Oh:function(){return PRESS_UP},td:function(){return RESET}});const CHANGE="CHANGE",COMMIT="COMMIT",CONTROL="CONTROL",DRAG_END="DRAG_END",DRAG_START="DRAG_START",DRAG="DRAG",INVALIDATE="INVALIDATE",PRESS_DOWN="PRESS_DOWN",PRESS_ENTER="PRESS_ENTER",PRESS_UP="PRESS_UP",RESET="RESET"},"./packages/components/build-module/number-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return number_control}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),plus=__webpack_require__("./packages/icons/build-module/library/plus.js"),library_reset=__webpack_require__("./packages/icons/build-module/library/reset.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),deprecated_build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),input_control=__webpack_require__("./packages/components/build-module/input-control/index.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),space=__webpack_require__("./packages/components/build-module/ui/utils/space.js");var _ref={name:"euqsgg",styles:"input[type='number']::-webkit-outer-spin-button,input[type='number']::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}input[type='number']{-moz-appearance:textfield;}"};const htmlArrowStyles=_ref2=>{let{hideHTMLArrows:hideHTMLArrows}=_ref2;return hideHTMLArrows?_ref:""},Input=(0,emotion_styled_base_browser_esm.Z)(input_control.ZP,{target:"ep09it41"})(htmlArrowStyles,";"),spinButtonSizeStyles=_ref3=>{let{size:size}=_ref3;return"small"!==size?"":(0,emotion_react_browser_esm.iv)("width:",(0,space.D)(5),";min-width:",(0,space.D)(5),";height:",(0,space.D)(5),";","","","")},SpinButton=(0,emotion_styled_base_browser_esm.Z)(build_module_button.ZP,{target:"ep09it40"})("&&&&&{color:",colors_values.D.ui.theme,";",spinButtonSizeStyles,";}");var actions=__webpack_require__("./packages/components/build-module/input-control/reducer/actions.js"),math=__webpack_require__("./packages/components/build-module/utils/math.js"),values=__webpack_require__("./packages/components/build-module/utils/values.js"),component=__webpack_require__("./packages/components/build-module/h-stack/component.js"),spacer_component=__webpack_require__("./packages/components/build-module/spacer/component.js");const noop=()=>{};const NumberControl=(0,react.forwardRef)((function UnforwardedNumberControl(_ref,forwardedRef){let{__unstableStateReducer:stateReducerProp,className:className,dragDirection:dragDirection="n",hideHTMLArrows:hideHTMLArrows=!1,spinControls:spinControls="native",isDragEnabled:isDragEnabled=!0,isShiftStepEnabled:isShiftStepEnabled=!0,label:label,max:max=1/0,min:min=-1/0,required:required=!1,shiftStep:shiftStep=10,step:step=1,type:typeProp="number",value:valueProp,size:size="default",suffix:suffix,onChange:onChange=noop,...props}=_ref;hideHTMLArrows&&((0,deprecated_build_module.Z)("wp.components.NumberControl hideHTMLArrows prop ",{alternative:'spinControls="none"',since:"6.2",version:"6.3"}),spinControls="none");const inputRef=(0,react.useRef)(),mergedRef=(0,use_merge_refs.Z)([inputRef,forwardedRef]),isStepAny="any"===step,baseStep=isStepAny?1:(0,values.q9)(step),baseValue=(0,math.Pc)(0,min,max,baseStep),constrainValue=(value,stepOverride)=>isStepAny?Math.min(max,Math.max(min,(0,values.q9)(value))):(0,math.Pc)(value,min,max,null!=stepOverride?stepOverride:baseStep),autoComplete="number"===typeProp?"off":void 0,classes=classnames_default()("components-number-control",className),spinValue=(value,direction,event)=>{null==event||event.preventDefault();const shift=(null==event?void 0:event.shiftKey)&&isShiftStepEnabled,delta=shift?(0,values.q9)(shiftStep)*baseStep:baseStep;let nextValue=(0,values.Wx)(value)?baseValue:value;return"up"===direction?nextValue=(0,math.IH)(nextValue,delta):"down"===direction&&(nextValue=(0,math.$X)(nextValue,delta)),constrainValue(nextValue,shift?delta:void 0)},buildSpinButtonClickHandler=direction=>event=>onChange(String(spinValue(valueProp,direction,event)),{event:{...event,target:inputRef.current}});return(0,react.createElement)(Input,(0,esm_extends.Z)({autoComplete:autoComplete,inputMode:"numeric"},props,{className:classes,dragDirection:dragDirection,hideHTMLArrows:"native"!==spinControls,isDragEnabled:isDragEnabled,label:label,max:max,min:min,ref:mergedRef,required:required,step:step,type:typeProp,value:valueProp,__unstableStateReducer:(state,action)=>{var _stateReducerProp;const baseState=((state,action)=>{const nextState={...state},{type:type,payload:payload}=action,event=payload.event,currentValue=nextState.value;if(type!==actions.Oh&&type!==actions.LX||(nextState.value=spinValue(currentValue,type===actions.Oh?"up":"down",event)),type===actions.Wp&&isDragEnabled){const[x,y]=payload.delta,enableShift=payload.shiftKey&&isShiftStepEnabled,modifier=enableShift?(0,values.q9)(shiftStep)*baseStep:baseStep;let directionModifier,delta;switch(dragDirection){case"n":delta=y,directionModifier=-1;break;case"e":delta=x,directionModifier=(0,build_module.dZ)()?-1:1;break;case"s":delta=y,directionModifier=1;break;case"w":delta=x,directionModifier=(0,build_module.dZ)()?1:-1}if(0!==delta){delta=Math.ceil(Math.abs(delta))*Math.sign(delta);const distance=delta*modifier*directionModifier;nextState.value=constrainValue((0,math.IH)(currentValue,distance),enableShift?modifier:void 0)}}if(type===actions.Q4||type===actions.g){const applyEmptyValue=!1===required&&""===currentValue;nextState.value=applyEmptyValue?currentValue:constrainValue(currentValue)}return nextState})(state,action);return null!==(_stateReducerProp=null==stateReducerProp?void 0:stateReducerProp(baseState,action))&&void 0!==_stateReducerProp?_stateReducerProp:baseState},size:size,suffix:"custom"===spinControls?(0,react.createElement)(react.Fragment,null,suffix,(0,react.createElement)(spacer_component.Z,{marginBottom:0,marginRight:2},(0,react.createElement)(component.Z,{spacing:1},(0,react.createElement)(SpinButton,{icon:plus.Z,isSmall:!0,"aria-hidden":"true","aria-label":(0,build_module.__)("Increment"),tabIndex:-1,onClick:buildSpinButtonClickHandler("up"),size:size}),(0,react.createElement)(SpinButton,{icon:library_reset.Z,isSmall:!0,"aria-hidden":"true","aria-label":(0,build_module.__)("Decrement"),tabIndex:-1,onClick:buildSpinButtonClickHandler("down"),size:size})))):suffix,onChange:onChange}))}));var number_control=NumberControl},"./packages/components/build-module/utils/math.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function getNumber(value){const number=Number(value);return isNaN(number)?0:number}function add(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.reduce(((sum,arg)=>sum+getNumber(arg)),0)}function subtract(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return args.reduce(((diff,arg,index)=>{const value=getNumber(arg);return 0===index?value:diff-value}),0)}function getPrecision(value){const split=(value+"").split(".");return void 0!==split[1]?split[1].length:0}function clamp(value,min,max){const baseValue=getNumber(value);return Math.max(min,Math.min(baseValue,max))}function roundClamp(){let value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,min=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,max=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,step=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const baseValue=getNumber(value),stepValue=getNumber(step),precision=getPrecision(step),rounded=Math.round(baseValue/stepValue)*stepValue,clampedValue=clamp(rounded,min,max);return precision?getNumber(clampedValue.toFixed(precision)):clampedValue}__webpack_require__.d(__webpack_exports__,{IH:function(){return add},$X:function(){return subtract},uZ:function(){return clamp},Pc:function(){return roundClamp}})},"./packages/icons/build-module/library/plus.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const plus=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}));__webpack_exports__.Z=plus},"./packages/icons/build-module/library/reset.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const reset=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M7 11.5h10V13H7z"}));__webpack_exports__.Z=reset}}]);