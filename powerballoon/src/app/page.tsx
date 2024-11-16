import React from "react"
import Image from "next/image"
import background from "../img/Balao.jpg"

export default function Home() {
  return(
    <div>
      <h1>Página Principal!!!</h1>
      <Image src={background} alt="Balão Estratosférico"/>
    </div>
  )
}