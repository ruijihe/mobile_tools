import{a as M,d as k,r as b,g as q,c as x,b as D,i as G,e as Q,f as Z,o as tt,h as A,n as F,j as r,k as S,t as N,m as z,l as J,p as et,q as O,I as R,w as C,u as nt,s as H,v as at,x as ot,y as Y,z as B,A as L,B as y,C as E,F as K,D as U,E as $,_ as V,G as st,H as rt,J as w,K as ct,L as lt,M as it,N as dt}from"./index-9591f051.js";import{_ as ut}from"./index.vue_vue_type_style_index_0_scoped_e52ad7d8_lang-9ea2f4fa.js";import{u as j}from"./index-91153539.js";const[ft,P]=M("image"),pt={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:S,height:S,radius:S,lazyLoad:Boolean,iconSize:S,showError:N,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:N,loadingIcon:z("photo")};var ht=k({name:ft,props:pt,emits:["load","error"],setup(e,{emit:n,slots:h}){const c=b(!1),p=b(!0),i=b(),{$Lazyload:a}=q().proxy,o=x(()=>{const t={width:D(e.width),height:D(e.height)};return G(e.radius)&&(t.overflow="hidden",t.borderRadius=D(e.radius)),t});Q(()=>e.src,()=>{c.value=!1,p.value=!0});const s=t=>{p.value&&(p.value=!1,n("load",t))},d=()=>{const t=new Event("load");Object.defineProperty(t,"target",{value:i.value,enumerable:!0}),s(t)},u=t=>{c.value=!0,p.value=!1,n("error",t)},g=(t,f,v)=>v?v():r(R,{name:t,size:e.iconSize,class:f,classPrefix:e.iconPrefix},null),_=()=>{if(p.value&&e.showLoading)return r("div",{class:P("loading")},[g(e.loadingIcon,P("loading-icon"),h.loading)]);if(c.value&&e.showError)return r("div",{class:P("error")},[g(e.errorIcon,P("error-icon"),h.error)])},m=()=>{if(c.value||!e.src)return;const t={alt:e.alt,class:P("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?J(r("img",O({ref:i},t),null),[[et("lazy"),e.src]]):r("img",O({ref:i,src:e.src,onLoad:s,onError:u},t),null)},I=({el:t})=>{const f=()=>{t===i.value&&p.value&&d()};i.value?f():F(f)},l=({el:t})=>{t===i.value&&!c.value&&u()};return a&&Z&&(a.$on("loaded",I),a.$on("error",l),tt(()=>{a.$off("loaded",I),a.$off("error",l)})),A(()=>{F(()=>{var t;(t=i.value)!=null&&t.complete&&!e.lazyLoad&&d()})}),()=>{var t;return r("div",{class:P({round:e.round,block:e.block}),style:o.value},[m(),_(),(t=h.default)==null?void 0:t.call(h)])}}});const gt=C(ht),[W,mt]=M("row"),X=Symbol(W),_t={tag:z("div"),wrap:N,align:String,gutter:H(0),justify:String};var vt=k({name:W,props:_t,setup(e,{slots:n}){const{children:h,linkChildren:c}=nt(X),p=x(()=>{const a=[[]];let o=0;return h.forEach((s,d)=>{o+=Number(s.span),o>24?(a.push([d]),o-=24):a[a.length-1].push(d)}),a}),i=x(()=>{const a=Number(e.gutter),o=[];return a&&p.value.forEach(s=>{const d=a*(s.length-1)/s.length;s.forEach((u,g)=>{if(g===0)o.push({right:d});else{const _=a-o[u-1].right,m=d-_;o.push({left:_,right:m})}})}),o});return c({spaces:i}),()=>{const{tag:a,wrap:o,align:s,justify:d}=e;return r(a,{class:mt({[`align-${s}`]:s,[`justify-${d}`]:d,nowrap:!o})},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n)]}})}}});const[yt,xt]=M("col"),wt={tag:z("div"),span:H(0),offset:S};var Pt=k({name:yt,props:wt,setup(e,{slots:n}){const{parent:h,index:c}=at(X),p=x(()=>{if(!h)return;const{spaces:i}=h;if(i&&i.value&&i.value[c.value]){const{left:a,right:o}=i.value[c.value];return{paddingLeft:a?`${a}px`:null,paddingRight:o?`${o}px`:null}}});return()=>{const{tag:i,span:a,offset:o}=e;return r(i,{style:p.value,class:xt({[a]:a,[`offset-${o}`]:o})},{default:()=>{var s;return[(s=n.default)==null?void 0:s.call(n)]}})}}});const $t=C(Pt),It=C(vt);const St={class:"planSetting"},bt={class:"planContainer"},Bt={class:"title font-l mb-1x"},Tt={class:"titleContainer"},zt=["onTouchstart"],Lt=k({__name:"index",setup(e){const n=j(),h=x(()=>n.showPlansetting),c=x(()=>n.plansetting),p=n.changeReName,i=n.deletePlanDataItem,a=d=>{switch(d.name){case"删除":window.editor.list.orderOption.dispatch({orderId:c.value.orderId,optionType:"del"}),i(c.value.planIndex),n.$patch({showPlansetting:!1});break;case"重命名":n.$patch({showPlansetting:!1}),p("plan");break}},o=()=>{n.$patch({showPlansetting:!1})},s=[{name:"删除"},{name:"重命名"},{name:"创建重复的"},{name:"报告问题"},{name:"分享项目文件"}];return(d,u)=>{const g=R;return J((B(),L("div",St,[y("div",bt,[y("div",Bt,E(Y(c).orderName),1),y("div",Tt,[(B(),L(K,null,U(s,_=>y("div",{key:_.name,class:"font-n pb-1x",onTouchstart:$(m=>a(_),["stop"])},[r(g,{size:"20",class:"iconfont buttonIcon mr-1x","class-prefix":"icon",name:"PDFdocument"}),y("span",null,E(_.name),1)],40,zt)),64))])]),y("div",{class:"exportOverlay",onTouchstart:u[0]||(u[0]=$(_=>o(),["stop"]))},null,32)],512)),[[ot,Y(h)]])}}}),Et=V(Lt,[["__scopeId","data-v-e52ad7d8"]]),kt={setup(){A(()=>{const l=j(),t=localStorage.getItem("RJH_WEB_userId");t&&st.get(`https://rjhcdn.bsphpro.com/ocean/upload_data/uploads/orderList_${t}.json`).then(f=>{if(f.data.data){for(let v=0;v<f.data.data.length;v++)f.data.data[v].imgBase64=atob(f.data.data[v].imgBase64);l.$patch({planData:f.data.data})}}).catch(f=>{console.error(f)})});const e=rt(),n=j(),h=x(()=>n.response),c=x(()=>n.planType),p=x(()=>n.showPlansetting),i=x(()=>n.plansetting),a=b({imgBase64:"",orderId:"",orderTime:""}),o=x(()=>n.planData),s=b(""),d=()=>{const l=new Date,t=l.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),f=l.getFullYear(),v=(l.getMonth()+1).toString().padStart(2,"0"),T=l.getDate().toString().padStart(2,"0");s.value=`${f}-${v}-${T} ${t}`,o.value.push({imgBase64:"",orderId:"",orderTime:s.value}),n.$patch({planType:"create"})},u=l=>{n.$patch({response:JSON.stringify(l),planType:"editor"}),e.push("/editor")};let g={x:0,y:0};return{planData:o,addPlan:d,demoPlan:a,editorPlan:u,planSetting:(l,t)=>{n.$patch({showPlansetting:!0,plansetting:{...l,planIndex:t}})},response:h,planType:c,showPlansetting:p,plansetting:i,startPoint:l=>{const t=l.changedTouches[0];g={x:Math.round(t.screenX),y:Math.round(t.screenY)}},endPoint:(l,t)=>{const f=t.changedTouches[0],v={x:Math.round(f.screenX),y:Math.round(f.screenY)},T=8;Math.abs(g.x-v.x)<=T&&Math.abs(g.y-v.y)<=T&&u(l)}}}};const Dt=e=>(it("data-v-a85141f2"),e=e(),dt(),e),Nt={class:"container"},jt={class:"topBar flex-between"},Mt=Dt(()=>y("div",null,"平面图创建",-1)),Rt={class:"homeBody"};function Ct(e,n,h,c,p,i){const a=Et,o=ut,s=R,d=gt,u=$t,g=ct,_=It;return B(),L("div",Nt,[r(a),r(o),y("div",jt,[r(s,{size:"16px",class:"iconfont","class-prefix":"icon",name:"chushixuanxiang"}),Mt,r(s,{size:"16px",class:"iconfont","class-prefix":"icon",name:"xiaosuo"})]),y("div",Rt,[(B(!0),L(K,null,U(c.planData,(m,I)=>(B(),lt(_,{key:m.id,gutter:"10",class:"item-container",justify:"center",onTouchstart:n[0]||(n[0]=$(l=>c.startPoint(l),["stop"])),onTouchend:$(l=>c.endPoint(m,l),["stop"])},{default:w(()=>[r(u,{class:"item-col",span:"7"},{default:w(()=>[r(d,{fit:"scale-down",class:"orderImg",src:m.imgBase64},null,8,["src"])]),_:2},1024),r(u,{class:"item-col",span:"11"},{default:w(()=>[y("span",null,E(m.orderName),1),y("span",null,E(m.orderTime),1)]),_:2},1024),r(u,{class:"item-col",span:"3"},{default:w(()=>[r(g,{class:"homeButton",type:"default",size:"mini"},{default:w(()=>[r(s,{class:"iconfont","class-prefix":"icon",name:"yunchucun"})]),_:1})]),_:1}),r(u,{class:"item-col",span:"3"},{default:w(()=>[r(g,{class:"homeButton",type:"default",size:"mini",onTouchstart:$(l=>c.planSetting(m,I),["stop"])},{default:w(()=>[r(s,{class:"iconfont","class-prefix":"icon",name:"gengduocaozuo"})]),_:2},1032,["onTouchstart"])]),_:2},1024)]),_:2},1032,["onTouchend"]))),128)),r(g,{class:"createPlanButton",type:"success",to:"editor",onTouchstart:n[1]||(n[1]=$(m=>c.addPlan(),["stop"]))},{default:w(()=>[r(s,{size:"30",class:"iconfont","class-prefix":"icon",name:"jia"})]),_:1})])])}const At=V(kt,[["render",Ct],["__scopeId","data-v-a85141f2"]]);export{At as default};
