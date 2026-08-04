import MovieCard from "../MovieCard/MovieCard";
import Header from "../../components/Header/Header";
import type { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../features/favorites/favorites";
import Footer from "../../components/Footer/Footer";
function Favorites(){
    const dispatch = useDispatch<AppDispatch>()
    const movie = useSelector((state: RootState) => state.favoritesReducer.favorites);
    return(
        <>
        <Header />
           <section className=" bg-zinc-950 px-6 py-10 mt-12.5 rounded-lg ">

                <h1 className="
                    text-4xl 
                    font-bold 
                    text-white 
                    mb-10
                    text-center
                ">
                    ❤️ Избранные фильмы
                </h1>


                <div className="
                    flex flex-wrap gap-12.5
                ">
                    

                    {
                        movie.map((movie)=>(
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))
                    }

                </div>
                <button className="text-lg text-white p-3" onClick={() => dispatch(deleteAll())}>Delete All</button>

            </section>
            <Footer />
        </>
    )
}
export default Favorites