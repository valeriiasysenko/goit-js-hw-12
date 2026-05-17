import{a as b,S,i as l}from"./assets/vendor-DirGshhi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function g(e,r){const s="55223791-ec5d17344899da05be039ab07",o="https://pixabay.com/api/",a={key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await b.get(o,{params:a})).data}const f=document.querySelector(".gallery"),y=document.querySelector(".js-loader"),c=document.querySelector(".js-btn-loadmore");console.log(c);const P=new S(".gallery a",{captionsData:"alt"});function p(e){const r=e.map(x).join("");f.insertAdjacentHTML("beforeend",r),P.refresh()}function m(){f.innerHTML=""}function x(e){return`
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
    </li>`}function $(){y.classList.add("loader")}function h(){y.classList.remove("loader")}function u(){c.classList.add("hidden")}function q(){c.classList.remove("hidden")}const v={form:document.querySelector(".form")};m();u();v.form.addEventListener("submit",O);const B=15;let n,i,L;async function O(e){if(e.preventDefault(),u(),n=new FormData(e.target).get("search-text").trim(),i=1,$(),!n){l.show({title:"Error",message:"Please try again!"}),m(),h();return}m();try{const s=await g(n,i);if(console.log(s),s.hits.length===0){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(s.hits),L=Math.ceil(s.totalHits/B)}catch{w("Error","Something went wrong!")}E(),h(),e.target.reset()}function w(e,r){l.error({title:e,message:r})}function E(){i>=L?(u(),l.info({title:"Info",message:"We are sorry, but you have reached the end of search results"})):q()}c.addEventListener("click",async e=>{i+=1,u();try{const r=await g(n,i);p(r.hits),_()}catch{w("Error","Something went wrong!")}E()});function _(){const r=f.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
