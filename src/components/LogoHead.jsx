import React from "react";
import { TypeAnimation } from "react-type-animation";
import logoImg from "../assets/BANU LOGO2 (2).png";

const LogoHead = () => {
  return (
    <div className="flex flex-col shadow-2xl border-2 border-gray-300 rounded-3xl w-3/5 h-2/5 items-center justify-center m-auto py-16 top-16 mt-20 mb-16 bg-white">
      <div className="bg-blur-sm"></div>
      <img
        src={logoImg}
        alt="Banu Logo"
        className="w-3/5 sm:w-2/5 md:w-2/5 mb-4"
      />
      <div className="text-center">
        <h1 className="text-5xl md:text-4xl lg:text-3xl mb-2 font-bold">
          Banu
        </h1>
        <h3 className="text-xl mb-2 font-medium">design</h3>
        <h3 className="text-lg">
          <TypeAnimation
            sequence={[
              "We Make Your Dreams!",
              2000,
              "We Make Your Design!",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.2rem", // Adjust as needed
              display: "inline-block",
              fontFamily: "mono",
            }}
            repeat={Infinity}
          />
        </h3>
      </div>
    </div>
  );
};
export default LogoHead;
