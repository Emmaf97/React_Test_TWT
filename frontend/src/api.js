import axios from "axios"
import { ACCESS_TOKEN } from "./constants.js"


const apiUrl = "/choreo-apis/react-application-test-de/backend/v1"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
  });
//look in local storage and check for access token and add to header if not created then nothing is done.

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            //this passes jwt acess token.
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

export default api