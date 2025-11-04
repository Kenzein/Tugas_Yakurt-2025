import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import Back from "../atoms/Back_Button.jsx";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = data.find((film) => String(film.id) === String(id));

  if (!movie) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Film tidak ditemukan</h2>
      </div>
    );
  }
  return (
    <div className="p-6 pt-20 max-w-4xl mx-auto">
      {/* Tombol kembali */}
      <Back />
      <div className="flex gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-64 rounded-lg shadow "
        />
        <div>
          <h1 className="text-3xl font-bold text-red-500">{movie.title}</h1>
          <p className="text-white mt-2">
            <span className="font-medium">Genre: </span>
            {movie.genre}
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
      <button
        onClick={() => navigate(`/movies/${id}/payment`)}
        className="mt-4 px-5 py-2 bg-red-500 text-white rounded hover:bg-black"
      >
        Pesan Tiket
      </button>
    </div>
  );
};
export default MovieDetail;
