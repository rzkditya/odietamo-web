import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import toromiIcon from "../assets/Toromi Icon.svg";
import { Link } from "react-router-dom";

const ToromiPage = () => {
var menuOption =
    "px-14 py-2 text-toromi-main text-lg outline-2 outline-dotted outline-toromi-main rounded-full";
  var socialButton =
    "p-3 text-toromi-main text-3xl outline-2 outline-dotted outline-toromi-main rounded-full";


  return (
    <>
    <div className="flex flex-col w-full h-screen justify-center items-center bg-background overflow-y-auto">
        <section className="max-w-64 h-auto flex justify-center items-center mb-12">
            <Link to="/">
          <img src={toromiIcon} alt="Toromi Logo" className="object-contain w-full h-full" />
          </Link>
        </section>
        <section className="flex flex-col gap-8 mb-12">
          <button className={`${menuOption}`} onClick={() => alert("1")}>
            MENU & PRICELIST
          </button>
          <button className={`${menuOption}`} onClick={() => alert("2")}>
            EVENT PACKAGE
          </button>
        </section>
        <section className="flex gap-4 mb-12">
          <button className={`${socialButton}`}><FontAwesomeIcon icon={faWhatsapp} /></button>
          <button className={`${socialButton}`}><FontAwesomeIcon icon={faInstagram} /></button>
        </section>
        <button className="px-10 py-1 text-toromi-main text-xs outline-2 outline-dotted outline-toromi-main rounded-full">
          Kritik & Saran
        </button>
      </div>
    </>
  );
};

export default ToromiPage;