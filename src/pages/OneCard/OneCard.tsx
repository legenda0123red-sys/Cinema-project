import { Link, useLocation } from "react-router-dom";
import type { Movie } from "../../types/types";
import type { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../features/favorites/favorites";
function OneCard() {
    const dispatch = useDispatch<AppDispatch>()
  const location = useLocation();
  const movie = location.state as Movie;

  
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-[350px_1fr] gap-10">
            <div>
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {movie.genre}
                  </span>

                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {movie.rating}
                  </span>

                  <span className="text-zinc-400">{movie.releaseDate}</span>

                  <span className="text-zinc-400">{movie.duration}</span>
                </div>

                <h1 className="text-5xl font-bold mb-6">{movie.title}</h1>

                <p className="text-zinc-300 leading-8 text-lg">
                  {movie.description}
                </p>
              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-10">
                <button className="bg-red-600 hover:bg-red-700 duration-300 px-8 py-4 rounded-xl font-semibold">
                  ▶ Watch Now
                </button>

                <button
                onClick={() => dispatch(addFavorites(movie))}
                className="border border-zinc-600 hover:border-red-500 hover:text-red-500 duration-300 px-8 py-4 rounded-xl">
                  ❤ Add to Favorites
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span className="text-xl">←</span>
                  <span>Back</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OneCard;
