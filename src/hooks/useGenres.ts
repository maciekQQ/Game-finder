import useData from "./useData";
import Genre from "../hooks/useGenres"

export interface Genre {
  id: number;
  name: string;
  image_background: string
}


const useGenres = () => (
    useData<Genre>('/genres'))


export default useGenres;
