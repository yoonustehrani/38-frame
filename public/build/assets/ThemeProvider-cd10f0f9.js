import{_ as c,j as x,k as E,b as _,m as h}from"./styled-6f56fe61.js";import{r as m,j as i}from"./client-58cc365f.js";const v=m.createContext(null),l=v;function T(){return m.useContext(l)}const p=typeof Symbol=="function"&&Symbol.for,y=p?Symbol.for("mui.nested"):"__THEME_NESTED__";function P(e,t){return typeof t=="function"?t(e):c({},e,t)}function b(e){const{children:t,theme:n}=e,o=T(),s=m.useMemo(()=>{const r=o===null?n:P(o,n);return r!=null&&(r[y]=o!==null),r},[n,o]);return i(l.Provider,{value:s,children:t})}const f={};function d(e,t,n,o=!1){return m.useMemo(()=>{const s=e&&t[e]||t;if(typeof n=="function"){const r=n(s),u=e?c({},t,{[e]:r}):r;return o?()=>u:u}return e?c({},t,{[e]:n}):c({},t,n)},[e,t,n,o])}function g(e){const{children:t,theme:n,themeId:o}=e,s=x(f),r=T()||f,u=d(o,s,n),a=d(o,r,n,!0);return i(b,{theme:a,children:i(E.Provider,{value:u,children:t})})}const M=["theme"];function $(e){let{theme:t}=e,n=_(e,M);const o=t[h];return i(g,c({},n,{themeId:o?h:void 0,theme:o||t}))}export{$ as T};
