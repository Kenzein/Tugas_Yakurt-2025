import { useEffect, useState } from "react";
import data from "../data/data.json";
import MovieCard from "../components/MovieCard";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  useEffect(() => {
    setMovies(data);
  }, []);
  // Filter list Genre start
  const genres = [
    "all",
    ...new Set(
      data.flatMap((movie) =>
        Array.isArray(movie.genre) ? movie.genre : [movie.genre]
      )
    ),
  ];

  const filteredMovies =
    selectedGenre === "all"
      ? movies
      : movies.filter((movie) =>
          Array.isArray(movie.genre)
            ? movie.genre.includes(selectedGenre)
            : movie.genre === selectedGenre
        );
  // Filter list Genre end

  return (
    <div className="p-6 pt-20">
      <h2 className="text-2xl text-white font-bold mb-4">
        Daftar Film yang Sedang Tayang
      </h2>
      <div className="mb-4 ">
        <select
          className=" bg-red-500 text-white p-2 rounded"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre === "all" ? "Semua Genre" : genre}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 text-white">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genre={movie.genre}
            duration={movie.duration}
            poster={movie.poster}
          />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
