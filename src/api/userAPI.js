import axiosClient from "./axiosClient";

const userAPI = {
    register(data) {
        const URL = '/auth/local/register'
        return axiosClient.post(URL, data)
    }
}
export default userAPI
