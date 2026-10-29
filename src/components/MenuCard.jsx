import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tiramisu from "../assets/Tiramisu.svg";

function Card({ item }) {
  return (
    <section className="flex flex-col w-full h-105 p-6 py-2 justify-baseline items-center mt-8 mb-2 bg-odea-main/40 rounded-2xl">
      <div className="flex justify-center items-center w-34 object-contain mb-2">
        <img src={tiramisu} alt="Tiramisu Image" />
      </div>

      <div className="flex flex-col w-full justify-start items-start tracking-tight mb-2">
        <div className="flex flex-col mb-2 w-full">
          <div className="flex justify-between items-center">
            <div className="text-[clamp(1.0rem,5.5vw,2rem)] font-bold">
              {item.name}
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} size="xl" />
            </div>
          </div>
          <div className="flex text-sm">{item.desc}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <div className="text-xs">CREAMINESS</div>
            <div className="text-sm font-bold"> {item.creaminess}</div>
          </div>
          <div>
            <div className="text-xs">COFFEE INTENSITY</div>
            <div className="text-sm font-bold"> {item.intensity}</div>
          </div>
          <div>
            <div className="text-xs ">INGREDIENTS</div>
            <div className="text-sm font-bold"> {item.ingredients}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center self-start gap-2 font-semibold">
        Price:
        <div className="flex px-4 py-2 bg-odea-main/40 text-xs font-bold rounded-lg">
          1L: {item.priceL}
        </div>
        <div className="flex px-4 py-2 bg-odea-main/40 text-xs font-bold rounded-lg">
          250ml: {item.priceS}
        </div>
      </div>
    </section>
  );
}

export default Card;
