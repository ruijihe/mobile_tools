System.register(["./index-legacy-5280abe8.js"],(function(n,e){"use strict";var o,i,a,c,t,l,s,m,d,r,u,p,g,y,h,v,x,w,k,C,S,b,f;return{setters:[n=>{o=n.a,i=n.d,a=n.e,c=n.h,t=n.ai,l=n.j,s=n.q,m=n.Y,d=n.Z,r=n.m,u=n.k,p=n.aj,g=n.T,y=n.I,h=n.ak,v=n.i,x=n.P,w=n.f,k=n.al,C=n.a5,S=n.r,b=n.a6,f=n.g}],execute:function(){n("a",(function(n={}){if(!w)return{};const e=function(){if(!O.length||U){const n=function(){const{instance:n,unmount:e}=C({setup(){const n=S(""),{open:e,state:o,close:i,toggle:c}=b(),t=()=>{},m=()=>l(z,s(o,{onClosed:t,"onUpdate:show":c}),null);return a(n,(n=>{o.message=n})),f().render=m,{open:e,close:i,message:n}}});return n}();O.push(n)}return O[O.length-1]}(),o=k(i=n)?i:{message:i};var i;return e.open(x({},T,q.get(o.type||T.type),o)),e}));let e=0;const[j,L]=o("toast"),B=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],D={icon:String,show:Boolean,type:r("text"),overlay:Boolean,message:u,iconSize:u,duration:p(2e3),position:r("middle"),teleport:[String,Object],wordBreak:String,className:g,iconPrefix:String,transition:r("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:g,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var z=n("s",i({name:j,props:D,emits:["update:show"],setup(n,{emit:o,slots:i}){let r,u=!1;const p=()=>{const o=n.show&&n.forbidClick;u!==o&&(u=o,u?(e||document.body.classList.add("van-toast--unclickable"),e++):e&&(e--,e||document.body.classList.remove("van-toast--unclickable")))},g=n=>o("update:show",n),x=()=>{n.closeOnClick&&g(!1)},w=()=>clearTimeout(r),k=()=>{const{icon:e,type:o,iconSize:i,iconPrefix:a,loadingType:c}=n;return e||"success"===o||"fail"===o?l(y,{name:e||o,size:i,class:L("icon"),classPrefix:a},null):"loading"===o?l(h,{class:L("loading"),size:i,type:c},null):void 0},C=()=>{const{type:e,message:o}=n;return i.message?l("div",{class:L("text")},[i.message()]):v(o)&&""!==o?"html"===e?l("div",{key:0,class:L("text"),innerHTML:String(o)},null):l("div",{class:L("text")},[o]):void 0};return a((()=>[n.show,n.forbidClick]),p),a((()=>[n.show,n.type,n.message,n.duration]),(()=>{w(),n.show&&n.duration>0&&(r=setTimeout((()=>{g(!1)}),n.duration))})),c(p),t(p),()=>l(d,s({class:[L([n.position,"normal"===n.wordBreak?"break-normal":n.wordBreak,{[n.type]:!n.icon}]),n.className],lockScroll:!1,onClick:x,onClosed:w,"onUpdate:show":g},m(n,B)),{default:()=>[k(),C()]})}}));let O=[],U=!1,T=x({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1});const q=new Map;n("b",{handelBtnList:[{name:"Undo",icon:"Undo",type:"undo"},{name:"Redo",icon:"Redo",type:"save"},{name:"保存",icon:"Startcloudsync",type:"redo"},{name:"粘贴",icon:"Paste"},{name:"3D",icon:"3D",type:"3D"},{name:"清空",icon:"qingkong",type:"delAll"},{name:"重置视角",icon:"tongzhishijiao",type:"reset"},{name:"分享",icon:"fenxiang"},{name:"导出",icon:"Export",type:"export"},{name:"打印",icon:"dayinji"},{name:"项目",icon:"Project"},{name:"帮助",icon:"Help"},{name:"教程",icon:"Tutorial"}],modelBtnList:[{name:"画墙",icon:"Walls",type:"wall",showDialog:!0},{name:"方形",icon:"Squareroom",type:"square",showDialog:!0},{name:"L形",icon:"L-shaperomm",type:"lShape",showDialog:!0},{name:"U形",icon:"U-shaperoom",type:"uShape",showDialog:!0},{name:"T形",icon:"T-shaperoom",type:"tShape",showDialog:!0},{name:"I形",icon:"ceshiIxing",type:"iShape",showDialog:!0},{name:"S形",icon:"S-shaperoom",type:"sShape",showDialog:!0},{name:"圆",icon:"rotundity-2"},{name:"弧形",icon:"arched-2"},{name:"上弧形",icon:"shanghuxing-2"},{name:"梯形",icon:"tixing-1"},{name:"扇形",icon:"shanxing-1"},{name:"六边形",icon:"lujiaoxing"},{name:"八角形",icon:"bajiaoxing"},{name:"圆角形",icon:"yuanjiaoxing-1"},{name:"平顶形",icon:"pingding"},{name:"平斜角行",icon:"pingxiejiao-1"},{name:"尖顶",icon:"jianding"},{name:"斜切角",icon:"xieqijiao-1"},{name:"管状",icon:"guanzhuang"},{name:"户型-A",icon:"huxingA-1"},{name:"户型-B",icon:"huxingB-1"},{name:"户型-C",icon:"huxingC-1"}],modelTypeList:[{value:"结构",path:"model",id:"model"},{value:"门",path:"door",id:"door"},{value:"窗",path:"window",id:"window"},{value:"标注",path:"label",id:"label"}],doorList:[{name:"单开门",icon:"shankaimen",type:"door"},{name:"推拉门",icon:"tuilamen-2",type:"slidingdoor"},{name:"子母门",icon:"ziwumen",type:"childMotherDoor"},{name:"双开门",icon:"shuangkaimen",type:"singleDoubleDoor"},{name:"拱形门",icon:"juxingmen-2",type:"archDoor"},{name:"弧形门",icon:"huxingmen",type:""}],windowlist:[{name:"一字窗",icon:"yizicong-2",type:"window"},{name:"落地窗",icon:"ladecong-2",type:"frenchwindows"},{name:"飘窗",icon:"piaocong",type:"baywindow"},{name:"一字窗飘窗",icon:"yizicongpiaocong",type:"straightBayWindow"},{name:"L型窗",icon:"Lxingcong",type:"LWindow"},{name:"U型窗",icon:"Uxingcong",type:"UWindow"},{name:"弧形窗",icon:"huxingcong",type:"arcWindow"},{name:"U型飘窗",icon:"Uxingpiaocong",type:""},{name:"L型飘窗",icon:"Lxingcong",type:""},{name:"拱形窗",icon:"juxingcong-2",type:""}],labelList:[{name:"标签1",icon:"biaoqian1"},{name:"标签2",icon:"biaoqian2"},{name:"数量",icon:"shuliang"},{name:"尺码",icon:"chema"},{name:"测量所有墙",icon:"chema"},{name:"可见区域",icon:"kexianquyu"},{name:"指北针",icon:"zhibeizhen"},{name:"直线",icon:"zhixian"},{name:"虚线1",icon:"xuxian1"},{name:"虚线2",icon:"xuxian2"},{name:"虚线3",icon:"xuxian3"},{name:"画笔",icon:"Walls"},{name:"箭头",icon:"jiantou"},{name:"双箭头",icon:"shuangjiantou"},{name:"曲线",icon:"quxian"}],handleFloorList:[{name:"增加",icon:"Add"},{name:"删除",icon:"Delete"},{name:"重命名",icon:"Name"},{name:"克隆",icon:"Clone"},{name:"上升",icon:"Up"},{name:"下降",icon:"Down"},{name:"移动",icon:"Position"},{name:"镜像",icon:"Mirror"},{name:"复制",icon:"Copy"},{name:"颜色",icon:"Color"},{name:"填充",icon:"Copy_1"}],editorFloorList:[],nameFloorlist:[],keyList:[{value:"",icon:"",id:"",class:"placeholderButton"},{value:"",icon:"",id:"",class:"placeholderButton"},{value:"",icon:"",id:"",class:"placeholderButton"},{value:"CM",icon:"",id:""},{value:"OK",icon:"",id:"",color:"#F9AC19"},{value:"1",icon:"",id:""},{value:"2",icon:"",id:""},{value:"3",icon:"",id:""},{value:"",icon:"houtui",id:""},{value:"取消",icon:"",id:""},{value:"4",icon:"",id:""},{value:"5",icon:"",id:""},{value:"6",icon:"",id:""},{value:"AC",icon:"",id:""},{value:"",icon:"laya",id:""},{value:"7",icon:"",id:""},{value:"8",icon:"",id:""},{value:"9",icon:"",id:""},{value:"/",type:"sign",icon:"",id:""},{value:"*",type:"sign",icon:"",id:""},{value:"0",icon:"",id:""},{value:".",type:"sign",icon:"",id:""},{value:"-",type:"sign",icon:"",id:""},{value:"+",type:"sign",icon:"",id:""},{value:"=",icon:"",id:""}]})}}}));
