import{j as r,r as a,a as l,F as m}from"./client-abbe1494.js";import{A as i}from"./ArrowIcon-202630a0.js";import{L as c}from"./Auth-8243c99e.js";const u=({children:e,link:t,isLastItem:s=!1})=>r("li",{className:s?"text-gray-400":"",children:t?r(c,{className:"hover:text-gray-900 hover:underline underline-offset-8 duration-500",to:t,children:e}):e}),x=({children:e})=>{const t=a.useMemo(()=>a.Children.toArray(e),[e]);return r("nav",{className:"my-4 text-sm w-full",children:r("ul",{className:"flex gap-4 text-gray-800",children:a.Children.map(t,(s,n)=>{const o=a.cloneElement(s,{isLastItem:n===t.length-1});return n>0?l(m,{children:[r(u,{children:r(i,{size:20,to:"left"})}),o]}):o})})})};export{x as B,u as a};