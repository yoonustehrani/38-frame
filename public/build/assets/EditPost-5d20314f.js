import{j as e,a as l}from"./client-abbe1494.js";import{a as g,e as f}from"./api-2e2ce2c7.js";import{B as N,a as n}from"./BreadCrumb-9b4d90e8.js";import{I as s}from"./Input-afe2263d.js";import{T as h}from"./TextArea-13072f5e.js";import{R as y,A as v}from"./AvatarPick-1b82f96c.js";import{F as a,a as o}from"./formContext-6cf63da9.js";import{Q as u}from"./react-admin-05274f60.js";import{d as w}from"./Auth-8243c99e.js";import"./Request-86ea05f5.js";import"./ArrowIcon-202630a0.js";import"./FormSection-0da77780.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./PlusIcon-56c11ef8.js";const i=({text:t})=>e("button",{type:"submit",role:"button",className:"text-sm border font-bold border-dashed hover:border-solid hover:bg-x-green hover:text-white border-x-green text-x-green px-3 py-2 rounded-md duration-300",children:t});async function _({params:t}){const[r,c]=g(t.postId),d=await r;if(!d.hasErrors())return d.getContent()}const D=()=>{const t=w();async function r(c,d){const[x,P]=f(t.id,c);x.then(m=>{var b,p;m.hasErrors()?u.error((p=(b=m.getErrorObject())==null?void 0:b.response)==null?void 0:p.message):u.success("تغییرات با موفقیت ذخیره شدند.")})}return l("section",{children:[e("h1",{className:"font-bold text-2xl",children:"ویرایش مقاله"}),l(N,{children:[e(n,{link:"/",children:"ناحیه کاربری"}),e(n,{link:"/lab",children:"مقاله ها"}),l(n,{children:["ویرایش مقاله ",l("span",{className:"font-bold",children:["`",t.title,"`"]})]})]}),l("div",{className:"w-full flex flex-col-reverse lg:flex-row gap-6",children:[l("section",{className:"grow flex flex-col gap-6",children:[e(a,{initialValues:{blogPost:{title:t.title,subtitle:t.subtitle,description:t.description,slug:t.slug}},onSubmit:r,children:e(o,{className:"flex flex-col gap-6",children:l("section",{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[e("h2",{className:"font-bold text-xl mb-4",children:"مشخصات مقاله"}),l("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:[e(s,{name:"blogPost[title]",label:"عنوان مقاله",id:"title",className:"mb-3 py-2 px-3",required:!0}),e(s,{name:"blogPost[subtitle]",label:"زیرعنوان",id:"subtitle",className:"mb-3 py-2 px-3"}),e(s,{name:"blogPost[slug]",label:"شناسه url",id:"slug",className:"mb-3 py-2 px-3",required:!0}),e(h,{name:"blogPost[description]",label:"توضیحات",id:"description",className:"p-3",required:!0})]}),e("div",{className:"mt-6 flex items-center justify-center",children:e(i,{text:"ذخیره مشخصات"})})]})})}),e(a,{initialValues:{blogPost:{body:t.body}},onSubmit:r,children:l(o,{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[e("h2",{className:"font-bold text-xl mb-4",children:"محتوای مقاله"}),e(y,{name:"blogPost[body]",className:"col-span-full",required:!0}),e("div",{className:"mt-6 flex items-center justify-center",children:e(i,{text:"ذخیره محتوا"})})]})}),e(a,{initialValues:{seo:t.seo},onSubmit:r,children:l(o,{className:"border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg",children:[e("h2",{className:"font-bold text-xl mb-4",children:"SEO"}),l("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:[e(s,{name:"seo[html_title]",label:"عنوان صفحه",id:"seo-title",className:"mb-3 py-2 px-3"}),e(h,{name:"seo[meta_description]",label:"متای توضیحات",id:"seo-meta-description",className:"mb-3 p-3"})]}),e("div",{className:"mt-6 flex items-center justify-center",children:e(i,{text:"ذخیره تنظیمات"})})]})})]}),e("aside",{className:"w-full lg:max-w-sm lg:w-1/3 flex flex-col gap-4",children:e(a,{onSubmit:r,initialValues:{avatar:t.avatar||null},children:e(o,{children:e(v,{name:"avatar",children:e(i,{text:"ذخیره تصویر"})})})})})]})]})};export{D as Component,_ as loader};
