import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key:'128b2acdbb6346c7851d56febbfe0f9a'
    }
})

