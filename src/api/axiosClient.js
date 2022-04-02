import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.ezfrontend.com',
    headers: {
        'Content-type': 'application/json'
    }
})

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axiosClient