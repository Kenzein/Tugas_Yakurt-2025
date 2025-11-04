import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [userName, setUserName] = useState("");
  const [avatarOpen, setAvatarOpen] = useState(false);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("ticket_history") || "[]"
    );
    setHistory(storedHistory);
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <>
      {/* Navbar*/}
      <nav className="p-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-md text-white flex flex-col sm:flex-row sm:justify-between sm:items-center fixed top-0 left-0 w-full z-10 gap-2 sm:gap-0">
        {/* "p-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-md text-white flex justify-between fixed top-0 left-0 w-full z-10" */}
        <h2
          className="text-3xl font-bold text-red-500 cursor-pointer text-medieval sm: text-left"
          onClick={() => navigate("/movies")}
        >
          CinteTix
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setShowHistory(true)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-black bg-opacity-20 "
          >
            Lihat Riwayat
          </button>
          {userName && (
            <span className="text-white text-xl font-medium pt-1">
              {userName}
            </span>
          )}
          <div
            onClick={() => setAvatarOpen(!avatarOpen)}
            className="cursor-pointer"
          >
            <Avatar alt="{userName}"></Avatar>
            {/* logout */}
            {avatarOpen && (
              <div className="absolute right-4 mt-12 bg-white text-black rounded-lg shadow-lg p-3 w-40">
                <Button
                  variant="outlined"
                  startIcon={<LogoutIcon />}
                  onClick={() => {
                    localStorage.removeItem("userName");
                    localStorage.removeItem("ticket_history");
                    localStorage.removeItem("userData");
                    navigate("/login");
                  }}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* popup history*/}
      {showHistory && (
        <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.2)] backdrop-blur-sm z-50">
          <div className="bg-white rounded-xl border border-gray-300 shadow-lg p-6 w-full max-w-md relative text-gray-700">
            {/* Tombol X */}
            <div className="absolute top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-black hover:text-red-500"
                onClick={() => setShowHistory(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h2 className="text-xl font-semibold mb-3">Riwayat Pemesanan</h2>

            {history.length === 0 ? (
              <p className="text-center">Belum ada riwayat pemesanan</p>
            ) : (
              <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
                {history.map((ticket, index) => (
                  <li
                    key={index}
                    className="border p-3 rounded flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold">{ticket.title}</p>
                      <p className="text-sm text-gray-600">
                        Nama: {ticket.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Pembayaran: {ticket.paymentMethod}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">#{index + 1}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
