System.register(["./index-legacy-72f03512.js","./data-legacy-0a8fa46a.js","./data-legacy-6233e02b.js","./index-legacy-fd0c39ac.js"],(function(o,e){"use strict";var t,l,n,a,i,u,s,r;return{setters:[o=>{t=o.u},o=>{l=o.m},o=>{n=o.s,a=o.a,i=o.b},o=>{u=o.w,s=o.r,r=o.c}],execute:function(){u(n);const e=s(l.roomInfo),c=s(l.wallInfo),d=s(l.drawWallInfo),h=s(i.handelBtnList),w=t(),m=r((()=>w.modelType));o("default",class{constructor(){this.setupEventListeners()}setupEventListeners(){window.editor.list.showModelMsg.add((o=>{if(w.resetGlobalObj(),o){switch(w.changeShowModelInfo(!0,o.type),o.type){case"room":o.rotationLock?e.value[4].icon="sisuo":e.value[4].icon="weisuoding",o.positionLock?e.value[3].icon="sisuo":e.value[3].icon="weisuoding";break;case"wall":o.lengthLock?c.value[2].icon="sisuo":c.value[2].icon="weisuoding",o.positionLock?c.value[3].icon="sisuo":c.value[3].icon="weisuoding";break;case"drawWall":o.autoCompletion?(d.value[1].class="checkedButton",d.value[1].lock=o.autoCompletion):(d.value[1].class="orangeButton",d.value[1].lock=o.autoCompletion),o.hvSwitch?(d.value[2].icon="huangshuqihuan-shu",d.value[2].class="checkedButton",d.value[2].lock=o.autoCompletion):(d.value[2].icon="huangshuqihuan-moren",d.value[2].class="orangeButton",d.value[2].lock=o.autoCompletion)}w.$patch({globalObj:o})}else w.changeShowModelInfo(!1,o.type)})),window.editor.list.switchCameraIcon.add((o=>{"3D"===o?(h.value[4].name="2D",h.value[4].icon="2D"):"2D"===o&&(h.value[4].name="3D",h.value[4].icon="3D")})),window.editor.list.showToast.add(((o,e="bottom")=>{let t;"bottom"===e?t=!0:"top"===e&&(t=!1),a({message:o,position:t?"bottom":"top"})})),window.editor.list.getDomByPoint.add(((o,e,t,l)=>{window.editor.currentDom="","touchEnd"===t&&(document.querySelector(".editorToolRight").style.display="block");let n=document.querySelectorAll(".construction_btn");"touchMove"===t&&(n=document.querySelectorAll(".e-r-bottom"));for(let a=0;a<n.length;a++){const i=n[a],u=i.getBoundingClientRect();if(o>=u.left&&o<=u.right&&e>=u.top&&e<=u.bottom){window.editor.currentDom=i;let o=i.getAttribute("use-type");if("touchStart"===t)if("model"===m.value){let e='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 2000], [-2000, 2000]]}';"square"===o?e='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 2000], [-2000, 2000]]}':"lShape"===o?e='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 0], [0, 0], [0, 2000], [-2000, 2000]]}':"uShape"===o?e='{"roomArr":[[-2000, 2000], [-2000, -2000], [2000, -2000], [2000, 2000], [400, 2000], [400,0], [-400, 0], [-400, 2000], [-2000, 2000]]}':"tShape"===o?e='{"roomArr":[[-2000, 2000], [-2000, 0], [-1200, 0], [-1200, -2000], [1200, -2000], [1200, 0], [2000, 0], [2000, 2000], [-2000, 2000]]}':"sShape"===o&&(e='{"roomArr":[[-2000, -2000], [600, -2000], [600, 800], [2000, 800], [2000, 2000], [-600,2000], [-600, -800], [-2000, -800], [-2000,  -2000]]}'),"wall"!=o&&(window.editor.selCacheJson=e)}else"door"===m.value||"window"===m.value?window.editor.toolType=o:m.value;"touchMove"===t&&(document.querySelector(".e-r-bottom").scrollTop+=2*l),"touchEnd"===t&&"wall"===o&&(window.editor.toolType=o)}else"touchMove"===t&&(document.querySelector(".editorToolRight").style.display="none")}}))}})}}}));
