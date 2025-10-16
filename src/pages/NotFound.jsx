const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        ERROR 404 - Halaman Tidak Ditemukan
      </h1>
      <p className="text-gray-600 mb-6">URL yang kamu akses tidak tersedia</p>

      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Kembali ke halaman Utama
      </a>
    </div>
  );
};
export default NotFound;
