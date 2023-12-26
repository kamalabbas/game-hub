// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
// import apiClient, { FetchResponse } from "../services/api-client";
import APIClient, { FetchResponse } from "../services/api-client";
// import { FetchResponse } from "./useData";
import genres from "../data/genres";
// import genres from "../data/genres";
// import { CanceledError } from "axios";


const apiClient = new APIClient<Genre>('/genres');
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// this code is no longer need because it is replaced with w generic hook called useData
// interface FetchGenresResponse {
//     count: number;
//     results: Genre[];
// }

// const useGenres = () => {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState('');
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController();
//         setLoading(true);
//         apiClient.get<FetchGenresResponse>("/genres", {signal: controller.signal})
//             .then(res => {
//                 setGenres(res.data.results);
//                 setLoading(false);
//             })
//             .catch(err =>{
//                 if(err instanceof CanceledError) return;
//                 setError(err.message)
//                 setLoading(false);
//             });

//         return () => controller.abort();
//     }, []);

//     return {genres, error, isLoading}
// }

// const useGenres = () => useData<Genre>('/genres');

// since the genres is static  data we created a copy of the data and rendered the list staticly that case we reduced the amount of server calls
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// we will replace this with reactquery
const useGenres = () =>
  useQuery<FetchResponse<Genre>,Error>({
    queryKey: ["genres"],

    // this was the first method 
    // queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    queryFn: apiClient.getAll,

    // staletime is used to cachin data so how offten this object has to change.
    staleTime: 24 * 60 *60 * 1000, // this is 24h,
    initialData: {count: genres.length, results: genres, next: ''}
  });

export default useGenres;
