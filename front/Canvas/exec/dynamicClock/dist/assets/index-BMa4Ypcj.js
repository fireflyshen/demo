(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function s(){const e=document.querySelector("#dial"),o=document.querySelector("#clock");if(!e)throw new Error("Canvas not found");e.style.backgroundColor="black";const t=e.getContext("2d"),a=o==null?void 0:o.getContext("2d");if(!t)throw new Error("Context not found");if(t.canvas.width=200,t.canvas.height=200,d(t),u(t),h(t),a)l(a);else throw new Error("Clock context not found")}function l(e){function o(){e.clearRect(0,0,e.canvas.width,e.canvas.height);const t=new Date,a=t.getHours(),n=t.getMinutes(),r=t.getSeconds();g(e,a,n),c(e,n,r),f(e,r),requestAnimationFrame(o)}o()}function d(e){e.save(),e.beginPath(),e.arc(100,100,90,0,Math.PI*2),e.fillStyle="white",e.fill(),e.restore()}function u(e){e.save(),e.beginPath(),e.arc(100,100,2,0,Math.PI*2),e.fillStyle="black",e.fill(),e.closePath(),e.restore()}function h(e){e.save(),e.translate(100,100);for(let o=0;o<60;o++){e.beginPath();const t=o%5===0,a=t?10:5,n=t?3:1,r=t?"black":"gray";e.lineWidth=n,e.strokeStyle=r,e.moveTo(0,-90),e.lineTo(0,-90+a),e.stroke(),e.rotate(Math.PI*2/60)}e.restore(),e.save(),e.translate(100,100);for(let o=1;o<=12;o++){const t=Math.PI*2*o/12-Math.PI/2,a=Math.cos(t)*70,n=Math.sin(t)*70;e.font="16px Arial",e.fillStyle="black",e.textAlign="center",e.textBaseline="middle",e.fillText(o.toString(),a,n)}e.restore()}function f(e,o){const t=Math.PI*2*o/60;e.save(),e.translate(100,100),e.rotate(t),e.beginPath(),e.moveTo(0,10),e.lineTo(0,-60),e.lineWidth=2,e.strokeStyle="red",e.stroke(),e.closePath(),e.restore()}function c(e,o,t){const a=Math.PI*2*(o+t/60)/60;e.save(),e.translate(100,100),e.rotate(a),e.beginPath(),e.moveTo(0,5),e.lineTo(0,-50),e.lineWidth=3,e.strokeStyle="black",e.stroke(),e.closePath(),e.restore()}function g(e,o,t){const a=Math.PI*2*(o%12+t/60)/12;e.save(),e.translate(100,100),e.rotate(a),e.beginPath(),e.moveTo(0,5),e.lineTo(0,-40),e.lineWidth=4,e.strokeStyle="black",e.stroke(),e.closePath(),e.restore()}document.querySelector("#app").innerHTML=`
<style>
  #clock {
    position: absolute;
  }
</style>
<canvas id="clock" width="200" height="200"></canvas>
<canvas id="dial" width="200" height="200"></canvas>
`;s();
