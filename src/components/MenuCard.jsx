import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ item }) {
  return (
    <section className="flex flex-col w-full h-auto p-8 py-4 justify-center items-center mt-8 mb-4 bg-odea-main/60 rounded-2xl">
      <div className="flex justify-center items-center w-42">
        <img src="" alt="Tiramisu Image" />
      </div>

      <div className="flex flex-col font-bold tracking-tight gap-3 mb-4">
        <div className="flex flex-col mb-2">
          <div className="flex justify-between items-end">
            <div className="text-2xl">{item.name}</div>
            <div>
              <FontAwesomeIcon icon={faHeart} size="xl" />
            </div>
          </div>
          <div className="flex self-start text-sm">{item.desc}</div>
        </div>

        <div>
          <div className="text-xs">CREAMINESS</div>
          <div className="text-md"> {item.creaminess}</div>
        </div>
        <div>
          <div className="text-xs">COFFEE INTENSITY</div>
          <div className="text-md"> {item.intensity}</div>
        </div>
        <div>
          <div className="text-xs ">INGREDIENTS</div>
          <div className="text-md"> {item.ingredients}</div>
        </div>
      </div>
      <div className="flex self-start gap-4">
        <div className="flex px-4 py-2 bg-odea-main text-sm font-bold rounded-lg">
          1L: {item.priceL}
        </div>
        <div className="flex px-4 py-2 bg-odea-main text-sm font-bold rounded-lg">
          250ml: {item.priceS}
        </div>
      </div>
    </section>
  );
}

export default Card;
