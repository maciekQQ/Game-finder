import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key:'128b2acdbb6346c7851d56febbfe0f9a'
    }
})