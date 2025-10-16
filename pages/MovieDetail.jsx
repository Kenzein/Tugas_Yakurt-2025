import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

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
    <div className="p-6 max-w-4xl mx-auto">
      {/* Tombol kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Kembali
      </button>
      <div className="flex gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-64 rounded-lg shadow"
        />
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-600 mt-2">
            <span className="font-medium">Genre: </span>
            {movie.genre}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-medium">Durasi: </span>
            {movie.duration}
          </p>
          <p className="mt-4">
            <span className="font-medium text-gray-600">Deskripsi: </span>
            {movie.description}
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate(`/movies/${id}/payment`)}
        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Pesan Tiket
      </button>
    </div>
  );
};
export default MovieDetail;
