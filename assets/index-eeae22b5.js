import{ah as t}from"./index-fee02461.js";const s=t("main",{state:()=>({calculatorState:!1,calculatorType:"",calculatorValue:"",floorResult:"0",showFloor:!1,modelType:"",showModelInfo:!1,showEditorToolRight:!0,showExport:!1,ReName:{showReName:!1,reNameType:"",planName:""},showPlansetting:!1,plansetting:{orderName:"",orderId:Number,planIndex:Number},globalObj:{type:"",roomName:"",area:"",width:"",height:"",angle:"",lengthLock:!0,inputArr:[{inputType:"width",value:"",color:"",disabled:!1},{inputType:"leftWidth",value:"",color:"",disabled:!1},{inputType:"rightWidth",value:"",color:"",disabled:!1}]},floorParam:{storeyHei:"",storeyName:"未命名",area:""},response:{},planType:"",planData:[]}),getters:{},actions:{changeCalculator(e,a="default"){this.calculatorState=!this.calculatorState,this.calculatorType=e,this.calculatorValue=a},changeReName(e=""){this.ReName.showReName=!this.ReName.showReName,this.ReName.reNameType=e},changeShowFloor(){this.showFloor=!this.showFloor,this.showModelInfo&&(this.showModelInfo=!1)},changeShowModelInfo(e,a="default"){e?(this.showModelInfo=!0,this.showFloor=!1,a==="drawWall"&&(this.showEditorToolRight=!1)):(this.showModelInfo=!1,a==="drawWall"&&(this.showEditorToolRight=!0))},resetGlobalObj(){this.globalObj={}},resetFloorParam(){this.floorParam={}},updateInputArr(e,a){this.globalObj.inputArr=this.globalObj.inputArr.map(o=>o.type===e?{...o,value:a}:o)},deletePlanDataItem(e){this.planData.splice(e,1)},updatePlanData(e,a){const o=a.value.findIndex(l=>l.orderId===e.value.orderId);o!==-1&&(this.planData[o].orderName=e.value.orderName)}}});export{s as u};
