System.register(["./index-legacy-7337c770.js","./index-legacy-7a69ea0a.js"],(function(e,a){"use strict";var t,l,n,r,o,s,u,m,c,i,d,p,N,v,h,g;return{setters:[e=>{t=e.r,l=e.c,n=e.aa,r=e._,o=e.l,s=e.x,u=e.z,m=e.A,c=e.B,i=e.ac,d=e.j,p=e.J,N=e.ad,v=e.I,h=e.K},e=>{g=e.u}],execute:function(){const a={class:"reName"},y={class:"reNameContainer flex-between"},R={class:"inputCatainer flex-between"},w={class:"inputBtn flex-between"};e("_",r({setup(){const e=g(),a=t(""),r=l((()=>e.ReName.showReName)),o=l((()=>e.ReName)),s=l((()=>e.plansetting)),u=l((()=>e.planData)),m=l((()=>e.globalObj.roomName)),c=e.updatePlanData,i=e.changeReName;return n((()=>{"plan"===o.value.reNameType?a.value=s.value.orderName:"room"===o.value.reNameType&&(a.value=m.value)})),{closeReName:()=>{i()},showReName:r,value:a,roomName:m,reNameValue:()=>{"plan"===o.value.reNameType?(e.$patch({plansetting:{orderName:a.value}}),c(s,u),i(),window.editor.list.orderOption.dispatch({orderId:s.value.orderId,optionType:"rename",orderName:a.value})):"room"===o.value.reNameType&&(e.$patch({globalObj:{roomName:a.value}}),window.editor.list.setRoomName.dispatch(a.value),i())},emptyValue:()=>{a.value=""},changeReName:i,ReName:o,updatePlanData:c}}},[["render",function(e,t,l,n,r,g){const f=v,x=h;return o((u(),m("div",a,[c("div",y,[c("div",R,[o(c("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),maxlength:"20",class:"reNameInput",placeholder:"重命名"},null,512),[[i,n.value]]),c("div",w,[d(f,{size:"15",class:"iconfont emptyBtn","class-prefix":"icon",name:"qingkongshuru",onTouchstart:t[1]||(t[1]=e=>n.emptyValue())})])]),d(x,{class:"reNameBtn",onTouchstart:t[2]||(t[2]=e=>n.reNameValue())},{default:p((()=>[N(" OK ")])),_:1})]),c("div",{class:"reNameOverlay",onTouchstart:t[3]||(t[3]=e=>n.closeReName())},null,32)],512)),[[s,n.showReName]])}],["__scopeId","data-v-6a199aa3"]]))}}}));
