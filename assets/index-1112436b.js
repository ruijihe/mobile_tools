import{d as p,a9 as _,z as s,L as u,J as d,B as y,j as f,A as g,C as b,af as h,ab as x,ag as B,y as v,E as S,I as C,K as k,_ as w}from"./index-98e27a79.js";import{a as N}from"./data-e476af8b.js";const z={class:"buttonContainer"},I={key:0,class:"buttonText van-ellipsis"},T=p({__name:"index",props:{name:{type:String},icon:{type:String},borderStyle:{type:String},buttonHeight:{type:String},className:{default:"whiteButton",type:String},showDialog:{default:!1,type:Boolean}},setup(t){const e=t,a=_("px2rem"),i=()=>{},c=n=>{n&&N({message:"拖动添加这个元素",position:"bottom"})};return(n,o)=>{const l=C,r=k;return s(),u(r,{class:x(["editorToolLeftBtn",t.className]),style:B({"border-bottom":t.borderStyle,height:v(a)(t.buttonHeight)}),type:"success",to:"",onClick:o[0]||(o[0]=m=>c(e.showDialog)),onTouchstart:o[1]||(o[1]=S(m=>i(),["stop"]))},{default:d(()=>[y("div",z,[f(l,{size:"15",class:"iconfont buttonIcon","class-prefix":"icon",name:e.icon},null,8,["name"]),e.name?(s(),g("span",I,b(e.name),1)):h("",!0)])]),_:1},8,["class","style"])}}});const j=w(T,[["__scopeId","data-v-6933a6e7"]]);export{j as _};
