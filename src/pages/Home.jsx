import odeaIcon from "../assets/Odea Icon.svg";
import toromiIcon from "../assets/Toromi Icon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  var layout = "flex justify-evenly items-center w-64 h-64 p-4 focus:scale-125";

  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 gap-8 bg-background w-full min-h-dvh">
        <Link to="/odea">
          <div id="Odi Et Amo Home" className={`${layout}`}>
            <img src={odeaIcon} alt="" className="aspect-4/5 object-contain" />
          </div>
        </Link>
        <div className="text-lg text-odea-text italic">Choose your mood ♡</div>
        <Link to="/toromi">
          <div id="Toromi Home" className={`${layout} `}>
            <img
              src={toromiIcon}
              alt=""
              className="aspect-4/5 object-contain"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
