System.register(["./index-legacy-0ff4abf0.js"],(function(o,e){"use strict";var t;return{setters:[o=>{t=o.a1}],execute:function(){o("u",t("main",{state:()=>({calculatorState:!1,calculatorType:"",calculatorValue:"",floorResult:"0",showFloor:!1,modelType:"model",showModelInfo:!1,showEditorToolRight:!0,showExport:!1,globalObj:{type:"",area:"",width:"",height:"",angle:"",lengthLock:!0,inputArr:[{inputType:"width",value:"",color:"",disabled:!1},{inputType:"leftWidth",value:"",color:"",disabled:!1},{inputType:"rightWidth",value:"",color:"",disabled:!1}]}}),getters:{},actions:{changeCalculator(o,e="default"){this.calculatorState=!this.calculatorState,this.calculatorType=o,this.calculatorValue=e},changeShowFloor(){this.showFloor=!this.showFloor,this.showModelInfo&&(this.showModelInfo=!1)},changeShowModelInfo(o,e="default"){o?(this.showModelInfo=!0,this.showFloor=!1,"drawWall"===e&&(this.showEditorToolRight=!1)):(this.showModelInfo=!1,"drawWall"===e&&(this.showEditorToolRight=!0))},resetGlobalObj(){this.globalObj={}},updateInputArr(o,e){this.globalObj.inputArr=this.globalObj.inputArr.map((t=>t.type===o?{...t,value:e}:t))}}})),o("m",{roomInfo:[{name:"删除",type:"roomDelet",class:"orangeButton",icon:"Delete"},{name:"克隆",type:"roomClone",class:"orangeButton",icon:"Clone"},{name:"镜像",type:"roomMirror",class:"orangeButton",icon:"Mirror"},{name:"位置",type:"roomPosition",class:"orangeButton",icon:"weisuoding",lock:!0},{name:"旋转",type:"roomRotation",class:"orangeButton",icon:"sisuo",lock:!0},{name:"测量",type:"roomMeasure",class:"orangeButton",icon:"Measure"},{name:"阳台",type:"roomBalcony",class:"orangeButton",icon:"Balcony"},{name:"复制",type:"roomCopy",class:"orangeButton",icon:"Copy"},{name:"颜色",type:"roomColor",class:"orangeButton",icon:"Color"},{name:"填充",type:"roomFill",class:"orangeButton",icon:"Copy_1"}],wallInfo:[{name:"删除",type:"wallDelete",class:"orangeButton",icon:"Delete"},{name:"删除拐角点",type:"wallDeletePillar",class:"orangeButton",icon:"shanshuguaijiaodian_1"},{name:"长度",type:"wallLength",class:"orangeButton",icon:"sisuo",lock:!0},{name:"位置",type:"wallPosition",class:"orangeButton",icon:"sisuo",lock:!0},{name:"拆分墙",type:"wallSplit",class:"orangeButton",icon:"chefen"},{name:"颜色",type:"wallColor",class:"orangeButton",icon:"Color "},{name:"复制",type:"wallCopy",class:"orangeButton",icon:"Copy_1"}],drawWallInfo:[{name:"取消",type:"",class:"orangeButton",icon:"fanhui"},{name:"停用补全",type:"",class:"orangeButton",icon:"buquan",lock:!0},{name:"横竖切换",type:"",class:"orangeButton",icon:"huangshuqihuan-moren",lock:!0}],angleInfo:[{name:"删除",type:"angleDelete",class:"orangeButton",icon:"Delete"}],doorWindowInfo:[{name:"删除",type:"doorDelete",class:"orangeButton",icon:"Delete"},{name:"克隆",type:"doorClone",class:"orangeButton",icon:"Clone"},{name:"位置",type:"doorLength",class:"orangeButton",icon:"sisuo",lock:!0},{name:"尺寸",type:"doorPosition",class:"orangeButton",icon:"sisuo",lock:!0},{name:"颜色",type:"doorColor",class:"orangeButton",icon:"Color "},{name:"复制",type:"doorCopy",class:"orangeButton",icon:"Copy_1"}]})}}}));
