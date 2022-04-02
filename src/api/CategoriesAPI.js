import axiosClient from "./axiosClient";

const categoriesAPI = {
    getAll(params) {
        const URL = '/categories'
        return axiosClient.get(URL, {params})
    },
    getId(id) {
        const URL = `/categories${id}`
        return axiosClient.get(URL)
    }
}
export default categoriesAPI