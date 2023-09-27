System.register(["./index-legacy-876628b6.js","./index.vue_vue_type_style_index_0_scoped_e52ad7d8_lang-legacy-3720073c.js","./index-legacy-7e5ec3be.js"],(function(e,a){"use strict";var t,n,o,s,l,r,i,c,d,u,p,g,h,f,v,m,y,x,_,w,P,$,b,S,T,I,z,j,B,L,D,E,k,M,N,C,F,O,R,J,Y,H,X;return{setters:[e=>{t=e.a,n=e.d,o=e.r,s=e.g,l=e.c,r=e.b,i=e.i,c=e.e,d=e.f,u=e.o,p=e.h,g=e.n,h=e.j,f=e.k,v=e.t,m=e.m,y=e.l,x=e.p,_=e.q,w=e.I,P=e.w,$=e.u,b=e.s,S=e.v,T=e.x,I=e.y,z=e.z,j=e.A,B=e.B,L=e.C,D=e.F,E=e.D,k=e.E,M=e._,N=e.G,C=e.H,F=e.J,O=e.K,R=e.L,J=e.M,Y=e.N},e=>{H=e._},e=>{X=e.u}],execute:function(){const[a,q]=t("image"),A={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:f,height:f,radius:f,lazyLoad:Boolean,iconSize:f,showError:v,errorIcon:m("photo-fail"),iconPrefix:String,showLoading:v,loadingIcon:m("photo")};var G=n({name:a,props:A,emits:["load","error"],setup(e,{emit:a,slots:t}){const n=o(!1),f=o(!0),v=o(),{$Lazyload:m}=s().proxy,P=l((()=>{const a={width:r(e.width),height:r(e.height)};return i(e.radius)&&(a.overflow="hidden",a.borderRadius=r(e.radius)),a}));c((()=>e.src),(()=>{n.value=!1,f.value=!0}));const $=e=>{f.value&&(f.value=!1,a("load",e))},b=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:v.value,enumerable:!0}),$(e)},S=e=>{n.value=!0,f.value=!1,a("error",e)},T=(a,t,n)=>n?n():h(w,{name:a,size:e.iconSize,class:t,classPrefix:e.iconPrefix},null),I=()=>{if(n.value||!e.src)return;const a={alt:e.alt,class:q("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?y(h("img",_({ref:v},a),null),[[x("lazy"),e.src]]):h("img",_({ref:v,src:e.src,onLoad:$,onError:S},a),null)},z=({el:e})=>{const a=()=>{e===v.value&&f.value&&b()};v.value?a():g(a)},j=({el:e})=>{e!==v.value||n.value||S()};return m&&d&&(m.$on("loaded",z),m.$on("error",j),u((()=>{m.$off("loaded",z),m.$off("error",j)}))),p((()=>{g((()=>{var a;(null==(a=v.value)?void 0:a.complete)&&!e.lazyLoad&&b()}))})),()=>{var a;return h("div",{class:q({round:e.round,block:e.block}),style:P.value},[I(),f.value&&e.showLoading?h("div",{class:q("loading")},[T(e.loadingIcon,q("loading-icon"),t.loading)]):n.value&&e.showError?h("div",{class:q("error")},[T(e.errorIcon,q("error-icon"),t.error)]):void 0,null==(a=t.default)?void 0:a.call(t)])}}});const K=P(G),[W,Q]=t("row"),U=Symbol(W),V={tag:m("div"),wrap:v,align:String,gutter:b(0),justify:String};var Z=n({name:W,props:V,setup(e,{slots:a}){const{children:t,linkChildren:n}=$(U),o=l((()=>{const e=[[]];let a=0;return t.forEach(((t,n)=>{a+=Number(t.span),a>24?(e.push([n]),a-=24):e[e.length-1].push(n)})),e})),s=l((()=>{const a=Number(e.gutter),t=[];return a?(o.value.forEach((e=>{const n=a*(e.length-1)/e.length;e.forEach(((e,o)=>{if(0===o)t.push({right:n});else{const o=a-t[e-1].right,s=n-o;t.push({left:o,right:s})}}))})),t):t}));return n({spaces:s}),()=>{const{tag:t,wrap:n,align:o,justify:s}=e;return h(t,{class:Q({[`align-${o}`]:o,[`justify-${s}`]:s,nowrap:!n})},{default:()=>{var e;return[null==(e=a.default)?void 0:e.call(a)]}})}}});const[ee,ae]=t("col"),te={tag:m("div"),span:b(0),offset:f};var ne=n({name:ee,props:te,setup(e,{slots:a}){const{parent:t,index:n}=S(U),o=l((()=>{if(!t)return;const{spaces:e}=t;if(e&&e.value&&e.value[n.value]){const{left:a,right:t}=e.value[n.value];return{paddingLeft:a?`${a}px`:null,paddingRight:t?`${t}px`:null}}}));return()=>{const{tag:t,span:n,offset:s}=e;return h(t,{style:o.value,class:ae({[n]:n,[`offset-${s}`]:s})},{default:()=>{var e;return[null==(e=a.default)?void 0:e.call(a)]}})}}});const oe=P(ne),se=P(Z),le={class:"planSetting"},re={class:"planContainer"},ie={class:"title font-l mb-1x"},ce={class:"titleContainer"},de=["onTouchstart"],ue=M(n({__name:"index",setup(e){const a=X(),t=l((()=>a.showPlansetting)),n=l((()=>a.plansetting)),o=a.changeReName,s=a.deletePlanDataItem,r=[{name:"删除"},{name:"重命名"},{name:"创建重复的"},{name:"报告问题"},{name:"分享项目文件"}];return(e,l)=>{const i=w;return y((z(),j("div",le,[B("div",re,[B("div",ie,L(I(n).orderName),1),B("div",ce,[(z(),j(D,null,E(r,(e=>B("div",{key:e.name,class:"font-n pb-1x",onTouchstart:k((t=>(e=>{switch(e.name){case"删除":window.editor.list.orderOption.dispatch({orderId:n.value.orderId,optionType:"del"}),s(n.value.planIndex),a.$patch({showPlansetting:!1});break;case"重命名":a.$patch({showPlansetting:!1}),o("plan")}})(e)),["stop"])},[h(i,{size:"20",class:"iconfont buttonIcon mr-1x","class-prefix":"icon",name:"PDFdocument"}),B("span",null,L(e.name),1)],40,de))),64))])]),B("div",{class:"exportOverlay",onTouchstart:l[0]||(l[0]=k((e=>{a.$patch({showPlansetting:!1})}),["stop"]))},null,32)],512)),[[T,I(t)]])}}}),[["__scopeId","data-v-e52ad7d8"]]),pe={setup(){p((()=>{const e=X(),a=localStorage.getItem("RJH_WEB_userId");a&&N.get(`https://rjhcdn.bsphpro.com/ocean/upload_data/uploads/orderList_${a}.json`).then((a=>{if(a.data.data){for(let e=0;e<a.data.data.length;e++)a.data.data[e].imgBase64=atob(a.data.data[e].imgBase64);e.$patch({planData:a.data.data})}})).catch((e=>{console.error(e)}))}));const e=C(),a=X(),t=l((()=>a.response)),n=l((()=>a.planType)),s=l((()=>a.showPlansetting)),r=l((()=>a.plansetting)),i=o({imgBase64:"",orderId:"",orderTime:""}),c=l((()=>a.planData)),d=o(""),u=t=>{a.$patch({response:JSON.stringify(t),planType:"editor"}),e.push("/editor")};let g={x:0,y:0};return{planData:c,addPlan:()=>{const e=new Date,t=e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),n=e.getFullYear(),o=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");d.value=`${n}-${o}-${s} ${t}`,c.value.push({imgBase64:"",orderId:"",orderTime:d.value}),a.$patch({planType:"create"})},demoPlan:i,editorPlan:u,planSetting:(e,t)=>{a.$patch({showPlansetting:!0,plansetting:{...e,planIndex:t}})},response:t,planType:n,showPlansetting:s,plansetting:r,startPoint:e=>{const a=e.changedTouches[0];g={x:Math.round(a.screenX),y:Math.round(a.screenY)}},endPoint:(e,a)=>{const t=a.changedTouches[0],n=Math.round(t.screenX),o=Math.round(t.screenY);Math.abs(g.x-n)<=8&&Math.abs(g.y-o)<=8&&u(e)}}}},ge={class:"container"},he={class:"topBar flex-between"},fe=(e=>(J("data-v-a85141f2"),e=e(),Y(),e))((()=>B("div",null,"平面图创建",-1))),ve={class:"homeBody"};e("default",M(pe,[["render",function(e,a,t,n,o,s){const l=ue,r=H,i=w,c=K,d=oe,u=O,p=se;return z(),j("div",ge,[h(l),h(r),B("div",he,[h(i,{size:"16px",class:"iconfont","class-prefix":"icon",name:"chushixuanxiang"}),fe,h(i,{size:"16px",class:"iconfont","class-prefix":"icon",name:"xiaosuo"})]),B("div",ve,[(z(!0),j(D,null,E(n.planData,((e,t)=>(z(),R(p,{key:e.id,gutter:"10",class:"item-container",justify:"center",onTouchstart:a[0]||(a[0]=k((e=>n.startPoint(e)),["stop"])),onTouchend:k((a=>n.endPoint(e,a)),["stop"])},{default:F((()=>[h(d,{class:"item-col",span:"7"},{default:F((()=>[h(c,{fit:"scale-down",class:"orderImg",src:e.imgBase64},null,8,["src"])])),_:2},1024),h(d,{class:"item-col",span:"11"},{default:F((()=>[B("span",null,L(e.orderName),1),B("span",null,L(e.orderTime),1)])),_:2},1024),h(d,{class:"item-col",span:"3"},{default:F((()=>[h(u,{class:"homeButton",type:"default",size:"mini"},{default:F((()=>[h(i,{class:"iconfont","class-prefix":"icon",name:"yunchucun"})])),_:1})])),_:1}),h(d,{class:"item-col",span:"3"},{default:F((()=>[h(u,{class:"homeButton",type:"default",size:"mini",onTouchstart:k((a=>n.planSetting(e,t)),["stop"])},{default:F((()=>[h(i,{class:"iconfont","class-prefix":"icon",name:"gengduocaozuo"})])),_:2},1032,["onTouchstart"])])),_:2},1024)])),_:2},1032,["onTouchend"])))),128)),h(u,{class:"createPlanButton",type:"success",to:"editor",onTouchstart:a[1]||(a[1]=k((e=>n.addPlan()),["stop"]))},{default:F((()=>[h(i,{size:"30",class:"iconfont","class-prefix":"icon",name:"jia"})])),_:1})])])}],["__scopeId","data-v-a85141f2"]]))}}}));
