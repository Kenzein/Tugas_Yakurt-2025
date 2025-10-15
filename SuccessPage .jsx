import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="text-center mt-20">
        <p>Tidak ada data pembayaran.</p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-lg mx-auto p-6 text-center mt-10 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Pembayaran Berhasil</h1>
      <p className="mb-2">
        Film: <b>{data.title}</b>
      </p>
      <p className="mb-2">
        Atas nama: <b>{data.name}</b>
      </p>
      <p className="mb-4">
        Metode Pembayaran: <b>{data.paymentMethod}</b>
      </p>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => navigate("/")}
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};
export default SuccessPage;
