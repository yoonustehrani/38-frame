import{r as n,a as m,j as s}from"./client-58cc365f.js";import{F as c}from"./FormSection-b5fa1c80.js";import{u as x,f as u}from"./formContext-c4ccf986.js";const $=({className:a,formSectionClassName:o,children:i,...r})=>{const[l,{error:t,touched:d}]=x(r),e=(n.useContext(u)||d)&&t;return m(c,{required:!!r.required,className:`${e?"text-red-600":"text-gray-600"} ${o}`,label:r.label?{for:r.id,text:r.label}:void 0,children:[s("input",{className:`form-input ${e?"invalid":""} ${a}`,...l,...r}),e&&s("div",{className:"text-red-600 my-3 text-sm",children:t}),i]})};export{$ as I};