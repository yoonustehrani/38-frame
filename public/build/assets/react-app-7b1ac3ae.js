import{j as e,r as t,_ as n,c as l}from"./client-abbe1494.js";function o({children:r}){return e(t.Suspense,{fallback:e("p",{children:"Loading ..."}),children:r})}const i=t.lazy(()=>n(()=>import("./index-3e1da2d0.js"),["assets/index-3e1da2d0.js","assets/client-abbe1494.js"])),_=t.lazy(()=>n(()=>import("./index-ef0f8f54.js"),["assets/index-ef0f8f54.js","assets/client-abbe1494.js"])),s=t.lazy(()=>n(()=>import("./index-0cdb43a1.js"),["assets/index-0cdb43a1.js","assets/client-abbe1494.js","assets/Request-c3ee7f25.js"])),m=t.lazy(()=>n(()=>import("./Labs-4fa822d1.js"),["assets/Labs-4fa822d1.js","assets/client-abbe1494.js","assets/CityComboBox-56a1492f.js","assets/Request-c3ee7f25.js","assets/styled-92600658.js","assets/createSvgIcon-610a0a1c.js","assets/SwitchBase-91e0191a.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js","assets/FormControl-a430915d.js","assets/ArrowIcon-202630a0.js","assets/Switch-e1493eef.js"]));function p({element:r,toBeRendered:c}){r&&l(r).render(c)}const d=document.getElementById("react-roadmap");var a=[];if(d){let r=d.getAttribute("data-roadmap");a=JSON.parse(r)}[{element:document.getElementById("react-blog"),toBeRendered:e(t.StrictMode,{children:e(o,{children:e(s,{fetchPostsUrl:""})})})},{element:document.getElementById("react-gallery"),toBeRendered:e(o,{children:e(_,{})})},{element:d,toBeRendered:e(o,{children:e(i,{steps:a})})},{element:document.getElementById("react-labs"),toBeRendered:e(t.StrictMode,{children:e(o,{children:e(m,{})})})}].map(p);