import{j as e,r as t,_ as n,c}from"./client-abbe1494.js";function r({children:o}){return e(t.Suspense,{fallback:e("p",{children:"Loading ..."}),children:o})}const i=t.lazy(()=>n(()=>import("./MobileMenu-2ddf18ca.js"),["assets/MobileMenu-2ddf18ca.js","assets/client-abbe1494.js","assets/Request-86ea05f5.js"])),_=t.lazy(()=>n(()=>import("./index-3e1da2d0.js"),["assets/index-3e1da2d0.js","assets/client-abbe1494.js"])),m=t.lazy(()=>n(()=>import("./index-ef0f8f54.js"),["assets/index-ef0f8f54.js","assets/client-abbe1494.js"])),s=t.lazy(()=>n(()=>import("./index-846e6566.js"),["assets/index-846e6566.js","assets/client-abbe1494.js","assets/Request-86ea05f5.js"])),u=t.lazy(()=>n(()=>import("./Labs-f9f01680.js"),["assets/Labs-f9f01680.js","assets/client-abbe1494.js","assets/CityComboBox-ce89daad.js","assets/Request-86ea05f5.js","assets/styled-42dbb97a.js","assets/createSvgIcon-4d28ae4a.js","assets/SwitchBase-78047a2c.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js","assets/FormControl-31fd935d.js","assets/ArrowIcon-202630a0.js","assets/Switch-28f280db.js"]));function p({element:o,toBeRendered:l}){o&&c(o).render(l)}const d=document.getElementById("react-roadmap");var a=[];if(d){let o=d.getAttribute("data-roadmap");a=JSON.parse(o)}[{element:document.getElementById("react-mobile-menu"),toBeRendered:e(t.StrictMode,{children:e(r,{children:e(i,{})})})},{element:document.getElementById("react-blog"),toBeRendered:e(t.StrictMode,{children:e(r,{children:e(s,{fetchPostsUrl:""})})})},{element:document.getElementById("react-gallery"),toBeRendered:e(r,{children:e(m,{})})},{element:d,toBeRendered:e(r,{children:e(_,{steps:a})})},{element:document.getElementById("react-labs"),toBeRendered:e(t.StrictMode,{children:e(r,{children:e(u,{})})})}].map(p);