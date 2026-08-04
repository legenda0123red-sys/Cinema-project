import type { MovieCardProps } from "../../types/types";
import {
  addFavorites,
  removeFavorites,
} from "../../features/favorites/favorites";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { Link } from "react-router-dom";

function MovieCard({ movie }: MovieCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 w-65">
        <div className="relative overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-90 object-cover group-hover:scale-105 transition duration-300"
          />

          <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
            ⭐ {movie.rating}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent h-24"></div>
        </div>

        <div className="p-4">
          <h2 className="text-white font-bold text-lg truncate">
            {movie.title}
          </h2>

          <p className="text-zinc-400 text-sm mt-2 line-clamp-2">
            {movie.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {movie.genre.map((genre) => (
              <span
                key={genre}
                className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-lg text-xs"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 text-sm">
            <span
              onClick={() => dispatch(addFavorites(movie))}
              className="hover:scale-[1.5] transition: delay-200 duration-150"
            >
              ❤️
            </span>

            <span className="text-zinc-400">⏱ {movie.duration} мин</span>

            <span className="text-zinc-400">{movie.age}</span>
            <span
              onClick={() => dispatch(removeFavorites(movie.id))}
              className="hover:scale-[1.5] transition: delay-200 duration-150"
            >
              ❌
            </span>
          </div>

          <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition">
            Купить билет
          </button>
          <p className="text-center text-lg text-white pt-2.5">
            <Link state={movie} to={`movie/${movie.id}`}>Подробнее</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
