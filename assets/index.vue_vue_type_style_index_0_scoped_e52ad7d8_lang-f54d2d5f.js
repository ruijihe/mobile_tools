import{r as N,c as n,aa as f,_ as h,l as u,x,z as w,A as g,B as s,ac as y,j as d,J as R,ad as T,I as b,K as B}from"./index-98e27a79.js";import{u as D}from"./index-a9b4382e.js";const V={setup(){const t=D(),e=N(""),i=n(()=>t.ReName.showReName),a=n(()=>t.ReName),l=n(()=>t.plansetting),m=n(()=>t.planData),r=n(()=>t.globalObj.roomName),c=t.updatePlanData,o=t.changeReName,p=()=>{o()},_=()=>{a.value.reNameType==="plan"?(t.$patch({plansetting:{orderName:e.value}}),c(l,m),o(),window.editor.list.orderOption.dispatch({orderId:l.value.orderId,optionType:"rename",orderName:e.value})):a.value.reNameType==="room"&&(t.$patch({globalObj:{roomName:e.value}}),window.editor.list.setRoomName.dispatch(e.value),o())},v=()=>{e.value=""};return f(()=>{a.value.reNameType==="plan"?e.value=l.value.orderName:a.value.reNameType==="room"&&(e.value=r.value)}),{closeReName:p,showReName:i,value:e,roomName:r,reNameValue:_,emptyValue:v,changeReName:o,ReName:a,updatePlanData:c}}};const I={class:"reName"},O={class:"reNameContainer flex-between"},C={class:"inputCatainer flex-between"},j={class:"inputBtn flex-between"};function k(t,e,i,a,l,m){const r=b,c=B;return u((w(),g("div",I,[s("div",O,[s("div",C,[u(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),maxlength:"20",class:"reNameInput",placeholder:"重命名"},null,512),[[y,a.value]]),s("div",j,[d(r,{size:"15",class:"iconfont emptyBtn","class-prefix":"icon",name:"qingkongshuru",onTouchstart:e[1]||(e[1]=o=>a.emptyValue())})])]),d(c,{class:"reNameBtn",onTouchstart:e[2]||(e[2]=o=>a.reNameValue())},{default:R(()=>[T(" OK ")]),_:1})]),s("div",{class:"reNameOverlay",onTouchstart:e[3]||(e[3]=o=>a.closeReName())},null,32)],512)),[[x,a.showReName]])}const E=h(V,[["render",k],["__scopeId","data-v-6a199aa3"]]);export{E as _};
