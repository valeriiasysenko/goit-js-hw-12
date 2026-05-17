import axios from "axios";

export async function getImagesByQuery(query, page) {
    const API_KEY = "55223791-ec5d17344899da05be039ab07";
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const url = `${BASE_URL}${END_POINT}`;
    
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page,
    }

    const res = await axios.get(url, { params });
    return res.data;
}