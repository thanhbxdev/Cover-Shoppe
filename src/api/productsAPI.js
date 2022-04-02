import axiosClient from "./axiosClient";

const productsAPI = {
    getAll(params) {
        const URL = '/products'
        return axiosClient.get(URL, {params})
    },
    getId(id) {
        const URL = `/products/${id}`
        return axiosClient.get(URL)
    }
}
export default productsAPI
