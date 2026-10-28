import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";
import toromiBG from "../assets/Toromi BG.svg";
import tiramisu from "../assets/Tiramisu.svg";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ToromiPage = () => {
  var menuOption = "w-64 px-14 py-2 text-lg outline-1 rounded-md";

  return (
    <>
      <div
        style={{ backgroundImage: `url(${toromiBG})` }}
        className="flex flex-col w-full h-screen px-8 pt-0 justify-center items-center bg-cover bg-center gap-2 text-main outline-main overflow-x-hidden overflow-y-auto"
      >
        <header className="fixed top-0 w-screen p-2 bg-toromi-main/40">
          <Link to="/">
            <h1 className="text-xl text-center text-black/25 tracking-[0.2em]">
              TOROMI SUITSU
            </h1>
          </Link>
        </header>

        <section className="flex flex-col w-full h-auto p-8 py-4 justify-center items-center mt-8 mb-4 bg-toromi-main/60 rounded-2xl">
          <div className="flex justify-center items-center w-48">
            <img src={tiramisu} alt="Tiramisu Image" />
          </div>

          <div className="flex flex-col font-bold tracking-tight gap-4 mb-4">
            <div className="flex justify-between items-end">
              <div className="text-2xl">Classic Tiramisu</div>
              <div>
                <FontAwesomeIcon icon={faHeart} size="xl" />
              </div>
            </div>

            <div>
              <div className="text-[10px]">SWEETNESS LEVEL</div>
              <div className="text-md">Lightly Sweet</div>
            </div>
            <div>
              <div className="text-[10px]">COFFEE INTENSITY</div>
              <div className="text-md">Bold & Coffee Forward</div>
            </div>
            <div>
              <div className="text-[10px]">INGREDIENTS</div>
              <div className="text-md">
                Italian Lady Finger, Mascarpone Cheese, Americano, Cocoa Powder
              </div>
            </div>
          </div>
          <div className="flex self-start px-4 py-2 bg-toromi-main text-md font-bold rounded-lg">
            <div className="flex">Price: 40K</div>
          </div>
        </section>
        <section className="flex flex-col gap-4 mb-4 font-bold">
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
        <section className="flex px-4 py-2 gap-2 bg-white/30 rounded-3xl">
          <a href="http://instagram.com/toromi.suitsu">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a href="http://threads.com/toromi.suitsu">
            <FontAwesomeIcon icon={faThreads} size="2xl" />
          </a>
        </section>
      </div>
    </>
  );
};

export default ToromiPage;
