import{T as x,m as z,k as E,d as g,P as C,am as F,t as V,r as B,c as k,j as u,I as P,b as G,a as S,v as I,e as w,S as y,an as O,Y as $,q,w as N,_ as U,z as D,A as K,B as b,J as R,K as T,M as j,N as A}from"./index-b1dcecec.js";const p={name:x,shape:z("round"),disabled:Boolean,iconSize:E,modelValue:x,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var Y=g({props:C({},p,{bem:F(Function),role:String,parent:Object,checked:Boolean,bindGroup:V}),emits:["click","toggle"],setup(e,{emit:t,slots:m}){const o=B(),s=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},c=k(()=>{if(e.parent&&e.bindGroup){const n=s("disabled")||e.disabled;if(e.role==="checkbox"){const l=s("modelValue").length,i=s("max"),_=i&&l>=+i;return n||_&&!e.checked}return n}return e.disabled}),h=k(()=>s("direction")),a=k(()=>{const n=e.checkedColor||s("checkedColor");if(n&&e.checked&&!c.value)return{borderColor:n,backgroundColor:n}}),r=n=>{const{target:l}=n,i=o.value,_=i===l||(i==null?void 0:i.contains(l));!c.value&&(_||!e.labelDisabled)&&t("toggle"),t("click",n)},d=()=>{const{bem:n,shape:l,checked:i}=e,_=e.iconSize||s("iconSize");return u("div",{ref:o,class:n("icon",[l,{disabled:c.value,checked:i}]),style:{fontSize:G(_)}},[m.icon?m.icon({checked:i,disabled:c.value}):u(P,{name:"success",style:a.value},null)])},f=()=>{if(m.default)return u("span",{class:e.bem("label",[e.labelPosition,{disabled:c.value}])},[m.default()])};return()=>{const n=e.labelPosition==="left"?[f(),d()]:[d(),f()];return u("div",{role:e.role,class:e.bem([{disabled:c.value,"label-disabled":e.labelDisabled},h.value]),tabindex:c.value?void 0:0,"aria-checked":e.checked,onClick:r},[n])}}});const[H,ue]=S("checkbox-group"),J=Symbol(H),[L,M]=S("checkbox"),X=C({},p,{bindGroup:V});var Q=g({name:L,props:X,emits:["change","update:modelValue"],setup(e,{emit:t,slots:m}){const{parent:o}=I(J),s=a=>{const{name:r}=e,{max:d,modelValue:f}=o.props,n=f.slice();if(a)!(d&&n.length>=+d)&&!n.includes(r)&&(n.push(r),e.bindGroup&&o.updateValue(n));else{const l=n.indexOf(r);l!==-1&&(n.splice(l,1),e.bindGroup&&o.updateValue(n))}},c=k(()=>o&&e.bindGroup?o.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),h=(a=!c.value)=>{o&&e.bindGroup?s(a):t("update:modelValue",a)};return w(()=>e.modelValue,a=>t("change",a)),y({toggle:h,props:e,checked:c}),O(()=>e.modelValue),()=>u(Y,q({bem:M,role:"checkbox",parent:o,checked:c.value,onToggle:h},e),$(m,["default","icon"]))}});const W=N(Q);const Z={setup(){return{checked:B(["settingCheckBox"])}}};const v=e=>(j("data-v-dbfacd89"),e=e(),A(),e),ee={class:"modelSetting"},ne={class:"settingTitle"},oe=v(()=>b("span",{class:"font-l mh-1x"},"房间设置",-1)),ce={class:"settingBody font-n"},te={class:"settingContainer flex-between"},ae=v(()=>b("span",null,"包括总房间面积",-1)),le={class:"settingContainer flex-between"},se=v(()=>b("span",null,"显示天花板",-1));function de(e,t,m,o,s,c){const h=P,a=T,r=W;return D(),K("div",ee,[b("div",ne,[u(a,{size:"mini",to:"model"},{default:R(()=>[u(h,{size:"18",class:"iconfont buttonIcon","class-prefix":"icon",name:"fanhui"})]),_:1}),oe]),b("div",ce,[b("div",te,[ae,u(r,{modelValue:o.checked,"onUpdate:modelValue":t[0]||(t[0]=d=>o.checked=d),"checked-color":" #f9ac19","icon-size":"22",shape:"square",name:"settingCheckBox"},null,8,["modelValue"])]),b("div",le,[se,u(r,{modelValue:o.checked,"onUpdate:modelValue":t[1]||(t[1]=d=>o.checked=d),"checked-color":" #f9ac19","icon-size":"22",shape:"square",name:"settingCheckBox"},null,8,["modelValue"])])])])}const re=U(Z,[["render",de],["__scopeId","data-v-dbfacd89"]]);export{re as default};
