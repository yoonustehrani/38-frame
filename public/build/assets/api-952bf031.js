import{R as s}from"./Request-86ea05f5.js";const n={baseURL:window.location.origin+"/api",headers:{Accept:"application/json"}};function t(){return new s(n)}const a=e=>t().method("post").to("/admin/labs").send(e),r=()=>t().to("/site-categories?type=service").send(),i=()=>t().to("/site-categories?type=lab_category").send(),c=e=>t().to(`/site-categories?type=service&parent_id=${e}`).send(),d=(e="")=>t().to(`/admin/labs?${e}`).send(),p=e=>t().to(`/admin/labs/${e}`).send();export{p as a,i as b,r as c,c as d,d as f,a as s};