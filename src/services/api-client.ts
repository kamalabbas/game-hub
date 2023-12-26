import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     params: {
//         key: '9f6b0da8cd9b4bbf9352c29d58891c5c'
//     }
// })

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9f6b0da8cd9b4bbf9352c29d58891c5c",
  },
});

class APIClinet<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // define the method = to function to prevent problems with this, "FYI" this loses its instance.
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}


export default APIClinet;