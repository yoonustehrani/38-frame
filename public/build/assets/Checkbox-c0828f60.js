import{a as P,g as B,s as S,r as g,i as h,b as a,c as M,e as _,_ as H,f as R,h as O}from"./styled-1092f92f.js";import{j as t,r as p}from"./client-58cc365f.js";import{S as U}from"./SwitchBase-d5bfe78b.js";import{c as u}from"./createSvgIcon-b56db109.js";const V=u(t("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=u(t("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=u(t("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(o){return B("MuiCheckbox",o)}const N=P("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),m=N,w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=o=>{const{classes:e,indeterminate:c,color:s,size:r}=o,n={root:["root",c&&"indeterminate",`color${h(s)}`,`size${h(r)}`]},l=O(n,L,e);return a({},e,l)},T=S(U,{shouldForwardProp:o=>g(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,c.color!=="default"&&e[`color${h(c.color)}`]]}})(({theme:o,ownerState:e})=>a({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:M(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${m.checked}, &.${m.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),W=t(j,{}),q=t(V,{}),A=t(E,{}),D=p.forwardRef(function(e,c){var s,r;const n=_({props:e,name:"MuiCheckbox"}),{checkedIcon:l=W,color:b="primary",icon:I=q,indeterminate:i=!1,indeterminateIcon:C=A,inputProps:z,size:d="medium",className:$}=n,y=H(n,w),k=i?C:I,x=i?C:l,f=a({},n,{color:b,indeterminate:i,size:d}),v=F(f);return t(T,a({type:"checkbox",inputProps:a({"data-indeterminate":i},z),icon:p.cloneElement(k,{fontSize:(s=k.props.fontSize)!=null?s:d}),checkedIcon:p.cloneElement(x,{fontSize:(r=x.props.fontSize)!=null?r:d}),ownerState:f,ref:c,className:R(v.root,$)},y,{classes:v}))}),X=D;export{X as C};