import{u as v,m as w}from"./data-8fc160dd.js";import{s as g,a as y}from"./function-call-823c341d.js";import{w as S,r as m,c as I}from"./index-c2506c87.js";S(g);const r=m(w.roomInfo),a=m(w.wallInfo),i=m(w.drawWallInfo),s=v(),u=I(()=>s.modelType);class M{constructor(){this.setupEventListeners()}setupEventListeners(){window.editor.list.showModelMsg.add(e=>{if(s.resetGlobalObj(),e){switch(s.changeShowModelInfo(!0,e.type),e.type){case"room":e.rotationLock?r.value[4].icon="sisuo":r.value[4].icon="weisuoding",e.positionLock?r.value[3].icon="sisuo":r.value[3].icon="weisuoding";break;case"wall":e.lengthLock?a.value[2].icon="sisuo":a.value[2].icon="weisuoding",e.positionLock?a.value[3].icon="sisuo":a.value[3].icon="weisuoding";break;case"drawWall":e.autoCompletion?i.value[1].class="checkedButton":i.value[1].class="orangeButton",e.hvSwitch?(i.value[2].icon="huangshuqihuan-shu",i.value[2].class="checkedButton"):(i.value[2].icon="huangshuqihuan-moren",i.value[2].class="orangeButton")}s.$patch({globalObj:e})}else s.changeShowModelInfo(!1,e.type)}),window.editor.list.showToast.add(e=>{y({message:e,position:"bottom"})}),window.editor.list.getDomByPoint.add((e,h,l,p)=>{window.editor.currentDom="",l==="touchEnd"&&(document.querySelector(".editorToolRight").style.display="block");let c=document.querySelectorAll(".construction_btn");l==="touchMove"&&(c=document.querySelectorAll(".e-r-bottom"));for(let d=0;d<c.length;d++){const f=c[d],n=f.getBoundingClientRect();if(!(e>=n.left&&e<=n.right&&h>=n.top&&h<=n.bottom))l==="touchMove"&&(document.querySelector(".editorToolRight").style.display="none");else{window.editor.currentDom=f;let o=f.getAttribute("use-type");if(l==="touchStart")if(u.value==="model"){let t='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 2000], [-2000, 2000]]}';o==="square"?t='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 2000], [-2000, 2000]]}':o==="lShape"?t='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 0], [0, 0], [0, 2000], [-2000, 2000]]}':o==="uShape"?t='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 2000], [400, 2000], [400,0], [-400, 0], [-400, 2000], [-2000, 2000]]}':o==="tShape"?t='{"roomArr":[[-2000, 2000], [-2000, 0], [-1200, 0], [-1200, -2000], [1200, -2000], [1200, 0], [2000, 0], [2000, 2000], [-2000, 2000]]}':o==="sShape"&&(t='{"roomArr":[[-2000, -2000], [600, -2000], [600, 800], [2000, 800], [2000, 2000], [-600,2000], [-600, -800], [-2000, -800], [-2000,  -2000]]}'),o!="wall"&&(window.editor.selCacheJson=t)}else u.value==="door"||u.value==="window"?window.editor.toolType=o:u.value;if(l==="touchMove"){const t=document.querySelector(".e-r-bottom");t.scrollTop+=p*2}l==="touchEnd"&&o==="wall"&&(window.editor.toolType=o)}}})}}export{M as default};
