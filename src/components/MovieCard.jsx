import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, title, genre, duration, poster }) => {
  const navigate = useNavigate();
  const displayGenre = Array.isArray(genre) ? genre.join(" ") : genre;
  return (
    <div
      className="border rounded-lg p-3 w-52 shadow cursor-pointer hover:scale-105 transition"
      onClick={() => navigate(`/movies/${id}`)}
    >
      <img src={poster} alt={title} className="w-full rounded-lg" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm">Genre: {displayGenre}</p>
      <p className="text-sm ">Durasi: {duration}</p>
    </div>
  );
};
export default MovieCard;
