System.register(["./index-legacy-0ff4abf0.js","./function-call-legacy-be959de2.js"],(function(n,i){"use strict";var o,e,a,c,t,l,m,s,u,d,p,r,g,h,y,x,v,w;return{setters:[n=>{o=n.d,e=n.L,a=n.x,c=n.T,t=n.z,l=n.A,m=n.j,s=n.y,u=n.V,d=n.Y,p=n.Q,r=n.$,g=n.X,h=n.P,y=n.I,x=n.B,v=n._},n=>{w=n.a}],execute:function(){n("b",{handelBtnList:[{name:"Undo",icon:"Undo",type:"undo"},{name:"Redo",icon:"Redo",type:"redo"},{name:"粘贴",icon:"Paste"},{name:"3D",icon:"3D",type:"3D"},{name:"清空",icon:"qingkong",type:"delAll"},{name:"分享",icon:"fenxiang"},{name:"导出",icon:"Export",type:"export"},{name:"打印",icon:"dayinji"},{name:"项目",icon:"Project"},{name:"帮助",icon:"Help"},{name:"教程",icon:"Tutorial"}],modelBtnList:[{name:"画墙",icon:"Walls",type:"wall",showDialog:!0},{name:"方形",icon:"Squareroom",type:"square",showDialog:!0},{name:"L形",icon:"L-shaperomm",type:"lShape",showDialog:!0},{name:"U形",icon:"U-shaperoom",type:"uShape",showDialog:!0},{name:"T形",icon:"T-shaperoom",type:"tShape",showDialog:!0},{name:"I形",icon:"ceshiIxing",type:"iShape",showDialog:!0},{name:"S形",icon:"S-shaperoom",type:"sShape",showDialog:!0},{name:"圆",icon:"rotundity-2"},{name:"弧形",icon:"arched-2"},{name:"上弧形",icon:"shanghuxing-2"},{name:"梯形",icon:"tixing-1"},{name:"扇形",icon:"shanxing-1"},{name:"六边形",icon:"lujiaoxing"},{name:"八角形",icon:"bajiaoxing"},{name:"圆角形",icon:"yuanjiaoxing-1"},{name:"平顶形",icon:"pingding"},{name:"平斜角行",icon:"pingxiejiao-1"},{name:"尖顶",icon:"jianding"},{name:"斜切角",icon:"xieqijiao-1"},{name:"管状",icon:"guanzhuang"},{name:"户型-A",icon:"huxingA-1"},{name:"户型-B",icon:"huxingB-1"},{name:"户型-C",icon:"huxingC-1"}],modelTypeList:[{value:"结构",path:"model",id:"model"},{value:"门",path:"door",id:"door"},{value:"窗",path:"window",id:"window"},{value:"标注",path:"label",id:"label"}],doorList:[{name:"单开门",icon:"shankaimen",type:"door"},{name:"推拉门",icon:"tuilamen-2",type:"slidingdoor"},{name:"子母门",icon:"ziwumen",type:"childMotherDoor"},{name:"双开门",icon:"shuangkaimen",type:"singleDoubleDoor"},{name:"拱形门",icon:"juxingmen-2",type:"archDoor"},{name:"弧形门",icon:"huxingmen",type:""}],windowlist:[{name:"一字窗",icon:"yizicong-2",type:"window"},{name:"落地窗",icon:"ladecong-2",type:"frenchwindows"},{name:"飘窗",icon:"piaocong",type:"baywindow"},{name:"一字窗飘窗",icon:"yizicongpiaocong",type:"straightBayWindow"},{name:"L型窗",icon:"Lxingcong",type:"LWindow"},{name:"U型窗",icon:"Uxingcong",type:"UWindow"},{name:"弧形窗",icon:"huxingcong",type:"arcWindow"},{name:"U型飘窗",icon:"Uxingpiaocong",type:""},{name:"L型飘窗",icon:"Lxingcong",type:""},{name:"拱形窗",icon:"juxingcong-2",type:""}],labelList:[{name:"标签1",icon:"biaoqian1"},{name:"标签2",icon:"biaoqian2"},{name:"数量",icon:"shuliang"},{name:"尺码",icon:"chema"},{name:"测量所有墙",icon:"chema"},{name:"可见区域",icon:"kexianquyu"},{name:"指北针",icon:"zhibeizhen"},{name:"直线",icon:"zhixian"},{name:"虚线1",icon:"xuxian1"},{name:"虚线2",icon:"xuxian2"},{name:"虚线3",icon:"xuxian3"},{name:"画笔",icon:"Walls"},{name:"箭头",icon:"jiantou"},{name:"双箭头",icon:"shuangjiantou"},{name:"曲线",icon:"quxian"}],handleFloorList:[{name:"增加",icon:"Add"},{name:"删除",icon:"Delete"},{name:"重命名",icon:"Name"},{name:"克隆",icon:"Clone"},{name:"上升",icon:"Up"},{name:"下降",icon:"Down"},{name:"移动",icon:"Position"},{name:"镜像",icon:"Mirror"},{name:"复制",icon:"Copy"},{name:"颜色",icon:"Color"},{name:"填充",icon:"Copy_1"}],editorFloorList:[],nameFloorlist:[],keyList:[{value:"",icon:"",id:"",class:"placeholderButton"},{value:"",icon:"",id:"",class:"placeholderButton"},{value:"",icon:"",id:"",class:"placeholderButton"},{value:"CM",icon:"",id:""},{value:"OK",icon:"",id:"",color:"#F9AC19"},{value:"1",icon:"",id:""},{value:"2",icon:"",id:""},{value:"3",icon:"",id:""},{value:"",icon:"houtui",id:""},{value:"取消",icon:"",id:""},{value:"4",icon:"",id:""},{value:"5",icon:"",id:""},{value:"6",icon:"",id:""},{value:"AC",icon:"",id:""},{value:"",icon:"laya",id:""},{value:"7",icon:"",id:""},{value:"8",icon:"",id:""},{value:"9",icon:"",id:""},{value:"/",icon:"",id:""},{value:"*",icon:"",id:""},{value:"0",icon:"",id:""},{value:".",icon:"",id:""},{value:"-",icon:"",id:""},{value:"+",icon:"",id:""},{value:"=",icon:"",id:""}]});const i={class:"buttonContainer"},b={key:0,class:"buttonText van-ellipsis"},D=o({__name:"index",props:{name:{type:String},icon:{type:String},borderStyle:{type:String},buttonHeight:{type:String},className:{default:"whiteButton",type:String},showDialog:{default:!1,type:Boolean}},setup(n){const o=n,v=e("px2rem");return(e,D)=>{const L=y,S=x;return a(),c(S,{class:p(["editorToolLeftBtn",n.className]),style:r({"border-bottom":n.borderStyle,height:g(v)(n.buttonHeight)}),type:"success",to:"",onClick:D[0]||(D[0]=n=>{o.showDialog&&w({message:"拖动添加这个元素",position:"bottom"})}),onTouchstart:D[1]||(D[1]=h((n=>{}),["stop"]))},{default:t((()=>[l("div",i,[m(L,{size:"15",class:"iconfont buttonIcon","class-prefix":"icon",name:o.icon},null,8,["name"]),o.name?(a(),s("span",b,u(o.name),1)):d("",!0)])])),_:1},8,["class","style"])}}});n("_",v(D,[["__scopeId","data-v-e711116e"]]))}}}));
