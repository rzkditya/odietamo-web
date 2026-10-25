import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import odeaLogo from "../assets/Odea Icon.svg";
import { Link } from "react-router-dom";
import OrderButton from "../components/OrderButton";

const OdeaPage = () => {
  var menuOption =
    "px-6 py-4 text-odea-text text-lg font-semibold outline-2 outline-dotted outline-odea-main rounded-full";
  var socialButton =
    "p-3 text-odea-text text-3xl outline-2 outline-dotted outline-odea-main rounded-full hover:cursor-pointer";

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
          <a href="https://wa.me/628977708767" target="_blank" rel="noopener noreferrer">
            <button className={`${socialButton}`}><FontAwesomeIcon icon={faWhatsapp} /></button>
          </a>
          <a href="https://www.instagram.com/odietamo.coffee" target="_blank" rel="noopener noreferrer">
            <button className={`${socialButton}`}><FontAwesomeIcon icon={faInstagram} /></button>
          </a>
        </section>
        <section className="max-w-64 h-auto mb-4 flex justify-center items-center">
<Link to="/">
          <img src={odeaLogo} alt="Odea Logo" className="object-contain w-full h-full" />
</Link>
        </section>
        <button className="px-10 py-1 text-odea-text text-xs font-semibold outline-2 outline-dotted outline-odea-main rounded-full">
          Kritik & Saran
        </button>
        <a href="https://wa.me/628977708767?text=Halo!%20Saya%20mau%20pesan%20kopi:%0A%0A%E2%80%A2%20Pesanan:%0A%E2%80%A2%20Nama:%0A%E2%80%A2%20Alamat%20/%20Takeaway:%0A%E2%80%A2%20Jam%20Pengambilan/Kirim:%0A%0AMohon%20konfirmasi%20total%20biayanya%20ya,%20terima%20kasih!"  className="fixed bottom-6 right-6 z-50"><OrderButton /></a>
      </div>
    </>
  );
};

export default OdeaPage;
