import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react";
import { useEffect } from "react";

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    paymentMethod: "",
    title: "",
  });
  useEffect(() => {
    const foundMovie = data.find((film) => film.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const history = JSON.parse(localStorage.getItem("ticket_history") || "[]");

    localStorage.setItem(
      "ticket_history",
      JSON.stringify([...history, { ...formData, title: movie.title }])
    );

    navigate("/success", {
      state: {
        title: movie.title,
        name: formData.name,
        paymentMethod: formData.paymentMethod,
      },
    });
  };
  if (!movie) {
    return <p className="text-center mt-10">Film tidak ditemukan</p>;
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Kembali
      </button>
      {/* Informasi Film */}
      <div className="flex gap-6 mb-6">
        <img src={movie.poster} alt={movie.title} className="w-40 rounded" />
        <div>
          <h1 className="text-3xl font-bold text-red-500">{movie.title}</h1>
          <p className="text-white">Genre: {movie.genre}</p>
          <p className="text-white">Durasi: {movie.duration}</p>
        </div>
      </div>
      {/* Form Pembayaran */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-5 shadow-2xl rounded"
      >
        {/* Nama */}
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full border p-2 rounded placeholder:text-[#d1cece] "
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        {/* Nomor */}
        <input
          type="tel"
          placeholder="Nomor Hp"
          className="w-full border p-2 rounded placeholder:text-[#d1cece] "
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        {/* Email */}
        <input
          type="email"
          placeholder="Email (opsional)"
          className="w-full border p-2  placeholder:text-[#d1cece] "
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {/* Metode Pembayaran */}
        <select
          className="w-full border border-black p-2 rounded text-red-500 "
          value={formData.paymentMethod}
          onChange={(e) =>
            setFormData({ ...formData, paymentMethod: e.target.value })
          }
          required
        >
          <option value="">Pilih Metode Pembayaran</option>
          <option value="transfer">Transfer Bank</option>
          <option value="ewallet">E-Wallet</option>
          <option value="cod">Bayar di tempat</option>
        </select>
        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Konfirmasi Pembayaran
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
