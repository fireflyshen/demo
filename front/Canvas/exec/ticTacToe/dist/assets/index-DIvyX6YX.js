(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=300,a=300,p=new Array;function g(){const i=u("#tictactoe"),n=u("#x"),l=u("#o");let r="X";n.addEventListener("change",()=>{r="X"}),l.addEventListener("change",()=>{r="O"});const e=i.getContext("2d");if(!e)throw new Error("Context not found");for(let t=0;t<3;t++)for(let o=0;o<3;o++){const f={x:t*d/3,y:o*a/3,width:d/3,height:a/3,row:t,col:o};p.push(f)}i.style.border="1px solid black",e.canvas.width=d,e.canvas.height=a,e.strokeStyle="#000",e.beginPath();for(let t=1;t<3;t++)e.moveTo(d/3*t,0),e.lineTo(d/3*t,a);for(let t=1;t<3;t++)e.moveTo(0,a/3*t),e.lineTo(d,a/3*t);e.lineWidth=1,e.stroke(),e.closePath(),i.addEventListener("click",t=>{const o=i.getBoundingClientRect(),f=Math.floor(t.clientX-o.left),h=Math.floor(t.clientY-o.top),c=p.find(s=>f>=s.x&&f<=s.x+s.width&&h>=s.y&&h<=s.y+s.height);c&&(e.fillStyle="#000",e.font="30px Arial",e.fillText(`${r}`,c.x+c.width/2-10,c.y+c.height/2+10),console.log(c)),r==="X"?(r="O",n.checked=!1,l.checked=!0):(r="X",n.checked=!0,l.checked=!1)})}function u(i){const n=document.querySelector(i);if(!n)throw new Error(`Element with id ${i} not found`);return n}document.querySelector("#app").innerHTML=`
<div id="app">
  <div class="game-container">
    <div class="controls">
      <input type="radio" id="x" name="xoro" value="X" checked/>
      <input type="radio" id="o" name="xoro" value="O"/>
    </div>
    <canvas id="tictactoe"></canvas>
  </div>
</div>
`;g();
