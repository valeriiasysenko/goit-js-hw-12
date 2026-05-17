import{a as P,S as q,i as c}from"./assets/vendor-DirGshhi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function g(e,r){const s="55223791-ec5d17344899da05be039ab07",o="https://pixabay.com/api/",a={key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await P.get(o,{params:a})).data}const y=document.querySelector(".gallery"),p=document.querySelector(".js-loader"),L=document.querySelector(".js-btn-loadmore"),B=new q(".gallery a",{captionsData:"alt"});function w(e){const r=e.map(x).join("");y.insertAdjacentHTML("beforeend",r),B.refresh()}function m(){y.innerHTML=""}function x(e){return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${e.webformatURL}" 
                alt="${e.tags}"
            />
        </a>
        <ul class="list-info">
            <li class="item-info"><h3 class="item-title">Likes</h3><p class="item-text">${e.likes}</p></li>
            <li class="item-info"><h3 class="item-title">Views</h3><p class="item-text">${e.views}</p></li>
            <li class="item-info"><h3 class="item-title">Comments</h3><p class="item-text">${e.comments}</p></li>
            <li class="item-info"><h3 class="item-title">Downloads</h3><p class="item-text">${e.downloads}</p></li>
        </ul>   
    </li>`}function E(){p.classList.add("loader")}function i(){p.classList.remove("loader")}function u(){L.classList.add("hidden")}function M(){L.classList.remove("hidden")}const h={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".js-btn-loadmore")};m();u();h.form.addEventListener("submit",v);const $=15;let l,n,f;async function v(e){if(e.preventDefault(),u(),l=new FormData(e.target).get("search-text").trim(),n=1,E(),!l){c.show({title:"Error",message:"Please try again!"}),m(),i();return}m();try{const s=await g(l,n);if(i(),s.hits.length===0){c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(s.hits),f=Math.ceil(s.totalHits/$)}catch{b("Error","Something went wrong!")}f&&S(),i(),e.target.reset()}function b(e,r){c.error({title:e,message:r})}function S(){n>=f?(u(),c.info({title:"Info",message:"We are sorry, but you have reached the end of search results"})):M()}h.loadMoreBtn.addEventListener("click",async e=>{n+=1,u();try{E();const r=await g(l,n);w(r.hits),O()}catch{i(),b("Error","Something went wrong!")}i(),S()});function O(){const r=h.galleryList.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
