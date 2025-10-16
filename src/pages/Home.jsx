import { useNavigate } from "react-router-dom";
import Particles from "../../ReactAnim/Particles/Particles.jsx";
import Text from "../template/Text.jsx";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  gap-4 p-6">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#D8762A", "#D8762A"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={20}
        />
      </div>
      <div className="z-10 flex flex-col items-center gap-4">
        <Text />
        <button
          onClick={() => navigate("/movies")}
          className="border rounded shadow px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          Explore
        </button>
      </div>
    </div>
  );

  // return (
  //   <div className="min-h-screen flex flex-col items-center justify-center  gap-4 p-6">
  //     <h1 className="text-3xl font-bold">Selamat Datang di Bioskop App</h1>
  //     <p className="mt-2 text-gray-600">
  //       Pilih film favoritmu dan pesan tiket dengan mudah
  //     </p>
  //     <button
  //       onClick={() => navigate("/movies")}
  //       className="border rounded shadow px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
  //     >
  //       Daftar Film
  //     </button>

  //     {/* Tombol Lihat Riwayat */}
  //     <button
  //       onClick={() => setShowHistory(true)}
  //       className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
  //     >
  //       Lihat Riwayat
  //     </button>

  //     {/* popup */}
  //     {showHistory && (
  //       <div className="fixed inset-0 bg-whitesmoke-50 bg-opacity-100 flex justify-center items-center z-50">
  //         <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
  //           <div className="absolute top-2 right-2">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth={1.5}
  //               stroke="currentColor"
  //               className="w-6 h-6 cursor-pointer"
  //               onClick={() => setShowHistory(false)}
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M6 18 18 6M6 6l12 12"
  //               />
  //             </svg>
  //           </div>

  //           <h2 className="text-xl font-semibold mb-3">Riwayat Pemesanan</h2>

  //           {history.length === 0 ? (
  //             <p className="text-gray-600 text-center">
  //               Belum ada riwayat pemesanan
  //             </p>
  //           ) : (
  //             <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
  //               {history.map((ticket, index) => (
  //                 <li
  //                   key={index}
  //                   className="border p-3 rounded flex justify-between items-center"
  //                 >
  //                   <div>
  //                     <p className="font-bold">{ticket.title}</p>
  //                     <p className="text-sm text-gray-600">
  //                       Nama: {ticket.name}
  //                     </p>
  //                     <p className="text-sm text-gray-600">
  //                       Pembayaran: {ticket.paymentMethod}
  //                     </p>
  //                   </div>
  //                   <span className="text-xs text-gray-500">#{index + 1}</span>
  //                 </li>
  //               ))}
  //             </ul>
  //           )}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Home;
