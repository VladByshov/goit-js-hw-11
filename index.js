import{a as f,S as y,i as c}from"./assets/vendor--6n4cVRZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api",v="54656491-d198bfb98120e598fae018f1a";f.defaults.baseURL=g;function L(r){return f({url:`/?key=${v}`,method:"get",params:{q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>console.log(s))}const d=document.querySelector(".gallery"),m=document.querySelector(".loader");let n=null;function b(r){let s=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:h,downloads:p})=>`
              <li class="list-item">
                <a href="${a}"><img src="${o}" alt="${e}" /></a>
                <div class="list-content">
                  <div class="list-content-item">
                    <h2 class="name">Likes</h2>
                    <p class="value">${t}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Views</h2>
                    <p class="value">${i}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Comments</h2>
                    <p class="value">${h}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Downloads</h2>
                    <p class="value">${p}</p>
                  </div>
                </div>
              </li>
            `).join("");d.innerHTML=s,n?n.refresh():n=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function x(){d.innerHTML=""}function $(){m.style.display="inline-block"}function l(){m.style.display="none"}const u=document.querySelector(".form");u.addEventListener("submit",r=>{r.preventDefault();const s=u.elements["search-text"].value.trim();if(s===""){c.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"});return}x(),$(),L(s).then(o=>{if(console.log(o.hits),!o.hits||o.hits.length===0){c.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),l();return}b(o.hits),l()}).catch(o=>{l(),console.log(o)})});
//# sourceMappingURL=index.js.map
