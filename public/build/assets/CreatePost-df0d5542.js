import{r as m,a as v,j as f}from"./client-abbe1494.js";import{B as Q,a as S}from"./BreadCrumb-9b4d90e8.js";import{u as U,F as J,a as Y}from"./formContext-6cf63da9.js";import{I as k}from"./Input-afe2263d.js";import{T as F}from"./TextArea-13072f5e.js";import{R as K}from"./Request-86ea05f5.js";import{c as X}from"./api-0071e415.js";import{Q as N}from"./react-admin-0183bdd9.js";import{j as Z}from"./Auth-8243c99e.js";import"./ArrowIcon-202630a0.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./FormSection-0da77780.js";import"./PlusIcon-56c11ef8.js";var z={exports:{}},ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",te=ee,ne=te;function q(){}function W(){}W.resetWarningCache=q;var re=function(){function t(a,o,s,e,l,c){if(c!==ne){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function n(){return t}var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:W,resetWarningCache:q};return i.PropTypes=i,i};z.exports=re();var r=z.exports,I=globalThis&&globalThis.__assign||function(){return I=Object.assign||function(t){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},I.apply(this,arguments)},$={onActivate:r.func,onAddUndo:r.func,onBeforeAddUndo:r.func,onBeforeExecCommand:r.func,onBeforeGetContent:r.func,onBeforeRenderUI:r.func,onBeforeSetContent:r.func,onBeforePaste:r.func,onBlur:r.func,onChange:r.func,onClearUndos:r.func,onClick:r.func,onContextMenu:r.func,onCommentChange:r.func,onCopy:r.func,onCut:r.func,onDblclick:r.func,onDeactivate:r.func,onDirty:r.func,onDrag:r.func,onDragDrop:r.func,onDragEnd:r.func,onDragGesture:r.func,onDragOver:r.func,onDrop:r.func,onExecCommand:r.func,onFocus:r.func,onFocusIn:r.func,onFocusOut:r.func,onGetContent:r.func,onHide:r.func,onInit:r.func,onKeyDown:r.func,onKeyPress:r.func,onKeyUp:r.func,onLoadContent:r.func,onMouseDown:r.func,onMouseEnter:r.func,onMouseLeave:r.func,onMouseMove:r.func,onMouseOut:r.func,onMouseOver:r.func,onMouseUp:r.func,onNodeChange:r.func,onObjectResizeStart:r.func,onObjectResized:r.func,onObjectSelected:r.func,onPaste:r.func,onPostProcess:r.func,onPostRender:r.func,onPreProcess:r.func,onProgressState:r.func,onRedo:r.func,onRemove:r.func,onReset:r.func,onSaveContent:r.func,onSelectionChange:r.func,onSetAttrib:r.func,onSetContent:r.func,onShow:r.func,onSubmit:r.func,onUndo:r.func,onVisualAid:r.func,onSkinLoadError:r.func,onThemeLoadError:r.func,onModelLoadError:r.func,onPluginLoadError:r.func,onIconsLoadError:r.func,onLanguageLoadError:r.func,onScriptsLoad:r.func,onScriptsLoadError:r.func},oe=I({apiKey:r.string,id:r.string,inline:r.bool,init:r.object,initialValue:r.string,onEditorChange:r.func,value:r.string,tagName:r.string,cloudChannel:r.string,plugins:r.oneOfType([r.string,r.array]),toolbar:r.oneOfType([r.string,r.array]),disabled:r.bool,textareaName:r.string,tinymceScriptSrc:r.oneOfType([r.string,r.arrayOf(r.string),r.arrayOf(r.shape({src:r.string,async:r.bool,defer:r.bool}))]),rollback:r.oneOfType([r.number,r.oneOf([!1])]),scriptLoading:r.shape({async:r.bool,defer:r.bool,delay:r.number})},$),_=function(t){return typeof t=="function"},P=function(t){return t in $},D=function(t){return t.substr(2)},ie=function(t,n,i,a,o,s,e){var l=Object.keys(o).filter(P),c=Object.keys(s).filter(P),d=l.filter(function(p){return s[p]===void 0}),u=c.filter(function(p){return o[p]===void 0});d.forEach(function(p){var h=D(p),b=e[h];i(h,b),delete e[h]}),u.forEach(function(p){var h=a(t,p),b=D(p);e[b]=h,n(b,h)})},ae=function(t,n,i,a,o){return ie(o,t.on.bind(t),t.off.bind(t),function(s,e){return function(l){var c;return(c=s(e))===null||c===void 0?void 0:c(l,t)}},n,i,a)},B=0,G=function(t){var n=Date.now(),i=Math.floor(Math.random()*1e9);return B++,t+"_"+i+B+String(n)},A=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},M=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},se=function(t,n){return M(t).concat(M(n))},le=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},ce=function(t){if(!("isConnected"in Node.prototype)){for(var n=t,i=t.parentNode;i!=null;)n=i,i=n.parentNode;return n===t.ownerDocument}return t.isConnected},V=function(t,n){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(n):t.setMode(n))},O=globalThis&&globalThis.__assign||function(){return O=Object.assign||function(t){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},O.apply(this,arguments)},de=function(t,n,i){var a,o,s=t.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=n.id,s.src=n.src,s.async=(a=n.async)!==null&&a!==void 0?a:!1,s.defer=(o=n.defer)!==null&&o!==void 0?o:!1;var e=function(){s.removeEventListener("load",e),s.removeEventListener("error",l),i(n.src)},l=function(c){s.removeEventListener("load",e),s.removeEventListener("error",l),i(n.src,c)};s.addEventListener("load",e),s.addEventListener("error",l),t.head&&t.head.appendChild(s)},ue=function(t){var n={},i=function(e,l){var c=n[e];c.done=!0,c.error=l;for(var d=0,u=c.handlers;d<u.length;d++){var p=u[d];p(e,l)}c.handlers=[]},a=function(e,l,c){var d=function(C){return c!==void 0?c(C):console.error(C)};if(e.length===0){d(new Error("At least one script must be provided"));return}for(var u=0,p=!1,h=function(C,R){p||(R?(p=!0,d(R)):++u===e.length&&l())},b=0,g=e;b<g.length;b++){var y=g[b],x=n[y.src];if(x)x.done?h(y.src,x.error):x.handlers.push(h);else{var w=G("tiny-");n[y.src]={id:w,src:y.src,done:!1,error:null,handlers:[h]},de(t,O({id:w},y),i)}}},o=function(){for(var e,l=0,c=Object.values(n);l<c.length;l++){var d=c[l],u=t.getElementById(d.id);u!=null&&u.tagName==="SCRIPT"&&((e=u.parentNode)===null||e===void 0||e.removeChild(u))}n={}},s=function(){return t};return{loadScripts:a,deleteScripts:o,getDocument:s}},fe=function(){var t=[],n=function(o){var s=t.find(function(e){return e.getDocument()===o});return s===void 0&&(s=ue(o),t.push(s)),s},i=function(o,s,e,l,c){var d=function(){return n(o).loadScripts(s,l,c)};e>0?setTimeout(d,e):d()},a=function(){for(var o=t.pop();o!=null;o=t.pop())o.deleteScripts()};return{loadList:i,reinitialize:a}},pe=fe(),T=function(t){var n=t;return n&&n.tinymce?n.tinymce:null},he=globalThis&&globalThis.__extends||function(){var t=function(n,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,o){a.__proto__=o}||function(a,o){for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(a[s]=o[s])},t(n,i)};return function(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(n,i);function a(){this.constructor=n}n.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}}(),E=globalThis&&globalThis.__assign||function(){return E=Object.assign||function(t){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},E.apply(this,arguments)},ve=function(t){he(n,t);function n(i){var a,o,s,e=t.call(this,i)||this;return e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var l=e.editor,c=e.props.value;l&&c&&c!==e.currentContent&&l.undoManager.ignore(function(){if(l.setContent(c),e.valueCursor&&(!e.inline||l.hasFocus()))try{l.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(l){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus()))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(l){(l.key==="Enter"||l.key==="Backspace"||l.key==="Delete")&&e.handleBeforeInput(l)},e.handleEditorChange=function(l){var c=e.editor;if(c&&c.initialized){var d=c.getContent();e.props.value!==void 0&&e.props.value!==d&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),d!==e.currentContent&&(e.currentContent=d,_(e.props.onEditorChange)&&e.props.onEditorChange(d,c))}},e.handleEditorChangeSpecial=function(l){(l.key==="Backspace"||l.key==="Delete")&&e.handleEditorChange(l)},e.initialise=function(l){var c,d,u;l===void 0&&(l=0);var p=e.elementRef.current;if(p){if(!ce(p)){if(l===0)setTimeout(function(){return e.initialise(1)},1);else if(l<100)setTimeout(function(){return e.initialise(l+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var h=T(e.view);if(!h)throw new Error("tinymce should have been loaded into global scope");var b=E(E({},e.props.init),{selector:void 0,target:p,readonly:e.props.disabled,inline:e.inline,plugins:se((c=e.props.init)===null||c===void 0?void 0:c.plugins,e.props.plugins),toolbar:(d=e.props.toolbar)!==null&&d!==void 0?d:(u=e.props.init)===null||u===void 0?void 0:u.toolbar,setup:function(g){e.editor=g,e.bindHandlers({}),e.inline&&!A(p)&&g.once("PostRender",function(y){g.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&_(e.props.init.setup)&&e.props.init.setup(g)},init_instance_callback:function(g){var y,x,w=e.getInitialValue();e.currentContent=(y=e.currentContent)!==null&&y!==void 0?y:g.getContent(),e.currentContent!==w&&(e.currentContent=w,g.setContent(w),g.undoManager.clear(),g.undoManager.add(),g.setDirty(!1));var C=(x=e.props.disabled)!==null&&x!==void 0?x:!1;V(e.editor,C?"readonly":"design"),e.props.init&&_(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(g)}});e.inline||(p.style.visibility=""),A(p)&&(p.value=e.getInitialValue()),h.init(b)}},e.id=e.props.id||G("tiny-react"),e.elementRef=m.createRef(),e.inline=(s=(a=e.props.inline)!==null&&a!==void 0?a:(o=e.props.init)===null||o===void 0?void 0:o.inline)!==null&&s!==void 0?s:!1,e.boundHandlers={},e}return Object.defineProperty(n.prototype,"view",{get:function(){var i,a;return(a=(i=this.elementRef.current)===null||i===void 0?void 0:i.ownerDocument.defaultView)!==null&&a!==void 0?a:window},enumerable:!1,configurable:!0}),n.prototype.componentDidUpdate=function(i){var a=this,o,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(i),this.editor.initialized)){if(this.currentContent=(o=this.currentContent)!==null&&o!==void 0?o:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==i.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var e=this.editor;e.undoManager.transact(function(){var c;if(!a.inline||e.hasFocus())try{c=e.selection.getBookmark(3)}catch{}var d=a.valueCursor;if(e.setContent(a.props.value),!a.inline||e.hasFocus())for(var u=0,p=[c,d];u<p.length;u++){var h=p[u];if(h)try{e.selection.moveToBookmark(h),a.valueCursor=h;break}catch{}}})}if(this.props.disabled!==i.disabled){var l=(s=this.props.disabled)!==null&&s!==void 0?s:!1;V(this.editor,l?"readonly":"design")}}},n.prototype.componentDidMount=function(){var i=this,a,o,s,e,l;if(T(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(o=(a=this.props).onScriptsLoadError)===null||o===void 0||o.call(a,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((s=this.elementRef.current)===null||s===void 0)&&s.ownerDocument){var c=function(){var u,p;(p=(u=i.props).onScriptsLoad)===null||p===void 0||p.call(u),i.initialise()},d=function(u){var p,h;(h=(p=i.props).onScriptsLoadError)===null||h===void 0||h.call(p,u)};pe.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(l=(e=this.props.scriptLoading)===null||e===void 0?void 0:e.delay)!==null&&l!==void 0?l:0,c,d)}},n.prototype.componentWillUnmount=function(){var i=this,a=this.editor;a&&(a.off(this.changeEvents(),this.handleEditorChange),a.off(this.beforeInputEvent(),this.handleBeforeInput),a.off("keypress",this.handleEditorChangeSpecial),a.off("keydown",this.handleBeforeInputSpecial),a.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(o){a.off(o,i.boundHandlers[o])}),this.boundHandlers={},a.remove(),this.editor=void 0)},n.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},n.prototype.changeEvents=function(){var i,a,o,s=(o=(a=(i=T(this.view))===null||i===void 0?void 0:i.Env)===null||a===void 0?void 0:a.browser)===null||o===void 0?void 0:o.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},n.prototype.beforeInputEvent=function(){return le()?"beforeinput SelectionChange":"SelectionChange"},n.prototype.renderInline=function(){var i=this.props.tagName,a=i===void 0?"div":i;return m.createElement(a,{ref:this.elementRef,id:this.id})},n.prototype.renderIframe=function(){return m.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},n.prototype.getScriptSources=function(){var i,a,o=(i=this.props.scriptLoading)===null||i===void 0?void 0:i.async,s=(a=this.props.scriptLoading)===null||a===void 0?void 0:a.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:o,defer:s}]:this.props.tinymceScriptSrc.map(function(d){return typeof d=="string"?{src:d,async:o,defer:s}:d});var e=this.props.cloudChannel,l=this.props.apiKey?this.props.apiKey:"no-api-key",c="https://cdn.tiny.cloud/1/".concat(l,"/tinymce/").concat(e,"/tinymce.min.js");return[{src:c,async:o,defer:s}]},n.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},n.prototype.bindHandlers=function(i){var a=this;if(this.editor!==void 0){ae(this.editor,i,this.props,this.boundHandlers,function(l){return a.props[l]});var o=function(l){return l.onEditorChange!==void 0||l.value!==void 0},s=o(i),e=o(this.props);!s&&e?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!e&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},n.propTypes=oe,n.defaultProps={cloudChannel:"6"},n}(m.Component);const me=({name:t,className:n,label:i,required:a})=>{const o=m.useRef(null),[s,e,{setValue:l}]=U({type:"textarea",name:t}),c=m.useMemo(()=>s.value,[t]);return m.useEffect(()=>{if(o.current){const d=setInterval(()=>{var u;l(((u=o.current)==null?void 0:u.getContent())||"")},5e3);return()=>clearInterval(d)}},[o.current]),v("div",{className:n,children:[i&&v("div",{className:"pb-3 px-2 text-gray-700 text-sm",children:["- ",i,a?" *":""]}),f(ve,{tinymceScriptSrc:location.origin+"/tinymce/tinymce.min.js",onInit:(d,u)=>o.current=u,initialValue:c,init:{height:500,menubar:!1,directionality:"rtl",language:"fa",plugins:["advlist","autolink","lists","link","image","charmap","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","preview","help","wordcount"],toolbar:"undo redo | blocks | link bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:`
					@font-face {
						font-family: IranSansWeb;
						src: url(${location.origin}/fonts/IRANSansWeb.ttf);
					}
					body { font-family: IranSansWeb; font-size:14px }
					`},onBlur:(d,u)=>l((u==null?void 0:u.getContent())||"")})]})},L={baseURL:window.location.origin+"/api/files",headers:{Accept:"application/json"}};function ge(){return new K(L)}const be=t=>ge().to(`/?${t??""}`).send(),ye=t=>new K({...L,headers:{...L.headers,"Content-Type":"multipart/form-data"}}).to("/").method("post").send(t),xe=({type:t,id:n,filename:i,uri:a,thumbnailUri:o,selected:s,select:e,remove:l})=>{function c(){s?l(n):e(n)}return v("div",{className:"w-fit h-auto aspect-square flex justify-center items-center overflow-hidden relative",children:[t==="image"&&o&&f("img",{src:o,className:"w-full sticky h-auto flex flex-col items-center justify-between aspect-square overflow-hidden border border-black/10 shadow-md rounded-md"}),f("div",{onClick:c,className:`grid absolute cursor-pointer w-full h-full ${s?"bg-black/60 text-slate-400":"bg-transparent text-transparent hover:bg-black/60 hover:text-slate-400"} place-content-center font-bold`,children:s?"انتخاب شده":"انتخاب"})]})},j=m.createContext({show:()=>{},hide:()=>{},toggle:()=>{}}),we=({files:t,multiSelect:n,handleSelect:i})=>{const[a,o]=m.useState([]),{hide:s}=m.useContext(j);function e(d){if(n)return o(u=>[...u,d]);o([d])}function l(d){o(n?u=>u.filter(p=>p!==d):[])}function c(){let d=n?t.filter(u=>a.includes(u.id)):t.find(u=>u.id===a[0]);i(d),s()}return v("div",{className:"w-full grow flex flex-col justify-between px-3",children:[f("div",{className:"w-full p-6 gap-4 md:gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8",children:t.map(d=>f(xe,{remove:l,select:e,selected:a.includes(d.id),...d},d.id))}),a.length>0&&v("div",{className:"px-8 py-3 border-t border-black/10 flex justify-between",children:[f("span",{children:`${a.length} مورد انتخاب شده است.`}),f("button",{onClick:c,type:"button",className:"duration-300 text-gray-700 hover:text-gray-900",children:"انتخاب نهایی"})]})]})},Ce=({multiple:t,addFile:n})=>{const[i,a]=m.useTransition(),[o,s]=m.useState([]),e=m.useRef(null);return v("div",{className:"px-4 py-6 flex flex-col justify-center items-center",children:[v("div",{className:"relative md:w-1/2",children:[f("label",{htmlFor:"photos",className:"absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600",children:"فایل ها *"}),f("input",{onChange:c=>{if(!c.target.files)return;let d=c.target.files,u=Array.from(d).map(p=>{let h=p.size/1024;return{file:p,allowed:h<=500,src:URL.createObjectURL(p),name:p.name,sizeInKb:h,uploading:!0}});s(u),a(()=>{let p=new FormData;u.forEach(g=>{p.append("files[]",g.file)});const[h,b]=ye(p);h.then(g=>{if(!g.hasErrors())try{g.getContent().forEach(y=>{n(y)})}catch{}finally{s(y=>[])}})})},ref:e,maxLength:70,accept:"image/*",id:"files",type:"file",multiple:t,name:"files[]",className:"hidden"}),f("div",{onClick:()=>{var c;return(c=e.current)==null?void 0:c.click()},className:"form-input text-center py-2 pt-3 px-3 cursor-pointer",children:v("button",{type:"button",className:"text-gray-700",children:["انتخاب فایل ",v("span",{className:"text-xs",children:["(",t?"آپلود چندتایی":"آپلود تکی",")"]})]})})]}),f("div",{className:"w-full flex flex-wrap gap-4 mt-6",children:o==null?void 0:o.map(c=>v("div",{className:"relative w-40 flex flex-col items-center justify-between h-auto aspect-square overflow-hidden border border-black/10 shadow-md pb-2 rounded-md",children:[f("img",{className:"w-full",src:c.src}),f("span",{className:"text-xs text-center px-2",children:c.name}),i&&f("div",{className:"absolute flex items-center justify-center w-full h-full bg-black/70 text-gray-400",children:"در حال آپلود"})]},c.src))})]})};function Ee(t,n){switch(n.type){case"SET_FILES":return n.payload;case"ADD_FILES":return[...t,...n.payload];case"ADD_FILE":return[n.payload,...t];case"REMOVE_FILE":return t.filter(i=>i.id!==n.payload);default:return t}}const H="p-3 font-bold text-gray-500 bg-gray-100 hover:text-sky-500 disabled:bg-white disabled:text-gray-700",Se=t=>{const n=m.useRef(null),[i,a]=m.useReducer(Ee,[]),[o,s]=m.useState("select");m.useLayoutEffect(()=>{const[l,c]=be("type=image&limit=20");return l.then(d=>{d.hasErrors()||a({type:"SET_FILES",payload:d.getContent()})}),c},[]);function e(l){a({type:"ADD_FILE",payload:l})}return v("div",{ref:n,className:"bg-white flex flex-col w-full h-5/6 border border-black/10 rounded-b-md rounded-tl-md overflow-hidden shadow-md",children:[v("div",{className:"grid grid-cols-2 grow-0",children:[f("button",{onClick:()=>s("select"),disabled:o=="select",className:H,type:"button",children:"انتخاب"}),f("button",{onClick:()=>s("upload"),disabled:o=="upload",className:H,type:"button",children:"آپلود"})]}),o==="select"&&f(we,{files:i,...t}),o==="upload"&&f(Ce,{addFile:e,multiple:t.multiSelect})]})},ke=({multiSelect:t,onSelect:n,children:i,className:a})=>{const[o,s]=m.useState(!1);return f(j.Provider,{value:{show:()=>s(!0),hide:()=>s(!1),toggle:()=>s(e=>!e)},children:v("div",{className:a,children:[v("div",{className:`absolute z-20 ${o?"":"hidden"} top-0 left-0 w-full h-screen px-12 py-6`,children:[f("div",{className:"flex justify-start",children:f("button",{type:"button",role:"button",onClick:()=>s(!1),className:"bg-red-50 text-red-500 text-sm py-1 px-4 rounded-t-md",children:"بستن"})}),f(Se,{multiSelect:t,handleSelect:n})]}),i]})})},Ne=({name:t})=>{const[n,i]=m.useState(),[a,o,s]=U({name:t});return m.useEffect(()=>{n&&s.setValue(n.id)},[n]),v("section",{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[f("h2",{className:"font-bold text-xl mb-4",children:"تصویر مقاله"}),v("div",{className:"flex flex-col justify-center items-center gap-4",children:[n&&f("a",{href:n.uri,target:"_blank",children:f("img",{className:"rounded-md border shadow-md mb-4",width:150,src:n.thumbnailUri||n.uri,alt:""})}),f(ke,{className:"inline-block",multiSelect:!1,onSelect:e=>i(e),children:f(j.Consumer,{children:({show:e,hide:l,toggle:c})=>f("button",{onClick:e,type:"button",role:"button",className:"text-sm font-bold border border-dashed hover:border-solid hover:bg-x-yellow hover:text-gray-800 border-x-yellow text-x-yellow px-3 py-2 rounded-md duration-300",children:`${n?"تغییر":"انتخاب"} تصویر اصلی`})})})]})]})},_e={blogPost:{title:"",description:"",body:"",status:"published"},avatar:null,seo:{html_title:"",meta_description:""}},He=()=>{const t=Z();async function n(i,a){const[o,s]=X(i);o.then(e=>{e.hasErrors()||(N.success("مقاله با موفقیت ایجاد شد."),t("/posts"));const l=e.hasErrors()&&e.getErrorObject();if(l){const c=l.response;N.error(c.message,{style:{direction:"rtl",textAlign:"right"}}),Object.entries((c==null?void 0:c.errors)||{}).forEach(([d,u],p)=>{setTimeout(()=>{u.forEach((h,b)=>{setTimeout(()=>{N.error(h,{style:{direction:"rtl",textAlign:"right"}})},b*500)})},p*300)});return}console.log(e.getErrorObject())})}return v("section",{children:[f("h1",{className:"font-bold text-2xl",children:"ایجاد مقاله"}),v(Q,{children:[f(S,{link:"/",children:"ناحیه کاربری"}),f(S,{link:"/lab",children:"لابراتوار"}),f(S,{children:"ایجاد مقاله"})]}),f(J,{initialValues:_e,onSubmit:n,children:v(Y,{className:"w-full flex flex-col-reverse lg:flex-row gap-6",children:[v("section",{className:"grow flex flex-col gap-6",children:[v("section",{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[f("h2",{className:"font-bold text-xl mb-4",children:"فرم ایجاد مقاله"}),v("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:[f(k,{name:"blogPost[title]",label:"عنوان مقاله",id:"title",className:"mb-3 py-2 px-3",required:!0}),f(k,{name:"blogPost[subtitle]",label:"زیرعنوان",id:"subtitle",className:"mb-3 py-2 px-3"}),f(F,{name:"blogPost[description]",label:"توضیحات",id:"description",className:"p-3",required:!0})]})]}),v("section",{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[f("h2",{className:"font-bold text-xl mb-4",children:"محتوای مقاله"}),f(me,{name:"blogPost[body]",className:"col-span-full",required:!0})]}),v("section",{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[f("h2",{className:"font-bold text-xl mb-4",children:"SEO"}),v("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:[f(k,{name:"seo[html_title]",label:"عنوان صفحه",id:"seo-title",className:"mb-3 py-2 px-3"}),f(F,{name:"seo[meta_description]",label:"متای توضیحات",id:"seo-meta-description",className:"mb-3 p-3"})]})]})]}),v("aside",{className:"w-full lg:max-w-sm lg:w-1/3 flex flex-col gap-4",children:[f(Ne,{name:"avatar"}),v("section",{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[f("h2",{className:"font-bold text-xl mb-4",children:"اقدامات"}),v("div",{className:"flex flex-row justify-start items-center gap-4",children:[f("button",{type:"submit",role:"button",className:"text-sm border font-bold border-dashed hover:border-solid hover:bg-x-green hover:text-white border-x-green text-x-green px-3 py-2 rounded-md duration-300",children:"انتشار"}),f("button",{type:"button",role:"button",className:"text-sm border font-bold border-dashed hover:border-solid hover:bg-gray-800 hover:text-white border-gray-800 text-gray-800 px-3 py-2 rounded-md duration-300",children:"باشه بعدا"})]})]})]})]})})]})};export{He as Component};