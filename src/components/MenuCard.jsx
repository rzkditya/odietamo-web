import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tiramisu from "../assets/Tiramisu.svg";

function Card({ item }) {
  return (
    <section className="flex flex-col w-full h-128 p-8 py-4 justify-baseline items-center mt-8 mb-4 bg-odea-main/40 rounded-2xl">
      <div className="flex justify-center items-center w-40 object-contain">
        <img src={tiramisu} alt="Tiramisu Image" />
      </div>

      <div className="flex flex-col w-full justify-start items-start font-bold tracking-tight gap-3 mb-4">
        <div className="flex flex-col mb-2 w-full">
          <div className="flex justify-between items-center">
            <div className="text-[clamp(1.125rem,4vw,1.5rem)]">{item.name}</div>
            <div>
              <FontAwesomeIcon icon={faHeart} size="xl" />
            </div>
          </div>
          <div className="flex self-start text-[clamp(0.875rem,4vw,1.25rem)]">
            {item.desc}
          </div>
        </div>

        <div>
          <div className="text-xs">CREAMINESS</div>
          <div className="text-[clamp(0.875rem,4vw,1.25rem)]">
            {" "}
            {item.creaminess}
          </div>
        </div>
        <div>
          <div className="text-xs">COFFEE INTENSITY</div>
          <div className="text-[clamp(0.875rem,4vw,1.25rem)]">
            {" "}
            {item.intensity}
          </div>
        </div>
        <div>
          <div className="text-xs ">INGREDIENTS</div>
          <div className="text-[clamp(0.875rem,4vw,1.25rem)]">
            {" "}
            {item.ingredients}
          </div>
        </div>
      </div>
      <div className="flex self-start gap-4">
        <div className="flex px-4 py-2 bg-odea-main/60 text-sm font-bold rounded-lg">
          1L: {item.priceL}
        </div>
        <div className="flex px-4 py-2 bg-odea-main/60 text-sm font-bold rounded-lg">
          250ml: {item.priceS}
        </div>
      </div>
    </section>
  );
}

export default Card;
