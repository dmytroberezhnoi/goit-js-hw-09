function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]'),s=document.querySelector("button");let c,f;function m(t,n){const o=Math.random()>.3;return new Promise(((e,r)=>{o?e({position:t,delay:n}):r({position:t,delay:n})})).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}l.addEventListener("submit",(function(e){e.preventDefault(),c=0,f=0;let t=Number(u.value);const n=Number(d.value),o=Number(a.value);if(!o)return;s.disabled=!0;setTimeout((()=>{if(c+=1,f+=t,m(c,t),c===o)return;const e=setInterval((()=>{c+=1,f+=n,c===o&&(s.disabled=!1,clearInterval(e)),m(c,f)}),n)}),t)}));
//# sourceMappingURL=03-promises.da8a53eb.js.map
