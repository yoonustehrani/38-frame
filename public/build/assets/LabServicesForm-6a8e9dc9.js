import{r as i,a as t,j as e,F as o}from"./client-58cc365f.js";import{u as d}from"./formContext-c4ccf986.js";import{f as p}from"./RegisterLab-aba24fec.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./BreadCrumb-199df1aa.js";import"./ArrowIcon-18cff6a5.js";import"./react-userarea-bbb4809d.js";import"./Request-e20e83b2.js";import"./index.esm-d15ecbe5.js";const u=({selectGroup:c,selectedGroup:a})=>{const[n,h]=i.useState([]);return i.useEffect(()=>{const[r,s]=p();return r.then(l=>{l.hasErrors()||h(l.getContent())}),()=>s()},[]),t("select",{className:"w-fit form-input px-2 py-1",value:a??"",onChange:r=>c(Number(r.target.value)),children:[e("option",{value:"",children:"دسته بندی خدمات را انتخاب کنید"}),n.map(r=>e("option",{value:r.id,children:r.label},r.id))]})},m=()=>{const[c,a]=i.useState();return i.useState(),i.useState(),t("div",{className:"col-span-full flex flex-wrap gap-3 items-center",children:[e(u,{selectGroup:a,selectedGroup:c}),t("button",{className:"flex flex-row-reverse items-center gap-2 font-bold duration-300 hover:fill-emerald-900 hover:text-emerald-900",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"26",height:"26",children:e("path",{d:"M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"})}),"افزودن"]})]})},v=(c,a)=>c,A=()=>{const[c,a]=d({name:"services"}),n=i.useMemo(()=>c.value,[]),[h,r]=i.useReducer(v,n);return t(o,{children:[e(m,{}),e("div",{className:"col-span-full",children:t("table",{className:"w-full table-auto",children:[e("thead",{children:t("tr",{children:[e("th",{children:"#"}),e("th",{children:"عنوان"}),e("th",{children:"نرخ خدمات"}),e("th",{children:"توضیحات"}),e("th",{children:"عملیات"})]})}),e("tbody",{children:h.map((s,l)=>t("tr",{children:[e("th",{children:l+1}),e("td",{children:s.title}),t("td",{children:[s.price,e("br",{}),s.price_note]}),e("td",{children:s.description}),e("td",{children:e("button",{type:"button",className:"bg-red-500 text-slate-50 w-7 h-7 flex justify-center items-center",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:[e("path",{d:"M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"}),e("path",{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"}),e("path",{d:"M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"})]})})})]},s.service_id))})]})})]})};export{A as default};
