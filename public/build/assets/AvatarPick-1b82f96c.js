import{r as g,a as y,j as p}from"./client-abbe1494.js";import{u as B}from"./formContext-6cf63da9.js";import{R as M}from"./Request-86ea05f5.js";var V={exports:{}},W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q=W,G=q;function U(){}function H(){}H.resetWarningCache=U;var J=function(){function n(a,o,s,e,l,c){if(c!==G){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}n.isRequired=n;function r(){return n}var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:r,element:n,elementType:n,instanceOf:r,node:n,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:H,resetWarningCache:U};return i.PropTypes=i,i};V.exports=J();var t=V.exports,T=globalThis&&globalThis.__assign||function(){return T=Object.assign||function(n){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},T.apply(this,arguments)},K={onActivate:t.func,onAddUndo:t.func,onBeforeAddUndo:t.func,onBeforeExecCommand:t.func,onBeforeGetContent:t.func,onBeforeRenderUI:t.func,onBeforeSetContent:t.func,onBeforePaste:t.func,onBlur:t.func,onChange:t.func,onClearUndos:t.func,onClick:t.func,onContextMenu:t.func,onCommentChange:t.func,onCopy:t.func,onCut:t.func,onDblclick:t.func,onDeactivate:t.func,onDirty:t.func,onDrag:t.func,onDragDrop:t.func,onDragEnd:t.func,onDragGesture:t.func,onDragOver:t.func,onDrop:t.func,onExecCommand:t.func,onFocus:t.func,onFocusIn:t.func,onFocusOut:t.func,onGetContent:t.func,onHide:t.func,onInit:t.func,onKeyDown:t.func,onKeyPress:t.func,onKeyUp:t.func,onLoadContent:t.func,onMouseDown:t.func,onMouseEnter:t.func,onMouseLeave:t.func,onMouseMove:t.func,onMouseOut:t.func,onMouseOver:t.func,onMouseUp:t.func,onNodeChange:t.func,onObjectResizeStart:t.func,onObjectResized:t.func,onObjectSelected:t.func,onPaste:t.func,onPostProcess:t.func,onPostRender:t.func,onPreProcess:t.func,onProgressState:t.func,onRedo:t.func,onRemove:t.func,onReset:t.func,onSaveContent:t.func,onSelectionChange:t.func,onSetAttrib:t.func,onSetContent:t.func,onShow:t.func,onSubmit:t.func,onUndo:t.func,onVisualAid:t.func,onSkinLoadError:t.func,onThemeLoadError:t.func,onModelLoadError:t.func,onPluginLoadError:t.func,onIconsLoadError:t.func,onLanguageLoadError:t.func,onScriptsLoad:t.func,onScriptsLoadError:t.func},Q=T({apiKey:t.string,id:t.string,inline:t.bool,init:t.object,initialValue:t.string,onEditorChange:t.func,value:t.string,tagName:t.string,cloudChannel:t.string,plugins:t.oneOfType([t.string,t.array]),toolbar:t.oneOfType([t.string,t.array]),disabled:t.bool,textareaName:t.string,tinymceScriptSrc:t.oneOfType([t.string,t.arrayOf(t.string),t.arrayOf(t.shape({src:t.string,async:t.bool,defer:t.bool}))]),rollback:t.oneOfType([t.number,t.oneOf([!1])]),scriptLoading:t.shape({async:t.bool,defer:t.bool,delay:t.number})},K),k=function(n){return typeof n=="function"},O=function(n){return n in K},R=function(n){return n.substr(2)},Y=function(n,r,i,a,o,s,e){var l=Object.keys(o).filter(O),c=Object.keys(s).filter(O),u=l.filter(function(d){return s[d]===void 0}),f=c.filter(function(d){return o[d]===void 0});u.forEach(function(d){var h=R(d),b=e[h];i(h,b),delete e[h]}),f.forEach(function(d){var h=a(n,d),b=R(d);e[b]=h,r(b,h)})},X=function(n,r,i,a,o){return Y(o,n.on.bind(n),n.off.bind(n),function(s,e){return function(l){var c;return(c=s(e))===null||c===void 0?void 0:c(l,n)}},r,i,a)},j=0,z=function(n){var r=Date.now(),i=Math.floor(Math.random()*1e9);return j++,n+"_"+i+j+String(r)},D=function(n){return n!==null&&(n.tagName.toLowerCase()==="textarea"||n.tagName.toLowerCase()==="input")},F=function(n){return typeof n>"u"||n===""?[]:Array.isArray(n)?n:n.split(" ")},Z=function(n,r){return F(n).concat(F(r))},ee=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},ne=function(n){if(!("isConnected"in Node.prototype)){for(var r=n,i=n.parentNode;i!=null;)r=i,i=r.parentNode;return r===n.ownerDocument}return n.isConnected},P=function(n,r){n!==void 0&&(n.mode!=null&&typeof n.mode=="object"&&typeof n.mode.set=="function"?n.mode.set(r):n.setMode(r))},N=globalThis&&globalThis.__assign||function(){return N=Object.assign||function(n){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},N.apply(this,arguments)},te=function(n,r,i){var a,o,s=n.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=r.id,s.src=r.src,s.async=(a=r.async)!==null&&a!==void 0?a:!1,s.defer=(o=r.defer)!==null&&o!==void 0?o:!1;var e=function(){s.removeEventListener("load",e),s.removeEventListener("error",l),i(r.src)},l=function(c){s.removeEventListener("load",e),s.removeEventListener("error",l),i(r.src,c)};s.addEventListener("load",e),s.addEventListener("error",l),n.head&&n.head.appendChild(s)},re=function(n){var r={},i=function(e,l){var c=r[e];c.done=!0,c.error=l;for(var u=0,f=c.handlers;u<f.length;u++){var d=f[u];d(e,l)}c.handlers=[]},a=function(e,l,c){var u=function(w){return c!==void 0?c(w):console.error(w)};if(e.length===0){u(new Error("At least one script must be provided"));return}for(var f=0,d=!1,h=function(w,L){d||(L?(d=!0,u(L)):++f===e.length&&l())},b=0,v=e;b<v.length;b++){var m=v[b],C=r[m.src];if(C)C.done?h(m.src,C.error):C.handlers.push(h);else{var S=z("tiny-");r[m.src]={id:S,src:m.src,done:!1,error:null,handlers:[h]},te(n,N({id:S},m),i)}}},o=function(){for(var e,l=0,c=Object.values(r);l<c.length;l++){var u=c[l],f=n.getElementById(u.id);f!=null&&f.tagName==="SCRIPT"&&((e=f.parentNode)===null||e===void 0||e.removeChild(f))}r={}},s=function(){return n};return{loadScripts:a,deleteScripts:o,getDocument:s}},oe=function(){var n=[],r=function(o){var s=n.find(function(e){return e.getDocument()===o});return s===void 0&&(s=re(o),n.push(s)),s},i=function(o,s,e,l,c){var u=function(){return r(o).loadScripts(s,l,c)};e>0?setTimeout(u,e):u()},a=function(){for(var o=n.pop();o!=null;o=n.pop())o.deleteScripts()};return{loadList:i,reinitialize:a}},ie=oe(),_=function(n){var r=n;return r&&r.tinymce?r.tinymce:null},ae=globalThis&&globalThis.__extends||function(){var n=function(r,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,o){a.__proto__=o}||function(a,o){for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(a[s]=o[s])},n(r,i)};return function(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");n(r,i);function a(){this.constructor=r}r.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}}(),x=globalThis&&globalThis.__assign||function(){return x=Object.assign||function(n){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},x.apply(this,arguments)},se=function(n){ae(r,n);function r(i){var a,o,s,e=n.call(this,i)||this;return e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var l=e.editor,c=e.props.value;l&&c&&c!==e.currentContent&&l.undoManager.ignore(function(){if(l.setContent(c),e.valueCursor&&(!e.inline||l.hasFocus()))try{l.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(l){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus()))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(l){(l.key==="Enter"||l.key==="Backspace"||l.key==="Delete")&&e.handleBeforeInput(l)},e.handleEditorChange=function(l){var c=e.editor;if(c&&c.initialized){var u=c.getContent();e.props.value!==void 0&&e.props.value!==u&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),u!==e.currentContent&&(e.currentContent=u,k(e.props.onEditorChange)&&e.props.onEditorChange(u,c))}},e.handleEditorChangeSpecial=function(l){(l.key==="Backspace"||l.key==="Delete")&&e.handleEditorChange(l)},e.initialise=function(l){var c,u,f;l===void 0&&(l=0);var d=e.elementRef.current;if(d){if(!ne(d)){if(l===0)setTimeout(function(){return e.initialise(1)},1);else if(l<100)setTimeout(function(){return e.initialise(l+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var h=_(e.view);if(!h)throw new Error("tinymce should have been loaded into global scope");var b=x(x({},e.props.init),{selector:void 0,target:d,readonly:e.props.disabled,inline:e.inline,plugins:Z((c=e.props.init)===null||c===void 0?void 0:c.plugins,e.props.plugins),toolbar:(u=e.props.toolbar)!==null&&u!==void 0?u:(f=e.props.init)===null||f===void 0?void 0:f.toolbar,setup:function(v){e.editor=v,e.bindHandlers({}),e.inline&&!D(d)&&v.once("PostRender",function(m){v.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&k(e.props.init.setup)&&e.props.init.setup(v)},init_instance_callback:function(v){var m,C,S=e.getInitialValue();e.currentContent=(m=e.currentContent)!==null&&m!==void 0?m:v.getContent(),e.currentContent!==S&&(e.currentContent=S,v.setContent(S),v.undoManager.clear(),v.undoManager.add(),v.setDirty(!1));var w=(C=e.props.disabled)!==null&&C!==void 0?C:!1;P(e.editor,w?"readonly":"design"),e.props.init&&k(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(v)}});e.inline||(d.style.visibility=""),D(d)&&(d.value=e.getInitialValue()),h.init(b)}},e.id=e.props.id||z("tiny-react"),e.elementRef=g.createRef(),e.inline=(s=(a=e.props.inline)!==null&&a!==void 0?a:(o=e.props.init)===null||o===void 0?void 0:o.inline)!==null&&s!==void 0?s:!1,e.boundHandlers={},e}return Object.defineProperty(r.prototype,"view",{get:function(){var i,a;return(a=(i=this.elementRef.current)===null||i===void 0?void 0:i.ownerDocument.defaultView)!==null&&a!==void 0?a:window},enumerable:!1,configurable:!0}),r.prototype.componentDidUpdate=function(i){var a=this,o,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(i),this.editor.initialized)){if(this.currentContent=(o=this.currentContent)!==null&&o!==void 0?o:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==i.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var e=this.editor;e.undoManager.transact(function(){var c;if(!a.inline||e.hasFocus())try{c=e.selection.getBookmark(3)}catch{}var u=a.valueCursor;if(e.setContent(a.props.value),!a.inline||e.hasFocus())for(var f=0,d=[c,u];f<d.length;f++){var h=d[f];if(h)try{e.selection.moveToBookmark(h),a.valueCursor=h;break}catch{}}})}if(this.props.disabled!==i.disabled){var l=(s=this.props.disabled)!==null&&s!==void 0?s:!1;P(this.editor,l?"readonly":"design")}}},r.prototype.componentDidMount=function(){var i=this,a,o,s,e,l;if(_(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(o=(a=this.props).onScriptsLoadError)===null||o===void 0||o.call(a,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((s=this.elementRef.current)===null||s===void 0)&&s.ownerDocument){var c=function(){var f,d;(d=(f=i.props).onScriptsLoad)===null||d===void 0||d.call(f),i.initialise()},u=function(f){var d,h;(h=(d=i.props).onScriptsLoadError)===null||h===void 0||h.call(d,f)};ie.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(l=(e=this.props.scriptLoading)===null||e===void 0?void 0:e.delay)!==null&&l!==void 0?l:0,c,u)}},r.prototype.componentWillUnmount=function(){var i=this,a=this.editor;a&&(a.off(this.changeEvents(),this.handleEditorChange),a.off(this.beforeInputEvent(),this.handleBeforeInput),a.off("keypress",this.handleEditorChangeSpecial),a.off("keydown",this.handleBeforeInputSpecial),a.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(o){a.off(o,i.boundHandlers[o])}),this.boundHandlers={},a.remove(),this.editor=void 0)},r.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},r.prototype.changeEvents=function(){var i,a,o,s=(o=(a=(i=_(this.view))===null||i===void 0?void 0:i.Env)===null||a===void 0?void 0:a.browser)===null||o===void 0?void 0:o.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},r.prototype.beforeInputEvent=function(){return ee()?"beforeinput SelectionChange":"SelectionChange"},r.prototype.renderInline=function(){var i=this.props.tagName,a=i===void 0?"div":i;return g.createElement(a,{ref:this.elementRef,id:this.id})},r.prototype.renderIframe=function(){return g.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},r.prototype.getScriptSources=function(){var i,a,o=(i=this.props.scriptLoading)===null||i===void 0?void 0:i.async,s=(a=this.props.scriptLoading)===null||a===void 0?void 0:a.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:o,defer:s}]:this.props.tinymceScriptSrc.map(function(u){return typeof u=="string"?{src:u,async:o,defer:s}:u});var e=this.props.cloudChannel,l=this.props.apiKey?this.props.apiKey:"no-api-key",c="https://cdn.tiny.cloud/1/".concat(l,"/tinymce/").concat(e,"/tinymce.min.js");return[{src:c,async:o,defer:s}]},r.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},r.prototype.bindHandlers=function(i){var a=this;if(this.editor!==void 0){X(this.editor,i,this.props,this.boundHandlers,function(l){return a.props[l]});var o=function(l){return l.onEditorChange!==void 0||l.value!==void 0},s=o(i),e=o(this.props);!s&&e?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!e&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},r.propTypes=Q,r.defaultProps={cloudChannel:"6"},r}(g.Component);const I={baseURL:window.location.origin+"/api/files",headers:{Accept:"application/json"}};function le(){return new M(I)}const ce=n=>le().to(`/?${n??""}`).send(),ue=n=>new M({...I,headers:{...I.headers,"Content-Type":"multipart/form-data"}}).to("/").method("post").send(n),de=({type:n,id:r,filename:i,uri:a,thumbnailUri:o,selected:s,select:e,remove:l})=>{function c(){s?l(r):e(r)}return y("div",{className:"w-fit h-auto aspect-square flex justify-center items-center overflow-hidden relative",children:[n==="image"&&o&&p("img",{src:o,className:"w-full sticky h-auto flex flex-col items-center justify-between aspect-square overflow-hidden border border-black/10 shadow-md rounded-md"}),p("div",{onClick:c,className:`grid absolute cursor-pointer w-full h-full ${s?"bg-black/60 text-slate-400":"bg-transparent text-transparent hover:bg-black/60 hover:text-slate-400"} place-content-center font-bold`,children:s?"انتخاب شده":"انتخاب"})]})},E=g.createContext({show:()=>{},hide:()=>{},toggle:()=>{}}),fe=({files:n,multiSelect:r,handleSelect:i})=>{const[a,o]=g.useState([]),{hide:s}=g.useContext(E);function e(u){if(r)return o(f=>[...f,u]);o([u])}function l(u){o(r?f=>f.filter(d=>d!==u):[])}function c(){let u=r?n.filter(f=>a.includes(f.id)):n.find(f=>f.id===a[0]);i(u),s()}return y("div",{className:"w-full grow flex flex-col justify-between px-3",children:[p("div",{className:"w-full p-6 gap-4 md:gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8",children:n.map(u=>p(de,{remove:l,select:e,selected:a.includes(u.id),...u},u.id))}),a.length>0&&y("div",{className:"px-8 py-3 border-t border-black/10 flex justify-between",children:[p("span",{children:`${a.length} مورد انتخاب شده است.`}),p("button",{onClick:c,type:"button",className:"duration-300 text-gray-700 hover:text-gray-900",children:"انتخاب نهایی"})]})]})},pe=({multiple:n,addFile:r})=>{const[i,a]=g.useTransition(),[o,s]=g.useState([]),e=g.useRef(null);return y("div",{className:"px-4 py-6 flex flex-col justify-center items-center",children:[y("div",{className:"relative md:w-1/2",children:[p("label",{htmlFor:"photos",className:"absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600",children:"فایل ها *"}),p("input",{onChange:c=>{if(!c.target.files)return;let u=c.target.files,f=Array.from(u).map(d=>{let h=d.size/1024;return{file:d,allowed:h<=500,src:URL.createObjectURL(d),name:d.name,sizeInKb:h,uploading:!0}});s(f),a(()=>{let d=new FormData;f.forEach(v=>{d.append("files[]",v.file)});const[h,b]=ue(d);h.then(v=>{if(!v.hasErrors())try{v.getContent().forEach(m=>{r(m)})}catch{}finally{s(m=>[])}})})},ref:e,maxLength:70,accept:"image/*",id:"files",type:"file",multiple:n,name:"files[]",className:"hidden"}),p("div",{onClick:()=>{var c;return(c=e.current)==null?void 0:c.click()},className:"form-input text-center py-2 pt-3 px-3 cursor-pointer",children:y("button",{type:"button",className:"text-gray-700",children:["انتخاب فایل ",y("span",{className:"text-xs",children:["(",n?"آپلود چندتایی":"آپلود تکی",")"]})]})})]}),p("div",{className:"w-full flex flex-wrap gap-4 mt-6",children:o==null?void 0:o.map(c=>y("div",{className:"relative w-40 flex flex-col items-center justify-between h-auto aspect-square overflow-hidden border border-black/10 shadow-md pb-2 rounded-md",children:[p("img",{className:"w-full",src:c.src}),p("span",{className:"text-xs text-center px-2",children:c.name}),i&&p("div",{className:"absolute flex items-center justify-center w-full h-full bg-black/70 text-gray-400",children:"در حال آپلود"})]},c.src))})]})};function he(n,r){switch(r.type){case"SET_FILES":return r.payload;case"ADD_FILES":return[...n,...r.payload];case"ADD_FILE":return[r.payload,...n];case"REMOVE_FILE":return n.filter(i=>i.id!==r.payload);default:return n}}const A="p-3 font-bold text-gray-500 bg-gray-100 hover:text-sky-500 disabled:bg-white disabled:text-gray-700",ve=n=>{const r=g.useRef(null),[i,a]=g.useReducer(he,[]),[o,s]=g.useState("select");g.useLayoutEffect(()=>{const[l,c]=ce("type=image&limit=20");return l.then(u=>{u.hasErrors()||a({type:"SET_FILES",payload:u.getContent()})}),c},[]);function e(l){a({type:"ADD_FILE",payload:l})}return y("div",{ref:r,className:"bg-white flex flex-col w-full h-5/6 border border-black/10 rounded-b-md rounded-tl-md overflow-hidden shadow-md",children:[y("div",{className:"grid grid-cols-2 grow-0",children:[p("button",{onClick:()=>s("select"),disabled:o=="select",className:A,type:"button",children:"انتخاب"}),p("button",{onClick:()=>s("upload"),disabled:o=="upload",className:A,type:"button",children:"آپلود"})]}),o==="select"&&p(fe,{files:i,...n}),o==="upload"&&p(pe,{addFile:e,multiple:n.multiSelect})]})},$=({multiSelect:n,onSelect:r,children:i,className:a})=>{const[o,s]=g.useState(!1);return p(E.Provider,{value:{show:()=>s(!0),hide:()=>s(!1),toggle:()=>s(e=>!e)},children:y("div",{className:a,children:[y("div",{className:`fixed z-40 ${o?"":"hidden"} top-0 left-0 w-full h-screen px-12 py-6`,children:[p("div",{className:"flex justify-start",children:p("button",{type:"button",role:"button",onClick:()=>s(!1),className:"bg-red-50 text-red-500 text-sm py-1 px-4 rounded-t-md",children:"بستن"})}),p(ve,{multiSelect:n,handleSelect:r})]}),i]})})},be=({name:n,className:r,label:i,required:a})=>{const o=g.useRef(null),[s,e,{setValue:l}]=B({type:"textarea",name:n});return g.useEffect(()=>{if(o.current){const c=setInterval(()=>{var u;l(((u=o.current)==null?void 0:u.getContent())||"")},5e3);return()=>clearInterval(c)}},[o.current]),y("div",{className:r,children:[i&&y("div",{className:"pb-3 px-2 text-gray-700 text-sm",children:["- ",i,a?" *":""]}),p($,{multiSelect:!0,onSelect:c=>{var f;let u="&nbsp;";c.forEach(d=>{u+=`<img data-src="${d.uri}" src="${d.thumbnailUri}"/>`}),u+="&nbsp;",(f=o.current)==null||f.insertContent(u)},className:"block",children:p(E.Consumer,{children:({show:c,hide:u})=>p(se,{tinymceScriptSrc:location.origin+"/tinymce/tinymce.min.js",onInit:(f,d)=>{o.current=d,d.ui.registry.addButton("imageGallery",{icon:"image",onAction:h=>{c()}})},initialValue:e.initialValue,init:{height:500,menubar:!1,directionality:"rtl",language:"fa",plugins:["advlist","autolink","lists","link","image","charmap","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","preview","help","wordcount"],toolbar:"undo redo | blocks | imageGallery link bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",body_class:"font-iran-sans",content_style:`
								@font-face {
									font-family: IranSansWeb;
									src: url(${location.origin}/fonts/IRANSansWeb.ttf);
								}
								body { font-family: IranSansWeb; font-size:14px }
								`},onBlur:(f,d)=>l((d==null?void 0:d.getContent())||"")})})})]})},Ce=({name:n,children:r})=>{const[i,a,o]=B({name:n}),[s,e]=g.useState(a.initialValue);return g.useEffect(()=>{s&&o.setValue(s.id)},[s]),y("section",{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[p("h2",{className:"font-bold text-xl mb-4",children:"تصویر مقاله"}),y("div",{className:"flex flex-col justify-center items-center gap-4",children:[s&&p("a",{href:s.uri,target:"_blank",children:p("img",{className:"rounded-md border shadow-md mb-4",width:150,src:s.thumbnailUri||s.uri,alt:""})}),p($,{className:"inline-block",multiSelect:!1,onSelect:l=>e(l),children:y("div",{className:"flex flex-row justify-start items-center gap-4",children:[p(E.Consumer,{children:({show:l,hide:c,toggle:u})=>p("button",{onClick:l,type:"button",role:"button",className:"text-sm font-bold border border-dashed hover:border-solid hover:bg-x-yellow hover:text-gray-800 border-x-yellow text-x-yellow px-3 py-2 rounded-md duration-300",children:`${s?"تغییر":"انتخاب"} تصویر اصلی`})}),r]})})]})]})};export{Ce as A,be as R};
