import React from "react";

const OdeaPage = () => {
  var menuOption =
    "px-6 py-4 text-odea-text text-lg font-semibold outline-2 outline-dotted outline-odea-main rounded-full";
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-evenly items-center bg-background">
        <section className="flex flex-col gap-8">
          <button className={`${menuOption}`} onClick={() => alert("1")}>
            MENU & PRICELIST
          </button>
          <button className={`${menuOption}`} onClick={() => alert("2")}>
            EVENT PACKAGE
          </button>
          <button className={`${menuOption}`} onClick={() => alert("3")}>
            SLOW BAR RESERVATION
          </button>
        </section>
        <section></section>
        <section></section>
        <button></button>
      </div>
    </>
  );
};

export default OdeaPage;
