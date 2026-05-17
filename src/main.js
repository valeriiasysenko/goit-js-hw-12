import { getImagesByQuery } from "./js/pixabay-api.js";
import { renderGallery, showLoader, hideLoader, clearGallery, hideLoadMoreButton, showLoadMoreButton } from "./js/render-functions.js";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import axios from "axios";

const refs = {
    form: document.querySelector(".form"),
    galleryList: document.querySelector(".gallery"),
    loadMoreBtn: document.querySelector(".js-btn-loadmore"),
}
clearGallery();
hideLoadMoreButton();
refs.form.addEventListener("submit", onSubmitHandler);
const PER_PAGE = 15;
let query;
let page;
let totalPages;

async function onSubmitHandler(event) {
    event.preventDefault();
    hideLoadMoreButton();
    const dataForm = new FormData(event.target);

    query = dataForm.get("search-text").trim();
    page = 1;
    showLoader();
    if (!query) { 
        iziToast.show({
            title: 'Error',
            message: 'Please try again!'
        });
        clearGallery();
        hideLoader();
        return;
    }
    clearGallery();
    try {
        const res = await getImagesByQuery(query, page);
        hideLoader();
        if (res.hits.length === 0) {
            iziToast.show({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            return;
        }
       renderGallery(res.hits);
        // gallery.innerHTML = markup;
        totalPages = Math.ceil(res.totalHits / PER_PAGE);
    } catch {
        showError('Error', 'Something went wrong!');
    }
    if (totalPages) {
        checkBtnStatus();
    }
    hideLoader();
    event.target.reset();
}

function showError(title, message) {
    iziToast.error({
    title: title,
    message: message,
    });
}
function checkBtnStatus() {
    if (page >= totalPages) {
        hideLoadMoreButton();
        iziToast.info({
            title: 'Info',
            message: 'We are sorry, but you have reached the end of search results',
        });
    } else {
        showLoadMoreButton();
    }
}

refs.loadMoreBtn.addEventListener("click", async e => {
    page += 1;
    hideLoadMoreButton();
    try {
        showLoader();
        const res = await getImagesByQuery(query, page);
        renderGallery(res.hits);
        scrollPage();
        // const markup = renderGallery(res.hits);
        // gallery.insertAdjacentHTML("beforeend", markup);
    } catch {
        hideLoader();
        showError('Error', 'Something went wrong!');
    }
    hideLoader();
    checkBtnStatus();
    
})

function scrollPage() {
    const elem = refs.galleryList.lastElementChild;
    const height = elem.getBoundingClientRect().height;

    window.scrollBy({
        top: height * 2,
        behavior: "smooth",
    });
}