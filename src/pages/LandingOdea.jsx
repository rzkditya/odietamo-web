import { useEffect } from "react";
import odeaBG from "../assets/Bar BG.JPG";
import odeaLogo from "../assets/Odea Logo.png";
import { useNavigate } from "react-router-dom";

const LandingOdea = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/odeaMenu");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${odeaBG})`,
      }}
      className="flex flex-col w-full h-screen justify-center items-center bg-cover bg-center gap-12"
    >
      <img src={odeaLogo} alt="Logo Odea" />

      <p className="text-main">Redirecting to menu. . .</p>
    </div>
  );
};

export default LandingOdea;
