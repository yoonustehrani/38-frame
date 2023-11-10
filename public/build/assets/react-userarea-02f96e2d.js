import{a as l,j as e,F as g,_ as r,r as n,c as w}from"./client-abbe1494.js";import{u as f,L as _,N as a,a as x,S as A,O as y,c as u,A as E,E as Z,b as V,R}from"./Auth-85041acf.js";import{R as p}from"./Request-c3ee7f25.js";import"./ArrowIcon-202630a0.js";const L=()=>{const{user:t,logout:i}=f();function s(){const[c,h]=new p({baseURL:window.location.origin+"/api/auth",headers:{Accept:"application/json"}}).method("post").to("/logout").send();c.then(o=>{o.hasErrors()||i()})}return l("div",{className:"w-full fixed lg:sticky top-0 left-0 z-30 flex flex-row-reverse gap-4 justify-start items-center shadow-md bg-white h-16 px-4",children:[e(_,{to:"/settings",children:e("div",{className:"h-12 w-12 rounded-full overflow-hidden cursor-pointer",children:e("img",{className:"h-full w-auto",src:t==null?void 0:t.avatar,alt:""})})}),e("button",{onClick:s,children:l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[e("path",{d:"M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"}),e("path",{d:"M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"})]})}),e("div",{className:"h-11 w-11 rounded-full duration-500 hover:bg-yellow-400 hover:fill-gray-900 fill-gray-900 grid place-content-center",children:l("div",{className:"h-6 w-6 svg-inherit relative",children:[e("span",{className:"absolute -left-1 -top-1 text-xs bg-red-500 text-white h-4 w-4 rounded-full text-center",children:"2"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"512",height:"512",children:e("path",{d:"M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"})})]})})]})},b=()=>l("nav",{className:"font-iran-sans mt-5 userarea-menu grow overflow-y-auto",children:[l("ul",{className:"flex flex-col gap-2 a-full mb-2",children:[e(a,{uri:"/",title:"داشبورد",active:!0,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:e("path",{d:"M19,24H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.215,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.93,2.203,2.479,2.203,4.145v9.276c0,2.757-2.243,5-5,5ZM12,1.997c-.584,0-1.168,.172-1.678,.517L3.322,7.237c-.828,.558-1.322,1.487-1.322,2.486v9.276c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V9.724c0-.999-.494-1.929-1.321-2.486L13.678,2.514c-.51-.345-1.094-.517-1.678-.517Z"})})}),e(a,{uri:"/finance",title:"امور مالی",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:e("path",{d:"M16.5,0c-4.206,0-7.5,1.977-7.5,4.5v2.587c-.483-.057-.985-.087-1.5-.087C3.294,7,0,8.977,0,11.5v8c0,2.523,3.294,4.5,7.5,4.5,3.407,0,6.216-1.297,7.16-3.131,.598,.087,1.214,.131,1.84,.131,4.206,0,7.5-1.977,7.5-4.5V4.5c0-2.523-3.294-4.5-7.5-4.5Zm5.5,12.5c0,1.18-2.352,2.5-5.5,2.5-.512,0-1.014-.035-1.5-.103v-1.984c.49,.057,.992,.087,1.5,.087,2.194,0,4.14-.538,5.5-1.411v.911ZM2,14.589c1.36,.873,3.306,1.411,5.5,1.411s4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5s-5.5-1.32-5.5-2.5v-.911Zm20-6.089c0,1.18-2.352,2.5-5.5,2.5-.535,0-1.06-.038-1.566-.112-.193-.887-.8-1.684-1.706-2.323,.984,.28,2.092,.435,3.272,.435,2.194,0,4.14-.538,5.5-1.411v.911Zm-5.5-6.5c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5ZM7.5,9c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5Zm0,13c-3.148,0-5.5-1.32-5.5-2.5v-.911c1.36,.873,3.306,1.411,5.5,1.411s4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5Zm9-3c-.512,0-1.014-.035-1.5-.103v-1.984c.49,.057,.992,.087,1.5,.087,2.194,0,4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5Z"})})}),e(a,{uri:"/purchases",title:"خریدها",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:e("path",{d:"M20,10h-1v-2c0-2.206-1.794-4-4-4h-1.028c-.25-2.247-2.16-4-4.472-4S5.277,1.753,5.028,4h-1.028C1.794,4,0,5.794,0,8v6c0,2.757,2.243,5,5,5h1c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5v-5c0-2.206-1.794-4-4-4ZM9.5,2c1.207,0,2.217,.86,2.45,2H7.05c.232-1.14,1.242-2,2.45-2Zm-4.5,15c-1.654,0-3-1.346-3-3v-6c0-1.103,.897-2,2-2h1v2c0,.553,.448,1,1,1s1-.447,1-1v-2h5v2c0,.553,.448,1,1,1s1-.447,1-1v-2h1c1.103,0,2,.897,2,2v2h-7c-2.206,0-4,1.794-4,4v3h-1Zm17,2c0,1.654-1.346,3-3,3H11c-1.654,0-3-1.346-3-3v-5c0-1.103,.897-2,2-2h10c1.103,0,2,.897,2,2v5Zm-3-4v1c0,2.206-1.794,4-4,4s-4-1.794-4-4v-1c0-.553,.448-1,1-1s1,.447,1,1v1c0,1.103,.897,2,2,2s2-.897,2-2v-1c0-.553,.448-1,1-1s1,.447,1,1Z"})})}),e(a,{uri:"/purchased-service",title:"سفارشات لابراتوآر",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:e("path",{d:"m23.493,11.017c-.487-.654-1.234-1.03-2.05-1.03h-.443v-1.987c0-2.757-2.243-5-5-5h-5.056c-.154,0-.31-.037-.447-.105l-3.155-1.578c-.414-.207-.878-.316-1.342-.316h-2C1.794,1,0,2.794,0,5v13c0,2.757,2.243,5,5,5h12.558c2.226,0,4.15-1.432,4.802-3.607l1.532-6.116c.234-.782.089-1.605-.398-2.26ZM2,18V5c0-1.103.897-2,2-2h2c.154,0,.31.037.447.105l3.155,1.578c.414.207.878.316,1.342.316h5.056c1.654,0,3,1.346,3,3v1.987h-10.385c-1.7,0-3.218,1.079-3.789,2.72l-2.19,7.138c-.398-.509-.636-1.15-.636-1.845Zm19.964-5.253l-1.532,6.115c-.384,1.279-1.539,2.138-2.874,2.138H5c-.208,0-.411-.021-.607-.062l2.334-7.609c.279-.803,1.039-1.342,1.889-1.342h12.828c.242,0,.383.14.445.224.062.084.156.259.075.536Z"})})}),e(a,{uri:"/ads",title:"مدیریت آگهی ها",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:e("path",{d:"M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z"})})})]}),e("span",{className:"mr-1 text-gray-900 font-bold text-sm",children:"- عکاس"}),e("ul",{className:"flex flex-col gap-4 a-full mt-2 mb-4",children:e(a,{uri:"/photography",title:"مدیریت پروفایل عکاسی",children:l("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"512",height:"512",children:[e("path",{d:"M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"}),e("path",{d:"M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"})]})})}),e("span",{className:"mr-1 text-gray-900 font-bold text-sm",children:"- فروشگاه"}),l("ul",{className:"flex flex-col a-full mt-2 mb-4",children:[e(a,{uri:"/photography",title:"ایجاد کالا"}),e(a,{uri:"/photography",title:"مدیریت کالاها"}),e(a,{uri:"/photography",title:"پیگیری فروش کالاها"}),e(a,{uri:"/photography",title:"تنظیمات فروشگاه"})]}),e("span",{className:"mr-1 text-gray-900 font-bold text-sm",children:"- لابراتوآر"}),l("ul",{className:"flex flex-col a-full mt-2",children:[e(a,{uri:"/photography",title:"پیگیری سفارشات"}),e(a,{uri:"/photography",title:"تنظیمات لابراتوآر"})]})]}),N=()=>{const t=x();let i=t.state==="loading"&&!/\/userarea\/settings.*/.test(t.location.pathname);return l(g,{children:[e(A,{children:e(b,{})}),l("main",{className:"h-full grow overflow-x-hidden overflow-y-auto relative",children:[e(L,{}),e("div",{className:"px-6 py-6 absolute w-full top-16 md:relative md:top-0 font-iran-sans",children:i?e("div",{children:"در حال لود کردن"}):e(y,{})})]})]})},H=[{path:"/",Component:N,children:[{index:!0,lazy:()=>r(()=>import("./Dashboard-0140a059.js"),["assets/Dashboard-0140a059.js","assets/client-abbe1494.js","assets/Auth-85041acf.js","assets/ArrowIcon-202630a0.js","assets/Request-c3ee7f25.js"])},{path:"/settings",lazy:()=>r(()=>import("./UserSettings-88e3a6ae.js"),["assets/UserSettings-88e3a6ae.js","assets/client-abbe1494.js","assets/Auth-85041acf.js","assets/ArrowIcon-202630a0.js","assets/Request-c3ee7f25.js"]),children:[{index:!0,lazy:()=>r(()=>import("./ProfileSettings-7e9d734b.js"),["assets/ProfileSettings-7e9d734b.js","assets/client-abbe1494.js","assets/Auth-85041acf.js","assets/ArrowIcon-202630a0.js","assets/Request-c3ee7f25.js","assets/Switch-e1493eef.js","assets/styled-92600658.js","assets/SwitchBase-91e0191a.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js"])},{path:"social",lazy:()=>r(()=>import("./SocialSettings-dc14843a.js"),["assets/SocialSettings-dc14843a.js","assets/client-abbe1494.js","assets/Auth-85041acf.js","assets/ArrowIcon-202630a0.js","assets/Request-c3ee7f25.js"])},{path:"auth",lazy:()=>r(()=>import("./AuthSettings-7cd20711.js"),["assets/AuthSettings-7cd20711.js","assets/client-abbe1494.js"])}]},{path:"/ads",children:[{index:!0,lazy:()=>r(()=>import("./Ads-4ac0e37c.js"),["assets/Ads-4ac0e37c.js","assets/client-abbe1494.js","assets/BreadCrumb-3e3a8b10.js","assets/ArrowIcon-202630a0.js","assets/Auth-85041acf.js","assets/Request-c3ee7f25.js","assets/PlusIcon-56c11ef8.js","assets/api-41aed6c4.js","assets/styled-92600658.js"])},{path:"create",lazy:()=>r(()=>import("./CreateAd-e3ed6495.js"),["assets/CreateAd-e3ed6495.js","assets/client-abbe1494.js","assets/BreadCrumb-3e3a8b10.js","assets/ArrowIcon-202630a0.js","assets/Auth-85041acf.js","assets/Request-c3ee7f25.js","assets/api-41aed6c4.js","assets/FormSection-0da77780.js","assets/index.esm-14f15176.js","assets/Input-4acd9be4.js","assets/TextArea-3a09a8ba.js","assets/FormControl-a430915d.js","assets/styled-92600658.js","assets/SwitchBase-91e0191a.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js","assets/RadioGroup-98672c1f.js","assets/createSvgIcon-610a0a1c.js","assets/Checkbox-235d27fe.js"])}]},{path:"/shop",children:[{index:!0,lazy:()=>r(()=>import("./Shop-df543187.js"),["assets/Shop-df543187.js","assets/client-abbe1494.js","assets/Auth-85041acf.js","assets/ArrowIcon-202630a0.js","assets/Request-c3ee7f25.js"])},{path:"register",lazy:()=>r(()=>import("./RegisterShop-31fc9f1e.js"),["assets/RegisterShop-31fc9f1e.js","assets/client-abbe1494.js","assets/BreadCrumb-3e3a8b10.js","assets/ArrowIcon-202630a0.js","assets/Auth-85041acf.js","assets/Request-c3ee7f25.js","assets/index.esm-14f15176.js","assets/formContext-a684c324.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js"])}]},{path:"/lab",children:[{index:!0,lazy:()=>r(()=>import("./Lab-2eff1d4d.js"),["assets/Lab-2eff1d4d.js","assets/client-abbe1494.js","assets/Auth-85041acf.js","assets/ArrowIcon-202630a0.js","assets/Request-c3ee7f25.js"])},{path:"register",lazy:()=>r(()=>import("./RegisterLab-40ddf7d0.js").then(t=>t.R),["assets/RegisterLab-40ddf7d0.js","assets/client-abbe1494.js","assets/BreadCrumb-3e3a8b10.js","assets/ArrowIcon-202630a0.js","assets/Auth-85041acf.js","assets/Request-c3ee7f25.js","assets/index.esm-14f15176.js","assets/formContext-a684c324.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js"])}]}]},{path:"*",Component:Z}],M=t=>t?u(H,{basename:"/userarea"}):u([{path:"*",element:e("main",{className:"w-full h-full bg-shark bg-no-repeat bg-center bg-cover",children:e("section",{className:"h-full w-full overflow-x-hidden overflow-y-auto bg-black/80 flex justify-center items-center",children:e(E,{endpoint:"/auth/login",googleEndpoint:"/auth/google"})})})}],{basename:"/userarea"}),O={baseURL:window.location.origin+"/api",headers:{Accept:"application/json"}},P=()=>{const[t,i]=n.useState(null),s={user:t,login:o=>{i(o)},logout:()=>{i(null)},disallow:()=>{}},[c,h]=n.useState(!0);if(n.useLayoutEffect(()=>{if(!t){const[o,m]=new p(O).to("/user").send();return o.then(d=>{d.hasErrors()||i(d.getContent()),h(!1)}),()=>m()}},[t]),!c)return e(V.Provider,{value:s,children:e(R,{router:M(t!=null)})})},v=document.getElementById("react-userarea");v&&w(v).render(e(P,{}));