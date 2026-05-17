// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loaderEl = document.querySelector(".js-loader");
const loadMore = document.querySelector(".js-btn-loadmore");


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
});
    
export function renderGallery(images) {
    
    const markup = images.map(createGallery).join('');
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

function createGallery(image) {
    return `
    <li class="gallery-item">
        <a href="${image.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${image.webformatURL}" 
                alt="${image.tags}"
            />
        </a>
        <ul class="list-info">
            <li class="item-info"><h3 class="item-title">Likes</h3><p class="item-text">${image.likes}</p></li>
            <li class="item-info"><h3 class="item-title">Views</h3><p class="item-text">${image.views}</p></li>
            <li class="item-info"><h3 class="item-title">Comments</h3><p class="item-text">${image.comments}</p></li>
            <li class="item-info"><h3 class="item-title">Downloads</h3><p class="item-text">${image.downloads}</p></li>
        </ul>   
    </li>`;
}

export function showLoader() {
    loaderEl.classList.add("loader");
}

export function hideLoader() {
    loaderEl.classList.remove("loader");
}

export function hideLoadMoreButton(){
    loadMore.classList.add("hidden");
}

export function showLoadMoreButton() {
    loadMore.classList.remove("hidden");
}