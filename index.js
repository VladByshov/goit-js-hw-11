import{a as f,S as y,i as c}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api",v="54656491-d198bfb98120e598fae018f1a";f.defaults.baseURL=g;function L(s){return f({url:`/?key=${v}`,method:"get",params:{q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data).catch(o=>console.log(o))}const d=document.querySelector(".gallery"),m=document.querySelector(".loader");let i=null;function b(s){let o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:h})=>`
              <li class="list-item">
                <a href="${n}"><img src="${r}" alt="${e}" /></a>
                <div class="list-content">
                  <div class="list-content-item">
                    <h2 class="name">Likes</h2>
                    <p class="value">${t}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Views</h2>
                    <p class="value">${a}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Comments</h2>
                    <p class="value">${p}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Downloads</h2>
                    <p class="value">${h}</p>
                  </div>
                </div>
              </li>
            `).join("");d.innerHTML=o,i?i.refresh():i=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function x(){d.innerHTML=""}function $(){m.style.display="inline-block"}function l(){m.style.display="none"}const u=document.querySelector(".form");u.addEventListener("submit",s=>{s.preventDefault();const o=u.elements["search-text"].value.trim();if(o===""){c.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),l();return}x(),$(),L(o).then(({hits:r})=>{if(console.log(r),!r||r.length===0){c.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"});return}b(r),l()}).catch(r=>{l(),console.log(r)})});
//# sourceMappingURL=index.js.map
