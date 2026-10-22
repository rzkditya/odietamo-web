import React from "react";
import odeaLogo from "../assets/Logo 1.png";
import toromiLogo from "../assets/Logo 2.png";

const Home = () => {
  var layout = "flex justify-evenly items-center w-48 h-48 p-4 focus:scale-125";

  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 gap-8 bg-background w-screen h-screen">
        <button id="odeaHome" onClick={() => alert("Odea Home")}>
          <div id="Odi Et Amo Home" className={`${layout} bg-odea-main`}>
            <img src={odeaLogo} alt="" className="aspect-4/5 object-contain" />
          </div>
        </button>
        <div className="text-lg text-odea-text italic">Choose your mood ♡</div>
        <button id="odeaHome" onClick={() => alert("Toromi Home")}>
          <div id="Toromi Home" className={`${layout} bg-toromi-main`}>
            <img src={odeaLogo} alt="" className="aspect-4/5 object-contain" />
          </div>
        </button>
      </div>
    </>
  );
};

export default Home;
