import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calResult = () => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  };
  const calClear = () => {
    setDisplay("");
  };
  const calBack = () => {
    if (typeof display === "string") {
      // Handle string case
      setDisplay(display.slice(0, -1));
    } else if (Array.isArray(display)) {
      // Handle array case
      setDisplay(display.slice(0, -1));
    } else {
      console.error("display is not of a recognized type");
    }
  };

  return (
    <div className="header">
      <div className="h-screen bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600 w-full flex justify-center items-center p-3">
        <div className="card-header border-2 shadow-lg h-auto  w-full border-none bg-gradient-to-r from-cyan-500 to-blue-500 p-5 rounded-lg  md:w-1/2 xl:w-1/4 lg:w-1/2">
          <h1 className=" text-2xl text-center font-normal subpixel-antialiased mt-3 uppercase">
            {" "}
            Calculator
          </h1>
          <div className="flex justify-center mt-5">
            <div
              type="text"
              className="outline-none h-12 text-lg font-semibold py-3 px-3 text-left w-96 rounded pointer-events-none bg-slate-50"
            >
              {display}
            </div>
          </div>
          <div className="grid grid-cols-4  gap-5 m-3 my-5">
            <button className="btnStyle" onClick={() => handleClick("7")}>
              7
            </button>
            <button className="btnStyle" onClick={() => handleClick("8")}>
              8
            </button>
            <button className="btnStyle" onClick={() => handleClick("9")}>
              9
            </button>
            <button className="btnfunc" onClick={() => handleClick("+")}>
              +
            </button>
            <button className="btnStyle" onClick={() => handleClick("6")}>
              6
            </button>
            <button className="btnStyle" onClick={() => handleClick("5")}>
              5
            </button>
            <button className="btnStyle" onClick={() => handleClick("4")}>
              4
            </button>
            <button className="btnfunc" onClick={() => handleClick("-")}>
              -
            </button>
            <button className="btnStyle" onClick={() => handleClick("3")}>
              3
            </button>
            <button className="btnStyle" onClick={() => handleClick("2")}>
              2
            </button>
            <button className="btnStyle" onClick={() => handleClick("1")}>
              1
            </button>
            <button className="btnfunc" onClick={() => handleClick("/")}>
              /
            </button>
            <button
              className="btnStyle col-span-2"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button className="btnStyle" onClick={calClear}>
              C
            </button>
            <button className="btnfunc" onClick={() => handleClick("*")}>
              *
            </button>
            <button
              className="btnStyle col-span-2"
              onClick={() => calResult("=")}
            >
              =
            </button>
            <button className="btnStyle" onClick={calBack}>
              &#129028;
            </button>
            <button className="btnStyle" onClick={() => handleClick(".")}>
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
