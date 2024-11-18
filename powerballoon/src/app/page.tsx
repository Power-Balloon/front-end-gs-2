import React from "react";
import Image from "next/image";
import background from "../img/balao.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={background} 
          alt="Balão Estratosférico" 
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Bem-vindo ao Power Balloon!</h1>
        <p className="text-lg drop-shadow-lg">
          Estamos lançando balões estratosféricos para explorar a energia elétrica!
        </p>
      </div>
    </div>
  );
}