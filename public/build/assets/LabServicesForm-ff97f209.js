import{r as p,a as n,j as e,F as E}from"./client-abbe1494.js";import{u as x,t as N}from"./formContext-a684c324.js";import{b as S,c as _}from"./api-8e2b663f.js";import{I as m}from"./Input-4acd9be4.js";import{T as C}from"./TextArea-3a09a8ba.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./Request-c3ee7f25.js";import"./index.esm-14f15176.js";import"./FormSection-0da77780.js";const w=({selectGroup:r,selectedGroup:t})=>{const[d,o]=p.useState([]);return p.useEffect(()=>{const[i,c]=S();return i.then(s=>{s.hasErrors()||o(s.getContent())}),()=>c()},[]),n("select",{className:"w-fit form-input px-2 py-1",value:t??"",onChange:i=>r(Number(i.target.value)),children:[e("option",{value:"",children:"دسته بندی خدمات را انتخاب کنید"}),d.map(i=>e("option",{value:i.id,children:i.label},i.id))]})},b=({selectService:r,selectedGroup:t,selectedService:d})=>{const[o,i]=p.useState([]);return p.useEffect(()=>{const[c,s]=_(t);return c.then(u=>{u.hasErrors()||i(u.getContent())}),()=>s()},[t]),n("select",{className:"w-fit form-input px-2 py-1",value:d??"",onChange:c=>{var s;r(Number(c.target.value),((s=o.filter(u=>u.id===Number(c.target.value))[0])==null?void 0:s.title)??"")},children:[e("option",{value:"",children:"انتخاب کنید"}),o.map(c=>e("option",{value:c.id,children:c.title},c.id))]})},R=(r,t)=>{switch(t.type){case"SET_SERVICE":return{...r,title:t.payload.title,service_id:t.payload.id};case"SET_DESCRIPTION":return{...r,description:t.payload};case"SET_PRICE":return{...r,price:t.payload};case"SET_PRICE_NOTE":return{...r,price_note:t.payload};case"CLEAR":return{service_id:r==null?void 0:r.service_id,title:r==null?void 0:r.title};case"CLEAR_ALL":return{};default:return r}},I=({appendService:r})=>{const[t,d]=p.useState(),[o,i]=p.useReducer(R,{});let{service_id:c,description:s,price:u,price_note:a}=o;p.useEffect(()=>{c&&i({type:"CLEAR"})},[c,t]);function h(l,g){i({type:"SET_SERVICE",payload:{id:l,title:g}})}function v(l){i({type:"SET_PRICE",payload:l})}function y(l){i({type:"SET_PRICE_NOTE",payload:l})}function f(l){i({type:"SET_DESCRIPTION",payload:l})}return n("div",{className:"col-span-full flex flex-wrap gap-3 items-center",children:[e(w,{selectGroup:d,selectedGroup:t}),t&&e(b,{selectService:h,selectedService:c,selectedGroup:t}),c&&n("section",{className:"w-full py-3 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e(m,{value:u,onChange:l=>v(Number(l.target.value)),name:"unimportant[price]",type:"number",min:1e3,step:1e3,label:"قیمت",id:"service-price",className:"px-3 py-2"},`${c}-price`),e(m,{value:a,onChange:l=>y(l.target.value),name:"unimportant[price_note]",label:"توضیحات قیمت",id:"service-price-note",className:"px-3 py-2"},`${c}-price-note`),e(C,{required:!0,label:"توضیحات",id:"service-description",value:s,onChange:l=>f(l.target.value),name:"unimportant[description]",className:"px-3 py-2"},`${c}-description`)]}),s&&s.length>3&&e("div",{className:"w-full py-2 flex items-center justify-center",children:n("button",{type:"button",onClick:()=>{r(o),i({type:"CLEAR_ALL"})},className:"flex flex-row-reverse items-center gap-2 font-bold duration-300 hover:fill-emerald-900 hover:text-emerald-900",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"26",height:"26",children:e("path",{d:"M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"})}),"افزودن"]})})]})},V=(r,t)=>{switch(t.type){case"ADD_SERVICE":return[...r,t.payload];case"REMOVE_SERVICE":return r.filter(d=>d.service_id!==t.payload)}return r},F=()=>{const[r,t,d]=x({name:"services"}),o=p.useMemo(()=>r.value,[]),[i,c]=p.useReducer(V,o);p.useEffect(()=>{d.setValue(i.map(a=>({service_id:a.service_id,description:a.description,price:a.price,price_note:a.price_note})))},[i.length]);function s(a){c({type:"REMOVE_SERVICE",payload:a})}function u(a){if(i.filter(h=>h.service_id===a.service_id).length>0){alert("قبلا اضافه شده است.");return}c({type:"ADD_SERVICE",payload:a})}return n(E,{children:[e(I,{appendService:u}),e("div",{className:"col-span-full relative",children:n("table",{className:"w-full text-sm text-cetner text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:n("tr",{children:[e("th",{className:"py-2",children:"#"}),e("th",{className:"py-2",children:"عنوان"}),e("th",{className:"py-2",children:"نرخ خدمات"}),e("th",{className:"py-2",children:"توضیحات"}),e("th",{className:"py-2",children:"عملیات"})]})}),e("tbody",{children:i.map((a,h)=>n("tr",{className:"text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:h+1}),e("td",{className:"px-6 py-4",children:a.title}),n("td",{className:"px-6 py-4",children:[a.price?`${N(a.price)} تومان`:"",e("br",{}),a.price_note]}),e("td",{className:"px-6 py-4",children:a.description}),e("td",{className:"px-6 py-4 flex justify-center items-center",children:e("button",{onClick:()=>s(a.service_id),type:"button",className:"bg-red-100 fill-red-900 w-7 h-7 rounded-md flex justify-center items-center",children:n("svg",{className:"fill-inherit",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",children:[e("path",{d:"M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"}),e("path",{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"}),e("path",{d:"M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"})]})})})]},a.service_id))})]})})]})};export{F as default};
