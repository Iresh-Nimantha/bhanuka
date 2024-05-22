// src/NeonBorder.js
import React from "react";

const NeonBorder = () => {
  return (
    <div className="relative p-6 bg-gray-800 text-white text-center rounded-lg">
      <h1 className="text-4xl font-bold">Neon Border with Tailwind CSS</h1>
      <p className="mt-4">
        This is an example of a neon border effect using Tailwind CSS.
      </p>
      <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none animate-neon-border"></div>
    </div>
  );
};

export default NeonBorder;
