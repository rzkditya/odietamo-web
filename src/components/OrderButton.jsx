import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderButton = () => {
  return (
    <button className="flex justify-center items-center p-6 bg-odea-main text-white text-2xl font-semibold rounded-full hover:dark:bg-odea-main/80 transition duration-300 ease-in-out">
Order <br /> Now <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="ml-4" />
    </button>
  );
};

export default OrderButton;
