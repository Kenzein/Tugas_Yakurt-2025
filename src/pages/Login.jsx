import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      savedUser &&
      email === savedUser.email &&
      password === savedUser.password
    ) {
      navigate("/movies");
    } else {
      setError("Email atau password salah!");
    }
  };
  return (
    <div className="min-h-screen flex ">
      {/* Card Sambutan */}
      <div className="hidden md:flex flex-col justify-center items-center text-white w-1/2 p-10 ">
        <h1 className="text-4xl font-bold mb-3 text-center text-medieval drop-shadow-[10px_10px_5px_rgba(0,0,0)]">
          Selamat Datang di Cintetix
        </h1>
        <p className="">Akses seluruh tiket film pada satu aplikasi</p>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 p-6 ">
        {/* Card Login */}
        <div className="bg-white p-8 rounded-xl  w-full max-w-md transition duration-300 shadow-[20px_20px_50px_rgba(0,0,0,0.75)] hover:shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">
            Masuk ke Akun Anda
          </h2>
          {/* Form Login */}
          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label className="block text-sm font-stretch-100% text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Password */}
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

            {error && (
              <div
                className="mt-2
            "
              >
                <Alert variant="filled" severity="error">
                  {error}
                </Alert>
              </div>
            )}
            <Button
              type="submit"
              variant="outlined"
              size="medium"
              sx={{
                width: "100%",
                color: "white",
                bgcolor: "#2b7fff",
                ":hover": { bgcolor: "#155dfc" },
                borderRadius: "8px",
              }}
            >
              Login
            </Button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Belum punya akun? {/* */}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Daftar disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
