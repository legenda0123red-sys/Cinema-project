import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
import type { AppDispatch, RootState } from "../../app/store";
import axios from "axios";


function MovieList() {
  const dispatch = useDispatch<AppDispatch>();
  const item = useSelector((state: RootState) => state.moviesReducer.movies);
  
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get("http://localhost:3000/movies");
    
        const data = response.data;
        dispatch(setMovies(data));
      } catch (err) {
        console.log(err);
      }
    }

    getMovies();
  }, [dispatch]);

  return (
    <>
    <section className="flex flex-wrap mt-12.5 justify-center gap-12.5">
    {item.map((el) => (
        <MovieCard key={el.id} movie={el}/>
    ))}
     </section>
    </>
  );
}

export default MovieList;
