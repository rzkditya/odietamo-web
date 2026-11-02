import React from "react";
import odeaBG from "../assets/Odea BG.svg";
import toromiBG from "../assets/Toromi BG.svg";

const Feedback = () => {
  const inputStyle =
    "w-74 p-2 text-white border border-white rounded-3xl mb-2 focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-black/40";

  return (
    <div
      style={{
        backgroundImage: `url(${odeaBG})`,
      }}
      className="flex flex-col justify-center items-center bg-cover bg-center w-full h-dvh gap-16 overflow-x-clip"
    >
      <h1 className="text-4xl font-bold text-white">Feedback</h1>

      <form action="" className="flex gap-4 w-full justify-center items-center">
        <fieldset className="flex flex-col w-full justify-center items-center text-white gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              required
              className={inputStyle}
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-center w-40 text-white py-2 px-4 rounded-lg border border-white hover:bg-main/80 transition-colors"
          >
            SEND
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Feedback;
