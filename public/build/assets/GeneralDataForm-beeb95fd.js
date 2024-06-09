import{r as n,a,F as p,j as e}from"./client-abbe1494.js";import{I as t}from"./Input-afe2263d.js";import{T as o}from"./TextArea-13072f5e.js";import{S as d}from"./SelectBox-fde696f8.js";import{T as u}from"./ThemeProvider-cd7597d9.js";import{i as c}from"./styled-42dbb97a.js";import{F as x}from"./FormControl-31fd935d.js";import{R as y,F as l,a as m}from"./RadioGroup-f6ba4d01.js";import"./FormSection-0da77780.js";import"./formContext-6cf63da9.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./SwitchBase-78047a2c.js";import"./createSvgIcon-4d28ae4a.js";const R=()=>{const[r,s]=n.useState(!1);return a(p,{children:[e(t,{required:!0,type:"text",name:"brand",id:"brand",label:"نام / برند فروشگاه",className:"py-2 px-3"}),e(t,{required:!0,type:"number",name:"founded_in_year",id:"year",label:"سال شروع فعالیت",className:"ltr py-2 px-3",min:1320,max:1402}),e(d,{required:!0,name:"category",id:"category",className:"form-input py-1 pt-3 px-3",label:"نوع فروشگاه",placeholder:"نوع فروشگاه خود را مشخص کنید",options:[{value:1,text:"فروشگاه تخصصی لوازم عکاسی"},{value:2,text:"فروشگاه تخصصی عکاسی آنالوگ"},{value:3,text:"فروشگاه شخصی / فروشگاه خانگی"},{value:4,text:"فروشگاه مجازی / فروشگاه اینستاگرامی"}]}),e(o,{required:!0,name:"bio",id:"bio",label:"بیوگرافی / معرفی فروشگاه",className:"py-4 px-3"}),e(u,{theme:c({typography:{fontFamily:"IranSansWeb"}}),children:a(x,{children:[e("label",{className:"text-gray-600 mb-2",children:"آیا امکان فروش حضوری کالا دارید ؟"}),a(y,{name:"controlled-radio-buttons-group",value:r?"yes":"no",onChange:i=>s(i.target.value==="yes"),children:[e(l,{value:"yes",control:e(m,{}),label:"بله"}),e(l,{value:"no",control:e(m,{}),label:"خیر"})]})]})}),r&&e(o,{required:!0,name:"address",id:"address",label:"آدرس دقیق فروشگاه",className:"py-4 px-3"})]})};export{R as default};
