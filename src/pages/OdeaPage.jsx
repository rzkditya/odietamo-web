import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";
import odeaBG from "../assets/Odea BG.svg";
import { Link } from "react-router-dom";
import { menuList } from "../datas/OdeaMenu.js";
import Card from "../components/MenuCard.jsx";
import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const OdeaPage = () => {
  var menuOption = "w-64 px-14 py-2 text-xl outline-1 rounded-md";

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % menuList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? menuList.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${odeaBG})` }}
        className="flex flex-col w-full h-screen px-8 pt-0 justify-center items-center bg-cover bg-center gap-2 text-main outline-main overflow-x-hidden overflow-y-auto"
      >
        <header className="fixed top-0 w-screen p-2 bg-odea-main/40">
          <Link to="/">
            <h1 className="text-xl text-center text-black/25 tracking-[0.2em]">
              ODI ET AMO
            </h1>
          </Link>
        </header>

        <div className="relative gap-4 w-full">
          <Card item={menuList[currentIndex]} />
          <button
            onClick={handlePrev}
            className="absolute left-2 top-[20%] text-white"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="3x" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-[20%] text-white"
          >
            <FontAwesomeIcon icon={faChevronRight} size="3x" />
          </button>
        </div>

        <section className="flex flex-col gap-4 mb-4">
          <a href="https://wa.me/628977708767?text=Halo!%20Saya%20mau%20pesan%20kopi:%0A%0A%E2%80%A2%20Pesanan:%0A%E2%80%A2%20Nama:%0A%E2%80%A2%20Alamat%20/%20Takeaway:%0A%E2%80%A2%20Jam%20Pengambilan/Kirim:%0A%0AMohon%20konfirmasi%20total%20biayanya%20ya,%20terima%20kasih!">
            <button
              className={`${menuOption}`}
              onClick={() => alert("Redirecting to WhatsApp...")}
            >
              Order
            </button>
          </a>
          <button className={`${menuOption}`} onClick={() => alert("2")}>
            Event Package
          </button>
        </section>
        <section className="flex p-2 gap-2 bg-white/30 rounded-xl">
          <a href="http://instagram.com/odietamo.coffee">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a href="http://threads.com/odietamo.coffee">
            <FontAwesomeIcon icon={faThreads} size="2xl" />
          </a>
        </section>
      </div>
    </>
  );
};

export default OdeaPage;
