import odeaLogo from "../assets/Odea Logo.png";
import toromiLogo from "../assets/Toromi Logo.svg";
import { Link } from "react-router-dom";
import HomeBG from "../assets/Home BG.png";

const Home = () => {
  var layout =
    "flex justify-evenly items-center w-64 h-64 p-4 bg-black/40 rounded-full focus:scale-125";

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HomeBG})`,
        }}
        className="flex flex-col justify-evenly items-center bg-cover bg-center w-full min-h-dvh"
      >
        <Link to="/odea">
          <div id="Odi Et Amo Home" className={`${layout}`}>
            <img src={odeaLogo} alt="" className="aspect-4/5 object-contain" />
          </div>
        </Link>
        <div className="text-xl text-white italic tracking-widest">
          Choose your mood ♡
        </div>
        <Link to="/toromi">
          <div id="Toromi Home" className={`${layout} `}>
            <img
              src={toromiLogo}
              alt=""
              className="aspect-4/5 object-contain scale-125"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
