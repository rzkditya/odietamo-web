import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import odeaLogo from "../assets/Odea Icon.svg";

const OdeaPage = () => {
  var menuOption =
    "px-6 py-4 text-odea-text text-lg font-semibold outline-2 outline-dotted outline-odea-main rounded-full";
  var socialButton =
    "p-3 text-odea-text text-3xl outline-2 outline-dotted outline-odea-main rounded-full";

  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center bg-background overflow-y-auto">
        <section className="flex flex-col gap-8 mb-12">
          <button className={`${menuOption}`} onClick={() => alert("1")}>
            MENU & PRICELIST
          </button>
          <button className={`${menuOption}`} onClick={() => alert("2")}>
            EVENT PACKAGE
          </button>
          <button className={`${menuOption}`} onClick={() => alert("3")}>
            SLOW BAR RESERVATION
          </button>
        </section>
        <section className="flex gap-4 mb-12">
          <button className={`${socialButton}`}><FontAwesomeIcon icon={faWhatsapp} /></button>
          <button className={`${socialButton}`}><FontAwesomeIcon icon={faInstagram} /></button>
        </section>
        <section className="max-w-64 h-auto flex justify-center items-center">
          <img src={odeaLogo} alt="Odea Logo" className="object-contain w-full h-full" />
        </section>
        <button className="px-10 py-1 text-odea-text text-xs font-semibold outline-2 outline-dotted outline-odea-main rounded-full">
          Kritik & Saran
        </button>
      </div>
    </>
  );
};

export default OdeaPage;
