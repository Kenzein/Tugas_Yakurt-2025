import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    if (!nama || !email || !password) {
      setError("Semua field harus diisi!");
      return;
    }

    const akunBaru = { nama, email, password };
    localStorage.setItem("userData", JSON.stringify(akunBaru));
    localStorage.setItem("userName", nama);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-black w-full max-w-md transition duration-300 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">
          Buat Akun Baru
        </h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          {/* Inputan Nama */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Masukkan nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus: ring-blue-500 outline-none"
            />
          </div>
          {/* Inputan Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus: ring-blue-500 outline-none"
            />
          </div>
          {/* Inputan Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? (
                  <VisibilityOffIcon></VisibilityOffIcon>
                ) : (
                  <VisibilityOutlinedIcon></VisibilityOutlinedIcon>
                )}
              </button>
            </div>
          </div>
          {error && <p className="text-red-600 text-center text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Daftar
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Sudah punya akun?
          <Link to="/login" className="text-green-600 hover: underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
