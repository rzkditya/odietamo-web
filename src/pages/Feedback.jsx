import React from "react";
import odeaBG from "../assets/Odea BG.svg";
import toromiBG from "../assets/Toromi BG.svg";

const Feedback = () => {
  const inputStyle =
    "w-64 p-2 text-white bg-black/40 border border-white rounded-xl mb-2 focus:ring-2 focus:ring-main focus:ring-offset-2 focus:ring-offset-black/40";

  return (
    <div
      style={{
        backgroundImage: `url(${odeaBG})`,
      }}
      className="flex flex-col justify-center items-center bg-cover bg-center w-full min-h-dvh gap-4 overflow-x-clip"
    >
      <form action="">
        <fieldset className="flex flex-col justify-items text-white gap-2 p-4 bg-black/40 rounded-lg">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputStyle}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputStyle}
          />

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            required
            className={inputStyle}
          ></textarea>

          <button
            type="submit"
            className="self-center w-40 bg-black/40 text-white py-2 px-4 rounded-lg hover:bg-main/80 transition-colors"
          >
            SEND
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Feedback;
