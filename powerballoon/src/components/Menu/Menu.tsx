import Link from 'next/link'
import React from 'react'

export default function Menu(){
    return(
        <nav>
            <ul>
                <li> <Link href="/">Home</Link></li>
                <li> <Link href="/planos">Planos</Link></li>
                <li> <Link href="/">Funcionalidades</Link></li>
                <li> <Link href="/sobre-nos">Sobre Nós</Link></li>
            </ul>
        </nav>
    )
}