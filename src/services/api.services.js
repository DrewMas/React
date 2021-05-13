import axios from "axios";

const options = {
    baseURL: 'https://api.sampleapis.com/futurama'
}
let axiosInstance = axios.create(options);

const getCast = () => {
    return axiosInstance.get('/cast')
}
export {getCast}


const getInventory = () => {
    return axiosInstance.get('/inventory')
}
export {getInventory}
