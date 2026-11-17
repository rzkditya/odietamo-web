import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tiramisu from "../assets/Toromi/Tiramisu.svg";

function Card({ type, item }) {
  if (type === "toromi") {
    return (
      <section className="flex flex-col w-full md:w-1/3 h-fit px-6 pb-4 justify-baseline items-center mt-8 mb-2 bg-toromi-main/40 rounded-2xl">
        <div className="flex justify-center items-center w-40 md:w-80 object-contain mb-2">
          <img src={item.image} alt="Tiramisu Image" />
        </div>

        <div className="flex flex-col w-full justify-start items-start tracking-tight mb-2">
          <div className="flex flex-col mb-4 w-full">
            <div className="flex justify-between items-center">
              <div className="text-[clamp(1.0rem,5.5vw,2rem)] font-bold">
                {item.name}
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} size="xl" />
              </div>
            </div>
            <span className="text-sm font-bold  ">{item.size}</span>
            <div className="flex text-xs">{item.desc}</div>
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <div className="text-xs">SWEETNESS</div>
              <div className="text-xs font-bold"> {item.sweetness}</div>
            </div>
            <div>
              <div className="text-xs">COFFEE INTENSITY</div>
              <div className="text-xs font-bold"> {item.intensity}</div>
            </div>
            <div>
              <div className="text-xs ">INGREDIENTS</div>
              <div className="text-xs font-bold"> {item.ingredients}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center self-start gap-2">
          Price: <span className="text-md font-semibold">Rp. {item.price}</span>
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col w-full md:w-1/3 min-h-110 px-6 pb-4 justify-baseline items-center mt-8 mb-2 bg-odea-main/40 rounded-2xl">
        <div className="flex justify-center items-center w-35 object-contain mb-2">
          <img src={tiramisu} alt="Tiramisu Image" />
        </div>

        <div className="flex flex-col w-full justify-start items-start tracking-tight mb-2">
          <div className="flex flex-col mb-4 w-full">
            <div className="flex justify-between items-center">
              <div className="text-[clamp(1.0rem,5.5vw,2rem)] font-bold">
                {item.name}
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} size="xl" />
              </div>
            </div>
            <div className="flex text-xs/snug">{item.desc}</div>
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <div className="text-xs">CREAMINESS</div>
              <div className="text-xs md:text-base font-bold">
                {item.creaminess}
              </div>
            </div>
            <div>
              <div className="text-xs">SWEETNESS</div>
              <div className="text-xs md:text-base font-bold">
                {item.sweetness}
              </div>
            </div>
            <div>
              <div className="text-xs">INTENSITY</div>
              <div className="text-xs md:text-base font-bold">
                {item.intensity}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start self-start font">
          Price:
          <div className="flex gap-2">
            <span className="flex p-2 bg-black/25 text-xs md:text-base gap-2 rounded-lg">
              250ml: <span className="font-bold"> Rp. {item.priceS}</span>
            </span>
            <span className="flex p-2 bg-black/25 text-xs md:text-base gap-2 rounded-lg">
              1L: <span className="font-bold">Rp. {item.priceL}</span>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
export default Card;
