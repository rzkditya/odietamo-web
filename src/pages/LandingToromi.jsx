import React, { useEffect } from "react";
import tiramisuBG from "../assets/Tiramisu BG.png";
import toromiLogo from "../assets/Toromi Logo.svg";
import { useNavigate } from "react-router-dom";

const LandingToromi = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/toromiMenu");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tiramisuBG})`,
      }}
      className="flex flex-col w-full h-screen justify-center items-center bg-cover bg-center gap-12"
    >
      <img src={toromiLogo} alt="Logo Toromi" />

      <p className="text-main">Redirecting to menu. . .</p>
    </div>
  );
};

export default LandingToromi;
