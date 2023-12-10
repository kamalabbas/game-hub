import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9f6b0da8cd9b4bbf9352c29d58891c5c'
    }
})