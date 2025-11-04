import { useNavigate } from "react-router-dom";
import Particles from "../../ReactAnim/Particles/Particles.jsx";
import Text from "../template/Text.jsx";
import { useState, useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

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
        <Text userName={userName} />
        <button
          onClick={() => navigate("/login")}
          className="border rounded shadow px-4 py-2 bg-red-600 text-white hover:bg-gray-900"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Welcome;
