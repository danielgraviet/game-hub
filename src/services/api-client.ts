import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fae7f69c07a04a078c76588ce6f8037d'
    }
})