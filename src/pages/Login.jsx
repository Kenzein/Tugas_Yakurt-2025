import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";

export default function Login() {
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
      navigate("/home");
    } else {
      setError("Email atau password salah!");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white p-8 rounded-xl shadow-black w-full max-w-md transition duration-300 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">
          Masuk ke Akun Anda
        </h2>
        {/* Form Login */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
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
          Belum punya akun?
          <Link to="/signup" className="text-blue-600 hover:underline">
            Daftar disini
          </Link>
        </p>
      </div>
    </div>
  );
}
