// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
import useData from "./useData";

// import { CanceledError } from "axios";
export interface Genre {
    id: number;
    name: string
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

const useGenres = () => useData<Genre>('/genres');

export default useGenres;