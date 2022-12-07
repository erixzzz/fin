import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:7083/",
    headers: {
        "Content-type": "application/json",
    },
});