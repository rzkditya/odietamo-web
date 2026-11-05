import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";
import toromiBG from "../assets/Toromi BG.svg";
import tiramisu from "../assets/Tiramisu.svg";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import FeedbackForm from "../components/FeedbackForm.jsx";

const ToromiPage = () => {
  var menuOption = "w-42 p-2 text-lg outline-1 rounded-md";

  return (
    <>
      <div
        style={{ backgroundImage: `url(${toromiBG})` }}
        className="flex flex-col w-full min-h-dvh px-6 pt-0 justify-center items-center bg-cover bg-center gap-2 text-main outline-main overflow-x-hidden overflow-y-auto"
      >
        <header className="fixed top-0 w-full bg-toromi-main/40">
          <Link to="/">
            <h1 className="text-lg text-center text-black/25 tracking-[0.2em]">
              TOROMI SUITSU
            </h1>
          </Link>
        </header>

        <section className="flex flex-col w-full h-105 p-6 py-2 justify-baseline items-center mt-8 mb-2 bg-toromi-main/40 rounded-2xl">
          <div className="flex justify-center items-center w-34 object-contain mb-2">
            <img src={tiramisu} alt="Tiramisu Image" />
          </div>

          <div className="flex w-full tracking-tight mb-4">
            <div className="flex justify-between items-center w-full">
              <div className="text-[clamp(1.0rem,5.5vw,2rem)] font-bold">
                Classic Tiramisu
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} size="xl" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <div>
              <div className="text-xs">SWEETNESS LEVEL</div>
              <div className="text-sm font-bold">Lightly Sweet</div>
            </div>
            <div>
              <div className="text-xs">COFFEE INTENSITY</div>
              <div className="text-sm font-bold">Bold & Coffee Forward</div>
            </div>
            <div>
              <div className="text-xs">INGREDIENTS</div>
              <div className="text-sm font-bold">
                Italian Lady Finger, Mascarpone Cheese, Americano, Cocoa Powder
              </div>
            </div>
          </div>

          <div className="flex self-start px-4 py-2 bg-black/25 text-xs font-bold rounded-lg">
            <div className="flex">Price: 40K</div>
          </div>
        </section>

        <section className="flex flex-col gap-4 mb-2">
          <a href="https://wa.me/628977708767?text=Halo!%20Saya%20mau%20pesan%20tiramisu:%0A%0A%E2%80%A2%20Pesanan:%0A%E2%80%A2%20Nama:%0A%E2%80%A2%20Alamat%20/%20Takeaway:%0A%E2%80%A2%20Jam%20Pengambilan/Kirim:%0A%0AMohon%20konfirmasi%20total%20biayanya%20ya,%20terima%20kasih!">
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
        <section className="flex p-2 gap-2 bg-white/30 rounded-2xl">
          <a href="http://instagram.com/toromi.suitsu">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <a href="http://threads.com/toromi.suitsu">
            <FontAwesomeIcon icon={faThreads} size="xl" />
          </a>
        </section>
      </div>

      <FeedbackForm bgImage={toromiBG} toEmail="toromi.suitsu@gmail.com" />
    </>
  );
};

export default ToromiPage;
