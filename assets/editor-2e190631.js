var Fe=Object.defineProperty;var Le=(a,o,e)=>o in a?Fe(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e;var F=(a,o,e)=>(Le(a,typeof o!="symbol"?o+"":o,e),e);import{g as De,M as Te}from"./main-8b73d0f7.js";import"./index-14f85167.js";const T={MESSAGE:"message",SUCCESS:"success",ERROR:"error",WARNING:"warning"},le={MESSAGE:"icon-zhengque iconfont",SUCCESS:"icon-zhengque iconfont",ERROR:"icon-cuowu iconfont",WARNING:"icon-shizhi iconfont"},H={MESSAGE:"#909399",SUCCESS:"#67c23a",ERROR:"#f56c6c",WARNING:"#e6a23c"},W=({isId:a=!1,name:o="",tag:e=""})=>{if(!e)return null;const t=document.createElement(e);return o&&(a?t.id=o:t.className=o),t},Z=a=>{let o="";switch(a){case T.SUCCESS:o="background-color:#f0f9eb";break;case T.ERROR:o="background-color:#fef0f0";break;case T.WARNING:o="background-color: #fdf6ec";break;default:o="background-color: #edf2fc";break}return o},Oe=a=>{let o="",e="";switch(a){case T.SUCCESS:o=e+`${Z(a)};color: ${H.SUCCESS};display:flex;`;break;case T.ERROR:o=e+`${Z(a)};color: ${H.ERROR};display:flex;`;break;case T.WARNING:o=e+`${Z(a)};color: ${H.WARNING};display:flex;`;break;default:o=e+`${Z(a)};color: ${H.MESSAGE};display:flex;`;break}return o},Re=a=>{let o="";switch(a){case T.SUCCESS:o=le.SUCCESS;break;case T.ERROR:o=le.ERROR;break;case T.WARNING:o=le.WARNING;break;default:o=le.MESSAGE;break}return o},Ie=a=>{let o="",e="margin-right: 10px;font-size: 20px;";switch(a){case T.SUCCESS:o=e+`color: ${H.SUCCESS};`;break;case T.ERROR:o=e+`color: ${H.ERROR};`;break;case T.WARNING:o=e+`color: ${H.WARNING};`;break;default:o=e+`color: ${H.MESSAGE};`;break}return o},ze=({type:a,content:o,duration:e,delay:t,agaiBtn:s,minWidth:n,maxWidth:l},c)=>{if(!c){console.log("error!!!!");return}const d=Math.floor(Math.random()*(99999-10002))+10002,m={isRemove:!1,type:a||T.MESSAGE,content:o||"",duration:e||3e3,delay:t||0,timeout:null,agaiBtn:s||!1},g=W({name:`message-${d}`,tag:"div"});g.style=`
    min-width:${n}px;
    max-width:${l}px;
    padding:12px;
    margin-top:-40px;
    border-radius:4px;
    box-shadow:-5px 5px 12px 0 rgba(204, 204, 204, 0.8);
    ${Z(m.type)};
  animation: all cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.4s;
  transition: all .4s;
  pointer-events: auto;
  overflow:hidden;
    `;const u=W({tag:"div"});u.style=Oe(m.type);const r=W({name:`${Re(m.type)}`,tag:"div"});r.style=Ie(m.type);const p=W({tag:"span"});if(p.style="font-size: 14px;line-height:20px;",p.innerHTML=m.content,u.appendChild(r),u.appendChild(p),g.appendChild(u),m.agaiBtn){const y=W({name:"message-again-btn",tag:"div"});y.style="margin-top: 5px;text-align:right;";const P=W({name:"message-again-text",tag:"span"});P.innerHTML="不再提示",P.style=`
        font-size: 12px;
        color: rgb(204, 201, 201);
        border-bottom: 1px solid rgb(204, 201, 201);
        cursor: pointer;
        `,P.onmouseover=()=>{P.style.color="#fdb906",P.style.borderBottom="1px solid #fdb906"},P.onmouseout=()=>{P.style.color="rgb(204, 201, 201)",P.style.borderBottom="1px solid rgb(204, 201, 201)"},y.appendChild(P),g.appendChild(y),m.elsAgainBtn=P}c.appendChild(g),m.els=g,m.destory=h.bind(globalThis);function h(y,P){!m.els||!y||m.isRemove||(m.els.style.marginTop="-20px",m.els.style.opacity="0",m.isRemove=!0,P?(y.removeChild(g),_e(y),_()):setTimeout(()=>{y.removeChild(g),_e(y),_()},400))}function _(){m.els=null,m.elsAgainBtn=null,m.destory=null}return m};function qe(a,o){a&&(a.agaiBtn&&a.elsAgainBtn&&(a.elsAgainBtn.onclick=()=>{clearTimeout(a.timeout);let e=sessionStorage.getItem("MESSAGE_DONT_REMIND_AGAIN"),t=e?JSON.parse(e):[],s=Array.isArray(t)?t:[];s.push(a.content),sessionStorage.setItem(o.sessionStorageName,JSON.stringify(s)),a.destory(o.mainContainer,!0)}),a.els.onmouseover=()=>{clearTimeout(a.timeout)},a.els.onmouseout=()=>{a.timeout=setTimeout(()=>{a.destory(o.mainContainer),clearTimeout(a.timeout)},1e3)},a.timeout=setTimeout(()=>{a.destory(o.mainContainer),clearTimeout(a.timeout)},a.duration))}function _e(a){a&&(a.style.left=`calc(50vw - ${a.scrollWidth/2}px)`)}class ke{constructor(){this.minWidth=380,this.maxWidth=800,this.top=90,this.zIndex=999,this.mainContainerIdName="selfDefine-message-box",this.sessionStorageName="MESSAGE_DONT_REMIND_AGAIN";let o=document.getElementById(this.mainContainerIdName);o&&document.body.removeChild(o),this.mainContainer=W({isId:!0,name:this.mainContainerIdName,tag:"div"}),this.mainContainer.style=`
      pointer-events:none;
      position:fixed;
      top:${this.top}px;
      left:calc(50vw - ${this.minWidth/2}px);
      z-index:${this.zIndex};
      display: flex;
      flex-direction: column;
      align-items:center;
      `,document.body.appendChild(this.mainContainer)}message(o={}){let e=sessionStorage.getItem(this.sessionStorageName),t=e?JSON.parse(e):null;if(o.againBtn&&o.content&&t&&Array.isArray(t)&&t.includes(o.content))return;const s=ze({type:o.type,content:o.content,duration:o.duration,delay:o.delay,againBtn:o.againBtn,minWidth:this.minWidth,maxWidth:this.maxWidth},this.mainContainer);this.mainContainer.appendChild(s.els),s.els.style.marginTop="20px",_e(this.mainContainer),qe(s,this)}beforeDestory(){this.mainContainer&&this.mainContainer.remove?this.mainContainer.remove():document.body.removeChild(this.mainContainer),this.mainContainer=null}}class je{constructor(o){this.boxHtml=document.createElement("div"),this.boxHtml.className="black_box",this.boxHtml.style.display="none",o.uiPanelBox.dom.appendChild(this.boxHtml),this.editor=o}setVal(o){let e=document.getElementsByClassName("black_box")[0];e.style.display="block",e.style=`top:${o.top}px;left:${o.left}px;position:absolute;`,e.innerHTML=`<span>${typeof o.value=="number"?o.value+"°":o.value}</span>`}removeDom(){let o=document.getElementsByClassName("black_box")[0];o&&this.editor.uiPanelBox.dom.removeChild(o)}}class He{constructor(o){this.ele=o,this.downFn()}downFn(){this.ele.onmousedown=o=>{let e=o||window.event,t=e.clientX-this.ele.offsetLeft,s=e.clientY-this.ele.offsetTop;this.moveFn(t,s),this.upFn()}}moveFn(o,e){this.ele.onmousemove=t=>{let s=t||window.event,n=s.clientX,l=s.clientY;this.setStyle(n-o,l-e)}}setStyle(o,e){o=o<0?0:o,e=e<0?0:e,this.ele.style.left=o+"px",this.ele.style.top=e+"px"}upFn(){this.ele.onmouseup=()=>{this.ele.onmousemove=""}}}class ve{constructor(o){this.opts=Object.assign({width:"30%",height:"200px",title:"标题",content:"内容",dragable:!1,maskable:!0,isCancel:!0,success(){editor.list.doCallback.dispatch(o.param)},cancel(){console.log("点击取消按钮处理逻辑")}},o),this.init()}init(){this.renderView(),this.dialogHtml.onclick=o=>{switch(o.target.className){case"rjh_close":this.close(),this.opts.cancel();break;case"rjh_cancel":this.close(),this.opts.cancel();break;case"rjh_primary":this.confim(),this.close();break}}}confim(o){this.opts.success(o)}close(){$(".rjh_wrapper").parent().remove()}open(){if(this.opts.maskable&&(this.dialogHtml.querySelector(".rjh_wrapper").style.display="block"),this.opts.dragable){let o=this.dialogHtml.querySelector(".rjh_dialog");new He(o)}this.dialogHtml.querySelector(".rjh_dialog").style.display="block"}renderView(){this.dialogHtml=document.createElement("div"),this.dialogHtml.innerHTML=`<div class="rjh_wrapper"></div>
                <div class="rjh_dialog"  style="width:${this.opts.width};height:${this.opts.height}">
                    <div class="rjh_header">
                        <span class="rjh_title">${this.opts.title}</span><span class="rjh_close">X</span>
                    </div>
                    <div class="rjh_body">
                        <span>${this.opts.content}</span>
                    </div>
                    <div class="rjh_footer">
                        ${this.opts.isCancel?'<span class="rjh_cancel">取消</span>':""}
                        <span class="rjh_primary">确定</span>
                    </div>
                </div>`,document.querySelector("body").appendChild(this.dialogHtml)}}const G={data:[{type:"wall",list:[{name:"圆弧",className:"icon-yuanhu",key:"circle"},{name:"贝塞尔",className:"icon-beisaier",key:"bezier"},{name:"拆分",className:"icon-chefen",key:"split"},{name:"删除",className:"icon-shanshu",key:"del"}]},{type:"window",list:[{name:"翻转(G)",className:"icon-zuoyoufanzhuan",key:"reverse"},{name:"替换(C)",className:"icon-tihuancaizhi",key:"replace"},{name:"复制(Ctrl+C)",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除(Del)",className:"icon-shanshu",key:"del"}]},{type:"door",list:[{name:"翻转(G)",className:"icon-zuoyoufanzhuan",key:"reverse"},{name:"替换(C)",className:"icon-tihuancaizhi",key:"replace"},{name:"复制(Ctrl+C)",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除(Del)",className:"icon-shanshu",key:"del"}]},{type:"floor",list:[{name:"复制(Ctrl+C)",className:"icon-fuzhi",key:"copy"},{name:"替换材质(自身)",className:"icon-tihuancaizhi",key:"replaceOneself"},{name:"替换材质(全部)",className:"icon-caizhitihuan-quanbu",key:"replaceAll"}]},{type:"bridge",list:[{name:"复制(Ctrl+C)",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除(Del)",className:"icon-shanshu",key:"del"}]},{type:"flue",list:[{name:"复制(Ctrl+C)",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除",className:"icon-shanshu",key:"del"}]},{type:"column",list:[{name:"复制(Ctrl+C)",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除",className:"icon-shanshu",key:"del"}]},{type:"cutOffRule",list:[{name:"复制(Ctrl+C)",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除",className:"icon-shanshu",key:"del"}]},{type:"twoDimension",hideItem:[{name:"阵列",className:"icon-baili"},{name:"缩放显示对象     shift+Z",className:"icon-quanping"}],list:[{name:"",className:"icon-zuoyoufanzhuan",key:"",item:[{itemName:"前后翻转",itemClassName:"icon-qianhoufanzhuan",key:"frontBackTurn"},{itemName:"左右翻转",itemClassName:"icon-zuoyoufanzhuan",key:"aroundTurn"}]},{name:"替换(C)",className:"icon-tihuancaizhi",key:"replace"},{name:"复制 Ctrl+C",className:"icon-fuzhi",key:"copy"},{name:"隐藏(Ctrl+H)",className:"icon-xianzhiyinzang",key:"hidden"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除(Del)",className:"icon-shanshu",key:"del"},{name:"保存",className:"icon-baocun-1",key:"save"},{name:"上传",className:"icon-yunshangzhuan",key:"upload"},{name:"上浮",className:"icon-shangfu",key:"topFloat"},{name:"下浮",className:"icon-xiafu",key:"bottomFloat"}]},{type:"3DModelGroup",list:[{name:"",className:"icon-duiqi-1",key:"",item:[{itemName:"前对齐",itemClassName:"",key:"frontAligning"},{itemName:"后对齐",itemClassName:"",key:"rearAligning"},{itemName:"前后居中",itemClassName:"",key:"frontAndBackAligning"},{itemName:"左对齐",itemClassName:"",key:"leftAligning"},{itemName:"右对齐",itemClassName:"",key:"rightAligning"},{itemName:"左右居中",itemClassName:"",key:"leftRightAligning"},{itemName:"上对齐",itemClassName:"",key:"topAligning"},{itemName:"下对齐",itemClassName:"",key:"bottomAligning"},{itemName:"上下居中",itemClassName:"",key:"topBottomAligning"}]},{name:"组合",className:"icon-zuhe",key:"makeGroup"},{name:"",className:"icon-xuanzhuanjiayidong",key:"",item:[{itemName:"缩放",itemClassName:"icon-suofang",key:"scale"},{itemName:"移动+旋转",itemClassName:"icon-xuanzhuanjiayidong",key:"moveAndRotation"},{itemName:"三轴旋转",itemClassName:"icon-sanzhouxuanzhuan",key:"rotation"}]},{name:"复制",className:"icon-fuzhi",key:"copy"},{name:"锁定",className:"icon-shangsuo",key:"lock"},{name:"隐藏",className:"icon-xianzhiyinzang",key:"hidden"},{name:"删除",className:"icon-shanshu",key:"del"},{name:"保存",className:"icon-baocun-1",key:"save"}]},{type:"unbind",list:[{name:"",className:"icon-xuanzhuanjiayidong",key:"",item:[{itemName:"缩放",itemClassName:"icon-suofang",key:"scale"},{itemName:"移动+旋转",itemClassName:"icon-xuanzhuanjiayidong",key:"moveAndRotation"},{itemName:"三轴旋转",itemClassName:"icon-sanzhouxuanzhuan",key:"rotation"}]},{name:"入库",className:"icon-ruku",key:"storage"},{name:"解组",className:"icon-jiezu",key:"explodeGroup"},{name:"",className:"icon-zuoyoufanzhuan",key:"",item:[{itemName:"前后翻转",itemClassName:"icon-qianhoufanzhuan",key:"frontBackTurn"},{itemName:"左右翻转",itemClassName:"icon-zuoyoufanzhuan",key:"aroundTurn"}]},{name:"复制",className:"icon-fuzhi",key:"copy"},{name:"阵列",className:"icon-xianxingzhenli",key:"array"},{name:"锁定",className:"icon-shangsuo",key:"lock"},{name:"隐藏",className:"icon-xianzhiyinzang",key:"hidden"},{name:"上传",className:"icon-yunshangzhuan",key:"upload"},{name:"保存",className:"icon-baocun-1",key:"save"},{name:"删除",className:"icon-shanshu",key:"del"}]},{type:"single",list:[{name:"",className:"icon-xuanzhuanjiayidong",key:"",item:[{itemName:"缩放",itemClassName:"icon-suofang",key:"scale"},{itemName:"移动+旋转",itemClassName:"icon-xuanzhuanjiayidong",key:"moveAndRotation"},{itemName:"三轴旋转",itemClassName:"icon-sanzhouxuanzhuan",key:"rotation"}]},{name:"替换",className:"icon-tihuan-1",key:"replace"},{name:"换材质",className:"icon-tihuancaizhi",key:"replacematerial"},{name:"",className:"icon-zuoyoufanzhuan",key:"",item:[{itemName:"前后翻转",itemClassName:"icon-qianhoufanzhuan",key:"frontBackTurn"},{itemName:"左右翻转",itemClassName:"icon-zuoyoufanzhuan",key:"aroundTurn"}]},{name:"复制",className:"icon-fuzhi",key:"copy"},{name:"阵列",className:"icon-xianxingzhenli",key:"",item:[{itemName:"线性阵列",itemClassName:"icon-xianxingzhenli",key:"linearArray"},{itemName:"圆弧阵列",itemClassName:"icon-yuanhuzhenli",key:"arcArray"}]},{name:"锁定",className:"icon-shangsuo",key:"lock"},{name:"隐藏",className:"icon-xianzhiyinzang",key:"hidden"},{name:"删除",className:"icon-shanshu",key:"del"},{name:"保存",className:"icon-baocun-1",key:"save"},{name:"上传",className:"icon-yunshangzhuan",key:"upload"}]},{type:"threeDimension",headerItem:"材质替换 >",list:[{name:"翻转(G)",className:"icon-zuoyoufanzhuan",key:"reverse"},{name:"替换(C)",className:"icon-tihuancaizhi",key:"replace"},{name:"复制",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除(Del)",className:"icon-shanshu",key:"del"}]},{type:"3DWall",list:[{name:"删除",className:"icon-shanshu",key:"del"}]},{type:"unbind",list:[{name:"入库",className:"icon-ruku",key:"storage"},{name:"解组",className:"icon-jiezu",key:"explodeGroup"},{name:"",className:"icon-zuoyoufanzhuan",key:"",item:[{itemName:"前后翻转",itemClassName:"icon-qianhoufanzhuan",key:"frontBackTurn"},{itemName:"左右翻转",itemClassName:"icon-zuoyoufanzhuan",key:"aroundTurn"}]},{name:"复制",className:"icon-fuzhi",key:"copy"},{name:"阵列",className:"icon-xianxingzhenli",key:"array"},{name:"锁定",className:"icon-shangsuo",key:"lock"},{name:"隐藏",className:"icon-xianzhiyinzang",key:"hidden"},{name:"上传",className:"icon-yunshangzhuan",key:"upload"},{name:"保存",className:"icon-baocun-1",key:"save"},{name:"删除",className:"icon-shanshu",key:"del"}]},{type:"threeWindow",headerItem:"材质替换 >",list:[{name:"翻转(G)",className:"icon-zuoyoufanzhuan",key:"reverse"},{name:"替换(C)",className:"icon-tihuancaizhi",key:"replace"},{name:"复制",className:"icon-fuzhi",key:"copy"},{name:"锁定(Ctrl+L)",className:"icon-shangsuo",key:"lock"},{name:"删除(Del)",className:"icon-shanshu",key:"del"}]}]};url+"",url+"",url+"",url+"",url+"",url+"",url+"";const We=[{type:"SofaSets",item:[{src:url+"/assets/model/NewModel/FurnitureCombinations/SofaSets/SofaGroup1iso.png",modelPosition:"bottom"}]},{type:"TVStandSets",item:[{src:url+"/assets/model/NewModel/FurnitureCombinations/TVStandSets/TvCabinet1iso.png",modelPosition:"bottom"}]},{type:"DiningSets",item:[{src:url+"/assets/model/NewModel/FurnitureCombinations/DiningSets/ChairsGroup1iso.png",modelPosition:"bottom"}]},{type:"BedroomSets",item:[]},{type:"DressingTableSets",item:[]},{type:"DeskChairSets",item:[]},{type:"LeisureTableAndChairCombination",item:[]},{type:"CabinetFrameCombination",item:[{src:url+"/assets/model/NewModel/FurnitureCombinations/CabinetFrameCombination/WineCabinet1iso.png",modelPosition:"bottom"}]},{type:"SuspendedCeilings",item:[]},{type:"BackgroundWall",item:[{src:url+"/assets/model/NewModel/Finishing/BackgroundWall/BackgroundWall1iso.png",modelPosition:"free"}]},{type:"ChairRail",item:[]},{type:"Baseboards",item:[]},{type:"Lacquereds",item:[]},{type:"Wallpaper",item:[]},{type:"WallFabrics",item:[]},{type:"CeramicTiles",item:[]},{type:"WoodFloor",item:[]},{type:"Beds",item:[{src:url+"/assets/model/NewModel/Furniture/Beds/ArhatBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBed2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBed3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBedFrame1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBedFrame2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBedFrame3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBedFrame4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBedFrame5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/DoubleBedFrame6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/HighAndLowBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/Mattress1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/Mattress2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/Mattress3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/Mattress4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/Mattress5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/Mattress6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/SingleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1100SingleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1200SingleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1200SingleBed2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1300SingleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1500DoubleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1500DoubleBed2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1500DoubleBed3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1500DoubleBed4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1600DoubleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1600DoubleBed2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1700DoubleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1800DoubleBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1800DoubleBed2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1800DoubleBed3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1800DoubleBed4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1000HighAndLowBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1000HighAndLowBed2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/1400HighAndLowBed1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Beds/GauzeBed1iso.png",modelPosition:"bottom"}]},{type:"Sofas",item:[{src:url+"/assets/model/NewModel/Furniture/Sofas/ChaiseLongue1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ChaiseLongue2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/CornerSofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/CornerSofa2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/DoubleSofa9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LazySofa8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/MultiPersonSofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/MultiPersonSofa2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/MultiPersonSofa3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/MultiPersonSofa4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SingleSofa11iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ThreePersonSofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ThreePersonSofa2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ThreePersonSofa3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ThreePersonSofa4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ThreePersonSofa5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ThreePersonSofa6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench11iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/SofaBench12iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/FloorSofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/FoldingSofaStool1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/FoldingSofaStool2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/ArcSofa1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Sofas/LeatherSofa1iso.png",modelPosition:"bottom"}]},{type:"Tables",item:[{src:url+"/assets/model/NewModel/Furniture/Tables/Bar1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Bar2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Bar3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/CornerTable11iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/Desk11iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningCar1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningCar2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningCar3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DiningTable8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DressingTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DressingTable2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/DressingTable3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/MahjongTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/MahjongTable2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/NegotiatingTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/NegotiatingTable2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/SquareTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/TeaTable9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/GameTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/IslandCountertop1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/ComputerDesk1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/ComputerDesk2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/LeisureTable1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/LeisureTable2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/LeisureTable3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Tables/MeetingTable1iso.png",modelPosition:"bottom"}]},{type:"Chairs",item:[{src:url+"/assets/model/NewModel/Furniture/Chairs/BarChair1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/BarChair2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/BarChair3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DiningChair1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DiningChair2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DiningChair3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DiningChair4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DressingStool1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/MahjongStool1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/SofaBench1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/StoolPedal1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/StoolPedal2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Teahouse1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Teahouse2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Teahouse3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DeskStool1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DeskStool2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DeskStool3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DeskStool4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DeskStool5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DeskStool6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DressingStool2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DressingStool3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/DressingStool4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Chair10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/BedStool1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/BedStool2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/BedStool3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/LoungeChair1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/LoungeChair2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/LoungeChair3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/LoungeChair4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/LoungeChair5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/LoungeChair6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/ComputerChair1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/ComputerChair2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/ComputerChair3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/HighChair1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/HighChair2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/HighChair3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/HighChair4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/HighChair5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/HighChair6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/HighChair7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenStool1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenStool2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenStool3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenChair1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenChair2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenChair3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenChair4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/WoodenChair5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Bench1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/Bench2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/PianoStool1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/PianoStool2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Chairs/PianoStool3iso.png",modelPosition:"bottom"}]},{type:"Storage",item:[{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/ConsoleCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/ConsoleCabinet2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/ConsoleCabinet3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/ConsoleCabinet4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BalconyCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Bookcase1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Bookcase2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Bookcase3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Bookcase4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Bookcase5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Bookcase6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Bookcase7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/DecorativeShelves1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/DecorativeShelves4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/DecorativeShelves3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/hanger1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/PartitionCabinet10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/ShoeCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Sideboard1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Sideboard2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe11iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe12iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe13iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe14iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe15iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe16iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe17iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe18iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe19iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe20iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe21iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe22iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe23iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe24iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Wardrobe25iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard11iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard12iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard13iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/BedsideCupboard14iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/ChestOfDrawers1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/SideCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/SideCabinet2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/SideCabinet3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/WineCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/WineCabinet2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/CornerWardrobe1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Hanger2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/Hanger3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/DecorativeShelves2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/TvCabinet8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/WardrobeCombination1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Furniture/Storage/WardrobeCombination2iso.png",modelPosition:"bottom"}]},{type:"Tatami",item:[{src:url+"/assets/model/NewModel/Furniture/Tatami/Matting1iso.png",modelPosition:"bottom"}]},{type:"Outdoor",item:[{src:url+"/assets/model/NewModel/Furniture/Outdoor/WeedingCart1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Electromobile1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/SunLoungers1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/SunLoungers2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/SunLoungers3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Motorcycle1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorSwing1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/LeisureTableAndChairs1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Hammock1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Hammock2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Hammock3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Canopy1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Canopy2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Canopy3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/Canopy4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorBench1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorBench2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorBench3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorBench4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorTrashCan1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorWoodenChair1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorWoodenChair2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorWoodenChair3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/Outdoor/OutdoorWoodenChair4iso.png",modelPosition:"free"}]},{type:"OutdoorLandscape",item:[{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/MiscanthusSinensis1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/MiscanthusSinensis2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/MiscanthusSinensis3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Petunia1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Petunia2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Petunia3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/WhiteRainLily1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/WhiteRainLily2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/KniphofiaUvaria1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/KniphofiaUvaria2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/KniphofiaUvaria3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Pansy1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Pansy2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock22iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock23iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock24iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock25iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock26iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock27iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock28iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock29iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock30iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock31iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock32iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock33iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock34iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock35iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock36iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock37iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock38iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock39iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock40iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock41iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock42iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock43iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock44iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Rock45iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Dianthus1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Dianthus2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Dianthus3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Gladiolus1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Gladiolus2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Gladiolus3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/TagetesErecta1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/TagetesErecta2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Hosta1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Hosta2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Furniture/OutdoorLandscape/Hosta3iso.png",modelPosition:"free"}]},{type:"Kitchen",item:[{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Cabinet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Cabinet2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Cabinet3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Cabinet4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Food8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/GasWaterHeater1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/GasWaterHeater2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/GasWaterHeater3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/InstantWaterHeater1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/InstantWaterHeater2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/InstantWaterHeater3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/InstantWaterHeater4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/InstantWaterHeater5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/InstantWaterHeater6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/kitchenware21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/MicrowaveOven1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/MicrowaveOven2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Seasoning9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/ElectricalCabinet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/ElectricalCabinet2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/Gradevin1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/RefrigeratorCabinet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/KitchenFaucet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/KitchenFurnishings1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/knives1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Kitchen/GasStoves1iso.png",modelPosition:"free"}]},{type:"Bathroom",item:[{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/BathroomCabinet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/BathroomCabinet2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ElectricWaterHeater1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ElectricWaterHeater2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ElectricWaterHeater3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ElectricWaterHeater4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ElectricWaterHeater5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Faucet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Faucet2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Faucet3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Faucet4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Faucet5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Faucet6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerRoom1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerRoom2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerRoom3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerRoom4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerRoom5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerRoom6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Soap1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/TissueBox1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/TissueBox2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/TissueBox3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/toilet19iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toiletries14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Towel1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Towel2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Towel3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/TowelRack1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/TowelRack2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/TowelRack3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Yuba1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Yuba2iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Bathtub1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Bathtub2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Bathtub3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerHead1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerHead2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/ShowerHead3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toilet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toilet2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Toilet3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/WashBasin1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/WashBasin2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/WashBasin3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/WashBasin4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/WashBasin5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/WashBasin6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/WashBasin7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/BathroomHardware1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/BathroomHardware2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/BathroomFurnishings1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/BathroomFurnishings2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Basin1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Basin2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Basin3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Basin4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/Urinal1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/LaundryCabinet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/KitchenAndBathroom/Bathroom/LaundryCabinet2iso.png",modelPosition:"free"}]},{type:"DomesticAppliances",item:[{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Television1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Television2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Television3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/clothesHorse1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/ClothesHorse2iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/ClothesHorse3iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Fridge1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Fridge2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Fridge3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/HangingAirConditioner1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/HangingAirConditioner2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/HangingAirConditioner3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/HangingAirConditioner4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/HangingAirConditioner5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VerticalAirConditioning9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/CeilingFan1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Fan1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/FloorFan1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/FloorFan2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/CeilingAirConditioner1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/AirPurifier1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/WashingMachine1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/WashingMachine2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/WashingMachine3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VacuumCleaner1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/VacuumCleaner2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/SweepingRobot1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/SweepingRobot2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/SweepingRobot3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/Iron1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/IroningBoard1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DomesticAppliances/IroningBoard2iso.png",modelPosition:"free"}]},{type:"KitchenAppliances",item:[{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/TeaMachine1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/TeaMachine2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/TeaMachine3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/TeaMachine4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/TeaMachine5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/Toaster1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/Toaster2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/Toaster3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricCooker1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricCooker2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricCooker3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricKettle1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricKettle2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricKettle3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricKettle4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/Juicer1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/Juicer2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/Juicer3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/KitchenAppliances/ElectricPressureCooker1iso.png",modelPosition:"free"}]},{type:"DigitalAudioElectronics",item:[{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Laptop1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/AppleMobilePhone1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/AppleMobilePhone2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/AppleMobilePhone3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/computer1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Computer2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Computer3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Computer4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/display1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Earphones1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectronicClock1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Headphones1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Headphones2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/KeyboardMouse1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Laptop2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Laptop3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Tablets1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Tablets2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/GameConsole1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/GameConsole2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectromechanicalAlarmClock1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectromechanicalAlarmClock2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectromechanicalAlarmClock3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectromechanicalAlarmClock4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectromechanicalAlarmClock5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectromechanicalAlarmClock6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ElectromechanicalAlarmClock7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/AppleWatch1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/LCDTv1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/LCDTv2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/LCDTv3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/LCDTv4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ProjectionScreen1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/ProjectionScreen2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Projector1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Projector2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/DigitalAudioElectronics/Audio11iso.png",modelPosition:"free"}]},{type:"SwitchesSockets",item:[{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/Switch1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/ControllerSwitch1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/ControllerSwitch2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/VideoPhonewitch1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/VideoPhonewitch2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/VideoPhonewitch3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/VideoPhonewitch4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/VideoPhonewitch5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/VideoPhonewitch6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/Electronics/SwitchesSockets/VideoPhonewitch7iso.png",modelPosition:"free"}]},{type:"SwitchBox",item:[{src:url+"/assets/model/NewModel/Electronics/SwitchBox/ElectricBox1iso.png",modelPosition:"free"}]},{type:"Lighting",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/920Lightiso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/BedsideLamp1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/DeskLamp1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/DeskLamp2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/DeskLamp3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/DeskLamp4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/DeskLamp5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/FLoorLampiso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/ModernLightiso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/WallLampiso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/DoubleHeadDownlight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/DoubleHeadSpotlight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Downlight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/FourHeadDownlight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/FourHeadSpotlight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Spotlight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Spotlight2iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Spotlight3iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Spotlight4iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/TrackLight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/TrackLight2iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/FLoorLamp1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/FLoorLamp2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant2iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant3iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant4iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant5iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant6iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant7iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant8iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/Pendant9iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/WallLamp1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/WallLamp2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/WallLamp3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/CeilingFanLight1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/CeilingFanLight2iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/CeilingFanLight3iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/CeilingFanLight4iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/CeilingLamp1iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/CeilingLamp2iso.png",modelPosition:"top"},{src:url+"/assets/model/NewModel/DecorativeAccents/Lighting/CeilingLamp3iso.png",modelPosition:"top"}]},{type:"Curtains",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/Curtains/Curtains1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Curtains/Curtains2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Curtains/Curtains3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Curtains/WindowScreening1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Curtains/Blinds1iso.png",modelPosition:"bottom"}]},{type:"Rugs",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet1iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet2iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet3iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet4iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet5iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet6iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet7iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet8iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet9iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet10iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet11iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet12iso.png",modelPosition:"bottom"},{src:url+"/assets/model/NewModel/DecorativeAccents/Rugs/Carpet13iso.png",modelPosition:"bottom"}]},{type:"DecorativePaintings",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/DecorativePaint0iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/DecorativePaint1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/DecorativePaint2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPictureiso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/DecorativePaintings3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture22iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture23iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture24iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/HangPicture25iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/FloorPainting1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/DecorativePaintings/FloorPainting2iso.png",modelPosition:"free"}]},{type:"Ornament",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Barrel1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines22iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines23iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines24iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/BooksAndMagazines25iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cat1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cat2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cat3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Coffee2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cosmetics2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cosmetics3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cosmetics4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Candlestick1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Candlestick2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Candlestick3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Candlestick4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Candlestick5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Candlestick6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Candlestick7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Clocks1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Clocks2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Coffee1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cosmetics1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Cup1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Handicrafts21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Sculpture1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Sculpture2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Sculpture3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Sculpture4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Storage11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Tableware1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/TeaSet12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Utensils1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Utensils2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Utensils3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Utensils4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Utensils5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Wine1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Wine2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Wine3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Wine4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Wine5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineBottle13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineGlass1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineGlass2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineGlass3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineGlass4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/WineGlass5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Utensils6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Ornament/Toy1iso.png",modelPosition:"free"}]},{type:"WallDecor",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Pendant1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/PendantB1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Hook1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Hook2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Hook3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Hook4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Hook5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Hook6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Hook7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Shelf1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Shelf2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Shelf3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Shelf4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Shelf5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Shelf6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Shelf7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Pendant2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/WallDecor/Pendant3iso.png",modelPosition:"free"}]},{type:"FlowersPlants",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/FlowerArt8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Potted1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Potted2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Potted3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Potted4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Potted5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Potted6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Potted7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Accessories1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Accessories2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Bonsai1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Bonsai2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Bonsai3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Bonsai4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Bonsai5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Bonsai6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/GlassVase1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/GlassVase2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/GlassVase3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/GlassVase4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/GlassVase5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Vase1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Vase2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Vase3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Vase4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Vase5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/Vase6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/HangingBasket1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/HangingBasket2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/FlowersPlants/HangingBasket3iso.png",modelPosition:"free"}]},{type:"Mirrors",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/Mirrors/DressingMirror1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Mirrors/chevalmirror1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/Mirrors/DressingMirror2iso.png",modelPosition:"free"}]},{type:"RoomDividers",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/RoomDividers/Screen1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/RoomDividers/Screen2iso.png",modelPosition:"free"}]},{type:"TextileDecoration",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/pillow10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow22iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow23iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow24iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow25iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Pillow26iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/doll1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Doll2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/shoe1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/shoe2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/shoe3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Bag1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Bag2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Cushion1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Cushion2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Cushion3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Cushion4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Cushion5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Cushion6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Cushion7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Slipper1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Towel1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Towel2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/TextileDecoration/Towel3iso.png",modelPosition:"free"}]},{type:"ArtsSpots",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment22iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment23iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment24iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment25iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment26iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment27iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment28iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment29iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment30iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment31iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/FitnessEquipment32iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/PoolTable1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Piano8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Drumkit1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/PingPongtable1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/PingPongtable2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/PingPongtable3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/PingPongtable4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/PingPongtable5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/HockeyGoal1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments22iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments23iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/AcousticInstruments24iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/Tennis1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/TennisBlock1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ArtsSpots/TableFootball1iso.png",modelPosition:"free"}]},{type:"ShoesAndBags",item:[{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Sack1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Slipper2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Slipper3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Slipper4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Slipper5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Slipper6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Bag3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Bag4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Bag5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Bag6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Bag7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Bag8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Shoe4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Shoe5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Shoe6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Shoe7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/ShoeBox1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/ShoeBox2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Box1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Box2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Box3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/CoatHanger1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Clothes1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Clothes2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Clothes3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Clothes4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/DecorativeAccents/ShoesAndBags/Clothes5iso.png",modelPosition:"free"}]},{type:"Office",item:[{src:url+"/assets/model/NewModel/PublicRoom/Office/4PersonDesk1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/MultiPersonDesk1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/LargeConferenceTable1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeSupplies1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeSupplies2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeSupplies3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeSupplies4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeSupplies5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeSupplies6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/Printer1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/Printer2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/Printer3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/Blackboard1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/Blackboard2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/Blackboard3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeCabinet1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeCabinet2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeCabinet3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeCabinet4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeCabinet5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/Office/OfficeCabinet6iso.png",modelPosition:"free"}]},{type:"DiningRoom",item:[{src:url+"/assets/model/NewModel/PublicRoom/DiningRoom/CoffeeMachine1iso.png",modelPosition:"free"}]},{type:"RecreationAndEntertainme",item:[{src:url+"/assets/model/NewModel/PublicRoom/RecreationAndEntertainme/Mannequin1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/RecreationAndEntertainme/Mannequin2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/RecreationAndEntertainme/ATV1iso.png",modelPosition:"free"}]},{type:"HotelClub",item:[]},{type:"BeautyAndHairdressing",item:[]},{type:"SupermarketsAndStores",item:[{src:url+"/assets/model/NewModel/PublicRoom/SupermarketsAndStores/Sedan1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/SupermarketsAndStores/Sedan2iso.png",modelPosition:"free"}]},{type:"MedicalAndDevices",item:[{src:url+"/assets/model/NewModel/PublicRoom/MedicalAndDevices/Wheelchair1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/MedicalAndDevices/Ambulance1iso.png",modelPosition:"free"}]},{type:"EquipmentAndFacilities",item:[{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/Car1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/Car2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment1iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment2iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment3iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment4iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment5iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment6iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment7iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment8iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment9iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment10iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment11iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment12iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment13iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment14iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment15iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment16iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment17iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment18iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment19iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment20iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment21iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment22iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment23iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment24iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment25iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment26iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment27iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment28iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment29iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment30iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment31iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment32iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment33iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment34iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment35iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment36iso.png",modelPosition:"free"},{src:url+"/assets/model/NewModel/PublicRoom/EquipmentAndFacilities/PhotoEquipment37iso.png",modelPosition:"free"}]}];class Ne{constructor(o){this.opts=Object.assign({height:"20px",width:"56px",title:"色系",location:"",list:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]},o),this.init()}init(){this.renderView(),this.controlOption(),this.handleOptionItem()}controlOption(){const o=document.querySelectorAll(".Option"),e=document.querySelectorAll(".rjh_selectbox");for(let t=0;t<e.length;t++)e[t].onclick=()=>{this.opts.title=e[t].innerText,o[t].classList.contains("show")?o[t].classList.remove("show"):o[t].classList.add("show")}}handleOptionItem(){document.querySelectorAll(".Option_item").forEach((e,t)=>{e.onclick=function(){e.parentNode.parentNode.children[0].children[0].innerHTML=e.innerHTML,e.parentNode.classList.remove("show"),e.classList.add("select_active")}})}renderView(){this.selectHtml=document.createElement("div"),this.selectHtml.className="rjh_select",this.selectHtml.innerHTML=`<div class="selectBox cursor" style="width:${this.opts.width};height:${this.opts.height}">
		<div class="rjh_selectbox"><span class="selectText">${this.opts.title}</span><img  src="./static/assets/images/xiala.svg" alt=""></div>
		<div class="Option">
        ${this.opts.list.map(o=>`<div class="Option_item">${o.value}</div>`).join("")}
		</div>
	</div>`,document.querySelector(this.opts.location).appendChild(this.selectHtml)}open(){this.selectHtml.querySelector(".selectBox").style.display="block"}}let xe=[];var I="";window.handle=(a,o)=>{if(o=="lock"){const e=document.querySelector("div[data-list='lock'] span"),t=e.parentElement.children[1];e.classList.toggle("icon-shangsuo"),e.classList.toggle("icon-kaisuo"),e.classList.contains("icon-kaisuo")?(e.parentNode.classList.add("tooltipss_active"),t.innerHTML="解锁"):t.innerHTML="锁定(Ctrl+L)"}if(o)switch(a){case"wall":I.list.change2DWall.dispatch([o]);break;case"door":case"window":I.list.change2DDoor.dispatch([o]);break;case"floor":I.list.change2DFloor.dispatch(o);break;case"bridge":case"flue":case"column":I.list.change2DMember.dispatch([o]);break;case"threeDimension":case"threeWindow":I.list.change3DDoor.dispatch([o]);break;case"3DModelGroup":I.list.change3DModel.dispatch([o]);break;case"unbind":I.list.change3DModel.dispatch([o]);break;case"single":I.list.change3DModel.dispatch([o]);break;case"twoDimension":I.list.change2DModel.dispatch([o]);break}};function Be(a,o,e,t){if(G.data[a]===void 0||o.length==0)return;var s=document.querySelector("body");$(".wall_pop")&&$(".wall_pop").remove();const n=document.createElement("div");if(n.className="wall_pop",s.insertBefore(n,s.child),I=e,xe=G.data[a].list,$(".wall_pop").empty(),$(".wall_pop").append(`   <div class="box">
            <div class="drag">
                <svg height="1em" viewBox="0 0 5 14" width="1em" fill="currentColor" aria-hidden="true">
                    <path
                        d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                        fill-rule="evenodd"></path>
                </svg>
            </div>
            ${xe.map(c=>` <div class="tooltipss ${c.key}" data-list='${c.key}' onclick ="handle('${G.data[a].type}','${c.key}')">
               <span class='${c.className} iconfont icon center icon_color'></span>
                <div class="tooltiptextpop">${c.name==""?c.item.map(d=>`<div class='tooltip_width' onclick ="handle('${G.data[a].type}','${d.key}')">
                            <span class='${d.itemClassName} iconfont icon-mmin'></span>
                            <span>${d.itemName}</span>
                        </div>`).join(""):c.name}
                </div >
              </div > `).join("")}
        ${G.data[a].type=="twoDimension"?`<div class='iconfont icon-xiaoyoujiantou cursor center hidden_part'><div class='hidden_part_item'>${G.data[a].hideItem.map(c=>`<div class='hidden_part_item_list'><span class='${c.className} '></span><span>${c.name}</span></div>`).join("")}</div></div>`:""}
        
        </div > `),$(".wall_pop").css({left:o[0]+"px",top:o[1]+"px"}),$(".wall_pop").draggable({handle:".drag"}),t.length==0)return;const l=t[t.length-1];if(l.constructor===Object){if(l.hasOwnProperty("isLock")){const c=l.isLock,d=document.querySelector("div[data-list='lock'] span"),m=d.parentElement.children[1];c?(d.classList.replace("icon-shangsuo","icon-kaisuo"),m.innerHTML="解锁"):(d.classList.replace("icon-kaisuo","icon-shangsuo"),m.innerHTML="锁定(Ctrl+L)")}l.isGroupChild||($(".topFloat").remove(),$(".bottomFloat").remove())}}class q{constructor(){}openContent(o,e,t,s){var n,l,c;const d=document.getElementsByTagName("article")[0],m=document.getElementsByClassName("footerContent_box")[0];for(d.style.display="block",document.querySelectorAll(".jiaju_content").forEach(p=>{p.style.display="none"}),document.querySelectorAll("public-box").forEach(p=>{p.style.display="block"}),document.querySelectorAll("architecture-bar").forEach(p=>{p._sd.children[1].style.display="none"}),m.style.paddingLeft="350px",l=document.getElementsByClassName(t),n=0;n<l.length;n++)l[n].style.display="none";for(c=document.getElementsByClassName(s),n=0;n<c.length;n++)c[n].className=c[n].className.replace(" active","");document.getElementById(e).style.display="block",o.currentTarget.className+=" active",d.style.width="256px";const u=document.querySelectorAll(".public_boxflag"),r=document.querySelector("#publicbox_List");if(e=="public"){for(let p=0;p<u.length;p++){const h=u[p];h.parentNode.removeChild(h)}r.style.display="block"}editor.list.activeTool.dispatch("close",!1),editor.list.closeReplaceView.dispatch()}openPublica(o,e){var t,s;for(s=document.getElementsByClassName(e),t=0;t<s.length;t++)s[t].style.display="none";document.getElementById(o).style.display="block"}goback(o,e){document.getElementById(o).style.display="none",document.getElementById(e).style.display="block"}openmenuBar(o,e){var t,s;for(s=document.getElementsByClassName(e),t=0;t<s.length;t++)s[t].style.display="none";document.getElementById(o).style.display="block"}changeHeight(){var o=document.getElementsByClassName("view_bigbox")[0],e=document.getElementsByClassName("property")[0],t=o.style.left;t=t.substring(0,t.length-2),Math.abs(t)>240?(e.style.position="absolute",e.style.height="100%"):Math.abs(t)<240&&(e.style.position="relative",e.style.height="calc(100% - 240px)")}hideBar(){$(".hideBarleft").addClass("animate__animated animate__fadeOutLeft"),$(".hideBarTop").addClass("animate__animated animate__fadeOutUp"),$(".hideBarRight").addClass("animate__animated animate__fadeOutRight"),$(".footerContent_box")[0].style.paddingLeft="0px",$(".footerContent_box")[0].style.paddingRight="0px",document.querySelector(".roaming_box_content").style.display="block"}showBar(){$(".hideBarleft").removeClass("animate__fadeOutLeft"),$(".hideBarTop").removeClass("animate__fadeOutUp"),$(".hideBarRight").removeClass("animate__fadeOutRight"),$(".hideBarleft").addClass("animate__fadeInLeft"),$(".hideBarTop").addClass("animate__fadeInDown"),$(".hideBarRight").addClass("animate__fadeInRight"),$(".footerContent_box")[0].style.paddingLeft="350px",$(".footerContent_box")[0].style.paddingRight="240px",document.querySelector(".roaming_box_content").style.display="none"}}class Ke{constructor(){}showPublic(){document.getElementsByClassName("public_hover")[0].style.display="block"}outPublic(){document.getElementsByClassName("public_hover")[0].style.display="none"}showInputpop(){var o=document.getElementsByClassName("input_popover")[0];o.style.display=="none"?o.style.display="block":o.style.display="none"}hideOrshow(){$(".header_content");const o=document.getElementsByTagName("article")[0],e=document.getElementsByClassName("arrows")[0],t=document.getElementsByClassName("footerContent_box")[0];e.style.left===""||e.style.left==="304px"?(o.style.width="0",t.style.paddingLeft="50px",e.style.left="48px"):(o.style.width="256px",e.style.left="304px",t.style.paddingLeft="350px")}}class Ve{constructor(){}static propertySwitch(o){const e=$("#wall button"),t=$("#wall input[type = range]"),s=$("#wall .input_area");if(o instanceof Array)o[2]===!0&&o[3]===!0?(s[0].classList.add("not_allowed"),s[1].classList.add("not_allowed"),t[0].disabled=!0,s[0].children[1].disabled=!0):(t[0].disabled=!1,t[1].disabled=!1);else return;switch(o[4]==1?(t[1].disabled=!1,s[1].children[1].disabled=!1):(t[1].disabled=!0,s[1].children[1].disabled=!0),e.removeClass("active_btn"),o[4]){case 0:e[1].classList.add("active_btn");break;case 1:e[2].classList.add("active_btn");break;case 2:e[0].classList.add("active_btn");break}}runEffect(o){$(o).toggle("blind",100)}handleFocus(o){o.style.display="none"}handleblur(o){o.style.display="block"}}const Ge=()=>{const a=new URL(window.location.href),o=new URLSearchParams(a.search),e={};for(const[t,s]of o.entries())e[t]=s.split(",")[0];return e};class Ae{constructor(o){o=o||{},this.itemClass=o.itemClass||".item_tabs",this.eventType=o.eventType||"click",this.itemActiveClass=o.itemActiveClass||"tabs_active",this.contentClass=o.contentClass||".tabs_content",this.contentShowClass=o.contentShowClass||"tabs_show",this.items=document.querySelectorAll(this.itemClass),this.contents=document.querySelectorAll(this.contentClass),this.addEvent()}addEvent(){this.items.forEach((o,e)=>{const t=o;o.addEventListener(this.eventType,s=>{s.target,this.changeItems(t),this.changeContent(e)})})}changeItems(o){this.items.forEach(e=>{e.classList.remove(this.itemActiveClass)}),o.classList.add(this.itemActiveClass)}changeContent(o){this.contents.forEach(e=>{e.classList.remove(this.contentShowClass)}),this.contents[o].classList.add(this.contentShowClass)}}const B={窗户行数:1,窗页:1,高度:10,窗页1:1,固定:!1,把手:"自动",windowPage:{}};let ae,J;class Ue{constructor(){const o=document.querySelector(".draw_custom_content"),e=document.createElement("div");e.className="custom_content_item draw_custom_none fan_page",o.appendChild(e),this.init()}init(){const o=document.querySelector(".fan_page"),e=new De({container:o});this.createElement(e),this.changeGui(),this.addWindowPage(J,1)}createElement(o){o.add(B,"窗户行数",1,20,1).onFinishChange(e=>{this.addWindowRow(o,e)}),J=o.addFolder("窗户行数 01"),J.add(B,"窗页",1,4,1).onFinishChange(e=>{this.addWindowPage_back(J,e)}),J.add(B,"高度",1,4,1).onChange(e=>{console.log(e)})}addWindowRow(o,e){const t=document.querySelectorAll(".fan_page .lil-gui .children");for(let s=2;s<t.length;s++)t[s].parentNode.remove();for(let s=1;s<e;s++){let n=s+1;n<10&&(n="0"+n),ae=o.addFolder(`窗户行数${n}`),ae.add(B,"窗页",1,4,1).onFinishChange(l=>{this.addWindowPage_back(ae,l)}),ae.add(B,"高度",1,4,1).onChange(l=>{console.log(l)})}}addWindowPage(o,e){const t=o.$children.children;for(;t.length>5;)for(let s in t)s>4&&t[s].remove();for(let s=0;s<e;s++)B.windowPage[`窗页${s+1}`]=1,console.log(B.windowPage),o.add(B.windowPage,`窗页${s+1}`,1,4,1).onChange(n=>{console.log(n)}),o.add(B,"固定").onChange(n=>{console.log(n)}),o.add(B,"把手",handle).onChange(n=>{console.log(n)});console.log(B.windowPage)}addWindowPage_back(o,e){const t=o.$children.children;for(;t.length>5;)for(let s in t)s>4&&t[s].remove();for(let s=1;s<e;s++)B.windowPage[`窗页${s+1}`]=1,console.log(B.windowPage),o.add(B.windowPage,`窗页${s+1}`,1,4,1).onChange(n=>{console.log(n)}),o.add(B,"固定").onChange(n=>{console.log(n)}),o.add(B,"把手",handle).onChange(n=>{console.log(n)});console.log(B.windowPage)}changeGui(){document.querySelector(".fan_page .lil-gui .title").remove()}}class Q{constructor(o){this.title=o.title,this.container=o.container,this.params=o.params}init(){this.createElement(),this.changeGui()}createElement(){const o=document.createElement("div");o.className="subassembly";const e=document.createElement("div");e.className="subassembly_item",o.appendChild(e),e.innerHTML=`<div class='subassembly_select'><span>${this.title}</span>
        <svg class="icon icon-mmmin" aria-hidden="true">
        <use xlink:href="#icon-xiaosanjiao-xia"></use>
        </svg></div>`;const t=new De({container:o});for(const s in this.params)Object.hasOwnProperty.call(this.params,s)&&t.add(this.params,s,1,10,1).onChange(n=>{console.log(n)});document.querySelector(this.container).appendChild(o)}changeGui(){document.querySelectorAll(".subassembly .lil-gui .title").forEach(t=>{t.remove()}),document.querySelectorAll(".subassembly_select").forEach(t=>{t.onclick=function(){const n=t.parentNode.parentNode.children[1];n.style.display="none",(n.style.display="none")&&(n.style.display="block")}})}}const L={hideInfo:!1,acesToneMapping:!0,stableNoise:!1,tiles:2,bounces:15,multipleImportanceSampling:!0,resolutionScale:1/window.devicePixelRatio,environmentBlur:0,environmentIntensity:1,environmentRotation:0,backgroundBlur:.1,filterGlossyFactor:.5,类型:"平开窗",打开方式:"内向",宽度:0,深度:0,高度:0,离地:0,排列:"向内",偏移:0,mount:"Interior",Overflow:0,形状:"长方形",精度:0,半径:0};class Je{constructor(){const o=document.querySelector(".draw_custom_content"),e=document.createElement("div");e.className="custom_content_item draw_custom_none draw_custom_show main_label",o.appendChild(e),this.init()}init(){this.createElement(),this.changeGui()}createElement(){const o=document.querySelector(".main_label"),e=new De({container:o}),t=["平开窗","推拉窗","悬窗"],s=["内向","外向"],n=["向内","外向","轴向"],l=["Interior","Exterior","Nail-on frame"],c=["长方形","圆顶","椭圆顶","斜顶","完全圆化"],d=[1,2,3,4,5];L.material=d[0],e.add(L,"类型",t).onChange(u=>{console.log(u)}),e.add(L,"打开方式",s).onChange(u=>{console.log(u)}),e.add(L,"宽度",1,4,1).onChange(u=>{console.log(u)}),e.add(L,"深度",1,4,1).onChange(u=>{console.log(u)}),e.add(L,"高度",1,4,1).onChange(u=>{console.log(u)}),e.add(L,"离地",1,4,1).onChange(u=>{console.log(u)}),e.add(L,"排列",n).onChange(u=>{console.log(u)}),e.add(L,"偏移",1,4,1).onChange(u=>{console.log(u)}),e.add(L,"mount",l).onChange(u=>{console.log(u)}),e.add(L,"Overflow",1,4,1).onChange(u=>{console.log(u)}),e.add(L,"形状",c).onChange(u=>{console.log(u)}),e.add(L,"精度",1,4,1).onChange(u=>{console.log(u)}),e.add(L,"半径",1,4,1).onChange(u=>{console.log(u)});const m=document.createElement("div"),g=document.querySelector(".main_label");m.className="frame drill",g.appendChild(m),new Q({title:"自动钻孔",container:".drill",params:{钻孔距离:1}}).init()}changeGui(){document.querySelector(".main_label .lil-gui .title").remove()}}class Xe{constructor(){const o=document.querySelector(".draw_custom_content"),e=document.createElement("div");e.className="custom_content_item draw_custom_none",o.appendChild(e),this.init()}init(){this.createElement()}createElement(){const o=document.querySelectorAll(".custom_content_item")[2],e=document.createElement("div");e.className="window_frame frame",o.appendChild(e),new Q({title:"窗框",container:".window_frame",params:{宽度:1,深度:1}}).init();const t=document.createElement("div");t.className="sheet_frame frame",o.appendChild(t),new Q({title:"板框",container:".sheet_frame",params:{宽度:1,深度:1}}).init();const s=document.createElement("div");s.className="outline_border frame",o.appendChild(s),new Q({title:"外框",container:".outline_border",params:{正面宽度:1,正面深度:1,侧面深度:1,偏移:1}}).init();const n=document.createElement("div");n.className="outline_window frame",o.appendChild(n),new Q({title:"外窗户",container:".outline_window",params:{宽度:1,深度:1,厚度:1,高度:1}}).init()}}class Ye{constructor(){const o=document.querySelector(".free_drawing_rightbar"),e=document.createElement("div");e.className="free_view",o.appendChild(e);const t=document.createElement("div");t.className="free_draw_custom",o.appendChild(t),this.init()}init(){this.createElement(),this.createHeader(),this.createContent(),new Je,new Ue,new Xe,this.event()}createElement(){$(".free_view").append(`<div class='free_viewbox'>
                <div class='free_viewcontent'>
                    <div class='free_view_header'>
                        <div class="header_icon">
                            <svg height="1em" viewBox="0 0 5 14" width="1em" fill="currentColor" aria-hidden="true">
                                <path
                            d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                            fill-rule="evenodd"></path>
                            </svg>
                    </div>
                    <div class='free_view_headertilte active' id = 'overlookView'>俯视视角</div>
                    <div class='free_view_headertilte' id='overlookDiagram'>俯视示意图</div>
                    </div>
                    <div class='free_view_threeDimen' id = 'overlookViewContent'>俯视视角</div>
                    <div class='free_view_threeDimen' id='diagramContent' style="display: none;">俯视示意图</div>
                </div>
            </div>`),$(".free_draw_custom").append(`<div class='custom_header'>
            <div class='custom_header_title'>
                <div class="header_icon">
                    <svg height="1em" viewBox="0 0 5 14" width="1em" fill="currentColor" aria-hidden="true">
                        <path
                            d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                            fill-rule="evenodd">
                        </path>
                    </svg>
                </div>
                <span>自定义设置</span>
                </div>
            </div>
            <div class='custom_content'>

            </div>
            `)}createHeader(){const o=document.querySelector(".custom_content"),e=document.createElement("div");e.className="draw_custom_header",o.appendChild(e);const t=[{title:"主标签"},{title:"扇页"},{title:"组件"}];$(".draw_custom_header").append(`${t.map(s=>`<div class='custom_header_item_box'><span class='custom_header_item'>${s.title}</span></div>`).join("")}`),document.querySelectorAll(".custom_header_item")[0].classList.add("custom_active")}createContent(){const o=document.querySelector(".custom_content"),e=document.createElement("div");e.className="draw_custom_content",o.appendChild(e)}event(){document.querySelector("#overlookView").addEventListener("click",function(){new q().openContent(event,"overlookViewContent","free_view_threeDimen","free_view_headertilte")}),document.querySelector("#overlookDiagram").addEventListener("click",function(){new q().openContent(event,"diagramContent","free_view_threeDimen","free_view_headertilte")}),this.tabs(),$(".free_view").resizable({handles:"sw",minWidth:240,minHeight:234,resize:(o,e)=>{let t=e.size.width,s=e.size.height-28;editor.list.createMap.dispatch(t,s)}}),$(".free_view").draggable({handle:".header_icon",snap:".right",snapMode:"inner"}),$(".free_draw_custom").draggable({handle:".custom_header",snap:".right",snapMode:"inner"})}tabs(){new Ae({itemClass:".custom_header_item",itemActiveClass:"custom_active",contentClass:".custom_content_item",contentShowClass:"draw_custom_show"})}}class oe{constructor(o){this.opts=Object.assign({location:""},o),this.init()}init(){this.renderView()}renderView(){this.switchHtml=document.createElement("input"),this.switchHtml.className="switch",this.switchHtml.type="checkbox",document.querySelector(this.opts.location).appendChild(this.switchHtml)}}class Ze{constructor(){const o=document.querySelector("body"),e=document.createElement("div");e.setAttribute("id","freeDrawing"),e.className="contentFlag none",o.appendChild(e);const t=document.createElement("div");t.className="free_drawing",e.appendChild(t),$(".contentFlag").addClass("none"),$("#freeDrawing").removeClass("none"),this.init(),new Ye}init(){this.createElement()}create(o,e){let t=document.createElement(o);return t.className=e,t}createElement(){this.$FREEDRAW_HEAD=this.createHead(),this.$FREE_CONTENT=this.createContent(),this.$FREE_LEFTBAR=this.createLeftBar(),this.$FREE_RIGHTBAR=this.createRightBar()}createHead(){const o=document.querySelector(".free_drawing");return this.$HEAD=this.create("div","free_drawing_header"),o.appendChild(this.$HEAD),this.$HEAD}createContent(){const o=document.querySelector(".free_drawing");return this.$CONTENT=this.create("div","free_drawing_content"),o.appendChild(this.$CONTENT),this.$CONTENT}createLeftBar(){const o=document.querySelector(".free_drawing_content");return this.$LEFT_BAR=this.create("div","free_drawing_leftbar"),o.appendChild(this.$LEFT_BAR),this.$LEFT_BAR}createRightBar(){const o=document.querySelector(".free_drawing_content");return this.$RIGHT_BAR=this.create("div","free_drawing_rightbar"),o.appendChild(this.$RIGHT_BAR),this.$RIGHT_BAR}}const O=class{constructor(){this.init()}init(){this.renderView(),O.setContent(O.typeList),O.toggleMiniToolbar(O.svgList),this.housetypebar(),O.drawtype(),this.arrowsHidden(),this.articleMini()}renderView(){$("article").append(`   <div id="huoseflag" class="tab_content" style="display: block;">
        <div class="housetype">
            <div class="type_header">
                <span>户型</span>
                <div class="iconfont article_mini  icon-twenty cursor icon-shousuo"></div>
            </div>
            <div id="content_bigbox"></div>
        </div>
    </div>
    <div id="inspiration" class="tab_content">
    </div>
    <!-- 公共库 -->
    <div id="public" class="tab_content"></div>
    <div id="mine" class="tab_content">
    </div>
    <!-- 左侧收回 -->
    <div class="arrows">
        <img src="./static/assets/images/jiantou.svg" />
    </div>
    `);const o=document.querySelector(".tab_boxcontent"),e=document.createElement("div");e.className="left_minicontent article_shadow ",o.appendChild(e),$(".left_minicontent").append(`<div class='left_minicontent_bigbox'>
            <div class='left_minicontent_btn left_minicontent_box article_shadow cursor'>
            <svg class="icon-mmin" aria-hidden="true">
            <use xlink:href="#icon-shousuo"></use>
            </svg>
            </div>
            <div class='left_minicontent_input article_shadow'>
                <input  placeholder='输入关键词搜索工具'/>
                <span class='iconfont cursor left_minicontent_search icon-yangbanjian-xiaosuo'></span>
            </div>
            <div class='left_minicontent_operate'>
            </div>
            </div>`)}static setContent(o){o.forEach(e=>{O.housetypeStr+=`<div class="content" >
            <div class="content_title">
            <div class="content_text" >${e.name}</div>
            <div><img class="content_img" src="${e.img}"></div>
          </div>
          <div class="${e.class}">
            ${e.text.map((t,s)=>` <div class="content_item">
                    <div class="item_box" data-toolType = "${t.toolType}">
                        <div class="imgbg">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="${t.icon}"></use>
                        </svg>
                        </div>
                        <div class="tui_text">${t.name}</div>
                    </div>
                </div>`).join("")}
            </div>
          </div>
          <div class="${e.class2}"></div>
          `}),document.querySelector("#content_bigbox").innerHTML=O.housetypeStr}static toggleMiniToolbar(o){o.forEach(e=>{O.leftminicontentStr+=`
           ${e.list.map(t=>`<div class='left_minicontent_box  article_shadow tooltips cursor' data-type="${t.type}">
                                <svg class="icon-mmin" aria-hidden="true">
                              <use xlink:href=${t.icon}></use>
                              </svg>
                              ${t.tooltip==""?"":`<div class="tooltiptext_bottom tooltips_width_2">${t.tooltip}</div>`}
                              ${t.item?`<div class='left_minicontent_box_item article_shadow'>${t.item.map(s=>`<div class='minicontent_box_item_box' data-type="${s.type}">
                    <svg class="icon-mmin" aria-hidden="true">
                    <use xlink:href=${s.itemIcon}></use>
                    </svg>
                        <span>${s.itemName}</span>
                    </div>`).join("")}</div>`:""}
                              </div > 
                ${t.contour?"<div class='contour'></div>":""}`).join("")}
           
            `}),document.querySelector(".left_minicontent_operate").innerHTML=O.leftminicontentStr}static drawtype(){const o=document.getElementsByClassName("item_box");for(var e=0;e<o.length;e++)o[e].index=e,o[e].onclick=function(){let n=$(this)[0].dataset.tooltype;console.log(n),n=="freeDrawing"&&new Ze,n==="wall"?($(".wall_popup")[0].style.visibility="visible",$(".room_popup")[0].style.visibility="hidden",$(".topbarContent_tool_bar")[0].style.visibility="hidden"):n==="room"?($(".room_popup")[0].style.visibility="visible",$(".wall_popup")[0].style.visibility="hidden",$(".topbarContent_tool_bar")[0].style.visibility="hidden"):($(".room_popup")[0].style.visibility="hidden",$(".wall_popup")[0].style.visibility="hidden",$(".topbarContent_tool_bar")[0].style.visibility="visible"),n==="search"&&(document.querySelector(".mine_model_content").classList.remove("collect_inline_show"),document.querySelector(".mine_scheme_content").classList.add("collect_inline_show"),document.querySelectorAll(".collect_title_item")[0].classList.remove("collect_inline_active"),document.querySelectorAll(".collect_title_item")[1].classList.add("collect_inline_active"),new q().openContent(event,"mine","tab_content","tab_item"),document.querySelectorAll(".tab_item")[0].classList.add("active")),editor.list.activeTool.dispatch(n),editor.list.switchBounced.dispatch(n),$(this).hasClass("active_type")||($(".item_box").removeClass("active_type"),$(this).addClass("active_type"))};document.querySelectorAll(".left_minicontent_box").forEach(n=>{n.onclick=function(){let l=n.getAttribute("data-type");l!=""&&(l==="wall"?($(".wall_popup")[0].style.visibility="visible",$(".room_popup")[0].style.visibility="hidden"):l==="room"?($(".room_popup")[0].style.visibility="visible",$(".wall_popup")[0].style.visibility="hidden"):($(".room_popup")[0].style.visibility="hidden",$(".wall_popup")[0].style.visibility="hidden"),editor.list.activeTool.dispatch(l),editor.list.switchBounced.dispatch(l),$(this).hasClass("active_type")||($(".left_minicontent_box").removeClass("active_type"),$(this).addClass("active_type")))}}),document.querySelectorAll(".minicontent_box_item_box").forEach(n=>{n.onclick=function(){let l=n.getAttribute("data-type");editor.list.activeTool.dispatch(l),editor.list.switchBounced.dispatch(l)}})}housetypebar(){const o=document.querySelectorAll(".content_img"),e=document.querySelectorAll(".content_box");for(let t=0;t<e.length;t++)for(let s=0;s<o.length;s++)o[s].onclick=function(){const n=e[s-1];$(n).hasClass("none")?$(n).removeClass("none"):$(n).addClass("none")}}arrowsHidden(){const o=new Ke,e=document.getElementsByClassName("arrows")[0];e.onclick=function(){o.hideOrshow()}}articleMini(){const o=document.querySelector(".article_mini"),e=document.querySelector(".articleDom"),t=document.querySelector(".left_minicontent");o.addEventListener("click",function(){e.style.display="none",t.style.display="block"}),document.querySelector(".left_minicontent_btn").addEventListener("click",function(){e.style.display="block",t.style.display="none"})}};let x=O;F(x,"typeList",[{text:[{icon:"#icon-xiaosuohuxing-la",name:"搜索户型库",index:1,toolType:"search"},{icon:"#icon-shibietupian-la",name:"导入临摹图",index:3,toolType:"figure"}],name:"导入户型",class:"content_box_title",img:""},{text:[{icon:"#icon-huaqiang-la",name:"画墙(B)",index:4,toolType:"wall"},{icon:"#icon-huapangjian-la",name:"画房间(F)",index:5,toolType:"room"},{icon:"#icon-huatong-la",name:"画洞",index:6,toolType:"drawHole"}],name:"画墙",img:"./static/assets/images/shouqi.svg",class:"content_box"},{text:[{icon:"#icon-shankaimen-la",name:"门",index:7,toolType:"door"},{icon:"#icon-shuangkaimen-la",name:"双开门",index:8,toolType:"doubledoor"},{icon:"#icon-tuilamen-la",name:"移门",index:9,toolType:"slidingdoor"},{icon:"#icon-yizicong-la",name:"窗",index:10,toolType:"window"},{icon:"#icon-piaocong-la",name:"飘窗",index:11,toolType:"baywindow"},{icon:"#icon-ladecong-la",name:"落地窗",index:12,toolType:"frenchwindows"}],name:"门窗",img:"./static/assets/images/shouqi.svg",class:"content_box"},{text:[{icon:"#icon-shankaimen-la",name:"单开门",index:13,toolType:"singledoor"},{icon:"#icon-shuangkaimen-la",name:"双开门",index:14,toolType:"singleDoubleDoor"},{icon:"#icon-ziwumen-3",name:"子母门",index:15,toolType:"childMotherDoor"},{icon:"#icon-tuilamen-la",name:"移门",index:16,toolType:"moveDoor"},{icon:"#icon-yakou-la-1",name:"垭口",index:17,toolType:"pass"},{icon:"#icon-yizicong-la",name:"一字型窗",index:18,toolType:"straightWindow"},{icon:"#icon-yizicongpiaocong-la",name:"一字型飘窗",index:19,toolType:"straightBayWindow"},{icon:"#icon-juxingmen-1",name:"拱形门",index:20,toolType:"archDoor"},{icon:"#icon-juxingcong-la",name:"拱形窗",index:21,toolType:"archWindow"},{icon:"#icon-huxingcong-la",name:"弧形窗",index:23,toolType:"arcWindow"},{icon:"#icon-Lxingcong-la",name:"L型窗",index:24,toolType:"LWindow"},{icon:"#icon-Uxingcong-la",name:"U型窗",index:26,toolType:"UWindow"}],name:"定制门窗",img:"./static/assets/images/shouqi.svg",class:"content_box"},{text:[{icon:"#icon-liang-la",name:"梁",index:29,toolType:"bridge"},{icon:"#icon-yindao-la",name:"烟道",index:30,toolType:"flue"},{icon:"#icon-zhu-la",name:"柱",index:31,toolType:"post"},{icon:"#icon-mentong-la",name:"门洞",index:32,toolType:"dooropen"}],name:"结构",img:"./static/assets/images/shouqi.svg",class:"content_box"}]),F(x,"svgList",[{name:"",list:[{icon:"#icon-xiaosuohuxing-la",tooltip:"搜索户型库",type:"search"},{icon:"#icon-shibietupian-la",tooltip:"导入临摹图",type:"figure",contour:!0}]},{list:[{icon:"#icon-huaqiang-la",tooltip:"画墙",type:"wall"},{icon:"#icon-huapangjian-la",tooltip:"画房间",type:"room"},{icon:"#icon-huatong-la",tooltip:"画洞",type:"drawHole",contour:!0}]},{list:[{icon:"#icon-shankaimen-la",tooltip:"",type:"",item:[{itemIcon:"#icon-shankaimen-la",itemName:"单开门",type:"singledoor"},{itemIcon:"#icon-shuangkaimen-la",itemName:"双开门",type:"singleDoubleDoor"},{itemIcon:"#icon-ziwumen-3",itemName:"子母门",type:"childMotherDoor"},{itemIcon:"#icon-tuilamen-la",itemName:"推拉门",type:"moveDoor"}]},{icon:"#icon-yizicong-la",tooltip:"",type:"",item:[{itemIcon:"#icon-yizicong-la",itemName:"窗",type:"window"},{itemIcon:"#icon-piaocong-la",itemName:"飘窗",type:"baywindow"},{itemIcon:"#icon-ladecong-la",itemName:"落地窗",type:"frenchwindows"}]}]},{list:[{icon:"#icon-shankaimen-la",tooltip:"",type:"",item:[{itemIcon:"#icon-shankaimen-la",itemName:"定制-单开门",type:"singledoor"},{itemIcon:"#icon-shuangkaimen-la",itemName:"定制-双开门",type:"singleDoubleDoor"},{itemIcon:"#icon-ziwumen-3",itemName:"定制-字母门",type:"childMotherDoor"},{itemIcon:"#icon-tuilamen-la",itemName:"定制-推拉门",type:"moveDoor"},{itemIcon:"#icon-yakou-la-1",itemName:"定制-垭口",type:"pass"},{itemIcon:"#icon-yizicong-la",itemName:"定制-一字型窗",type:"straightWindow"},{itemIcon:"#icon-piaocong-la",itemName:"定制-一字型飘窗",type:"straightBayWindow"},{itemIcon:"#icon-Lxingcong-la",itemName:"定制-L型窗",type:"LWindow"},{itemIcon:"#icon-Lxingpiaocong-la",itemName:"定制-L型飘窗",type:"LBayWindow"},{itemIcon:"#icon-Uxingcong-la",itemName:"定制-U型窗",type:"UWindow"},{itemIcon:"#icon-Uxingpiaocong-la",itemName:"定制-U型飘窗",type:"UBayWindow"}],contour:!0}]},{list:[{icon:"#icon-liang-la",tooltip:"梁",type:"bridge"},{icon:"#icon-zhu-la",tooltip:"柱子",type:"post"},{icon:"#icon-yindao-la",tooltip:"烟道",type:"flue"},{icon:"#icon-mentong-la",tooltip:"门洞",type:"dooropen"}]}]),F(x,"housetypeStr",""),F(x,"leftminicontentStr","");class U{static globalDrop(){const o=document.querySelector("body");document.addEventListener("drop",function(e){e.preventDefault()}),o.addEventListener("dragover",function(e){e.preventDefault()}),o.addEventListener("dragleave",function(e){e.preventDefault()}),o.addEventListener("drop",function(e){const t=document.querySelector(".dialog");if(e.dataTransfer.files.length>0){if(e.dataTransfer.files[0].type==="image/png"||e.dataTransfer.files[0].type==="image/jpg"||e.dataTransfer.files[0].type==="image/jpeg"||t)return;{if(e.dataTransfer.files[0].name=="download.png")return;e.preventDefault();const s=e.dataTransfer.files;editor.list.uploadFile.dispatch(s[0].name,s[0])}}})}constructor(){}init(){const o=document.querySelector(".pop_content"),e=document.createElement("div");e.className="dialog",o.appendChild(e);const t=document.createElement("div");t.className="upload_dialog article_shadow",e.appendChild(t),this.renderView(),this.event(),this.modelupload()}event(){this.openDropEvent();const o=document.querySelector(".dialog");document.querySelector(".delete_dialog").addEventListener("click",function(){o.remove()})}renderView(){const o=[{iconName:"icon-3DS"},{iconName:"icon-DAE"},{iconName:"icon-PLY"},{iconName:"icon-DRC"},{iconName:"icon-STL"},{iconName:"icon-PLY-BINARY"},{iconName:"icon-STL-BINARY"},{iconName:"icon-DXF"},{iconName:"icon-FBX"},{iconName:"icon-GLTF"},{iconName:"icon-GLB"},{iconName:"icon-OBJ"}],e=document.querySelector(".upload_dialog"),t=document.createElement("div");t.className="upload_title",e.appendChild(t),t.innerHTML="<span>上传模型</span><span class='cursor delete_dialog'>x</span>";const s=document.createElement("div");s.className="upload_content center",e.appendChild(s),$(".upload_content").append(`<div class='upload_content_box '>
            <span class='iconfont icon-yunshangzhuan upload_margin'></span>
            <div class='upload_margin'>
            <div class='upload_click cursor'>
            <span>点击</span>
            <input class='cursor' id='upload' type='file' accept=".glb" multiple />
            </div>
            <span>或 拖动模型到此处上传</span>
            </div>
           <div class='upload_margin'>${o.map(c=>`<span class='upload_icon iconfont ${c.iconName}'></span>`).join("")}</div>
            <span class='upload_size upload_margin'>单个文件上限1M     支持以上文件格式</span>
             </div>`);const n=document.createElement("div");n.className="upload_preview",e.appendChild(n);const l=document.createElement("div");l.className="upload_footer",e.appendChild(l),$(".upload_footer").append("<button class='upload_footer_btn cursor'>上传模型</button>")}openDropEvent(){const o=document.querySelector(".upload_content");document.addEventListener("drop",function(e){e.preventDefault()}),o.addEventListener("dragover",function(e){o.classList.add("load_over"),e.preventDefault()}),o.addEventListener("dragleave",function(e){o.classList.remove("load_over"),e.preventDefault()}),o.addEventListener("drop",function(e){e.preventDefault();const t=e.dataTransfer.files,s=t.length;if(U.modeluploadBtn(t[0].name,t[0]),!s){o.classList.remove("load_over");return}Array.prototype.S=String.fromCharCode(2),Array.prototype.in_array=function(c){var d=new RegExp(this.S+c+this.S);return d.test(this.S+this.join(this.S)+this.S)};var n=window.URL.createObjectURL(t[0]);if(t[0].type.indexOf("image")===0){var l="<img width='200px' height='200px' src='"+n+"'>";document.querySelector(".upload_preview").innerHTML=l}else{var l="文件名字:"+t[0].name;document.querySelector(".upload_preview").innerHTML=l}o.classList.add("load_over"),window.willUploadFileList=t},!1)}modelupload(){document.querySelector("#upload").addEventListener("change",function(){const e=this.files[0],t=this.files[0].name,s=new FileReader;s.readAsDataURL(e),s.onload=async function(){await U.modeluploadBtn(t,e)}},!1)}static modeluploadBtn(o,e){const t=document.querySelector("body"),s=document.querySelector(".dialog");document.querySelector(".upload_footer_btn").addEventListener("click",function(){t.classList.remove("load_over"),s.remove(),editor.list.uploadFile.dispatch(o,e)})}}document.getElementsByClassName("left_c_t");var X=document.getElementsByClassName("left"),Y=document.getElementsByClassName("right"),re=document.getElementsByClassName("l_titile_top"),ce=document.getElementsByClassName("l_definition"),de=document.getElementsByClassName("wall"),me=document.getElementsByClassName("switchbtn"),ue=document.getElementsByClassName("light"),pe=document.getElementsByClassName("location"),ge=document.getElementsByClassName("background");class Qe{common(){re[0].style.display="block",ce[0].style.display="block",ue[0].style.display="block",pe[0].style.display="block",de[0].style.display="none",me[0].style.display="none",ge[0].style.display="none",X[0].style.display="flex",Y[0].style.display="block"}allView(){re[0].style.display="none",ce[0].style.display="block",ue[0].style.display="block",pe[0].style.display="block",de[0].style.display="none",me[0].style.display="none",ge[0].style.display="none",X[0].style.display="flex",Y[0].style.display="block"}verticalView(){re[0].style.display="none",ce[0].style.display="block",ue[0].style.display="block",pe[0].style.display="none",de[0].style.display="block",me[0].style.display="block",ge[0].style.display="block",X[0].style.display="flex",Y[0].style.display="block"}roam(){console.log(2131321),re[0].style.display="block",ce[0].style.display="block",ue[0].style.display="block",pe[0].style.display="block",de[0].style.display="none",me[0].style.display="none",ge[0].style.display="none",X[0].style.display="flex",Y[0].style.display="block"}template(){X[0].style.display="none",Y[0].style.display="none"}hideOrshow(){const o=document.getElementsByClassName("left_c")[0];o.style.width=="0px"?(o.style.width="344px",$(".planeBox").css("left","344px"),$(".show_btn").addClass("none")):(o.style.width="0px",$(".planeBox").css("left","0"),$(".show_btn").removeClass("none"))}lightSwitch(o,e){var t,s;for(s=document.getElementsByClassName(e),t=0;t<s.length;t++)console.log(111),s[t].style.display="none";document.getElementById(o).style.display="flex"}locationSwitch(o,e){s=document.getElementsByClassName(e);var t,s;for(t=0;t<s.length;t++)s[t].style.display="none";document.getElementById(o).style.display="flex"}}const we=[{name:"all",srcList:[{src:"../../../static/assets/images/reder/all/1.webp"},{src:"../../../static/assets/images/reder/all/2.webp"},{src:"../../../static/assets/images/reder/all/3.webp"},{src:"../../../static/assets/images/reder/all/4.webp"},{src:"../../../static/assets/images/reder/all/5.webp"},{src:"../../../static/assets/images/reder/all/6.webp"},{src:"../../../static/assets/images/reder/all/7.webp"},{src:"../../../static/assets/images/reder/all/8.webp"}]},{name:"xiandaijianyue",srcList:[{src:"../../../static/assets/images/reder/xiandaijianyue/1.webp"},{src:"../../../static/assets/images/reder/xiandaijianyue/2.webp"},{src:"../../../static/assets/images/reder/xiandaijianyue/3.webp"},{src:"../../../static/assets/images/reder/xiandaijianyue/4.webp"},{src:"../../../static/assets/images/reder/xiandaijianyue/5.webp"},{src:"../../../static/assets/images/reder/xiandaijianyue/6.webp"},{src:"../../../static/assets/images/reder/xiandaijianyue/7.webp"},{src:"../../../static/assets/images/reder/xiandaijianyue/8.webp"}]},{name:"xinzhongshi",srcList:[{src:"../../../static/assets/images/reder/xinzhongshi/1.webp"},{src:"../../../static/assets/images/reder/xinzhongshi/2.webp"},{src:"../../../static/assets/images/reder/xinzhongshi/3.webp"},{src:"../../../static/assets/images/reder/xinzhongshi/4.webp"},{src:"../../../static/assets/images/reder/xinzhongshi/5.webp"},{src:"../../../static/assets/images/reder/xinzhongshi/6.webp"},{src:"../../../static/assets/images/reder/xinzhongshi/7.webp"},{src:"../../../static/assets/images/reder/xinzhongshi/8.webp"}]},{name:"qinshe",srcList:[{src:"../../../static/assets/images/reder/qinshe/1.webp"},{src:"../../../static/assets/images/reder/qinshe/2.webp"},{src:"../../../static/assets/images/reder/qinshe/3.webp"},{src:"../../../static/assets/images/reder/qinshe/4.webp"},{src:"../../../static/assets/images/reder/qinshe/5.webp"},{src:"../../../static/assets/images/reder/qinshe/6.webp"},{src:"../../../static/assets/images/reder/qinshe/7.webp"},{src:"../../../static/assets/images/reder/qinshe/8.webp"}]},{name:"beiou",srcList:[{src:"../../../static/assets/images/reder/beiou/1.webp"},{src:"../../../static/assets/images/reder/beiou/2.webp"},{src:"../../../static/assets/images/reder/beiou/3.webp"},{src:"../../../static/assets/images/reder/beiou/4.webp"},{src:"../../../static/assets/images/reder/beiou/5.webp"},{src:"../../../static/assets/images/reder/beiou/6.webp"},{src:"../../../static/assets/images/reder/beiou/7.webp"},{src:"../../../static/assets/images/reder/beiou/8.webp"}]},{name:"oushi",srcList:[{src:"../../../static/assets/images/reder/oushi/1.webp"},{src:"../../../static/assets/images/reder/oushi/2.webp"},{src:"../../../static/assets/images/reder/oushi/3.webp"},{src:"../../../static/assets/images/reder/oushi/4.webp"},{src:"../../../static/assets/images/reder/oushi/5.webp"},{src:"../../../static/assets/images/reder/oushi/6.webp"},{src:"../../../static/assets/images/reder/oushi/7.webp"},{src:"../../../static/assets/images/reder/oushi/8.webp"}]},{name:"jianou",srcList:[{src:"../../../static/assets/images/reder/jianou/1.webp"},{src:"../../../static/assets/images/reder/jianou/2.webp"},{src:"../../../static/assets/images/reder/jianou/3.webp"},{src:"../../../static/assets/images/reder/jianou/4.webp"},{src:"../../../static/assets/images/reder/jianou/5.webp"},{src:"../../../static/assets/images/reder/jianou/6.webp"},{src:"../../../static/assets/images/reder/jianou/7.webp"},{src:"../../../static/assets/images/reder/jianou/8.webp"}]},{name:"rishi",srcList:[{src:"../../../static/assets/images/reder/rishi/1.webp"},{src:"../../../static/assets/images/reder/rishi/2.webp"},{src:"../../../static/assets/images/reder/rishi/3.webp"},{src:"../../../static/assets/images/reder/rishi/4.webp"},{src:"../../../static/assets/images/reder/rishi/5.webp"},{src:"../../../static/assets/images/reder/rishi/6.webp"},{src:"../../../static/assets/images/reder/rishi/7.webp"},{src:"../../../static/assets/images/reder/rishi/8.webp"}]},{name:"meishi",srcList:[{src:"../../../static/assets/images/reder/meishi/1.webp"},{src:"../../../static/assets/images/reder/meishi/2.webp"},{src:"../../../static/assets/images/reder/meishi/3.webp"},{src:"../../../static/assets/images/reder/meishi/4.webp"},{src:"../../../static/assets/images/reder/meishi/5.webp"},{src:"../../../static/assets/images/reder/meishi/6.webp"},{src:"../../../static/assets/images/reder/meishi/7.webp"},{src:"../../../static/assets/images/reder/meishi/8.webp"}]},{name:"jianmei",srcList:[{src:"../../../static/assets/images/reder/jianmei/1.webp"},{src:"../../../static/assets/images/reder/jianmei/2.webp"},{src:"../../../static/assets/images/reder/jianmei/3.webp"},{src:"../../../static/assets/images/reder/jianmei/4.webp"},{src:"../../../static/assets/images/reder/jianmei/5.webp"},{src:"../../../static/assets/images/reder/jianmei/6.webp"},{src:"../../../static/assets/images/reder/jianmei/7.webp"},{src:"../../../static/assets/images/reder/jianmei/8.webp"}]},{name:"tuoji",srcList:[{src:"../../../static/assets/images/reder/tuoji/1.webp"},{src:"../../../static/assets/images/reder/tuoji/2.webp"},{src:"../../../static/assets/images/reder/tuoji/3.webp"},{src:"../../../static/assets/images/reder/tuoji/4.webp"},{src:"../../../static/assets/images/reder/tuoji/5.webp"},{src:"../../../static/assets/images/reder/tuoji/6.webp"},{src:"../../../static/assets/images/reder/tuoji/7.webp"},{src:"../../../static/assets/images/reder/tuoji/8.webp"}]},{name:"yuanmu",srcList:[{src:"../../../static/assets/images/reder/yuanmu/1.webp"},{src:"../../../static/assets/images/reder/yuanmu/2.webp"},{src:"../../../static/assets/images/reder/yuanmu/3.webp"},{src:"../../../static/assets/images/reder/yuanmu/4.webp"},{src:"../../../static/assets/images/reder/yuanmu/5.webp"},{src:"../../../static/assets/images/reder/yuanmu/6.webp"},{src:"../../../static/assets/images/reder/yuanmu/7.webp"},{src:"../../../static/assets/images/reder/yuanmu/8.webp"}]},{name:"naiyou",srcList:[{src:"../../../static/assets/images/reder/naiyou/1.webp"},{src:"../../../static/assets/images/reder/naiyou/2.webp"},{src:"../../../static/assets/images/reder/naiyou/3.webp"},{src:"../../../static/assets/images/reder/naiyou/4.webp"},{src:"../../../static/assets/images/reder/naiyou/5.webp"},{src:"../../../static/assets/images/reder/naiyou/6.webp"},{src:"../../../static/assets/images/reder/naiyou/7.webp"},{src:"../../../static/assets/images/reder/naiyou/8.webp"}]},{name:"yishi",srcList:[{src:"../../../static/assets/images/reder/yishi/1.webp"},{src:"../../../static/assets/images/reder/yishi/2.webp"},{src:"../../../static/assets/images/reder/yishi/3.webp"},{src:"../../../static/assets/images/reder/yishi/4.webp"},{src:"../../../static/assets/images/reder/yishi/5.webp"},{src:"../../../static/assets/images/reder/yishi/6.webp"},{src:"../../../static/assets/images/reder/yishi/7.webp"},{src:"../../../static/assets/images/reder/yishi/8.webp"}]},{name:"gangshi",srcList:[{src:"../../../static/assets/images/reder/gangshi/1.webp"},{src:"../../../static/assets/images/reder/gangshi/2.webp"},{src:"../../../static/assets/images/reder/gangshi/3.webp"},{src:"../../../static/assets/images/reder/gangshi/4.webp"},{src:"../../../static/assets/images/reder/gangshi/5.webp"},{src:"../../../static/assets/images/reder/gangshi/6.webp"},{src:"../../../static/assets/images/reder/gangshi/7.webp"},{src:"../../../static/assets/images/reder/gangshi/8.webp"}]},{name:"houxiandai",srcList:[{src:"../../../static/assets/images/reder/houxiandai/1.webp"},{src:"../../../static/assets/images/reder/houxiandai/2.webp"},{src:"../../../static/assets/images/reder/houxiandai/3.webp"},{src:"../../../static/assets/images/reder/houxiandai/4.webp"},{src:"../../../static/assets/images/reder/houxiandai/5.webp"},{src:"../../../static/assets/images/reder/houxiandai/6.webp"},{src:"../../../static/assets/images/reder/houxiandai/7.webp"},{src:"../../../static/assets/images/reder/houxiandai/8.webp"}]},{name:"gongyefeng",srcList:[{src:"../../../static/assets/images/reder/gongyefeng/1.webp"},{src:"../../../static/assets/images/reder/gongyefeng/2.webp"},{src:"../../../static/assets/images/reder/gongyefeng/3.webp"},{src:"../../../static/assets/images/reder/gongyefeng/4.webp"},{src:"../../../static/assets/images/reder/gongyefeng/5.webp"},{src:"../../../static/assets/images/reder/gongyefeng/6.webp"},{src:"../../../static/assets/images/reder/gongyefeng/7.webp"},{src:"../../../static/assets/images/reder/gongyefeng/8.webp"}]},{name:"hunda",srcList:[{src:"../../../static/assets/images/reder/hunda/1.webp"},{src:"../../../static/assets/images/reder/hunda/2.webp"},{src:"../../../static/assets/images/reder/hunda/3.webp"},{src:"../../../static/assets/images/reder/hunda/4.webp"},{src:"../../../static/assets/images/reder/hunda/5.webp"},{src:"../../../static/assets/images/reder/hunda/6.webp"},{src:"../../../static/assets/images/reder/hunda/7.webp"},{src:"../../../static/assets/images/reder/hunda/8.webp"}]},{name:"tianyuan",srcList:[{src:"../../../static/assets/images/reder/tianyuan/1.webp"},{src:"../../../static/assets/images/reder/tianyuan/2.webp"},{src:"../../../static/assets/images/reder/tianyuan/3.webp"},{src:"../../../static/assets/images/reder/tianyuan/4.webp"},{src:"../../../static/assets/images/reder/tianyuan/5.webp"},{src:"../../../static/assets/images/reder/tianyuan/6.webp"},{src:"../../../static/assets/images/reder/tianyuan/7.webp"},{src:"../../../static/assets/images/reder/tianyuan/8.webp"}]},{name:"dizhonghai",srcList:[{src:"../../../static/assets/images/reder/dizhonghai/1.webp"},{src:"../../../static/assets/images/reder/dizhonghai/2.webp"},{src:"../../../static/assets/images/reder/dizhonghai/3.webp"},{src:"../../../static/assets/images/reder/dizhonghai/4.webp"},{src:"../../../static/assets/images/reder/dizhonghai/5.webp"},{src:"../../../static/assets/images/reder/dizhonghai/6.webp"},{src:"../../../static/assets/images/reder/dizhonghai/7.webp"},{src:"../../../static/assets/images/reder/dizhonghai/8.webp"}]}],te=new Qe;class eo{constructor(){const o=document.querySelector("body");var e=document.createElement("div");e.setAttribute("id","renderDom"),e.className="renderDom contentFlag none",o.insertBefore(e,o.child);const t=document.querySelector("#renderDom"),s=document.createElement("div");s.className="render_dom_box ",t.appendChild(s);var n=document.createElement("div");n.className="renderHeaderDom",s.insertBefore(n,s.child);var l=document.createElement("div");l.className="contentDom",s.appendChild(l),$(".contentDom").append(`
      <div class="renderContent renderChirld">
      </div>
      `),this.init(),this.method(),new oo,new to,new so,editor.list.renderCameraSize.dispatch([16,9]),editor.list.initRenderMain.dispatch([$("#renderCanvas"),$(".top_content"),document.getElementById("cemera_window")])}init(){$("#renderDom").append(`
      <div id="renderCanvas">
      </div>
        `),$(".renderHeaderDom").append(`
      <div class="header_t flex align_items defult_m">
        <svg class="rederLogo" aria-hidden="true">
          <use xlink:href="#icon-bodi_2"></use>
        </svg>
        <span>睿几何设计平台</span>
      </div>
    
      <div class="header_c flex align_items justify-content">
    
        <div class="flex heder_c_p mouse"></div>
    
      </div>
      
      <div class="header_i flex align_items">
    
        <div class="header_i_c clumCenter">
          <div class="iconfont icon-bangchu renderIcon"></div>
          <div class="text">帮助</div>
        </div>
    
        <div class="header_i_c render_atlas clumCenter">
          <div class="iconfont icon-tuce renderIcon"></div>
          <div class="text">渲染图集</div>
    
          <div class="s_top_content photo_content">
            <div class="photo_t"></div>
            <div class="photo_b flex align_items justify-content s_font">
              <div>查看更多</div>
            </div>
          </div>
        </div>
      
    
    
        <div class="header_i_c clumCenter">
          <div class="iconfont icon-shezhi renderIcon"></div>
          <div class="text">设置</div>
        </div>
    
        <div class="header_i_c_boder"></div>
    
        <div class="escBtn allcenter">取消</div>
    
      </div>
    
    
      `),$("#renderDom").append(`
          <div class='aiRender none'>
            <div class="ar-header"></div>
            <div class="ar-left-aside"></div>
            <div class="ar-right-aside"></div>
            <button class="chatBtn">
              <div class="chat-container">
                <i class="rdlogo iconfont icon-ruijiheLOGO"></i>
                <img class="chat-icon" src="../../../static/assets/images/reder/chat.svg"/>
              </div>
            </button>

            <div class="downloadContainer">
              <button> <i class="dwlogo iconfont icon-xiazaituzhi"></i>下载</button>
              <button><i class="dwlogo iconfont icon-wenjianga2"></i>全部下载</button>
            </div>
          </div>
        `),$(".ar-left-aside").append(`
          <div class="left-aside-title">智能AI</div>
          <img class="left-aside-img" src="../../../static/assets/images/reder/zhineng.svg"/>

          <div class="left-aside-container">
            <div>宽度</div>
            <input class="left-aside-container-range" type="range"/>
            <input class="left-aside-container-input" type="number"/>
            <div class="input-unit">px</div>
          </div>

          <div class="left-aside-container">
            <div>高度</div>
            <input class="left-aside-container-range" type="range"/>
            <input class="left-aside-container-input" type="number"/>
            <div class="input-unit">px</div>
          </div>

          <div class="left-aside-container">
            <div>生成次数</div>
            <input class="left-aside-container-input" type="number"/>
          </div>

          <div class="left-aside-text">
            最多可生成100张,生成数量越多,电脑配置需求越高,时间越长.
          </div>
          <button class="left-aside-button">开始生成</button>
        `),$(".ar-right-aside").append(`
          <div class="img-container">
            ${we[0].srcList.map(o=>`
                <div class="renderImg-container">
                  <img class="renderImg-b" src="${o.src}" />
                  <div class="definition-btn-container">
                    <button class="definition-btn">标准画质</button>
                    <button class="definition-btn">高清画质</button>
                    <button class="definition-btn">超清画质</button>
                  </div>
                </div>
            `).join("")}

          </div>

          <div class="carousel-container">
            ${we[0].srcList.map(o=>`
                    <div class="renderImg-s-container">
                      <img class="renderImg-s" src="${o.src}" />
                    </div>
            `).join("")}

                <div class="remove-carousel">
                  <i class="iconfont icon-you-xiaoxiao"></i>
                </div>
          </div>
        `)}method(){var o=[{type:"普通图"},{type:"全景图"},{type:"俯视图"}];$(".header_c").append(`
        ${o.map(t=>`
            <div class="header_p ">${t.type}</div>
          `).join("")}
      `);var e=document.querySelectorAll(".header_p");e.forEach((t,s)=>{const n=e[s].innerHTML;e[s].onclick=function(){switch(n){case"普通图":$(".renderChirld").addClass("none"),$(".renderContent").removeClass("none"),$(".header_p").removeClass("add_bd"),$(this).addClass("add_bd"),te.common();break;case"全景图":$(".renderChirld").addClass("none"),$(".renderContent").removeClass("none"),$(".header_p").removeClass("add_bd"),$(this).addClass("add_bd"),te.allView();break;case"俯视图":$(".renderChirld").addClass("none"),$(".renderContent").removeClass("none"),$(".header_p").removeClass("add_bd"),$(this).addClass("add_bd"),te.verticalView();break;case"漫游视频":$(".header_p").removeClass("add_bd"),$(this).addClass("add_bd"),$(".renderChirld").addClass("none"),$(".wanderDom").removeClass("none");break}}}),$(".escBtn").click(()=>{$(".contentFlag").addClass("none"),$("#plugin_container").removeClass("none"),$("#popup_content").removeClass("none"),document.documentElement.style.setProperty("--click-color","#00559D"),$(".canvas").removeClass("none"),editor.openRenderScene=!1,document.querySelector("#cameraShot_box")&&document.querySelector("#cameraShot_box").remove()})}}class oo{constructor(){this.init(),this.method()}init(){let o=[{name:"全部",class:"styleBoxClick"},{name:"现代简约",class:""},{name:"新中式",class:""},{name:"轻奢",class:""},{name:"北欧",class:""},{name:"欧式",class:""},{name:"简欧",class:""},{name:"日式",class:""},{name:"美式",class:""},{name:"简美",class:""},{name:"佗寂",class:""},{name:"原木",class:""},{name:"奶油",class:""},{name:"意式",class:""},{name:"港式",class:""},{name:"后现代",class:""},{name:"工业风",class:""},{name:"混搭",class:""},{name:"田园",class:""},{name:"地中海",class:""}],e=[{id:"16:9",class:"block ratioContent",list:[{id:1,font:"icon-duanshijian",type:"unlock",value1:"1k标清",value2:"1024*576",time:"排队耗时 00:32"},{id:2,font:"icon-duanshijian",type:"unlock",value1:"2k高清",value2:"1920*1080",time:"排队耗时 02:44"},{id:3,font:"icon-duanshijian",type:"unlock",value1:"3k超清",value2:"2560*1440",time:"排队耗时 02:36"},{id:4,font:"icon-zhangshijian",type:"lock",value1:"4k超高清",value2:"3840*2160",time:"排队耗时 02:44"},{id:5,font:"icon-zhangshijian",type:"lock",value1:"8k超高清",value2:"7680*4320",time:"排队耗时 02:44"}]},{id:"9:16",class:"none ratioContent",list:[{id:1,font:"icon-duanshijian",type:"unlock",value1:"1k标清",value2:"576*1024",time:"排队耗时 00:32"},{id:2,font:"icon-duanshijian",type:"unlock",value1:"2k高清",value2:"1080*1920",time:"排队耗时 02:44"},{id:3,font:"icon-duanshijian",type:"unlock",value1:"3k超清",value2:"1440*2560",time:"排队耗时 02:36"},{id:4,font:"icon-zhangshijian",type:"lock",value1:"4k超高清",value2:"2160*3840",time:"排队耗时 02:44"},{id:5,font:"icon-zhangshijian",type:"lock",value1:"8k超高清",value2:"4320*7680",time:"排队耗时 02:44"}]},{id:"4:3",class:"none ratioContent",list:[{id:1,font:"icon-duanshijian",type:"unlock",value1:"1k标清",value2:"1024*768",time:"排队耗时 00:32"},{id:2,font:"icon-duanshijian",type:"unlock",value1:"2k高清",value2:"1600*1200",time:"排队耗时 02:44"},{id:3,font:"icon-duanshijian",type:"unlock",value1:"3k超清",value2:"3200*2400",time:"排队耗时 02:36"},{id:4,font:"icon-zhangshijian",type:"lock",value1:"4k超高清",value2:"4000*3000",time:"排队耗时 02:44"},{id:5,font:"icon-zhangshijian",type:"lock",value1:"8k超高清",value2:"8000*6000",time:"排队耗时 02:44"}]},{id:"3:4",class:"none ratioContent",list:[{id:1,font:"icon-duanshijian",type:"unlock",value1:"1k标清",value2:"768*1024",time:"排队耗时 00:32"},{id:2,font:"icon-duanshijian",type:"unlock",value1:"2k高清",value2:"1200*1600",time:"排队耗时 02:44"},{id:3,font:"icon-duanshijian",type:"unlock",value1:"3k超清",value2:"2400*3200",time:"排队耗时 02:36"},{id:4,font:"icon-zhangshijian",type:"lock",value1:"4k超高清",value2:"3000*4000",time:"排队耗时 02:44"},{id:5,font:"icon-zhangshijian",type:"lock",value1:"8k超高清",value2:"6000*8000",time:"排队耗时 02:44"}]},{id:"1:1",class:"none ratioContent",list:[{id:1,font:"icon-duanshijian",type:"unlock",value1:"1k标清",value2:"768*768",time:"排队耗时 00:32"},{id:2,font:"icon-duanshijian",type:"unlock",value1:"2k高清",value2:"1920*1920",time:"排队耗时 02:44"},{id:3,font:"icon-duanshijian",type:"unlock",value1:"3k超清",value2:"3200*3200",time:"排队耗时 02:36"},{id:4,font:"icon-zhangshijian",type:"lock",value1:"4k超高清",value2:"3840*3840",time:"排队耗时 02:44"},{id:5,font:"icon-zhangshijian",type:"lock",value1:"8k超高清",value2:"7680*7680",time:"排队耗时 02:44"}]}],t=[{num:"16:9",class:"l_top_content_b_color"},{num:"9:16"},{num:"4:3"},{num:"3:4"},{num:"1:1"}];$(".renderContent").append(`
            <!-- 左侧边栏 --> 
            <div class="left flex align_items">
              <div class="left_c">
                <div class="left_c_t scroll">

                  <div class="renderTitle spacebetween">
                    <span>渲染</span>
                    <i class="iconfont icon-gongjukuang-shousuo left_btn"></i>
                  </div>

                  <div class="l_titile_top" id="l_titile_top">
                    <div class="l_top_title">构图</div>
                    <div class="l_top_content" id="Composition"></div>
                  </div>

                  <div class="l_definition" id="definition">
                    <div class="l_top_title definition_title">清晰度</div>
                    <div class="l_top_content" id="definition_content"></div>
                  </div>

                  <div class="l_definition" id="">
                    <div class="l_top_title definition_title ">风格推荐</div>
                    <div class="l_top_content" id="">
                      <div class="styleTitle">
                        ${o.map(s=>`
                           <div class="styleBox ${s.class}">${s.name}</div>
                          `).join("")}
                      </div>
                      <div class="styleImgContent">
                        ${we[0].srcList.map(s=>`
                                <img class="styleImg" src="${s.src}" />
                          `).join("")}
                       
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div class="show_btn iconfont icon-you none"></div>
            </div>
          `),$("#definition_content").append(`
                ${e.map(s=>`
                  <div id="${s.id}" class="${s.class}">
                    ${s.list.map(n=>`
                      <div class="resolution-slc spacebetween">
          
                        <div class="rd_loding ">
                          <i class="iconfont ${n.font}"></i>
                        </div>
          
                        <div class="resolution-slc-content" >
                          <div>${n.value1}</div>
                          <div>${n.value2}</div>
                        </div> 
                      </div>
                      `).join("")}
          
                  </div>  
                  `).join("")}
    
          `),$("#Composition").append(`
          ${t.map(s=>`
              <div class="l_top_content_b ${s.class}">${s.num}</div>
            `).join("")}
          
        `)}method(){$(".left_btn").click(()=>{te.hideOrshow()}),$(".show_btn").click(()=>{te.hideOrshow()}),$(".resolution-slc-content").click(function(){$(".resolution-slc-content").removeClass("l_top_content_b_color"),$(this).addClass("l_top_content_b_color"),console.log(this)}),$(".styleBox").click(function(){$(".styleBox").removeClass("styleBoxClick"),$(this).addClass("styleBoxClick");const o=$(this).html();let e=0;switch(o){case"全部":e=0;break;case"现代简约":e=1;break;case"新中式":e=2;break;case"轻奢":e=3;break;case"北欧":e=4;break;case"欧式":e=5;break;case"简欧":e=6;break;case"日式":e=7;break;case"美式":e=8;break;case"简美":e=9;break;case"佗寂":e=10;break;case"原木":e=11;break;case"奶油":e=12;break;case"意式":e=13;break;case"港式":e=14;break;case"后现代":e=15;break;case"工业风":e=16;break;case"混搭":e=17;break;case"田园":e=18;break;case"地中海":e=19;break}$(".styleImgContent").empty(),$(".styleImgContent").append(`
            ${we[e].srcList.map(t=>`
                  <img class="styleImg" src="${t.src}" />
            `).join("")}
            `)}),$(".styleImg").click(function(){console.log(this)})}}class to{constructor(){this.init(),this.method()}init(){$(".renderContent").append(`
    <!-- 右侧边栏 --> 
        <div class="rederRight">
          <div class="right_t">
          
            <div class="right-t-title flex">
              <div class="title_1 iconfont flex align-center justify-content ">
              <div class="iconfont icon-tuozhuai"></div>
              </div>
    
              <div class="title_2 viewTitle mouse flex align-center t_center justify-content s_font t_bc">视图</div>
              <div class="title_3 viewTitle mouse flex align-center t_center justify-content s_font ">房间选择</div>
              
            </div>
    
            <div class="top_content">
             
            </div>
    
          </div>
    
          <div class="right_content ">
            <div class="right_content_t flex align-center justify-between">
              <div class="flex align-center justify-content">
                <div class="tuozhuaidiv">
                  <div class="iconfont icon-tuozhuai"></div>
                </div>
    
                <div class="s_font">参数设置</div>
              </div>
            </div>
    
            <div class="right_content_b">
              <div class="cemera_parameter">
                <div class="cemera_p_t flex justify-between">
                  <div>相机参数</div>
                  <div class="iconfont icon-xiajiantou"></div>
                </div>
    
                <div class="cemera_p_c">
                  <div class="cemera_window" id="cemera_window">
    
                  <div class="cemeraInputBox" style="z-index:2">
                    <input id="cemeraAngle" class="cemeraInput" value="" />
                    <input id="cemeraHeight" class="cemeraInput" value="" />
                  </div>
    
                  </div>
                </div>
              </div>
    
              <div class="cemera_view">
                <div class="cemera_view_t spacebetween">
                  <div>视野</div>
                  <input class="viewInput" value="60°" />
                </div>
    
                <div class="cemera_view_c" ></div>
    
              </div>
              
    
              <div class="cemeraCrop spacebetween">
                <div>相机裁剪</div>
              </div>
    
              <div class="cemeraRevise spacebetween">
                <div>相机校正</div>
              </div>
    
            </div>
          </div>
        </div>
    `),$(".renderContent").append(`
            <div class="renderTools">
        
              <div class="spacebetween compositionBox">
                <div class="compositionbtn">
        
                <div class="compositionbtnDiv">
                  <svg class="icon-render" aria-hidden="true">
                    <use xlink:href="#icon-fuchuxian"></use>
                  </svg>
        
                  <div class="composition_c s_font">
                    <div class="composition_t">构图辅助线</div>
        
                    <div class="composition_p flex justify-between">
                    
                      <div id="noComposition" class="composition_p_c"></div>
        
                      <div id="Sudoku" class="composition_p_c">
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                        <div class="Sudoku"></div>
                      </div>
        
                      <div id="goldenCut" class="composition_p_c">
                        <div class="goldenCut-one"></div>
                        <div class="goldenCut-two"></div>
                        <div class="goldenCut-one"></div>
                        <div class="goldenCut-there"></div>
                        <div class="goldenCut-four"></div>
                        <div class="goldenCut-there"></div>
                        <div class="goldenCut-one"></div>
                        <div class="goldenCut-two"></div>
                        <div class="goldenCut-one"></div>
                      </div>
                    </div>
        
                    <div class=" flex justify-between">
                      <div style="width:72px; text-align:center">无</div>
                      <div style="width:72px; text-align:center">九宫格</div>
                      <div style="width:72px; text-align:center">黄金分割</div>
                    </div>
        
                  </div>
                </div>
        
                <div class="ResetPerspectiveDiv">
                  <svg class="icon-render" aria-hidden="true">
                    <use xlink:href="#icon-tongzhishijiao"></use>
                  </svg>
                </div>
        
              </div>
        
              <div class="render flex justify-between">
               <div class="n_render flex align_items justify-content">
                  <div class="flex align_items justify-content">
                    <div class="iconfont icon-xiangji n_render_icon"></div>
                  <div class="n_render_text renderNow">立即渲染</div>
                </div>
              </div> 
        
            </div>
        
        
            </div>  
        `)}method(){let o=document.querySelectorAll(".viewTitle");o.forEach((e,t)=>{o[t].onclick=function(){$(".viewTitle").removeClass("t_bc"),$(this).addClass("t_bc")}}),$(function(){new oe({location:".cemeraCrop"})}),$(function(){new oe({location:".cemeraRevise"})}),$(".composition_p_c").click(function(){$(".composition_p_c").removeClass("composition-style"),$(this).addClass("composition-style"),console.log(this.id);let e=this.id;(e=="noComposition"||e=="Sudoku"||e=="goldenCut")&&console.log(e)}),$(function(){$(".right_t").resizable({handles:"sw",minWidth:272,minHeight:188,maxWidth:1295})}),$(function(){$(".right_t").draggable({handle:".title_1"})}),$(function(){$(".right_content").draggable({handle:".right_content_t"})}),$(".right_t").draggable({snap:".rederRight",snapMode:"inner"}),$(".right_content").draggable({snap:".rederRight",snapMode:"inner"})}}class so{constructor(){this.init(),this.method()}init(){let o=[{id:1,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:2,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:3,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:4,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:5,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:6,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:7,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:8,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:9,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:10,src:"./static/assets/images/2400.jpg",value:"客厅空间"},{id:11,src:"./static/assets/images/2400.jpg",value:"客厅空间"}],e=[{id:1,src:"./static/assets/images/2400.jpg",value:"室内白天"},{id:2,src:"./static/assets/images/2400.jpg",value:"室内夜晚"},{id:3,src:"./static/assets/images/2400.jpg",value:"室外写实夜晚"}];$(".contentDom").append(`
  <div class="wanderDom renderChirld none">
    <div style=" width: 100%;height: 100%;" class="flex-end wanderBox">
    </div>
  </div>
`),$(".wanderBox").append(`
      <div class='wanderLeft '>

        <div class="wd_title spacebetween" style="padding-right:16px">
          <span>渲染</span>
          <i>111</i>
        </div>

        <div class="flex" style="padding-top:23px;padding-right:16px">
          <div class="wd_switchSettingBtn wd_st_bd mouse">渲染设置</div>
          <div class="wd_switchSettingBtn mouse" style="margin-left:24px">镜头库</div>
        </div>

        <div class="wd_content wd_st_content" style="padding-right:16px">

         <div class="wdSetting">
           <span>构图</span>
           <div class="spacebetween wdLayout" style="margin-top:19px">
             <div class="wdRatio">16:9</div>
             <div class="wdRatio">9:16</div>
             <div class="wdRatio">4:3</div>
             <div class="wdRatio">3:4</div>
             <div class="wdRatio">1:1</div>
           </div>
         </div>   

          <div class="wdSetting" style="margin-top:16px">
           <span>灯光</span>

            <div>

              <div class="spacebetween" style="width:100%; margin-top:16px">
                <div class="wdSwitchbtn t_bc">写实</div>
                <div class="wdSwitchbtn">均衡</div>
              </div>
 
              <div class="wdRealistic">

                <div style="display: flex;flex-wrap: wrap;">
                  ${e.map(t=>`
                      <div class="wd_photo_div">
                        <img class="wdRealistic_img" src="${t.src}">
                        <span>${t.value}</span>
                        <div class="wdRealisticSetting none">
                          <div class="wdRealisticSettingBox">
                            <div class="triangle"></div>
                            
                            <div class="wdRealisticSettinDiv">
                              <div>自动曝光</div>
                              <div></div>
                            </div>
                            
                            <div class="wdRealisticSettinDiv">
                              <div>亮度设置</div>
                              <div></div>
                            </div>
                            
                            <div class="wdRealisticSettinDiv">
                              <div>效果设置</div>
                              <div></div>
                            </div>

                          </div>
                        </div>
                      </div>
                    `).join("")}
                    
                    <div class="wdMoreLight">
                      <div>...</div>
                      <span>其他灯光模板</span>
                    </div>
                </div>


              </div>

              <div class="wdBalanced none">
                <div>222</div>
              </div>

              <div class="wdAddLightBtn">+ 手动添加灯光</div>
              
            </div>

          </div>   

         <div class="wdSetting" style="margin-top:27px">
           <span>外景</span>
           <div>333</div>
         </div>   

       </div>

        <div class="wd_content wd_cemera_content none" style="padding-right:5px">
          <div style="margin-bottom:14px">我的设计</div>  
            <div class="wd_photoBox flex_wrap">
            ${o.map(t=>`
                  <div class="wd_photo_div">
                    <img class="wd_img" src="${t.src}">
                    <span>${t.value}</span>
                  </div>
                `).join("")}
            </div>

        </div>

      </div>
      
    `),$(".wanderBox").append(`
      <div class='wanderCenter'>
        <div class="spacebetween">

          <div class="spacebetween" style="margin-top:16px; margin-bottom:8px">
            <div class="draftBtn allcenter">草稿</div>
            <div class="addFragment allcenter" style="margin-left:8px">+ 添加片段</div>
          </div>

          <div class="spacebetween"></div>

          <div class="spacebetween">
            <div class="animationBtn allcenter" >动画效果</div>
            <div class="videoBtn allcenter" style="margin-left:8px">生成视频</div>
          </div>

        </div>
    
        <div>
          <div class="fragmentBox">

            <div class="flex-start">
              <input id="timeCheck" type="checkbox">
              <input id="renderTime" value="3.5" style="margin-left:8px">
            </div>

            <div></div>

          </div>
        </div>
      </div>
    `),$(".wanderBox").append(`
      <div class='wanderRight'>

        <div class="wanderRight_t ui-draggable ui-resizable">
          <div class="ui-resizable-handle ui-resizable-sw"></div>

          <div class="spacebetween" style="width:100%;padding-right:15px">
            <div class="moveWd_t" style="width:5%;height:24px"></div>
            <div class="wdViewSwitchBtn t_bc" style="width:47%">视图</div>
            <div class="wdViewSwitchBtn" style="width:47%">房间选择</div>
          </div>

          <div class="wdView">
            <div class="wdViewWindow"></div>
          </div>

          <div class="wdRoom none">222</div>

        </div>

        <div class="wanderRight_b ui-draggable">

          <div class="spacebetween" style="padding-right:16px; font-size:12px; width:100%; height:32px;border-radius: 4px 0 0 0; background: #000;">
            
            <div class="flex" style="line-height:32px">
              <div class="moveWd_b" style="width:16px;height:32px"></div>
              片段设置
            </div>
            <div>11</div>
          </div>

          <div class="wdSettingBox">

            <div>
              <div class="spacebetween" style="">
                <div>关键帧设置</div>
                <div class="wdCloseSettingBtn mouse">11</div>
              </div>

              <div>

                <div class="wanderRight_b_window"></div>

                <div class="spacebetween" style="margin-bottom:16px">
                  <div>视野</div>
                  <input value="60" class="viewInput">
                </div>

                <div class="wdCemeraCrop spacebetween">
                  <div>相机裁剪</div>
                </div>

                <div class="wdCemeraRevise spacebetween">
                  <div>相机校正</div>
                </div>

                <div class="wdFocus spacebetween">
                  <div>聚焦</div>
                </div>

              </div>

            </div>


          </div>

        </div>

      </div>
    `)}method(){const o=document.getElementById("cemeraAngle"),e=document.getElementById("cemeraHeight");o.onchange=function(){editor.list.changRenderCameraInput.dispatch("angle",parseFloat($("#cemeraAngle").val()))},e.onchange=function(){editor.list.changRenderCameraInput.dispatch("height",parseFloat($("#cemeraHeight").val()))};let t=document.querySelectorAll(".l_top_content_b");for(let u=0;u<t.length;u++)t[u].onclick=function(){$(".l_top_content_b").removeClass("l_top_content_b_color"),$(this).addClass("l_top_content_b_color"),$(".ratioContent").addClass("none"),$(".ratioContent")[u].classList.remove("none");let r=$(this).html().split(":");r[0]*=1,r[1]*=1,editor.list.renderCameraSize.dispatch(r)};$(".n_render").click(function(){editor.autoMakeRenderPng()});let s=document.querySelectorAll(".wdRatio");s.forEach((u,r)=>{s[r].onclick=function(){$(".wdRatio").removeClass("t_bc"),$(this).addClass("t_bc")}});var n=document.querySelectorAll(".wdSwitchbtn ");n.forEach((u,r)=>{n[r].onclick=function(){$(".wdSwitchbtn ").removeClass("t_bc"),$(this).addClass("t_bc"),r===0?($(".wdRealistic").removeClass("none"),$(".wdBalanced").addClass("none")):r===1&&($(".wdRealistic").addClass("none"),$(".wdBalanced").removeClass("none"))}});let l=document.querySelectorAll(".wd_switchSettingBtn");l.forEach((u,r)=>{l[r].onclick=function(){switch($(".wd_switchSettingBtn").removeClass("wd_st_bd"),$(this).addClass("wd_st_bd"),r){case 0:$(".wd_content").addClass("none"),$(".wd_st_content").removeClass("none");break;case 1:$(".wd_content").addClass("none"),$(".wd_cemera_content").removeClass("none");break}}});let c=document.querySelectorAll(".wd_img");c.forEach((u,r)=>{c[r].onclick=function(){$(".wd_img").removeClass("wd_img_bd"),$(this).addClass("wd_img_bd")}});let d=document.querySelectorAll(".wdRealistic_img");d.forEach((u,r)=>{d[r].onclick=function(){let p=this.parentNode.children[2],h=this.parentNode;r===0||r===2?$(".triangle").css("left","70px"):$(".triangle").css("left","220px"),$(".wd_photo_div").removeClass("wdMargin_b"),$(h).addClass("wdMargin_b"),$(".wdRealisticSetting").addClass("none"),$(p).removeClass("none")}});let m=document.querySelectorAll(".wdViewSwitchBtn");m.forEach((u,r)=>{m[r].onclick=function(){r===0?($(".wdView").removeClass("none"),$(".wdRoom").addClass("none")):r===1&&($(".wdView").addClass("none"),$(".wdRoom").removeClass("none")),$(".wdViewSwitchBtn").removeClass("t_bc"),$(this).addClass("t_bc")}});let g=document.querySelector(".wdCloseSettingBtn");g.onclick=function(){let u=this.parentNode.parentNode.children[1],r=!r;r===!0?$(u).removeClass("none"):$(u).addClass("none")},$(function(){new oe({location:".wdCemeraCrop"})}),$(function(){new oe({location:".wdCemeraRevise"})}),$(function(){new oe({location:".wdFocus"})}),$(function(){$(".wanderRight_t").resizable({handles:"sw",minWidth:272,minHeight:208,maxWidth:1295,maxHeight:720})}),$(function(){$(".wanderRight_t").draggable({handle:".moveWd_t"})}),$(function(){$(".wanderRight_b").draggable({handle:".moveWd_b"})}),$(".wanderRight_t").draggable({snap:".wanderDom",snapMode:"inner"}),$(".wanderRight_b").draggable({snap:".wanderDom",snapMode:"inner"})}}class io{constructor(){const o=document.querySelector("body"),e=document.createElement("div");e.setAttribute("id","ceilingDesign"),e.className="contentFlag none",o.appendChild(e);const t=document.createElement("div");t.className="mobile_box",e.appendChild(t);const s=document.createElement("div");s.className="ceiling_design_box",t.appendChild(s),s.style.position="fixed",s.style.top="0";const n=document.createElement("div");n.id="scene_app",n.style.pointerEvents="auto",n.style.position="absolute",n.style.top="0",t.appendChild(n),$(".contentFlag").addClass("none"),$("#ceilingDesign").removeClass("none"),editor.list.sceneInit.dispatch(document.getElementById("scene_app"),"mobile"),this.renderView()}init(){}renderView(){const o=document.querySelector(".ceiling_design_box"),e=document.createElement("div");e.className="ceiling_design_header",o.appendChild(e);const t=document.createElement("div");t.className="content_app",o.appendChild(t);const s=document.createElement("div");s.className="navigate_left",t.appendChild(s);const n=document.createElement("input");n.id="ceiling_input",n.style.height="30px",n.style.pointerEvents="all",t.appendChild(n);const l=[{icon:"icon-fenxiang",title:"Undo"},{icon:"icon-fenxiang",title:"Redo"},{icon:"icon-fenxiang",title:"del"},{icon:"icon-fenxiang",title:"delAll"},{icon:"icon-fenxiang",title:"lock"},{icon:"icon-fenxiang",title:"导出"},{icon:"icon-fenxiang",title:"打印"},{icon:"icon-fenxiang",title:"项目"},{icon:"icon-fenxiang",title:"帮助"},{icon:"icon-fenxiang",title:"教程"}];$(".navigate_left").append(`
<div class='navigate_leftTop'>
${l.map(r=>` <div class="nav_item navLeft_item" data-toolType = "${r.title}">
    <span class="iconfont_app ${r.icon}"></span>
    <span class="nav_name">${r.title}</span>
    </div>`).join("")}
</div>
<div class='nav_item navigate_leftBot'>
<span class="iconfont_app icon-Undo"></span>
<span class="nav_name">楼层</span>
</div>
`);const c=document.querySelectorAll(".navLeft_item");for(let r=0;r<c.length;r++)c[r].onclick=function(p){let h=$(this)[0].dataset.tooltype;h=="Undo"?editor.list.undo.dispatch():h=="Redo"?editor.list.redo.dispatch():(h=="del"||h=="delAll")&&editor.list.deleteForMobile.dispatch(h)};const d=[{icon:"icon-fenxiang",title:"方形"},{icon:"icon-fenxiang",title:"横墙"},{icon:"icon-fenxiang",title:"竖墙"},{icon:"icon-fenxiang",title:"自由画墙"},{icon:"icon-fenxiang",title:"I形"},{icon:"icon-fenxiang",title:"S形"},{icon:"icon-fenxiang",title:"Z形"},{icon:"icon-fenxiang",title:"圆"},{icon:"icon-fenxiang",title:"弧形"},{icon:"icon-fenxiang",title:"画墙"}],m=document.createElement("div");m.className="navigate_right",t.appendChild(m),$(".navigate_right").append(`
        ${d.map(r=>`<div data-toolType = "${r.title}" class="nav_item navRight_item">
            <span class="iconfont_app ${r.icon}"></span>
            <span class="nav_name">${r.title}</span>
            </div>`).join("")}
`);const g=document.querySelectorAll(".navRight_item");for(let r=0;r<g.length;r++)g[r].onclick=function(p){let h=$(this)[0].dataset.tooltype,_='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 2000], [-2000, 2000]]}';console.log(h),h=="L形"?editor.list.dragWallForMobile.dispatch("hWall"):h=="横墙"?editor.list.dragWallForMobile.dispatch("vWall"):h=="竖墙"?editor.list.dragWallForMobile.dispatch("wall"):editor.list.dragRoomForMobile.dispatch(_)};document.querySelector("#ceiling_input").addEventListener("keydown",function(r){r.keyCode==13&&Te.changeRoomLengthByWall(r.target.value)})}}const ie=class{constructor(){this.init(),new no}init(){this.renderView(),this.LogoClick(),$("#switchColor").click(ie.themeChange)}renderView(){const o=`<div class="centent_box_2 cursor" id="switchColor">
        <span class='iconfont iconfont_size icon-zhutitihuan '></span>
        <span>主题切换</span>
    </div>
            <!-- 消息 -->
            <div style=cursor:no-drop class="centent_box_2 cursor">
            <span class='iconfont iconfont_size icon-shixing '></span>
                <span>消息</span>
            </div>
            <!-- 帮助 -->
            <div  class="centent_box_2 cursor assistance" >
            <span class='iconfont iconfont_size icon-bangchu '></span>
                <span>帮助</span>
            </div>
            <!-- 设置 -->
            <div style=cursor:no-drop class="centent_box_2 cursor" id="globalSetting">
               <div id="glbShow">
                <span class='iconfont iconfont_size icon-shezhi '></span>
                <span>设置</span>
               </div> 

               <div class="glbSettingBox">
                 <div id="glbSetting">
                   <span>全局设置</span>
                 </div>
                 <div id="hotKeys">
                   <span>快捷键设置</span>
                 </div>`,e=`  <div style=cursor:no-drop class="centent_box_2 cursor " id="caizhi">
                 <span class='iconfont iconfont_size icon-caizhitihuan   '></span>
                   <span>材质替换</span>
                 </div>
                 <div style=cursor:no-drop class="centent_box_2 cursor" id="caizhi">
                 <span class='iconfont iconfont_size icon-mencongdingzhi '></span>
                   <span>门窗定制</span>
                 </div>
            
                 <div style=cursor:no-drop class="centent_box_2 cursor" id="ditai">
                 <span class='iconfont iconfont_size icon-desisheji '></span>
                   <span>地台设计</span>
                 </div>
            
                 <div style=cursor:no-drop class="centent_box_2 cursor" id="yingzhuang">
                 <span class='iconfont iconfont_size icon-yingzhuangsheji '></span>
                   <span>硬装设计</span>
                 </div>
                 <div class="centent_box_2 cursor" id="switchColor">
        <span class='iconfont iconfont_size icon-zhutitihuan '></span>
        <span>主题切换</span>
    </div>
            <!-- 消息 -->
            <div style=cursor:no-drop class="centent_box_2 cursor">
            <span class='iconfont iconfont_size icon-shixing '></span>
                <span>消息</span>
            </div>
            <!-- 帮助 -->
            <div  class="centent_box_2 cursor assistance" >
            <span class='iconfont iconfont_size icon-bangchu '></span>
                <span>帮助</span>
            </div>
            <!-- 设置 -->
            <div style=cursor:no-drop class="centent_box_2 cursor" id="globalSetting">
               <div id="glbShow">
                <span class='iconfont iconfont_size icon-shezhi '></span>
                <span>设置</span>
               </div> 

               <div class="glbSettingBox">
                 <div id="glbSetting">
                   <span>全局设置</span>
                 </div>
                 <div id="hotKeys">
                   <span>快捷键设置</span>
                 </div>
                 `;$("header").append(` <!-- logo -->
         <div class="header_content">
             <div class='logo_content'>
             <svg class="icon logo" aria-hidden="true">
               <use xlink:href="#icon-bodi_2"></use>
             </svg>
                 <span>睿几何设计平台</span>
             </div>
         </div>
         <!-- action bar -->
         <div class="header_cenent article_shadow hideBarTop">
         <!-- 同步SU -->
         <div class="centent_box_2  cursor tooltips " id="syncSu">
         <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
         <use xlink:href="#icon-tongbuSUUE_1"></use>
         </svg>
             <span>导出</span>
         </div>
             <!-- 文件 -->
             <div class="centent_box  cursor" id="file1">
                 <div class="file">
                 <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
                 <use xlink:href="#icon-wenjian-1"></use>
                 </svg>
                     <span>文件</span>
                 </div>
                 <img src="./static/assets/images/footer/caret-bottom.svg" />
             </div>
             <!-- 保存 -->
             <div class="centent_box cursor" id="headerSave">
             <div class='file'>
             <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
             <use xlink:href="#icon-baocun-1"></use>
             </svg>
                 <span>保存</span>
                 </div>
                 <img src="./static/assets/images/footer/caret-bottom.svg" />
             </div>
             <!-- 撤销 -->
             <div class="centent_box_2 cursor tooltips" id="headerbackout">
             <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
             <use xlink:href="#icon-chexiao"></use>
             </svg>
                 <span>撤销</span>
                 <div class="tooltiptext_bottom tooltips_width_2">ctrl+Z</div>
             </div>
             <!-- 恢复 -->
             <div class="centent_box_2 cursor tooltips" id="headerrecover">
             <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
             <use xlink:href="#icon-huifu"></use>
             </svg>
                 <span>恢复</span>
                 <div class="tooltiptext_bottom tooltips_width_2">ctrl+Y</div>
             </div>
             <!-- 清空 -->
             <div class="centent_box cursor" id="empty">
                 <div class="file">
                 <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
                 <use xlink:href="#icon-lajietong3"></use>
                 </svg>
                     <span>清空</span>
                 </div>
                 <img src="./static/assets/images/footer/caret-bottom.svg" />
             </div>
             <!-- 工具 -->
             <div class="centent_box cursor" id="tool">
                 <div class="file">
                 <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
                 <use xlink:href="#icon-gongju-10"></use>
                 </svg>
                     <span>工具</span>
                 </div>
                 <img src="./static/assets/images/footer/caret-bottom.svg" />
             </div>
           
             <!-- 智能设计 -->
             ${window.paramsUrl.target=="hidden"?"":`   <div class="centent_box cursor" id="design">
             <div class="file">
             <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
             <use xlink:href="#icon-zhitaisheji"></use>
             </svg>
                 <span>智能设计</span>
             </div>
             <img src="./static/assets/images/footer/caret-bottom.svg" />
         </div>`}
             <!-- 渲染 -->
             <div class="centent_box cursor" id="xuanran">
                 <div class="file">
                 <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
                 <use xlink:href="#icon-xuanran"></use>
                 </svg>
                     <span>渲染</span>
                 </div>
                 <img src="./static/assets/images/footer/caret-bottom.svg" />
             </div>
             <!-- 图册 -->
             ${window.paramsUrl.target=="hidden"?"":`     <div style=cursor:no-drop class="centent_box_2 cursor">
             <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
             <use xlink:href="#icon-tuji"></use>
             </svg>
                 <span>图册</span>
             </div>
             <div class="centent_box cursor" id="drawing">
             <div class="file">
             <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
             <use xlink:href="#icon-tuzhiqingshan-1"></use>
             </svg>
                 <span>图纸&清单</span>
             </div>
             <img src="./static/assets/images/footer/caret-bottom.svg" />
         </div>
             `}
             <!-- 智能房间 -->
             <div class="centent_box cursor" id="smartroom">
             <div class="file">
             <svg class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
             <use xlink:href="#icon-zhitaipangjian"></use>
             </svg>
                 <span>智能房间</span>
             </div>
             <img src="./static/assets/images/footer/caret-bottom.svg" />
         </div>
         </div>
         <!-- 右侧部分 -->
         <div class="header_right hideBarTop">
         ${window.paramsUrl.target=="hidden"?o:e}
                </div>
             </div>
         </div>`)}materialReplace(){$("#caizhi").click(()=>{$(".contentFlag").addClass("none"),$("#material").removeClass("none")})}hardOutfitDesign(){$("#yingzhuang").click(()=>{$(".contentFlag").addClass("none"),$("#hardoutfit").removeClass("none")})}platformDesign(){$("#ditai").click(()=>{$(".contentFlag").addClass("none"),$("#platform").removeClass("none")})}globalSetting(){$("#glbSetting").click(()=>{$("#globalSettingBox").removeClass("none")}),$("#hotKeys").click(()=>{$("#hotKeysBody").removeClass("none")})}LogoClick(){$(".logo_content").click(()=>{bar.showBar()})}static themeChange(o="",e=!0){getComputedStyle(document.documentElement).getPropertyValue("--theme-color")=="#292D32"||o=="1"?(document.documentElement.style.setProperty("--theme-color","#FFFFFF"),document.documentElement.style.setProperty("--popup-color","#fff"),document.documentElement.style.setProperty("--popfont-color","#fff"),document.documentElement.style.setProperty("--font-color","#404040"),document.documentElement.style.setProperty("--subtitle-color","#f5f5f5"),document.documentElement.style.setProperty("--hover-color","rgb(247, 245, 245)"),document.documentElement.style.setProperty("--click-color","#00559D"),document.documentElement.style.setProperty("--range1-color","#03091114"),document.documentElement.style.setProperty("--scroll-color","#DFF3F3"),document.documentElement.style.setProperty("--range-color","#00559D"),document.documentElement.style.setProperty("--border-color","#e8e9e9"),document.documentElement.style.setProperty("--content-color","#fff"),document.documentElement.style.setProperty("--hover-color","#00559d85"),e&&editor.list.changeTheme.dispatch(""),$(".tab_item").addClass("tab_shadow"),$("article").addClass("article_shadow "),$(".header_cenent").addClass("article_shadow"),$(".D_box").addClass("article_shadow"),x.housetypeStr="",x.setContent(x.typeList),x.leftminicontentStr="",x.toggleMiniToolbar(x.svgList),x.drawtype()):(document.documentElement.style.setProperty("--theme-color","#292D32"),document.documentElement.style.setProperty("--popup-color","#1C1C1F"),document.documentElement.style.setProperty("--popfont-color","#34393E"),document.documentElement.style.setProperty("--font-color","rgba(255, 255, 255, 0.7)"),document.documentElement.style.setProperty("--subtitle-color","#292D32"),document.documentElement.style.setProperty("--click-color","#F49C1C"),document.documentElement.style.setProperty("--range1-color","#c5c5c5fa"),document.documentElement.style.setProperty("--scroll-color","#292D32"),document.documentElement.style.setProperty("--range-color","#F49C1C"),document.documentElement.style.setProperty("--border-color","#00559D"),document.documentElement.style.setProperty("--content-color","#222225"),document.documentElement.style.setProperty("--hover-color","#F49C1C"),e&&editor.list.changeTheme.dispatch("#333333"),$(".header_content").removeClass("shadow"),$(".header_cenent").removeClass("article_shadow"),$(".tab_item").removeClass("tab_shadow"),$("article").removeClass("article_shadow"),$(".D_box").removeClass("article_shadow"),x.housetypeStr="",x.setContent(ie.typeListDaRk),x.leftminicontentStr="",x.toggleMiniToolbar(ie.svgListDark),x.drawtype())}};let ee=ie;F(ee,"typeListDaRk",[{text:[{icon:"#icon-xiaosuohuxing-chen",name:"搜索户型库",index:1,toolType:"search"},{icon:"#icon-shibietupian-chen",name:"导入临摹图",index:3,toolType:"figure"}],name:"导入户型",id:"content_text",class:"content_box_title",img:""},{text:[{icon:"#icon-huatu-2",name:"画墙(B)",index:4,toolType:"wall"},{icon:"#icon-huapangjian-2",name:"画房间(F)",index:5,toolType:"room"},{icon:"#icon-huatong-2",name:"画洞",index:6,toolType:"drawHole"}],name:"画墙",img:"./static/assets/images/shouqi.svg",class:"content_box"},{text:[{icon:"#icon-shankaimen-2",name:"门",index:7,toolType:"door"},{icon:"#icon-shuangkaimen-2",name:"双开门",index:8,toolType:"doubledoor"},{icon:"#icon-tuilamen-2",name:"移门",index:9,toolType:"slidingdoor"},{icon:"#icon-yizicong-2",name:"窗",index:10,toolType:"window"},{icon:"#icon-piaocong-2",name:"飘窗",index:11,toolType:"baywindow"},{icon:"#icon-ladecong-2",name:"落地窗",index:12,toolType:"frenchwindows"}],name:"门窗",img:"./static/assets/images/shouqi.svg",class:"content_box"},{text:[{icon:"#icon-shankaimen-2",name:"单开门",index:13,toolType:"singledoor"},{icon:"#icon-shuangkaimen-2",name:"双开门",index:14,toolType:"singleDoubleDoor"},{icon:"#icon-ziwumen-2",name:"子母门",index:15,toolType:"childMotherDoor"},{icon:"#icon-tuilamen-2",name:"移门",index:16,toolType:"moveDoor"},{icon:"#icon-yakou-2",name:"垭口",index:17,toolType:"pass"},{icon:"#icon-yizicong-2",name:"一字型窗",index:18,toolType:"straightWindow"},{icon:"#icon-piaocong-2",name:"一字型飘窗",index:19,toolType:"straightBayWindow"},{icon:"#icon-juxingmen-chen",name:"拱形门",index:20,toolType:"archDoor"},{icon:"#icon-juxingcong-chen",name:"拱形窗",index:21,toolType:"archWindow"},{icon:"#icon-huxingmen-chen",name:"弧形门",index:22,toolType:"arcDoor"},{icon:"#icon-huxingcong-chen",name:"弧形窗",index:23,toolType:"arcWindow"},{icon:"#icon-Lxingcong-chen",name:"L型窗",index:24,toolType:"LWindow"},{icon:"#icon-Lxingpiaocong-chen",name:"L型飘窗",index:25,toolType:"LBayWindow"},{icon:"#icon-Uxingcong-chense",name:"U型窗",index:26,toolType:"UWindow"},{icon:"#icon-Uxingpiaocong-chen",name:"U型飘窗",index:27,toolType:"UBayWindow"},{icon:"#icon-ziyaohuicong-chen",name:"自由绘窗",index:28,toolType:"freeDrawing"}],name:"定制门窗",img:"./static/assets/images/shouqi.svg",class:"content_box"},{text:[{icon:"#icon-liang-2",name:"梁",index:29,toolType:"bridge"},{icon:"#icon-yindao-2",name:"烟道",index:30,toolType:"flue"},{icon:"#icon-zhu-2",name:"柱",index:31,toolType:"post"},{icon:"#icon-mentong-2",name:"门洞",index:32,toolType:"dooropen"}],name:"结构",img:"./static/assets/images/shouqi.svg",class:"content_box"}]),F(ee,"svgListDark",[{name:"",list:[{icon:"#icon-xiaosuohuxing-chen",tooltip:"搜索户型库",type:"search"},{icon:"#icon-shibietupian-chen",tooltip:"导入临摹图",type:"figure",contour:!0}]},{list:[{icon:"#icon-huatu-2",tooltip:"画墙",type:"wall"},{icon:"#icon-huapangjian-2",tooltip:"画房间",type:"room"},{icon:"#icon-huatong-2",tooltip:"画洞",type:"drawHole",contour:!0}]},{list:[{icon:"#icon-shankaimen-2",tooltip:"",type:"",item:[{itemIcon:"#icon-shankaimen-2",itemName:"单开门",type:"singledoor"},{itemIcon:"#icon-shuangkaimen-2",itemName:"双开门",type:"singleDoubleDoor"},{itemIcon:"#icon-ziwumen-2",itemName:"子母门",type:"childMotherDoor"},{itemIcon:"#icon-tuilamen-2",itemName:"推拉门",type:"moveDoor"}]},{icon:"#icon-yizicong-2",tooltip:"",type:"",item:[{itemIcon:"#icon-yizicong-2",itemName:"窗",type:"window"},{itemIcon:"#icon-piaocong-2",itemName:"飘窗",type:"baywindow"},{itemIcon:"#icon-ladecong-2",itemName:"落地窗",type:"frenchwindows"}]}]},{list:[{icon:"#icon-shankaimen-2",tooltip:"",type:"",item:[{itemIcon:"#icon-shankaimen-2",itemName:"定制-单开门",type:"singledoor"},{itemIcon:"#icon-shuangkaimen-2",itemName:"定制-双开门",type:"singleDoubleDoor"},{itemIcon:"#icon-ziwumen-2",itemName:"定制-字母门",type:"childMotherDoor"},{itemIcon:"#icon-tuilamen-2",itemName:"定制-推拉门",type:"moveDoor"},{itemIcon:"#icon-yakou-2",itemName:"定制-垭口",type:"pass"},{itemIcon:"#icon-yizicong-2",itemName:"定制-一字型窗",type:"straightWindow"},{itemIcon:"#icon-piaocong-2",itemName:"定制-一字型飘窗",type:"straightBayWindow"},{itemIcon:"#icon-Lxingcong-2",itemName:"定制-L型窗",type:"LWindow"},{itemIcon:"#icon-Lxingpiaocong-2",itemName:"定制-L型飘窗",type:"LBayWindow"},{itemIcon:"#icon-Uxingcong-2",itemName:"定制-U型窗",type:"UWindow"},{itemIcon:"#icon-Uxingpiaocong-2",itemName:"定制-U型飘窗",type:"UBayWindow"}]}],contour:!0},{list:[{icon:"#icon-liang-2",tooltip:"梁",type:"bridge"},{icon:"#icon-zhu-2",tooltip:"柱子",type:"post"},{icon:"#icon-yindao-2",tooltip:"烟道",type:"flue"},{icon:"#icon-mentong-2",tooltip:"门洞",type:"dooropen"}]}]);class no{constructor(){this.renderView(),this.init()}init(){this.syncSu(),this.fileOperations(),this.save(),this.revovation(),this.recover(),this.empty(),this.tool(),this.render(),this.smartRoom(),this.helper(),window.paramsUrl.target==null&&this.drawing()}renderView(){const o=document.getElementById("file1"),e=document.createElement("div");e.setAttribute("id","filedropdown_content"),e.className="dropdown_content",o.appendChild(e);var t=[{title:"新建",type:"new",disabled:!0},{title:"恢复历史版本",type:"recover",disabled:!0},{title:"编辑方案信息",type:"compile",disabled:!0},{title:"导入模型",type:"importModel",disabled:!1}];$("#filedropdown_content").append(`${t.map(w=>`<span ${w.disabled===!0?"style=cursor:no-drop":""} data-toolType="${w.type}">${w.title}</span>`).join("")}`);const s=document.getElementById("headerSave"),n=document.createElement("div");n.setAttribute("id","savedropdown_content"),n.className="dropdown_content",s.appendChild(n);const l=[{title:"保存户型",type:"saveType",disabled:!1},{title:"保存方案",type:"saveCase",disabled:!1}];$("#savedropdown_content").append(`${l.map(w=>`<span ${w.disabled==!0?"style=cursor:no-drop":""} data-toolType="${w.type}">${w.title}</span>`).join("")}`);const c=document.getElementById("empty");var d=document.createElement("div");d.setAttribute("id","emptydropdown_content"),d.className="dropdown_content",c.appendChild(d);var m=[{title:"全部",type:"all",disabled:!1},{title:"装修",type:"fitment",disabled:!0},{title:"标注",type:"lable",disabled:!0},{title:"家具",type:"furniture",disabled:!0},{title:"参数化吊顶",type:"ceiling",disabled:!0},{title:"硬装",type:"hardoutfit",disabled:!0}];$("#emptydropdown_content").append(`${m.map(w=>`<span ${w.disabled===!0?"style=cursor:no-drop":""} data-toolType="${w.type}">${w.title}</span>`).join("")}`);const g=[{title:"材质刷",type:"brush",disabled:!0},{title:"测量",type:"measure",disabled:!0},{title:"标注",type:"lable2",disabled:!0},{title:"阵列",type:"zhenlie",disabled:!0},{title:"户型翻转",type:"overturn",disabled:!0},{title:"户型检测",type:"detection",disabled:!0}],u=[{title:"导出GLTF",type:"gltf",disabled:!1},{title:"导出PDF",type:"pdf",disabled:!1},{title:"导出GLB",type:"glb",disabled:!1},{title:"导出SVG",type:"svg",disabled:!1},{title:"导出JSON",type:"json",disabled:!1},{title:"材质刷",type:"brush",disabled:!0},{title:"测量",type:"measure",disabled:!0},{title:"标注",type:"lable2",disabled:!0},{title:"阵列",type:"zhenlie",disabled:!0},{title:"户型翻转",type:"overturn",disabled:!0},{title:"户型检测",type:"detection",disabled:!0}];let r=[];const p=navigator.userAgent;p.indexOf("SketchUp")!=-1?r=g:r=u;const h=document.getElementById("tool");var _=document.createElement("div");_.setAttribute("id","tooldropdown_content"),_.className="dropdown_content",h.appendChild(_),$("#tooldropdown_content").append(`${r.map(w=>`<span ${w.disabled===!0?"style=cursor:no-drop":""} data-toolType="${w.type}">${w.title}</span>`).join("")}`);const y=document.getElementById("xuanran");var P=document.createElement("div");P.setAttribute("id","xuanran_content"),P.className="dropdown_content",y.appendChild(P);var j=[{title:"普通图",type:"commonpicture",disabled:!1},{title:"全景图",type:"fullView",disabled:!1},{title:"俯视图",type:"overlookpicture",disabled:!0},{title:"漫游视频",type:"roamvideo",disabled:!0},{title:"模板视频",type:"templatevideo",disabled:!0},{title:"剪辑成片",type:"jianji",disabled:!0}];$("#xuanran_content").append(`${j.map(w=>`<span ${w.disabled===!0?"style=cursor:no-drop":""} data-toolType="${w.type}">${w.title}</span>`).join("")}`);const N=document.getElementById("smartroom");var C=document.createElement("div");C.setAttribute("id","smartroom_content"),C.className="dropdown_content",N.insertBefore(C,N.child);var k=[{text:"一室一厅一厨一卫",index:1,type:"[1, 1, 1]"},{text:"两室一厅一厨一卫",index:2,type:"[2, 1, 1]"},{text:"两室两厅一厨一卫",index:3,type:"[2, 2, 1]"},{text:"三室一厅一厨一卫",index:4,type:"[3, 1, 1]"},{text:"三室两厅一厨一卫",index:5,type:"[3, 2, 1]"},{text:"测试",index:6,type:"[10000]"}];if($("#smartroom_content").append(`${k.map(w=>`<span data-toolType = "${w.type}">${w.text}</span>`).join("")}`),p.indexOf("SketchUp")!=-1?N.style.display="none":N.style.display="default",window.paramsUrl.target==null){const w=document.getElementById("drawing");var E=document.createElement("div");E.setAttribute("id","drawing_content"),E.className="dropdown_content",w.appendChild(E);var f=[{title:"施工图纸",type:"roadWork",disabled:!0},{title:"户型图纸",type:"housetype",disabled:!0},{title:"报价清单",type:"offerList",disabled:!0}];$("#drawing_content").append(`${f.map(v=>`<span ${v.disabled===!0?"style=cursor:no-drop":""} data-toolType="${v.type}">${v.title}</span>`).join("")}`)}}syncSu(){document.getElementById("syncSu").addEventListener("click",function(){editor.list.exportGLTF.dispatch("gltf")})}fileOperations(){const o=new U;U.globalDrop();const e=document.getElementById("filedropdown_content").children;for(let t=0;t<e.length;t++)e[t].onclick=function(){$(this)[0].dataset.tooltype==="importModel"&&o.init()}}save(){const o=document.getElementById("savedropdown_content").children;for(let e=0;e<o.length;e++)o[e].onclick=function(){let t=$(this)[0].dataset.tooltype;t=="saveType"?editor.list.saveWallModel.dispatch():t=="saveCase"&&editor.list.saveScene.dispatch()}}revovation(){const o=document.getElementById("headerbackout");o.onclick=function(){editor.list.undo.dispatch()}}recover(){const o=document.getElementById("headerrecover");o.onclick=function(){editor.list.redo.dispatch()}}empty(){const o=document.getElementById("emptydropdown_content").children;for(let e=0;e<o.length;e++)o[e].onclick=function(){$(this)[0].dataset.tooltype==="all"&&editor.list.removeAll.dispatch()}}tool(){const o=document.getElementById("tooldropdown_content").children;for(let e=0;e<o.length;e++)o[e].onclick=function(){let t=$(this)[0].dataset.tooltype;(t=="gltf"||t=="glb"||t=="pdf"||t=="svg")&&editor.list.exportGLTF.dispatch(t),t=="json"&&editor.list.saveScene.dispatch("json"),t=="obj"&&editor.list.exportGLTF.dispatch("obj")}}design(){const o=document.getElementById("designdropdown_content").children;for(let e=0;e<o.length;e++)o[e].onclick=function(){let t=$(this)[0].dataset.tooltype;console.log(t)}}render(){const o=document.getElementById("xuanran_content").children;for(let e=0;e<o.length;e++)o[e].onclick=function(){switch(o[e].innerHTML){case"普通图":editor.list.showRenderView.dispatch();break;case"全景图":headerEvent.submitType("fullView");break;case"俯视图":headerEvent.submitType("overlookpicture");break;case"漫游视频":headerEvent.submitType("roamvideo");break;case"模板视频":headerEvent.submitType("templatevideo");break;case"剪辑成片":headerEvent.submitType("jianji");break}}}drawing(){const o=document.getElementById("drawing_content").children;for(let e=0;e<o.length;e++)o[e].onclick=function(){let t=$(this)[0].dataset.tooltype;console.log(t)}}smartRoom(){const o=document.getElementById("smartroom_content").children;for(let e=0;e<o.length;e++)o[e].onclick=function(){let t=$(this)[0].dataset.tooltype;editor.list.smartRoom.dispatch(JSON.parse(t))}}helper(){const o=document.getElementsByClassName("assistance")[0];o.onclick=function(){new io}}}const z=class{constructor(){this.init()}init(){this.renderView(),this.videoModel(),this.performance(),this.stopbehavior(),this.viewSwitch(),this.viewNarrow(),this.viewmagnify(),this.viewcontrol(),this.twopattern(),this.threepattern(),this.resetView(),this.basemap(),$(".view_title").click(function(){$(".view_title").removeClass("active_view"),$(this).addClass("active_view")}),document.querySelectorAll(".hide_pop input").forEach(e=>{e.addEventListener("click",function(){const t=e.checked,s=e.dataset.type;z.json[s]=t,editor.list.showHiddenHelper.dispatch(s,t),z.getFlag(JSON.stringify(z.json))})})}static getKeyVal(o){let e=[];for(let t in o)e.push(o[t]);return e}static getFlag(o,e){z.json=JSON.parse(o),z.showModel();const t=document.querySelectorAll(".hide_pop input"),s=document.getElementsByClassName("bottom_xian"),n=JSON.parse(o);z.getKeyVal(n).indexOf(!1)>=0?(s[0].style.cursor="",s[0].style.color="#333"):(s[0].style.cursor="no-drop",s[0].style.color="#c0c0c0",s[0].style.background="#fff"),t.forEach((c,d)=>{const m=c.dataset.type;c.checked=n[m]}),e&&editor.list.showHiddenHelper.dispatch("","",JSON.parse(o))}static showModel(){const o=document.querySelectorAll(".hide_pop input"),e=document.getElementsByClassName("bottom_xian")[0];let t=z.json,s=["showMember","showFloorFurniture","showWallFurniture","showCeilFurniture","showKitchen","showAllHouseFurniture"];e.onclick=function(){if(e.style.color!="rgb(192, 192, 192)"){o.forEach((n,l)=>{s.indexOf(n.dataset.type)>=0&&(n.checked=!0)});for(let[n,l]of Object.entries(t))t[n]=!0;e.style.cursor="no-drop",e.style.color="#c0c0c0",e.style.background="#fff",editor.list.showHiddenHelper.dispatch("","",t)}}}renderView(){const o=[{name:"平面",value:1,type:"2D"},{name:"顶面",value:2,type:"2D"},{name:"立面",value:3,type:"2D"}],e=[{name:"鸟瞰",value:4,type:"3D"},{name:"漫游",value:5,type:"3DRoam",item:[{itemName:"玄关",type:"hallway"},{itemName:"客餐厅",type:"guestRestaurant"},{itemName:"主人房",type:"masterBedroom"},{itemName:"厨房",type:"kitchen"},{itemName:"客房",type:"guestRoom"}]}],t=[{title:"硬装吊顶",value:"1"},{title:"户型构件",value:"2"},{title:"软装家具",value:"3"},{title:"定制家具",value:"4"}],s=[{title:"房间名",type:"roomName"},{title:"面积",type:"roomArea"}],n=[{title:"2D距离尺寸线",value:"6"}],l=[{title:"墙体尺寸线",type:"dimension"},{title:"自由造型",type:"freeStyle"},{title:"凸出值",type:"projectionVal"},{title:"背景墙造型"},{title:"自由造型(新版)"}],c=[{title:"文本及标注"},{title:"户型"},{title:"门窗"}],d=[{title:"设置比例尺",type:"scale"},{title:"显示底图",type:"hiddenMap"},{title:"删除底图",type:"deleteMap"}];$(".footerContent_box").append(` <div class="footercontent">
         <div class="footerContent_left">
         </div>
         <div class='exitTool'>
        
         </div>
         <div class="footerContent_right">
         </div>
     </div>`),$(".footerContent_left").append(`  <div class="D_box article_shadow">
           <div class="D_boxcontent">
       
           <div class="support">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bodi_2"></use>
            </svg>
           <span class="technical_support">睿几何技术支持<span/>
           <div class="version"></div>
           </div>
               <div class="two_D " id='two_D'>
               <div class="view_title active_view">2D
               <img src="./static/assets/images/footer/caret-bottom.svg" />
               </div>
                   <div class="dropup_content">
                   ${o.map(b=>`<p data-type = '${b.type}'>${b.name}</p>`).join("")}
                   </div>
               </div>
       
               <div class="two_D" id='three_D'>
                  <div class="view_title">3D
                  <img src="./static/assets/images/footer/caret-bottom.svg" />
                  </div>
                   <div class="dropup_content dropup_content1">
                     ${e.map(b=>`<p  data-type = '${b.type}'>${b.name}</p>
                         ${b.item?`<div class='dropup_content_item'>
                                   ${b.item.map(ne=>`<p data-type = '${ne.type}'>${ne.itemName}</p>`).join("")}
                                </div>`:""}
                         `).join("")}
                   </div>
               </div>
           </div>
       </div>
       <div id='two_view'>
       <div class="hideBTn tooltips radius_btn article_shadow">
       <svg class="icon icon-min" aria-hidden="true">
       <use xlink:href="#icon-xianzhiyinzang"></use>
       </svg>
           <span class = "tooltiptext tooltips_width_2">显示/隐藏</span>
           </div>
       </div>
       </div>
       <div class='threeD_view radius_btn article_shadow' id='threed_view'>
       <div class="hideBTn tooltips threeHide"  >
       <svg class="icon icon-min" aria-hidden="true">
       <use xlink:href="#icon-xianzhiyinzang"></use>
       </svg>
           <span class = "tooltiptext tooltips_width_2">显示/隐藏</span>
           </div>
           <div class="hideBTn tooltips" id='videoMode' >
           <svg class="icon icon-min" aria-hidden="true">
               <use xlink:href="#icon-caizhimushi"></use>
               </svg>
           <span class = "tooltiptext tooltips_width_2">显示模式</span>
           </div>
           <div class="hideBTn tooltips" id='Performance' >
           <svg class="icon icon-min" aria-hidden="true">
               <use xlink:href="#icon-xingtaimushi"></use>
               </svg>
           <span class = "tooltiptext tooltips_width_2">性能模式</span>
           </div>
       </div>
       </div>
       <div class="hide_box" >
       <div class="hide_pop">
       <div class="BottomBar bottom_xian cursor">显示已隐藏模型</div>
       ${t.map(b=>`<div class="BottomBar horizontalCenter2 cursor">${b.title}
               <img src="./static/assets/images/footer/caret-right.svg"/>
               </div>`).join("")}
       ${s.map(b=>`   <div class="BottomBar verticalCenter cursor">
           <input type="checkbox" data-type=${b.type} />
           <span>${b.title}</span>
           </div>`).join("")}
           ${n.map(b=>`<div class="BottomBar horizontalCenter2 cursor">${b.title}
               <img src="./static/assets/images/footer/caret-right.svg"/>
               </div>`).join("")}
           ${l.map(b=>`   <div class="BottomBar verticalCenter cursor">
           <input type="checkbox" data-type=${b.type} />
           <span>${b.title}</span>
           </div>`).join("")}
           <div class="diaodingtoolpit hidetoolpit cursor">
           <input type="checkbox" />
           参数化吊顶
           </div>
           <div class="liangtoolpit hidetoolpit cursor">
           <input type="checkbox" data-type='showMember'  />
           梁
           </div>
           <div class="ruanzhuangcontent">
           <div class="hidetoolpit_1 center cursor">
           <input type="checkbox" data-type='showFloorFurniture'  />
           地面家具
           </div>
           <div class="hidetoolpit_1 center cursor">
           <input type="checkbox" data-type='showWallFurniture'  />
           墙面家具
           </div>
           <div class="hidetoolpit_1 center cursor">
           <input type="checkbox" data-type='showCeilFurniture'  />
           顶面家具
           </div>
           </div>
           <div class="dingzhicontent">
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox" data-type='showKitchen'  />
           厨卫
           </div>
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox" data-type='showAllHouseFurniture'  />
           全屋家具
           </div>
           </div>
           <div class="qiangticontent">
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox"/>
           墙中线
           </div>
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox"/>
           墙内线
           </div>
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox"/>
           隐藏尺寸线
           </div>
           </div>
           <div class="chicuncontent">
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox"/>
           边距距离
           </div>
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox"/>
           中心点距离
           </div>
           <div class="hidetoolpit_1 leftAligning cursor">
           <input type="checkbox"/>
           隐藏尺寸线
           </div>
           </div>
       `),$(".footerContent_right").append(` <div class="locktool">
           <div class="locktool_content">
           ${c.map(b=>` <div class="horizontalCenter2 hidetoolpit_1 verticalCenter cursor">
               <input type="checkbox"/>
               <span>${b.title}</span>
               <img src="./static/assets/images/footer/caret-right.svg"/>
               </div>`).join("")}
           <div class="wenben">
           <div class="hidetoolpit_1 leftAligning">
           <input type="checkbox"/>
           房间名/面积
           </div>
           <div class="hidetoolpit_1 leftAligning">
           <input type="checkbox"/>
           标注
           </div>
           </div>
           <div class="huxing">
           <div class="hidetoolpit_1 leftAligning">
           <input type="checkbox"/>
           墙
           </div>
           <div class="hidetoolpit_1 leftAligning">
           <input type="checkbox"/>
           建筑构件
           </div>
           </div>
           <div class="menchuang">
           <div class="hidetoolpit_1 leftAligning">
           <input type="checkbox"/>
           模型门窗
           </div>
           </div>
           </div>
           </div>  <div  class="view_lock tooltips article_shadow">
           <svg style=cursor:no-drop class="icon icon-mmin" aria-hidden="true"  height='24' width='24'>
           <use xlink:href="#icon-suoding-1"></use>
           </svg>
           <span class = "tooltiptext">锁定</span>
          
       </div>
       <div class="zoom_right article_shadow">
       <div class="tooltips reset baseBtn">
       <div class='reset_item'>
       <svg class="icon-mmin iconfont reset_view" aria-hidden="true">
       <use xlink:href="#icon-putongtu"></use>
       </svg>
           <span class = "tooltips_width_3 tooltiptext">底图设置</span>
           </div>
       </div>
       <div class="tooltips reset">
       <div class='reset_item'>
       <svg id='reset_view' class="icon-mmin iconfont reset_view" aria-hidden="true">
       <use xlink:href="#icon-tongzhishijiao"></use>
       </svg>
           <span class = "tooltips_width tooltiptext">重置视图(空格)</span>
           </div>
           </div>
           <div class="magnify">
           <div class = "tooltips">
           <img id='reduce' src="./static/assets/images/footer/jianhao.svg" />
           <span  class = "tooltiptext tooltips_width_1">缩小</span>
           </div>
           <input id='footerView'  min="10"  value="">
           <span class='footerView_unit'>%</span>
           <div class="tooltips">
           <img id='magnify' src="./static/assets/images/footer/jiahao.svg" />
           <span class = "tooltips_width_1 tooltiptext">放大</span>
           </div>
           </div>
       </div>
       <div class='base_map'>
       <div class='base_map_item'>
           ${d.map(b=>`<span class='center base_map_item_box' data-type=${b.type}>${b.title}</span>`).join("")}
       </div>
     </div>
       `);const m=document.getElementsByClassName("footerContent_left")[0],g=document.createElement("div");g.setAttribute("id","videoModeView"),g.className="videoMode_view",m.insertBefore(g,m.child);const u=[{icon:"icon-caizhimushi",title:"材质模式",type:"materialModel"},{icon:"icon-xiankuangmushi",title:"线框模式",type:"lineModel"},{icon:"icon-caizhijiaxiankuangmushi",title:"材质+线框模式",type:"MLModel"},{icon:"icon-shushimushi",title:"透明线框模式",type:"transparentModel"},{icon:"icon-caizhimushi",title:"随机材质模式",type:"randomMaterialModel"}];$("#videoModeView").append(`${u.map(b=>` <div class='videoMode_item  cursor' data-type = ${b.type}>
           <span class="iconfont ${b.icon}"></span>
           <span class='title_size'>${b.title}</span>
           </div>`).join("")}`);const r=document.getElementsByClassName("dropup_content_item")[0],p=document.getElementsByClassName("dropup_content1")[0].children[1];p.onmouseover=function(){r.style.visibility="visible"},p.onmouseout=function(){r.style.visibility="hidden"},r.onmouseover=function(){r.style.visibility="visible"},r.onmouseout=function(){r.style.visibility="hidden"};const h=document.getElementsByClassName("hide_pop")[0].children[1],_=document.getElementsByClassName("diaodingtoolpit")[0];h.onmouseover=function(){_.style.display="block"},h.onmouseout=function(){_.style.display="none"},_.onmouseover=function(){_.style.display="block"},_.onmouseout=function(){_.style.display="none"};const y=document.getElementsByClassName("hide_pop")[0].children[2],P=document.getElementsByClassName("liangtoolpit")[0];y.onmouseover=function(){P.style.display="block"},y.onmouseout=function(){P.style.display="none"},P.onmouseover=function(){P.style.display="block"},P.onmouseout=function(){P.style.display="none"};const j=document.getElementsByClassName("hide_pop")[0].children[3],N=document.getElementsByClassName("ruanzhuangcontent")[0];j.onmouseover=function(){N.style.display="block"},j.onmouseout=function(){N.style.display="none"},N.onmouseover=function(){N.style.display="block"},N.onmouseout=function(){N.style.display="none"};const C=document.getElementsByClassName("hide_pop")[0].children[4],k=document.getElementsByClassName("dingzhicontent")[0];C.onmouseover=function(){k.style.display="block"},C.onmouseout=function(){k.style.display="none"},k.onmouseover=function(){k.style.display="block"},k.onmouseout=function(){k.style.display="none"};const E=document.getElementsByClassName("hide_pop")[0].children[7],f=document.getElementsByClassName("qiangticontent")[0];E.onmouseover=function(){f.style.display="block"},E.onmouseout=function(){f.style.display="none"},f.onmouseover=function(){f.style.display="block"},f.onmouseout=function(){f.style.display="none"};const w=document.getElementsByClassName("hide_pop")[0].children[8],v=document.getElementsByClassName("chicuncontent")[0];w.onmouseover=function(){v.style.display="block"},w.onmouseout=function(){v.style.display="none"},v.onmouseover=function(){v.style.display="block"},v.onmouseout=function(){v.style.display="none"};const S=document.getElementsByClassName("locktool_content")[0].children[0],D=document.getElementsByClassName("wenben")[0];S.onmouseover=function(){D.style.display="block"},S.onmouseout=function(){D.style.display="none"},D.onmouseover=function(){D.style.display="block"},D.onmouseout=function(){D.style.display="none"};const Se=document.getElementsByClassName("locktool_content")[0].children[1],K=document.getElementsByClassName("huxing")[0];Se.onmouseover=function(){K.style.display="block"},Se.onmouseout=function(){K.style.display="none"},K.onmouseover=function(){K.style.display="block"},K.onmouseout=function(){K.style.display="none"};const Ce=document.getElementsByClassName("locktool_content")[0].children[2],V=document.getElementsByClassName("menchuang")[0];Ce.onmouseover=function(){V.style.display="block"},Ce.onmouseout=function(){V.style.display="none"},V.onmouseover=function(){V.style.display="block"},V.onmouseout=function(){V.style.display="none"};const ye=document.getElementsByClassName("videoMode_item");for(let b=0;b<ye.length;b++){let ne=ye[b].getAttribute("data-type");ye[b].onclick=function(){editor.list.changeModel.dispatch(ne),$(this).hasClass("iconColor")||($(".videoMode_item").removeClass("iconColor"),$(this).addClass("iconColor"))}}}twopattern(){$("#two_D").click(function(){$("#two_view")[0].style.display="block",$("#threed_view")[0].style.visibility="hidden",$(".topbarContent_tool_bar")[0].style.visibility="visible",editor.list.setViewportCamera.dispatch("2D",editor),new q().showBar()})}threepattern(){$("#three_D").click(function(){$("#threed_view")[0].style.visibility="visible",$("#two_view")[0].style.display="none",$(".topbarContent_tool_bar")[0].style.visibility="hidden",editor.list.setViewportCamera.dispatch("3D",editor)})}viewSwitch(){const o=document.getElementsByClassName("dropup_content");for(let e=0;e<o.length;e++){let t=o[e].children;for(let s=0;s<t.length;s++){let n=$(t[s])[0].dataset.type;t[s].onclick=function(l){switch(console.log(n),l.stopPropagation(),n){case"2D":$(".view_title").removeClass("active_view"),$(".view_title")[0].classList.add("active_view"),editor.list.setViewportCamera.dispatch("2D",editor),new q().showBar(),$("#two_view")[0].style.display="block",$("#threed_view")[0].style.visibility="hidden",$(".topbarContent_tool_bar")[0].style.visibility="visible";break;case"3D":new q().showBar(),editor.list.setViewportCamera.dispatch("3D",editor),$(".view_title").removeClass("active_view"),$(".view_title")[1].classList.add("active_view"),$("#threed_view")[0].style.visibility="visible",$("#two_view")[0].style.display="none",$(".topbarContent_tool_bar")[0].style.visibility="hidden";break;case"3DRoam":$(".view_title").removeClass("active_view"),$(".view_title")[1].classList.add("active_view"),$(".topbarContent_tool_bar")[0].style.visibility="hidden",new q().hideBar(),editor.list.setViewportCamera.dispatch("3DRoam",editor),$("#threed_view")[0].style.visibility="visible",$("#two_view")[0].style.display="none";break;case"gpuVerydefinition":editor.list.GPURender.dispatch();break}}}}}videoModel(){const o=document.querySelector("#videoModeView");$("#videoMode").click(e=>{o.style.display="block",window.event?window.event.cancelBubble=!0:e.stopPropagation()}),o.onclick=function(e){window.event?window.event.cancelBubble=!0:e.stopPropagation()}}performance(){$("#Performance").click(()=>{console.log("性能模式")})}stopbehavior(){const o=document.getElementsByClassName("hide_box")[0],e=document.getElementsByClassName("hideBTn")[0],t=document.querySelector("#videoModeView"),s=document.getElementsByClassName("threeHide")[0],n=document.querySelector(".locktool"),l=document.querySelector(".base_map");document.querySelector(".baseBtn"),e.onclick=function(c){o.style.display="block",window.event?window.event.cancelBubble=!0:c.stopPropagation()},s.onclick=function(c){o.style.display="block",window.event?window.event.cancelBubble=!0:c.stopPropagation()},document.onclick=function(c){o.style.display="none",n.style.display="none",t.style.display="none",l.style.display="none"},o.onclick=function(c){window.event?window.event.cancelBubble=!0:c.stopPropagation()}}lock(){const o=document.getElementsByClassName("locktool")[0],e=document.getElementsByClassName("view_lock")[0],t=document.querySelector(".base_map");e.onclick=function(s){t.style.display==="block"&&(t.style.display="none"),o.style.display="block",window.event?window.event.cancelBubble=!0:s.stopPropagation()},o.onclick=function(s){window.event?window.event.cancelBubble=!0:s.stopPropagation()}}basemap(){const o=document.getElementsByClassName("locktool")[0],e=document.querySelector(".base_map"),t=document.querySelector(".baseBtn");t.onclick=function(n){o.style.display==="block"&&(o.style.display="none"),e.style.display="block",window.event?window.event.cancelBubble=!0:n.stopPropagation()},e.onclick=function(n){window.event?window.event.cancelBubble=!0:n.stopPropagation()};const s=document.querySelectorAll(".base_map_item_box");s.forEach(n=>{n.onclick=function(){switch(n.dataset.type){case"scale":editor.list.setScaleTool.dispatch();break;case"hiddenMap":editor.list.hiddenMap.dispatch(),s[1].innerHTML=="显示底图"?s[1].innerHTML="隐藏底图":s[1].innerHTML="显示底图";break;case"deleteMap":editor.list.delMap.dispatch();break}}})}viewNarrow(){$("#reduce").click(()=>{let o=$("#footerView").val();o-=10,o<=10&&(o=10),$("#footerView").val(o),!(o<=10)&&editor.list.changeCamera.dispatch(o,"min",.79)})}viewmagnify(){$("#magnify").click(()=>{let o=$("#footerView")[0].value*1;o+=10,$("#footerView").val(o),editor.list.changeCamera.dispatch(o,"max",.79)})}viewcontrol(){$("#footerView").focus(()=>{$("#footerView").data("oldVal",$("#footerView").val())}),$("#footerView").blur(()=>{let o=$("#footerView").val();if(o<10&&(o=10),$("#footerView").val(o),o<10)return;let e=$("#footerView").data("oldVal"),t="max";e*1<o&&(t="min"),e!=o&&(editor.list.changeCamera.dispatch($("#footerView").val(),t,Math.abs(e-o)*.1182),$("#footerView").data("oldVal",$("#footerView").val()))}),$("#footerView").keypress(function(o){if(o.which==13){let e=$("#footerView").val();if(e<10&&(e=10),$("#footerView").val(e),e<10)return;let t=$("#footerView").data("oldVal"),s="max";if(t*1<e&&(s="min"),t==e)return;editor.list.changeCamera.dispatch($("#footerView").val(),s,Math.abs(t-e)*.1182),$("#footerView").data("oldVal",$("#footerView").val()),$("#footerView").blur()}})}resetView(){$("#reset_view").click(()=>{$("#footerView").val(100),editor.list.resetCamera.dispatch()});const o=document.querySelector(".dropup_content_item").children;for(let e=0;e<o.length;e++){const t=o[e];t.onclick=function(){t.dataset.type}}}};let he=z;F(he,"json",{});class M{constructor(o){this.opts=Object.assign({title:"名称",location:"",unit:"mm",sliderVal:"2",sliderMax:"",sliderMin:"",stepVal:"1",valueId:"",sliderId:"",numbertype:"",rangeClass:"",inputClass:"",isSame:!1,isSameVal:"",disabled:!1},o),this.init()}init(){this.renderView(),this.change(),this.unit(),this.ChangeVal()}renderView(){this.sliderHtml=document.createElement("div"),this.sliderHtml.className="rjh_sliderbox",this.sliderHtml.innerHTML=`<div class='rjh_slider'>
            <span>${this.opts.title}</span>
            <div class='input_area'>
            <input ${this.opts.disabled===!0?"disabled style=cursor:no-drop":""}   id='${this.opts.sliderId}' data-type='${this.opts.numbertype}' class='rjhrange_input ${this.opts.rangeClass}' step='${this.opts.stepVal}' type='range' value ='${this.opts.isSame?this.opts.isSameVal:this.opts.sliderVal}' max='${this.opts.sliderMax}' min='${this.opts.sliderMin}' />
            <input ${this.opts.disabled===!0?"disabled style=cursor:no-drop":""} id='${this.opts.valueId}' class='rjhdefalut_input ${this.opts.inputClass}'  type='number' value='${this.opts.sliderVal}' />
            <span class='unit'>${this.opts.unit}</span>
            </div>
        </div>`,document.querySelector(this.opts.location).appendChild(this.sliderHtml)}change(){const o=document.querySelectorAll(".rjhrange_input"),e=document.querySelectorAll(".rjhdefalut_input");for(let t=0;t<o.length;t++)o[t].oninput=s=>{let n=o[t].value,c=o[t].dataset.type;const d=o[t].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].getAttribute("keys");o[t].value=n,e[t].value=n,$("input").css("background-size",this.value+"% 100%"),M.TypeSwitch(d,c,n)},o[t].onchange=()=>{let s=o[t].value,l=o[t].dataset.type;const c=o[t].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].getAttribute("keys");o[t].value=s,e[t].value=s,M.TypeSwitch(c,l,s,!0)}}ChangeVal(){const o=document.querySelectorAll(".rjhdefalut_input"),e=document.querySelectorAll(".rjhrange_input");for(let t=0;t<o.length;t++)o[t].onblur=()=>{let s=o[t].value;e[t].value=s;let n=e[t].dataset.type;const l=e[t].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].getAttribute("keys");M.TypeSwitch(l,n,s,!0)},o[t].onkeydown=s=>{s.keyCode===13&&o[t].blur()}}static TypeSwitch(o,e,t,s=!1){switch(o*=1,t*=1,o){case-1:editor.list.setRoomOpacity.dispatch([e,t]);case 0:case 13:editor.list.changeWallParam.dispatch(e,t,s);break;case 12:case 2:editor.list.changeDoorParam.dispatch(e,t,s);break;case 1:case 15:editor.list.changeDoorParam.dispatch(e,t,s);break;case 4:editor.list.changeMemberParam.dispatch(e,t,s);break;case 5:editor.list.changeMemberParam.dispatch(e,t,s);break;case 6:editor.list.changeMemberParam.dispatch(e,t,s);break}}unit(){const o=document.querySelectorAll(".rjhdefalut_input"),e=document.querySelectorAll(".unit");o.forEach((t,s)=>{t.onfocus=()=>{e[s].style.display="none"},t.onblur=()=>{e[s].style.display="block"}})}}class lo{constructor(o){this.opts=Object.assign({keys:"",title:"",extent:0,width:0,height:0,takeOff:0,oldExtent:0,oldWidth:0,oldHeight:0,x:0,y:0,z:0,oldFloorHei:0},o);const e=document.querySelectorAll(".public_property");for(let n=0;n<e.length;n++){const l=e[n];l.parentNode.removeChild(l)}const t=document.querySelector(".property"),s=document.createElement("div");s.setAttribute("id","model"),s.className="public_property",t.appendChild(s),this.init()}init(){this.renderView(),this.event()}renderView(){let o=this.opts.oldExtent*5,e=this.opts.oldWidth*5,t=this.opts.oldHeight*5,s=this.opts.oldExtent*.1,n=this.opts.oldWidth*.1,l=this.opts.oldHeight*.1;$("#model").append(`<div class='header'>
            <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span keys=${this.opts.keys}>${this.opts.title}</span>
            </div>
            <div class="propertycontent">
            <div class="content_header">
            <div>基础参数</div>
            <div>
            <img src="./static/assets/images/property/pulldown.svg"/>
        </div>
          </div>
          <div class="bridgecontent_box">
          <div class="modelLenght">
          <div class="f-m-t">尺寸</div>
        </div>
        <div class="modelWidth">
        </div>
        <div class="modelheight">
       
        </div>
        <div class="modelTakeoff m-t">
         
        </div>

        <div>
         <div class="f-t-t">
             <div class="f-m-t">角度</div>  

            <div class="f-a-c">    

              <div class="angleBox">
                <div class="tui-angle-input">
                  <div id="input-dial-x" class="input-dial-x input-dial">
                    <div id="input-dial-pointer-x" class="input-dial-pointer-x input-dial-pointer"></div>
                  </div>
                  <input id="rotateInput-x" onmousewheel="return true;" class="rotateInput-x rotateInput" value='${this.opts.x}' max="360"  type="number"/>
                </div>
                <span>X</span>
              </div>  
              
              <div class="angleBox">
                <div class="tui-angle-input">
                  <div id="input-dial-y" class="input-dial-y input-dial">
                    <div id="input-dial-pointer-y" class="input-dial-pointer-y input-dial-pointer"></div>
                  </div>
                  <input id="rotateInput-y" onmousewheel="return true;" class="rotateInput-y rotateInput" value='${this.opts.y}' max="360"  type="number"/>
                </div>
                <span>Y</span>
              </div>  

              <div class="angleBox">              
                <div class="tui-angle-input">
                  <div id="input-dial-z" class="input-dial-z input-dial">
                    <div id="input-dial-pointer-z" class="input-dial-pointer-z input-dial-pointer"></div>
                  </div>
                  <input id="rotateInput-z" onmousewheel="return true;" class="rotateInput-z rotateInput" value='${this.opts.z}' max="360"  type="number"/>
                </div>
                <span>Z</span>
              </div>  

            </div>  

         </div>
        </div>

        <div class="f-a-s f-t-t">
            <div class=" f-a-c">
            <input class="modelScale" style="border:none;top:0px;" type="checkbox" checked>
            <div>等比缩放</div>
            </div>
            <button class="m_r_b resetModel">恢复默认</button>
        </div>

          </div>
            </div>
            `),new M({title:"长度",location:".modelLenght",unit:"mm",sliderVal:`${this.opts.extent}`,sliderMax:`${o}`,sliderMin:`${s}`,valueId:"extentLenghtVal",sliderId:"extentLenght",numbertype:"width",stepVal:"10",rangeClass:"modelRange",inputClass:"modelInput",isSame:!1}),new M({title:"宽度",location:".modelWidth",unit:"mm",sliderVal:`${this.opts.width}`,sliderMax:`${e}`,sliderMin:`${n}`,valueId:"widthLenghtVal",sliderId:"widthLenght",numbertype:"width",stepVal:"10",rangeClass:"modelRange",inputClass:"modelInput",isSame:!1}),new M({title:"高度",location:".modelheight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:`${t}`,sliderMin:`${l}`,valueId:"heightLenghtVal",sliderId:"heightLenght",numbertype:"width",stepVal:"10",rangeClass:"modelRange",inputClass:"modelInput",isSame:!1}),new M({title:"离地距离",location:".modelTakeoff",unit:"mm",sliderVal:`${this.opts.takeOff}`,sliderMax:"2800",sliderMin:"0",valueId:"bridgeLenghtVal",sliderId:"takeOffLenght",numbertype:"width",rangeClass:"TakeoffInput",inputClass:"TakeoffInput"})}event(){let o=document.querySelectorAll(".modelRange"),e=document.querySelectorAll(".modelInput"),t=document.querySelectorAll(".TakeoffInput"),s=this.opts.extent,n=this.opts.width,l=this.opts.height;$(function(){let p=$("#rotateInput-x").val(),h=$("#rotateInput-y").val(),_=$("#rotateInput-z").val(),y=-p+360,P=-h+360,j=-_+360;$("#input-dial-x").css("transform","rotate("+y+"deg)"),$("#input-dial-y").css("transform","rotate("+P+"deg)"),$("#input-dial-z").css("transform","rotate("+j+"deg)");for(let N=0;N<o.length;N++)o[N].oninput=C=>{let k=N,E=C.target.id,f=C.target.valueAsNumber,w=document.querySelector(".modelScale").checked,v=[];if(w){if(E=="extentLenght"){let S=parseInt(f/s*n),D=parseInt(f/s*l);v=[f,S,D]}else if(E=="widthLenght"){let S=parseInt(f/n*s),D=parseInt(f/n*l);v=[S,f,D]}else if(E=="heightLenght"){let S=parseInt(f/l*s),D=parseInt(f/l*n);v=[S,D,f]}$("#extentLenghtVal").val(v[0]),$("#widthLenghtVal").val(v[1]),$("#heightLenghtVal").val(v[2]),$("#extentLenght").val(v[0]),$("#widthLenght").val(v[1]),$("#heightLenght").val(v[2])}else{let S=document.querySelectorAll(".modelInput");for(let D=0;D<S.length;D++)S[k].value=f;v=[$("#extentLenght").val(),$("#widthLenght").val(),$("#heightLenght").val()]}editor.list.change2DModelParam.dispatch("size",v)};for(let N=0;N<e.length;N++)e[N].onblur=C=>{let k=N,E=C.target.id,f=C.target.valueAsNumber,w=document.querySelector(".modelScale").checked,v=[];if(w){if(E=="extentLenghtVal"){let S=parseInt(f/s*n),D=parseInt(f/s*l);v=[f,S,D]}else if(E=="widthLenghtVal"){let S=parseInt(f/n*s),D=parseInt(f/n*l);v=[S,f,D]}else if(E=="heightLenghtVal"){let S=parseInt(f/l*n);v=[parseInt(f/l*s),S,f]}$("#extentLenghtVal").val(v[0]),$("#widthLenghtVal").val(v[1]),$("#heightLenghtVal").val(v[2]),$("#extentLenght").val(v[0]),$("#widthLenght").val(v[1]),$("#heightLenght").val(v[2])}else{let S=document.querySelectorAll(".modelRange");for(let D=0;D<S.length;D++)S[k].value=f;v=[$("#extentLenghtVal").val(),$("#widthLenghtVal").val(),$("#heightLenghtVal").val()]}editor.list.change2DModelParam.dispatch("size",v)},e[N].onkeydown=C=>{C.keyCode===13&&e[N].blur()};for(let N=0;N<t.length;N++)t[N].oninput=C=>{let k=C.target.valueAsNumber;$("#bridgeLenghtVal").val(k),$("#takeOffLenght").val(k),editor.list.change2DModelParam.dispatch("floorHei",k)}}),document.querySelectorAll(".input-dial");let c=document.querySelectorAll(".rotateInput"),d="",m="";$(".input-dial").mousedown(function(p){let h=p.target.id;h=="input-dial-x"||h=="input-dial-pointer-x"?(d="input-dial-x",m="rotateInput-x"):h=="input-dial-y"||h=="input-dial-pointer-y"?(d="input-dial-y",m="rotateInput-y"):(h=="input-dial-z"||h=="input-dial-pointer-z")&&(d="input-dial-z",m="rotateInput-z"),document.addEventListener("mousemove",u),document.addEventListener("mouseup",g)});function g(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",g)}function u(p){let h=document.getElementById(d).getBoundingClientRect(),{x:_,y,width:P,height:j}=h,N=_+P/2,C=y+j/2,k=p.pageX,E=p.pageY,f=[k-N,E-C],w=Math.atan2(f[1],f[0])*180/Math.PI;w=parseInt(w<0?w+360:w),$(`#${d}`).css("transform","rotate("+w+"deg)"),$(`#${m}`).val(-(w-360));let v=[];v.push($("#rotateInput-x").val()),v.push($("#rotateInput-y").val()),v.push($("#rotateInput-z").val()),editor.list.change2DModelParam.dispatch("rotation",v)}for(let p=0;p<c.length;p++)c[p].onblur=function(h){let _=-this.value+360;p==0?d="input-dial-x":p==1?d="input-dial-y":p==2&&(d="input-dial-z"),this.value>360&&(this.value=360),$(`#${d}`).css("transform","rotate("+_+"deg)");let y=[];y.push($("#rotateInput-x").val()),y.push($("#rotateInput-y").val()),y.push($("#rotateInput-z").val()),editor.list.change2DModelParam.dispatch("rotation",y)},c[p].onkeydown=function(h){if(h.keyCode===13){let _=-this.value+360;p==0?d="input-dial-x":p==1?d="input-dial-y":p==2&&(d="input-dial-z"),this.value>360&&(this.value=360),$(`#${d}`).css("transform","rotate("+_+"deg)");let y=[];y.push($("#rotateInput-x").val()),y.push($("#rotateInput-y").val()),y.push($("#rotateInput-z").val()),editor.list.change2DModelParam.dispatch("rotation",y)}};let r=this;$(".resetModel").click(function(){let p=[r.opts.oldExtent,r.opts.oldWidth,r.opts.oldHeight];$("#extentLenghtVal").val(p[0]),$("#widthLenghtVal").val(p[1]),$("#heightLenghtVal").val(p[2]),$("#extentLenght").val(p[0]),$("#widthLenght").val(p[1]),$("#heightLenght").val(p[2]),$("#bridgeLenghtVal").val(r.opts.oldFloorHei),$("#takeOffLenght").val(r.opts.oldFloorHei),$(".input-dial").css("transform","rotate(0deg)"),$(".rotateInput").val(0),editor.list.change2DModelParam.dispatch("size",p),editor.list.change2DModelParam.dispatch("floorHei",r.opts.oldFloorHei),editor.list.change2DModelParam.dispatch("rotation",[0,0,0])})}}class Pe{constructor(o){this.opts=Object.assign({keys:"",title:"",extent:null,extentMax:null,width:null,widthMax:null,height:null,heightMax:null,takeOff:null,angle:null},o);const e=document.querySelectorAll(".public_property");for(let n=0;n<e.length;n++){const l=e[n];l.parentNode.removeChild(l)}const t=document.getElementsByClassName("property")[0];var s=document.createElement("div");s.setAttribute("id","bridge"),s.className="public_property",t.insertBefore(s,t.child),this.init()}init(){this.renderView(),this.event()}renderView(){$("#bridge").append(`<div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>${this.opts.title}</span>
        </div>
        <div class="propertycontent">
        <div class="content_header" onclick = "runEffect('.bridgecontent_box')">
          <div>基础参数</div>
          <div>
          <img src="./static/assets/images/property/pulldown.svg"/>
      </div>
        </div>
        <div class="bridgecontent_box">
        <div class="bridgelength">
      </div>
      <div class="bridgeply">
      </div>
      <div class="bridgeheight">
      </div>
      <div class="angle bridge_angle">
      <span>角度</span>
        <input type="number" oninput="if(value>360)value=360"  value=${this.opts.angle} />
        <span class='angle_unit'>°</span>
      </div>
        </div>
      </div>
        `),new M({title:"长度",location:".bridgelength",unit:"mm",sliderVal:`${this.opts.extent}`,sliderMax:`${this.opts.extentMax}`,sliderMin:"1",valueId:"bridgeLenghtVal",sliderId:"bridgeLenght",numbertype:"width"}),new M({title:"宽度",location:".bridgeply",unit:"mm",sliderVal:`${this.opts.width}`,sliderMax:`${this.opts.widthMax}`,sliderMin:"1",valueId:"bridgeHeightVal",sliderId:"bridgeHeight",numbertype:"height"}),new M({title:"高度",location:".bridgeheight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:`${this.opts.heightMax}`,sliderMin:"1",valueId:"bridgeWidthVal",sliderId:"bridgeWidth",numbertype:"depth"})}event(){const o=document.querySelector(".bridge_angle input");o.addEventListener("blur",function(){editor.list.changeMemberParam.dispatch("rotation",o.value)}),o.onkeydown=e=>{e.keyCode===13&&editor.list.changeMemberParam.dispatch("rotation",o.value)}}}class Me{constructor(o){this.opts=Object.assign({keys:"-1",insideSpace:0,floorHeight:o.storeyHei,floorThinkness:o.floorDep,diaphaneity:o.roomOpacity},o);const e=document.querySelectorAll(".public_property");for(let n=0;n<e.length;n++){const l=e[n];l.parentNode.removeChild(l)}const t=document.getElementsByClassName("property")[0];var s=document.createElement("div");s.setAttribute("id","level"),s.className="public_property",t.insertBefore(s,t.child),this.renderView(),this.event()}renderView(){$("#level").append(`  <div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>楼层属性</span>
        </div>
        <div class= "propertycontent">
        <div class="content_header">
              <div>基础参数</div>
              <div>
                  <img src="./static/assets/images/property/pulldown.svg"/>
              </div>
            </div>
        <div class="propertycontent_box">
       
      <div class="addfloor">
      <div>层高</div>
      <div class="taonei">
        <input data-type='floorHeight' type="text" id='levelFloorHeight' value=${this.opts.floorHeight} >
        <span class="input_unit1">mm</span>
      </div>
      </div>
      <div class="level_ply">
      </div>
      <div class='level_opacity'>
      </div>
      </div>
        </div>
        </div>
        `),new M({title:"底板厚度",location:".level_ply",unit:"mm",sliderVal:`${this.opts.floorThinkness}`,sliderMax:"1500",sliderMin:"1",valueId:"levelPlyVal",sliderId:"levelPly",numbertype:"levelPly"}),new M({title:"户型透明度",location:".level_opacity",unit:"%",sliderVal:`${this.opts.diaphaneity}`,sliderMax:"100",sliderMin:"0",stepVal:"0.1",valueId:"levelOpacityVal",sliderId:"levelOpacity",numbertype:"opacity"})}event(){document.querySelector("#levelFloorHeight").addEventListener("blur",o=>{let e=o.target.value,t=document.querySelector("#levelFloorHeight").dataset.type;editor.list.setRoomOpacity.dispatch([t,e])})}}class ao{constructor(o){this.opts=Object.assign({keys:"",extent:null,height:null,thickness:null},o);const e=document.querySelectorAll(".public_property");for(let n=0;n<e.length;n++){const l=e[n];l.parentNode.removeChild(l)}const t=document.getElementsByClassName("property")[0];var s=document.createElement("div");s.setAttribute("id","wall"),s.className="public_property",t.insertBefore(s,t.child),this.init()}init(){this.renderView(),this.event()}renderView(){$("#wall").append(` <div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>墙</span>
        </div>
          <div class="propertycontent ">
          <div class="content_header" >
          <div>基础参数</div>
          <div>
              <img src="./static/assets/images/property/pulldown.svg"/>
          </div>
        </div>
        <div class="propertycontent_box_1">
        <div class="btn_wall">
            <button  id='commonWall'>普通墙</button>
            <button  id='mainWall'>承重墙</button>
            <button id='lowWall'>矮墙</button>
        </div>
        <div class="walllength">
      </div>
      <div class="wallheight">
    
      </div>
      <div class="wallplay">
      </div>
          </div>
        `),new M({title:"长度",location:".walllength",unit:"mm",sliderVal:`${this.opts.extent}`,sliderMax:"10000",sliderMin:"1",valueId:"walllenghtValue",sliderId:"wallLenght",numbertype:"len"}),new M({title:"高度",location:".wallheight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:window.storeyHei,sliderMin:"1",valueId:"wallHeightValue",sliderId:"wallHeight",numbertype:"height"}),new M({title:"厚度",location:".wallplay",unit:"mm",sliderVal:`${this.opts.thickness}`,sliderMax:"1000",sliderMin:"1",valueId:"wallplyValue",sliderId:"wallply",numbertype:"depth"})}event(){const o=$("#wall input[type = range]"),e=$("#wall .input_area"),t=$("#wall button");document.querySelector("#commonWall").addEventListener("click",function(){e[1].classList.add("not_allowed"),t.removeClass("active_btn"),t[0].classList.add("active_btn"),o[1].disabled=!0,e[1].children[1].disabled=!0,$("#wallHeightValue").val(window.storeyHei),$("#wallHeight").val(window.storeyHei),editor.list.changeWallParam.dispatch("wallType",2)}),document.querySelector("#lowWall").addEventListener("click",function(){t.removeClass("active_btn"),e[1].classList.remove("not_allowed"),t[2].classList.add("active_btn"),o[1].disabled=!1,e[1].children[1].disabled=!1,$("#wallHeightValue").val(1200),$("#wallHeight").val(1200),editor.list.changeWallParam.dispatch("wallType",1)}),document.querySelector("#mainWall").addEventListener("click",function(){e[1].classList.add("not_allowed"),t.removeClass("active_btn"),t[1].classList.add("active_btn"),o[1].disabled=!0,e[1].children[1].disabled=!0,$("#wallHeightValue").val(window.storeyHei),$("#wallHeight").val(window.storeyHei),editor.list.changeWallParam.dispatch("wallType",0)})}}class ro{constructor(o){this.opts=Object.assign({keys:"",width:null,height:null,depth:null,takeOff:null,disabledFlag:null},o);const e=document.querySelectorAll(".public_property");for(let n=0;n<e.length;n++){const l=e[n];l.parentNode.removeChild(l)}const t=document.getElementsByClassName("property")[0];var s=document.createElement("div");s.setAttribute("id","window"),s.className="public_property",t.insertBefore(s,t.child),this.init()}init(){this.renderView(),this.window()}renderView(){$("#window").append(`<div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>${this.opts.disabledFlag}</span>
        </div>
        <div class="propertycontent">
        <div class="content_header">
          <div>基础参数</div>
          <div>
          <img src="./static/assets/images/property/pulldown.svg"/>
      </div>
        </div>
        <div class="windowcontent_box">
          <div class="btn_door">
            <button id='commonWindow' class="door-el-btn">窗</button>
            <button id='frenchWindow' class="door-el-btn">落地窗</button>
            <button id='bayWindow' class="door-el-btn">飘窗</button>
          </div>
          <div class="windowlength">
       
        </div>
        <div class="windowHeight">
      
      </div>
      <div class="windowply">
     
      </div>
      <div class="windowlidi">
    
      </div>
      <button class="recover_default">恢复默认</button>
        </div>
      </div>`);let o=null;this.opts.disabledFlag=="L型窗"||this.opts.disabledFlag=="U型窗"?o=!0:o=!1,new M({title:"宽度",location:".windowlength",unit:"mm",sliderVal:`${this.opts.width}`,sliderMax:"10000",sliderMin:"1",valueId:"windowLenghtVal",sliderId:"windowLenght",numbertype:"width",disabled:o}),new M({title:"高度",location:".windowHeight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:"2800",sliderMin:"1",valueId:"windowHeightVal",sliderId:"windowHeight",numbertype:"height"}),new M({title:"深度",location:".windowply",unit:"mm",sliderVal:`${this.opts.depth}`,sliderMax:"240",sliderMin:"1",valueId:"windowPlyVal",sliderId:"windowPly",numbertype:"depth",disabled:o}),new M({title:"离地",location:".windowlidi",unit:"mm",sliderVal:`${this.opts.takeOff}`,sliderMax:"2800",sliderMin:"1",valueId:"windowLiftoffVal",sliderId:"windowLiftoff",numbertype:"floorHei"})}window(){$("#commonWindow").click(()=>{console.log("普通窗")}),$("#frenchWindow").click(()=>{console.log("落地窗")}),$("#bayWindow").click(()=>{console.log("飘窗")})}}class co{constructor(o){this.opts=Object.assign({keys:"",extent:null,height:null,ply:null,takeOff:null,modelName:null},o);const e=document.querySelectorAll(".public_property");for(let n=0;n<e.length;n++){const l=e[n];l.parentNode.removeChild(l)}const t=document.getElementsByClassName("property")[0];var s=document.createElement("div");s.setAttribute("id","door"),s.className="public_property",t.insertBefore(s,t.child),this.init()}init(){this.renderView(),this.commondoor()}renderView(){$("#door").append(`  <div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>${this.opts.modelName}</span>
        </div>
        <div class="propertycontent">
        <!-- 内容头部 -->
        <div class="content_header">
          <div>基础参数</div>
          <div>
          <img src="./static/assets/images/property/pulldown.svg"/>
      </div>
        </div>
        <div class="doorcontent_box">
          <div class="btn_door">
            <button id='commonDoor' class="door-el-btn">门</button>
            <button id='doubleDoor' class="door-el-btn">双开门</button>
            <button id='slidingDoor' class="door-el-btn">移门</button>
          </div>
          <div class="doorlength">
        </div>
        <div class="doorHeight">
      </div>
      <div class="doorply">
      </div>
      <div class="lidi">
      </div>
      <button class="recover_default">恢复默认</button>
        </div>
      </div>
        `),new M({title:"长度",location:".doorlength",unit:"mm",sliderVal:`${this.opts.extent}`,sliderMax:"2800",sliderMin:"1",valueId:"doorLenghtVal",sliderId:"doorLenght",numbertype:"width"}),new M({title:"高度",location:".doorHeight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:"20000",sliderMin:"1",valueId:"doorHeightVal",sliderId:"doorHeight",numbertype:"height"}),new M({title:"厚度",location:".doorply",unit:"mm",sliderVal:`${this.opts.ply}`,sliderMax:"1500",sliderMin:"1",valueId:"doorPlyVal",sliderId:"doorPly",numbertype:"depth"}),new M({title:"离地",location:".lidi",unit:"mm",sliderVal:`${this.opts.takeOff}`,sliderMax:"2800",sliderMin:"0",valueId:"doorLiftoffVal",sliderId:"doorLiftoff",numbertype:"floorHei"})}commondoor(){$("#commonDoor").click(()=>{console.log("普通门")}),$("#doubleDoor").click(()=>{console.log("双开门")}),$("#slidingDoor").click(()=>{console.log("移门")})}}const $e=new q,fe=class{constructor(){const o=document.querySelectorAll(".public_property");for(let s=0;s<o.length;s++){const n=o[s];n.parentNode.removeChild(n)}const e=document.getElementsByClassName("property")[0];var t=document.createElement("div");t.setAttribute("id","floor"),t.className="public_property",e.insertBefore(t,e.child),this.init()}init(){this.renderView(),fe.roomSelect()}renderView(){$("#floor").append(` <div class="view_header">
              <div class="header_icon1" >
                  <svg height="1em" viewBox="0 0 5 14" width="1em" fill="currentColor" aria-hidden="true">
                      <path
                          d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                          fill-rule="evenodd"></path>
                  </svg>
              </div>
              <div class="header_title" id = "untitled">
                  未命名
              </div>
              <div class="header_title" id="floorProperties">
                  楼层属性
              </div>
          </div>
          <div class="propertycontent_box_2" id="unnamed">
          <div class="diban_content">
          <div class="property_select">
            <div class="room_property">
              <span>房间类型</span>
              <select id='roomtype' placeholder="自定义">
                ${fe.roomTypelist.map(o=>o.name=="未命名"?`<option selected>${o.name}</option>`:`<option >${o.name}</option>`)}
                <select>
            </div>
            <div class="room_property">
              <span>房间名</span>
              <input id='roomname' value='房间名'></input>
            </div>
          </div>
          <div class="page_range">
            <div class="title">
              <span>区域设置</span>
              <div class="el-icon-arrow-up"></div>
            </div>
            <div class="page_content">
              <div class="page_btn">
                <span>提供波打线、腰线、水刀等功能</span>
                <button>
                  <div class="el-icon-edit"></div>
                  <span>铺贴编辑</span>
                </button>
              </div>
              <!-- 位置属性 -->
              <div class="location_title">
                <span>位置属性</span>
                <div class="el-icon-arrow-up"></div>
              </div>
              <div class="location_property">
                <!-- <el-select></el-select> -->
                <div class=""></div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div class="propertycontent_box_2" id="floorProperty" style="display: none;">
          <div class= "content">
          <div class="content_header">
                <div>基础参数</div>
                <div>
                    <img src="./static/assets/images/property/pulldown.svg"/>
                </div>
              </div>
          <div class="propertycontent_box_3">
            <div class="addfloor">
                <div>添加楼层</div>
                  <div class="floor_icon">
                    <div class="icon_box tooltips">
                      <div class="center cursor">
                        <img src="./static/assets/images/property/addfloor.svg"/>
                      </div>
                      <div class="tooltiptext tooltips_width_2 center">新建楼层</div>
                    </div>
                    <div class="icon_box tooltips">
                    <div class="center cursor">
                    <img src="./static/assets/images/property/addfloor.svg"/>
                  </div>
                  <div class="tooltiptext tooltips_width_3 center">新建地下室</div>
                    </div>
                  </div>
            </div>
            <div class="addfloor">
            <div>当前楼层</div>
            <div class="dangqian">
              <select placeholder="1层">
                <option label="1层"></option>
              <select>
            </div>
          </div>
          <div class="addfloor inside_space">
          </div>
          <div class="floorHeight">
          </div>
          <div class="floorPly">
          </div>
          </div>
          </div>
          `),new M({title:"套内面积",location:".inside_space",unit:"mm",sliderVal:"200",sliderMax:"1500",sliderMin:"1"}),new M({title:"层高",location:".floorHeight",unit:"mm",sliderVal:"200",sliderMax:"1500",sliderMin:"1"}),new M({title:"地板厚度",location:".floorPly",unit:"mm",sliderVal:"200",sliderMax:"1500",sliderMin:"1"})}handover(){$("#untitled").click(function(){$e.openContent(event,"unnamed","propertycontent_box_2","header_title")}),$("#floorProperties").click(function(){$e.openContent(event,"floorProperty","propertycontent_box_2","header_title")})}static roomSelect(){document.querySelector("#roomtype").addEventListener("change",function(t){$("#roomname").val(t.target.value),editor.list.setRoomType.dispatch(t.target.value)});const e=document.querySelector("#roomname");e.addEventListener("keydown",function(t){$("#roomname").val(t.target.value),editor.list.setRoomType.dispatch(t.target.value)}),e.addEventListener("blur",function(t){$("#roomname").val(t.target.value),editor.list.setRoomType.dispatch(t.target.value)})}};let se=fe;F(se,"roomTypelist",[{name:"未命名"},{name:"门厅"},{name:"客厅"},{name:"餐厅"},{name:"阳台"},{name:"卧室"},{name:"主卧"},{name:"次卧"},{name:"儿童房"},{name:"老人房"},{name:"洗衣间"},{name:"卫生间"},{name:"走廊"},{name:"厨房"}]);const A=class{constructor(){const o=document.querySelector(".mine_tabscontent"),e=document.createElement("div");e.className="mine_record tabs_content",o.appendChild(e),A.data==null?(A.newData=A.minePutmodelList,A.data=A.minePutmodelList):A.newData=A.data,A.list==null?(A.newList=A.groupIteminlineList,A.list=A.groupIteminlineList):A.newList=A.list,this.init()}static saveGroupItem(o,e,t){e==null&&(e=[]);const s=document.querySelectorAll(".save_group .group_item"),n=document.createElement("div");n.className="group_item_inline";var l=`<div class='group_item_inline_title'>
                                <div class='return_key cursor'>
                                    <img src='./static/assets/images/jiantou.svg'/>
                                    <span class='iconfont icon-jiajuzuhe-xiankuang'></span>
                                </div>
                                <span class='group_item_inline_title_name'>${o}</span>
                                <div>
                                </div>
                            </div>
                            <div class='group_item_inline_title_content'>
                            <div class='group_item_inline_title_contentbox'>
                                ${e.map(r=>`<div class='save_group_item cursor '>
                                    <div class='save_group_item_delete icon-shanshu-1 iconfont'></div>
                                    <div class='save_group_item_collect icon-shouzang-xiankuang iconfont'></div>
                    <img class='cursor' src=${r.src} />
        </div>`).join("")}</div>
        <div class='group_item_inline_botton'>
            <div class='group_item_inline_botton_one'>
                <div class='group_item_inline_botton_oneleft'>
                    <input type='checkbox' />
                    <span>全选 (1/4)</span>
                </div>
                <div class='group_item_inline_botton_oneright'>
                    <img class='cursor' src='./static/assets/images/mine-right.svg' />
                    <img class='cursor' src='./static/assets/images/mine-delect.svg' />
                </div>
            </div>
            <div class='group_item_inline_botton_two'>
            <div class='group_item_left_jiantou cursor'>
            <img src='./static/assets/images/public/left_jiantou.svg'/>
        </div>
        <div class='centre'>
            <input value='1' /><span>/40</span>
        </div>
        <div class='right_jiantou cursor'>
        <img src='./static/assets/images/public/right_jiantou.svg'/>
        </div>
            </div>
        </div>
    </div>`;const c=document.querySelector(".mine_record"),d=document.querySelector(".mine_record_item");for(d.style.display="none",n.innerHTML=l,c.insertBefore(n,c.child),$(".return_key").click(()=>{d.style.display="block",n.remove()}),i=0;i<s.length;i++)s[i].className=s[i].className.replace("group_itembg","");d.style.display="none",document.querySelectorAll(".save_group_item").forEach((r,p)=>{r.onclick=function(){const h=e[p].json;editor.list.loadGLTFJson.dispatch(h)}});const g=document.querySelectorAll(".save_group_item_delete");let u=JSON.parse(localStorage.getItem("groupIteminlineList"));for(let r=0;r<g.length;r++){const p=g[r];p.onclick=function(h){h.stopPropagation(),u[t].splice(r,1),p.parentNode.remove(),localStorage.setItem("groupIteminlineList",JSON.stringify(u))}}}init(){this.renderView(),this.event()}renderView(){$(".mine_record").append(`<div class='mine_record_item'>
            <div class='my_grouping'>
            <span>记录分组</span>
            <div class='new_btn new_group'>
                <span class="iconfont icon-cengjia icon_bgcolor cursor"></span>
                <span>新建</span>
            </div>
        </div>
        <div class='model_group save_group'>
        ${A.newData.map(e=>` 
            <div class='group_item cursor'>
                <div class='min_group_itemtitle'>
                    <span class='iconfont icon-jiajuzuhe-xiankuang'></span>
                    <span>${e.title}</span>
                </div>
        </div>`).join("")}
        </div>
             </div>`),document.querySelectorAll(".save_group .group_item").forEach((e,t)=>{let s=[],n=e.childNodes[1].innerText;e.onclick=function(){if(localStorage.getItem("groupIteminlineList")==null)s=A.groupIteminlineList;else{let l=JSON.parse(localStorage.getItem("groupIteminlineList"));l.length==0?s=A.groupIteminlineList:s=l}A.saveGroupItem(n,s[t],t),e.classList.add("group_itembg")}})}event(){const o=A.newData;document.querySelector(".new_group").addEventListener("click",function(){new ve({width:"20%",height:"200px",title:"新建分组",content:"<input value='' class='new_save_group' />",success(){const t=document.querySelector(".new_save_group").value;o.push({title:`${t}`,num:0}),document.querySelector(".save_group").innerHTML=`
                    ${o.map(l=>` 
                    <div class='group_item cursor'>
                        <div class='min_group_itemtitle'>
                            <span class='iconfont icon-jiajuzuhe-xiankuang'></span>
                            <span>${l.title}</span>
                        </div>
                </div>`).join("")}`,localStorage.setItem("saveRecorf",JSON.stringify(o)),document.querySelectorAll(".save_group .group_item").forEach((l,c)=>{let d=[],m=l.childNodes[1].innerText;l.onclick=function(){if(localStorage.getItem("groupIteminlineList")==null)d=A.groupIteminlineList;else{let g=JSON.parse(localStorage.getItem("groupIteminlineList"));g.length==0?d=A.groupIteminlineList:d=g}A.saveGroupItem(m,d[c],c),l.classList.add("group_itembg")}});let n=JSON.parse(localStorage.getItem("groupIteminlineList"));n==null&&(n=[[],[],[]]),n.push([]),localStorage.setItem("groupIteminlineList",JSON.stringify(n))}}).open()})}};let R=A;F(R,"data",JSON.parse(localStorage.getItem("saveRecorf"))),F(R,"list",JSON.parse(localStorage.getItem("groupIteminlineList"))),F(R,"groupIteminlineList",[[],[],[]]),F(R,"minePutmodelList",[{title:"全部",num:1e3},{title:"默认",num:1e3},{title:"家具组合",num:1e3}]),F(R,"newData",null),F(R,"newList",null);class mo{constructor(){}main(o,e){this.renderView1(o,e)}renderView1(o,e){new ve({width:"20%",height:"200px",title:"选择分组",content:`<select class='savegroup'>${R.data.map((t,s)=>`<option value=${s}>${t.title}</option>`).join("")}</select>`,success(){let t=$(".savegroup").val();$(".savegroup").find("option:selected").text(),localStorage.getItem("groupIteminlineList")==null&&localStorage.setItem("groupIteminlineList",JSON.stringify(R.list));const s=JSON.parse(localStorage.getItem("groupIteminlineList"));s[t].push({src:o,json:e}),localStorage.setItem("groupIteminlineList",JSON.stringify(s)),document.querySelector(".group_item_inline")}}).open()}}class uo{constructor(o){this.opts=Object.assign({title:"",viewList:[],replace:!0},o);const e=document.querySelectorAll(".replaceView");for(let d=0;d<e.length;d++){const m=e[d];m.parentNode.removeChild(m)}const t=document.querySelector(".hideBarleft"),s=document.createElement("div"),n=document.createElement("div");s.className="replaceView",n.className="tier replaceDom",t.appendChild(s),s.appendChild(n);const l=document.createElement("div");l.className="replaceHeader",n.appendChild(l);const c=document.createElement("div");c.className="replaceContent",n.appendChild(c),this.init()}init(){this.renderView()}renderView(){$(".replaceHeader").append(`<div class='public_title'><span>商品替换</span><div class="closeReplace cursor ">x</div></div>
                  <div class='search_box'><span class='iconfont icon-yangbanjian-xiaosuo'></span><input placeholder='在“${this.opts.title}”下搜索' /><div class='spread cursor'><img src='./static/assets/images/zhankai.svg'/></div></div>`),$(".replaceContent").append(`
            <div class='public_view_content'>
            <div class='public_view_content_item'>
            <div class='type_box'>
            <div class='iconfont icon-yangbanjian-baixu cursor'></div>
            </div>
            <div class='public_srcItem1'></div>
            </div>
            </div>`),$(function(){let e=new Ne({height:"20px",width:"56px",title:"色系",location:".type_box"}),t=new Ne({height:"20px",width:"56px",title:"风格",location:".type_box",list:[{value:"田园风",label:"1"},{value:"中式风格",label:"2"},{value:"欧式风格",label:"3"},{value:"日式风格",label:"4"}]}),s=new Ne({height:"20px",width:"56px",title:"材质",location:".type_box",list:[{value:"田园风",label:"1"},{value:"中式风格",label:"2"},{value:"欧式风格",label:"3"},{value:"日式风格",label:"4"}]});e.open(),t.open(),s.open(),$(".closeReplace").click(function(){editor.list.closeReplaceView.dispatch()})}),$(".public_srcItem1").append(`${this.opts.viewList[0].item.map(e=>`<div class='public_view_item1 cursor' data-type=${e.modelPosition}>
                    <img  data-img='${e.src}'  src='${e.src}'/>
                </div>`).join("")}`),document.querySelectorAll(".public_view_item1").forEach((e,t)=>{e.onclick=function(){const s=e.dataset.file,n=e.children[0].dataset.img;let l=n.replace(/iso.png/gi,"sim.glb");const c=n.replace(/iso.png/gi,".png"),d=e.dataset.type;s=="json"?(l=n.replace(/iso.png/gi,".json"),editor.list.replaceGltf.dispatch([l])):editor.list.replaceGltf.dispatch([l,c,d])}})}}class po{constructor(){this.opts={pregressVal:0},this.init()}init(){this.createElement()}create(o,e){let t=document.createElement(o);return t.className=e,t}createElement(){this.$PROGRESSBAR=this.createBar(),this.$PROGRESSTITLE=this.createTitle(),this.$PROGRESSBOX=this.createProgressBar(),this.$PROGRESSBAR.appendChild(this.$PROGRESSTITLE),this.$PROGRESSBAR.appendChild(this.$PROGRESSBOX),document.body.appendChild(this.$PROGRESSBAR)}createBar(){return this.$BAR=this.create("div","progress_bar"),this.$BAR}createTitle(){return this.$TITLE=this.create("span","progress_bar_title"),this.$TITLE.innerHTML="上传中...",this.$TITLE}createProgressBar(){return this.$PROGRESS=this.create("div","progress_barbox"),this.$PROGRESSVAL=this.create("span","progress_val"),this.$PROGRESSVAL.innerHTML=`${this.opts.pregressVal}%`,this.$PROGRESS.appendChild(this.$PROGRESSVAL),this.$PROGRESS.style.width=this.opts.pregressVal+"%",console.log(this.opts.pregressVal),this.$PROGRESS}}class go{constructor(){const o=document.querySelector(".mine_tabscontent"),e=document.createElement("div");e.className="mine_put tabs_content",o.appendChild(e),this.init()}init(){this.renderView(),this.event()}renderView(){let o=[{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"}],e=[{title:"上传贴图",type:"1"},{title:"上传模型",type:"2"}];$(".mine_put").append(`<div class='mine_put_model'>
                <div class='mine_put_model_header'>
                    <div class='mine_put_model_header_btn center cursor'>
                        <span>全部</span>
                        <img src= './static/assets/images/btn-botton.svg'/>
                    </div>
                    <input class='mine_put_model_header_input' placeholder='在 “全部” 下搜索' />
                    <svg class="icon-min icon_input" aria-hidden="true">
                    <use xlink:href="#icon-yangbanjian-xiaosuo"></use>
                    </svg>
                </div>
                <div class='mine_put_model_content'>
                ${o.map(t=>`<div class='mine_put_model_content_item '>
                    <img class='cursor' src=${t.src} />
                </div>`).join("")}
                </div>
                <div class='mine_put_model_button'>
                    <div class='mine_put_model_button_click'>
                    ${e.map(t=>` <div class='mine_put_model_button_click_item center cursor'>
                        <span>${t.title}</span>
                        </div>`).join("")}
                    </div>
                    <div class='mine_put_model_button_click_btn center cursor'>
                        <span>上传模型</span>
                    </div>
                </div>
            </div>`)}event(){const o=document.querySelectorAll(".mine_put_model_button_click_item"),e=new U;o.forEach(t=>{t.onclick=function(){for(let s=0;s<o.length;s++)o[s].className=o[s].className.replace("minePutBg","");t.classList.add("minePutBg"),e.init(),document.querySelector(".mine_put_model_button_click").style.display="none"}}),$(".mine_put_model_button_click_btn").click(()=>{document.querySelector(".mine_put_model_button_click").style.display="block"})}}window.schemeContentList=[];localStorage.getItem("schemeContentList")===null?window.schemeContentList=[]:window.schemeContentList=JSON.parse(localStorage.getItem("schemeContentList"));const ho=[{title:"我的收藏",type:"collect"},{title:"上传模型",type:"put"},{title:"保存记录",type:"record"}],vo=[{title:"方案",type:"scheme"},{title:"模型",type:"model"}];class be{constructor(){const o=document.getElementById("mine"),e=document.createElement("div");e.className="mine_box",o.insertBefore(e,o.child);const t=document.createElement("div");t.className="mine_header",e.insertBefore(t,e.child);const s=document.createElement("div");s.className="mine_content",e.insertBefore(s,e.child);const n=document.createElement("div");n.className="minetabs_header",s.insertBefore(n,s.child);const l=document.createElement("div");l.className="mine_tabscontent",s.insertBefore(l,s.child),$(".mine_header").append(`<span>我的</span><svg class="icon icon-min" aria-hidden="true"  height='20' width='20'>
            <use xlink:href="#icon-shousuo"></use>
            </svg>`),$(".minetabs_header").append(`${ho.map(u=>`<div class='item_tabs center'>${u.title}</div>`).join("")}`),document.querySelectorAll(".item_tabs")[0].classList.add("tabs_active");const c=document.createElement("div");c.className="mine_collect tabs_content",l.insertBefore(c,l.child),document.querySelector(".mine_collect").classList.add("tabs_show");const d=document.createElement("div");d.className="mine_collect_inline",c.insertBefore(d,c.child);const m=document.createElement("div");m.className="collect_title",d.insertBefore(m,d.child),$(".collect_title").append(`${vo.map(u=>`<span class='collect_title_item center cursor'>${u.title}</span>`).join("")}`),document.querySelectorAll(".collect_title_item")[0].classList.add("collect_inline_active");const g=document.createElement("div");g.className="model_solution",d.insertBefore(g,d.child),this.init(),new go,new R,new Ae}init(){be.renderView(),this.event()}static renderView(){let o=[{title:"全部",num:1e3},{title:"默认",num:1e3},{title:"家具组合",num:1e3}];var e=[{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"},{src:"./static/assets/images/public/shafa.jpg"}];const t=document.querySelector(".model_solution"),s=document.createElement("div");s.className="mine_scheme_content collect_inline_content collect_inline_show",t.insertBefore(s,t.child),$(".mine_scheme_content").append(`<div class='mine_scheme_content_src'>
     ${window.schemeContentList.map(m=>`<div class='mine_scheme_content_src_item'>
                 <img src=${m.base64} />
                 <span class='iconfont icon-shanshu-1 delete_model_item'></span>
                 <span class='delete_model_ordername'>${JSON.parse(m.json).orderName}</span>
     </div>`).join("")}
 </div>
 <div class='mine_scheme_content_botton'>
 <div class='group_item_inline_botton_one'>
 <div class='group_item_inline_botton_oneleft'>
     <input type='checkbox' />
     <span>全选 (1/4)</span>
 </div>
 <div class='group_item_inline_botton_oneright'>
     <img class='cursor' src='./static/assets/images/mine-right.svg' />
     <img class='cursor' src='./static/assets/images/mine-delect.svg' />
 </div>
</div>
<div class='group_item_inline_botton_two'>
<div class='group_item_left_jiantou cursor'>
<img src='./static/assets/images/public/left_jiantou.svg'/>
</div>
<div class='centre'>
<input value='1' /><span>/40</span>
</div>
<div class='group_item_right_jiantou cursor'>
<img src='./static/assets/images/public/right_jiantou.svg'/>
</div>
</div>
 </div>
 `);const n=document.createElement("div");n.className="mine_model_content collect_inline_content ",t.insertBefore(n,t.child),$(".mine_model_content").append(`<div class='model_contentbox'>
                <div class='model_inputbox'><input class='mine_model_input' placeholder='在 “我的模型” 下搜索'   />
                <svg class="icon-min icon_minemodel" aria-hidden="true">
                <use xlink:href="#icon-yangbanjian-xiaosuo"></use>
                </svg>
            </div>
            <div class='my_grouping'>
                <span>我的分组</span>
                <div class='new_btn'>
                    <span class="iconfont icon-cengjia icon_bgcolor cursor"></span>
                    <span>新建</span>
                </div>
            </div>
                <div class='model_group'>
                ${o.map(m=>` 
                    <div class='group_item cursor'>
                        <div class='min_group_itemtitle'>
                            <span class='iconfont icon-jiajuzuhe-xiankuang'></span>
                            <span>${m.title}</span>
                        </div>
                </div>`).join("")}
                </div>
            </div>
            `);const l=document.querySelectorAll(".group_item");l.forEach((m,g)=>{m.onclick=function(){let u=m.childNodes[1].innerText;const r=document.createElement("div");r.className="group_item_inline";var p=`<div class='group_item_inline_title'>
                                            <div class='return_key cursor'>
                                                <img src='./static/assets/images/jiantou.svg'/>
                                                <span class='iconfont icon-jiajuzuhe-xiankuang'></span>
                                            </div>
                                            <span class='group_item_inline_title_name'>${u}</span>
                                            <div>
                                            </div>
                                        </div>
                                        <div class='group_item_inline_title_content'>
                                        <div class='group_item_inline_title_contentbox'>
                                            ${e.map(y=>`<div class='group_item_inline_title_contentitem '>
                                <img class='cursor' src=${y.src} />
                    </div>`).join("")}</div>
                    <div class='group_item_inline_botton'>
                        <div class='group_item_inline_botton_one'>
                            <div class='group_item_inline_botton_oneleft'>
                                <input type='checkbox' />
                                <span>全选 (1/4)</span>
                            </div>
                            <div class='group_item_inline_botton_oneright'>
                                <img class='cursor' src='./static/assets/images/mine-right.svg' />
                                <img class='cursor' src='./static/assets/images/mine-delect.svg' />
                            </div>
                        </div>
                        <div class='group_item_inline_botton_two'>
                        <div class='group_item_left_jiantou cursor'>
                        <img src='./static/assets/images/public/left_jiantou.svg'/>
                    </div>
                    <div class='centre'>
                        <input value='1' /><span>/40</span>
                    </div>
                    <div class='right_jiantou cursor'>
                    <img src='./static/assets/images/public/right_jiantou.svg'/>
                    </div>
                        </div>
                    </div>
                </div>`;r.innerHTML=p;const h=document.querySelector(".mine_collect");h.insertBefore(r,h.child);const _=document.querySelector(".mine_collect_inline");for($(".return_key").click(()=>{_.style.display="block",r.remove()}),g=0;g<l.length;g++)l[g].className=l[g].className.replace("group_itembg","");m.classList.add("group_itembg"),_.style.display="none"}});const c=document.querySelectorAll(".mine_scheme_content_src_item");for(let m=0;m<c.length;m++){const g=c[m];g.onclick=function(){editor.list.recoveryScene.dispatch(window.schemeContentList[m].json)}}const d=document.querySelectorAll(".delete_model_item");for(let m=0;m<d.length;m++)d[m].onclick=function(g){g.stopPropagation();let u=d[m].parentNode,r=[].indexOf.call(d[m].parentNode.parentNode.childNodes,u)-1;window.schemeContentList.splice(r,1),d[m].parentNode.remove(),localStorage.setItem("schemeContentList",JSON.stringify(window.schemeContentList)),window.schemeContentList=JSON.parse(localStorage.getItem("schemeContentList"))||[]};new Ae({itemClass:".collect_title_item",itemActiveClass:"collect_inline_active",contentClass:".collect_inline_content",contentShowClass:"collect_inline_show"})}event(){}}new be;class wo{constructor(o){this.options={value:0}}init(){this.createElement()}create(o,e){let t=document.createElement(o);return t.className=e,t}createElement(){this.$PROGRESSBAR=this.createBar(),this.$PROGRESSTITLE=this.createTitle(),this.$PROGRESSBOX=this.createProgressBar(),this.$PROGRESSBAR.appendChild(this.$PROGRESSTITLE),this.$PROGRESSBAR.appendChild(this.$PROGRESSBOX),document.body.appendChild(this.$PROGRESSBAR)}createBar(){return this.$BAR=this.create("div","uploading_dialog"),this.$BAR.id="upload_dialog_pop",this.$BAR.style=`
        height: 40px;
        width: 200px;
        position : absolute;
        bottom: 50px;
        right:0;
        z-index: 9999;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 30px -15px #7e7b7b;
        `,this.$BAR}createTitle(){return this.$TITLE=this.create("span","uploading_dialog_title1"),this.$TITLE.style=`
        font-size:12px;
        display: flex;
        justify-content: center;
        `,this.$TITLE.innerHTML="上传中...",this.$TITLE}createProgressBar(){return this.$PROGRESS=this.create("div","progress_barbox1"),this.$PROGRESSVAL=this.create("span","progress_val1"),this.$PROGRESSVAL.innerHTML=`${this.options.value}%`,this.$PROGRESS.appendChild(this.$PROGRESSVAL),this.$PROGRESS.style.width=this.options.value+"%",console.log(this.options.value),this.$PROGRESS}hide(){document.querySelector("#upload_dialog_pop").remove()}}class Ee{constructor(){}init(o,e,t,s,n){n?(document.querySelector("#cameraShot_box")&&this.close(),this.createEle(o,e,t,s)):document.querySelector("#cameraShot_box")?this.close():this.createEle(o,e,t,s)}create(o,e){let t=document.createElement(o);return t.className=e,t}createEle(o,e,t,s){this.CAMERASHOT=this.createBox(),this.SHOTBOX=this.createShot(o,e,t,s),this.CAMERASHOT.appendChild(this.SHOTBOX),document.body.appendChild(this.CAMERASHOT)}createBox(){return this.$BOX=this.create("div","camera_shot"),this.$BOX.id="cameraShot_box",this.$BOX}createShot(o,e,t,s){return this.$SHOT=this.create("div","shot_box"),this.$SHOT.style=`
            height:${e}px;
            width:${o}px;
            top:${s}px;
            left:${t}px;
        `,this.$SHOT}close(){document.querySelector("#cameraShot_box").remove()}}class fo{constructor(o,e,t=""){const s=document.querySelector(`#${e}`);s&&s.remove(),this.id=e,this.LineBox=document.querySelector(".shot_box"),this.x=t||this.LineBox.clientHeight/2,this.color=o,this.renderView()}renderView(){this.LineBox.style.position="relative";const o=document.createElement("div");o.id=this.id,o.style=`
        height:3px;
        width:100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
        position:absolute;
        top:${this.x}px;
        `,this.LineBox.appendChild(o);const e=document.createElement("div");e.style="width:80px;height:100%;";const t=document.createElement("div");t.style="width:80px;height:100%;",e.style.backgroundColor=this.color,t.style.backgroundColor=this.color,o.appendChild(e),o.appendChild(t)}}class Po{constructor(){editor.list.default2D.add(function(){editor.roamTool&&editor.roamTool.deactive(),document.getElementById("two_D").childNodes[1].classList.add("active_view"),document.getElementById("three_D").childNodes[1].classList.remove("active_view")}),editor.list.changeCameraSlider.add(function(e,t){$("#footerView").val(parseInt(t*100))}),editor.list.alert.add(function(e,t="success"){editor.messageControl=new ke,editor.messageControl.message({content:e,type:t})}),editor.list.dialog.add(function(e,t,s){new ve({title:e+"?",content:t,param:s}).open()}),editor.list.blackBox.add(function(e,t,s){(!editor.blackbox||editor.blackbox=="")&&(editor.blackbox=new je(editor)),editor.blackbox.setVal({top:t-20,left:e+20,value:s})}),editor.list.showDialog.add(function(e,t,s=[],n=[]){if(Be(e,s,editor,n),!(e==""&&e!=0))switch(e){case 100:new Me({});break;case 0:case 13:n.length!=0&&new ao({keys:e,extent:n[0],height:n[5],thickness:n[1]}),Ve.propertySwitch(n);break;case 1:case 15:new ro({keys:e,disabledFlag:t,width:n[0],height:n[1],depth:n[2],takeOff:n[3]});break;case 2:case 12:new co({keys:e,extent:n[0],height:n[1],ply:n[2],takeOff:n[3],modelName:t});break;case 3:new se;let l=!1;se.roomTypelist.forEach(c=>{c.name==n[0]&&(l=!0)}),l?($("#roomname").val(n[0]),$("#roomtype").val(n[0])):($("#roomname").val(n[0]),$("#roomtype").val("未命名"));break;case 4:new Pe({keys:e,title:"梁",extent:n[0],extentMax:12e3,width:n[1],widthMax:12e3,height:n[2],heightMax:900,angle:n[3]});break;case 5:new Pe({keys:e,title:"烟道",extent:n[0],extentMax:1800,width:n[1],widthMax:2400,height:n[2],heightMax:8400,angle:n[3]});break;case 6:new Pe({keys:e,title:"柱子",extent:n[0],extentMax:2400,width:n[1],widthMax:2400,height:n[2],heightMax:8400,angle:n[3]});break;case 8:case 10:case 11:case 14:new lo({keys:e,title:t,extent:n[0].width,width:n[0].depth,height:n[0].height,oldExtent:n[0].oldWidth,oldWidth:n[0].oldDepth,oldHeight:n[0].oldHeight,takeOff:n[0].floorHei,x:n[0].rotation[0],y:n[0].rotation[1],z:n[0].rotation[2],oldFloorHei:n[0].oldFloorHei});break}}),editor.list.updateDialog.add(function(e,t){const s=document.querySelector(".wall_pop");if(!s)return;const n=parseInt(s.style.left),l=parseInt(s.style.top);s.style.left=n+e+"px",s.style.top=l+t+"px"}),editor.list.hiddenDialog.add(function(){const e=document.querySelectorAll(".wall_pop");for(let t=0;t<e.length;t++){const s=e[t];s.parentNode.removeChild(s)}}),editor.list.exitRomaScene.add(function(){new q().showBar()}),editor.list.threeDimensions.add(function(e){e=="2D"?($(".view_title").removeClass("active_view"),$(".view_title")[0].classList.add("active_view"),document.querySelector("#two_view").style.display="block",document.querySelector("#threed_view").style.visibility="hidden"):($(".view_title").removeClass("active_view"),$(".view_title")[1].classList.add("active_view"),document.querySelector("#two_view").style.display="none",document.querySelector("#threed_view").style.visibility="visible")}),editor.list.switchBounced.add(function(e){const t=document.querySelector(".wall_popup"),s=document.querySelector(".room_popup"),n=document.querySelector(".topbarContent_tool_bar");e=="wall"?(t.style.visibility="visible",s.style.visibility="hidden",n.style.visibility="hidden"):e=="room"?(t.style.visibility="hidden",s.style.visibility="visible",n.style.visibility="hidden"):(t.style.visibility="hidden",s.style.visibility="hidden",n.style.visibility="visible")}),editor.list.footerView.add(function(){return $("#footerView").val()}),editor.list.modelGroup3D.add(function(e,t,s=[],n={}){Be(e,s,editor,n)}),editor.list.baseMap.add(function(e){const t=document.querySelector(".baseBtn");e==1?t.style.display="none":e==0&&(t.style.display="block")}),editor.list.themeSwitch.add(function(e){ee.themeChange(e,!1)}),editor.list.resetproperty.add(function(e){new Me({storeyHei:e.storeyHei,floorDep:e.floorDep,roomOpacity:e.roomOpacity}),document.querySelectorAll(".item_box").forEach((s,n)=>{s.classList.remove("active_type")})}),editor.list.getShowHiddenFlag.add(function(e,t=!0){he.getFlag(e,t)}),editor.list.popupSaveRecord.add(function(e,t){new mo().main(e,t)}),editor.list.modelReplace.add(function(e){let t="";We.forEach(s=>{s.type==e&&(t=s)}),t&&new uo({viewList:[t],replace:!0})}),editor.list.closeReplaceView.add(function(){let e=document.querySelector(".replaceDom");e&&(e.style.display="none")}),editor.list.progressOpen.add(function(e){new po;const t=document.querySelector(".progress_bar_title");e==1&&(t.innerHTML="下载中...")}),editor.list.progressChange.add(function(e){const t=document.querySelector(".progress_barbox"),s=document.querySelector(".progress_bar_title"),n=document.querySelector(".progress_val");t&&(t.style.width=e+"%",n.innerHTML=e+"%",e==100&&(s.innerHTML="解析中..."))}),editor.list.progressClose.add(function(){$(".progress_bar").remove()}),editor.list.uploadModelBar.add(function(){new wo().init()}),editor.list.changeBar.add(function(e){const t=document.querySelector(".progress_barbox1"),s=document.querySelector(".progress_val1");t&&(t.style.width=e+"%",s.innerHTML=e+"%")}),editor.list.closeBar.add(function(){$("#upload_dialog_pop").remove()}),editor.list.saveWallJson.add(function(e,t){let s=new ke;new ve({width:"20%",height:"200px",title:"保存户型",content:"<input value='' id='save_house_name' />",success(){let n=0;for(let l in window.localStorage)window.localStorage.hasOwnProperty(l)&&(n+=window.localStorage.getItem(l).length);if(n=(n/1024/1024).toFixed(2),n>=5)s.message({content:"浏览器缓存已达最大5M，无法保存。",type:"warning"});else{const l=document.querySelector("#save_house_name").value,c=JSON.parse(t);c.orderName=l;const d={base64:e,json:JSON.stringify(c)};window.schemeContentList.push(d),localStorage.setItem("schemeContentList",JSON.stringify(window.schemeContentList)),$(".model_solution").empty(),be.renderView()}}}).open()}),editor.list.setDefaultParams.add(function(e){new Me({storeyHei:e.storeyHei,floorDep:e.floorDep,roomOpacity:e.roomOpacity});const t=document.querySelectorAll(".base_map_item_box")[1];e.mapVisible?t.innerHTML="隐藏底图":t.innerHTML="显示底图"}),editor.list.cameraShot.add(function(e="400",t="200",s="0",n="0",l=!1){new Ee().init(e,t,s,n,l)}),editor.list.closeCameraShot.add(function(){new Ee().close()}),editor.list.horizontalLine.add(function(e,t,s=""){new fo(e,t,s)}),editor.list.deleteLine.add(function(){const e=document.querySelector(".shot_box").children;let t=[];for(let s=0;s<e.length;s++)t.push(e[s]);t.forEach(s=>document.querySelector(".shot_box").removeChild(s))}),editor.list.renderURL.add(function(){$("#renderDom").empty(),new eo,$(".contentFlag").addClass("none"),$(".canvas").addClass("none"),$(".renderDom").removeClass("none"),document.documentElement.style.setProperty("--click-color","#F0A130")}),editor.list.getVersionNumber.add(e=>{const t=document.querySelector(".version");t.innerHTML=e.toString()});const o=Ge();editor.urlParam=o}}export{Po as Editor};
