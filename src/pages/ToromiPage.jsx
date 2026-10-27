import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";
import toromiBG from "../assets/Toromi BG.svg";
import tiramisu from "../assets/Tiramisu.svg";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ToromiPage = () => {
  var menuOption = "px-14 py-2 text-lg outline-1 rounded-md";

  return (
    <>
      <div
        style={{ backgroundImage: `url(${toromiBG})` }}
        className="flex flex-col w-full h-screen p-8 justify-center items-center bg-cover bg-center text-main outline-main overflow-y-auto"
      >
        <section className="flex flex-col w-full h-auto px-8 py-4 justify-center items-center mb-8 bg-toromi-main/60 rounded-2xl">
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
          <div className="flex self-start px-4 py-2 bg-toromi-main text-lg font-bold rounded-lg">
            <div className="flex">Price: 40K</div>
          </div>
        </section>
        <section className="flex flex-col gap-4 mb-8 font-bold">
          <button className={`${menuOption}`} onClick={() => alert("1")}>
            Order
          </button>
          <button className={`${menuOption}`} onClick={() => alert("2")}>
            Event Package
          </button>
        </section>
        <section className="flex p-2 gap-2 bg-white/30 rounded-xl">
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
