var c=Object.defineProperty;var d=(n,t,i)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var o=(n,t,i)=>d(n,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const h of e.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(s){if(s.ep)return;s.ep=!0;const e=i(s);fetch(s.href,e)}})();class l{constructor(t,i,a=600){o(this,"x");o(this,"y");o(this,"ed");o(this,"dx");o(this,"dy");this.x=t,this.y=i,this.ed=a,this.dx=(Math.random()-.5)*4,this.dy=(Math.random()-.5)*4}updatePosition(t,i){this.x+=this.dx,this.y+=this.dy,(this.x<=0||this.x>=t)&&(this.dx=-this.dx),(this.y<=0||this.y>=i)&&(this.dy=-this.dy)}}class m{constructor(t,i=20){o(this,"canvas");o(this,"context");o(this,"points",[]);o(this,"animationId",null);o(this,"animate",()=>{console.log("start"),this.draw(),this.animationId===1e3&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.animationId=requestAnimationFrame(this.animate),console.log("end")});this.canvas=t,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.context=this.canvas.getContext("2d");for(let a=0;a<i;a++)this.points.push(new l(Math.random()*this.canvas.width,Math.random()*this.canvas.height))}draw(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(const t of this.points)t.updatePosition(this.canvas.width,this.canvas.height),this.context.beginPath(),this.context.arc(t.x,t.y,2,0,Math.PI*2,!1),this.context.fillStyle="black",this.context.fill(),this.context.closePath();for(let t=0;t<this.points.length;t++)for(let i=t+1;i<this.points.length;i++){const a=Math.sqrt(Math.pow(this.points[t].x-this.points[i].x,2)+Math.pow(this.points[t].y-this.points[i].y,2));this.context.beginPath(),this.context.moveTo(this.points[t].x,this.points[t].y),this.context.lineTo(this.points[i].x,this.points[i].y),this.context.strokeStyle=`rgba(0,0,0,${u(a,this.points[t].ed)})`,this.context.stroke(),this.context.closePath()}}start(){this.animationId||this.animate()}stop(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}}function u(n,t){return Math.max(0,1-n/t)}document.querySelector("#app").innerHTML=`
  <canvas id="canvas"></canvas>
`;const r=document.querySelector("#canvas");r?new m(r,20).start():console.error("未找到 canvas 元素");
