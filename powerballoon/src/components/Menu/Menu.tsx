import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <nav>
      <ul className="flex space-x-6 text-white">
        <li>
          <Link href="/" className="hover:text-light-blue">Home</Link>
        </li>
        <li>
          <Link href="/planos" className="hover:text-light-blue">Planos</Link>
        </li>
        <li>
          <Link href="/funcionalidades" className="hover:text-light-blue">Funcionalidades</Link>
        </li>
        <li>
          <Link href="/sobre-nos" className="hover:text-light-blue">Sobre Nós</Link>
        </li>
      </ul>
    </nav>
  );
}