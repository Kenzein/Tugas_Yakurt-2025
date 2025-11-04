import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import Back from "../atoms/Back_Button.jsx";
import { useState } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const movie = data.find((film) => String(film.id) === String(id));

  if (!movie) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Film tidak ditemukan</h2>
      </div>
    );
  }
  const tambah = () => setCount((prev) => prev + 1);
  const kurang = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleOrder = () => {
    navigate(`/movies/${id}/payment`, {
      state: { ...movie, ticketCount: count },
    });
  };
  return (
    <div className="p-6 pt-20 max-w-4xl mx-auto">
      {/* Tombol kembali */}
      <div className="m-5">
        <Back />
      </div>

      <div className="flex gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-64 rounded-lg shadow "
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-700">{movie.title}</h1>
          <p className="text-white mt-2">
            <span className="font-medium">Genre: </span>
            {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
          </p>
          <p className="text-white mt-2">
            <span className="font-medium">Durasi: </span>
            {movie.duration}
          </p>
          <p className="mt-4 text-white">
            <span className="font-medium "></span>
            {movie.description}
          </p>
        </div>
      </div>
      {/* Jumlah Tiket */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={kurang}
            className="px-3 py-1 bg-gray-700 text-white text-xl rounded hover:bg-gray-600"
          >
            -
          </button>
          <span className="text-2xl text-white font-semibold">{count}</span>
          <button
            onClick={tambah}
            className="px-3 py-1 bg-gray-700 text-white text-xl rounded hover:bg-gray-600"
          >
            +
          </button>
        </div>
        {/* Pesan */}
        <button
          onClick={handleOrder}
          className="mt-4 px-5 py-2 bg-red-500 text-white rounded hover:bg-black"
        >
          Pesan Tiket
        </button>
      </div>
    </div>
  );
};
export default MovieDetail;
