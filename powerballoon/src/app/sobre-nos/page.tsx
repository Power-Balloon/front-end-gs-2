import React from 'react';
import Image from 'next/image';
import fotoNicolas from '../../img/nicolas.jpg';
import fotoCaio from '../../img/caio.jpg';
import fotoBruno from '../../img/bruno.jpg';

const SobreNosPage: React.FC = () => {
    return (
        <div className="sobre-nos-container">
            <div className="sobre-nos-content"></div>
            <h1>Sobre Nós</h1>
            <h2>Bem-vindo à PowerBalloon</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet iusto minima odit, voluptatem cum amet ab, blanditiis adipisci consectetur reprehenderit a, explicabo pariatur facere eligendi in nisi magni deserunt.
            </p>
            <div className="min-h-screen flex flex-col items-start justify-start bg-black p-4">
                <div className="bg-slate-400 shadow-md rounded p-6 max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold mb-4">Criadores</h1>
                    <div className="mb-4 flex flex-col items-start">
                        <Image src={fotoNicolas} alt="Criador 1" width={150} height={150} className="rounded-full mb-2"/>
                        <p className="font-semibold">Nome: Nicolas Guinante</p>
                        <p>RM: 557844</p>
                        <p>Turma: 1TDSPO</p>
                        <a href="https://www.linkedin.com/in/nicolas-guinante-036407309/">Linkedin</a>
                        <a href="https://github.com/NicolasGCADS">Github</a>
                    </div>
                    <div className="mb-4 flex flex-col items-start">
                        <Image src={fotoCaio} alt="Criador 2" width={150} height={150} className="rounded-full mb-2"/>
                        <p className="font-semibold">Nome: Caio Nyimi</p>
                        <p>RM: 556331</p>
                        <p>Turma: 1TDSPO</p>
                        <a href="https://www.linkedin.com/in/caio-cesar-rosa-nyimi-2588a32b6">Linkedin</a>
                        <a href="https://github.com/CaiocrNyimi">Github</a>
                    </div>
                    <div className="mb-4 flex flex-col items-start">
                        <Image src={fotoBruno} alt="Criador 3" width={150} height={150} className="rounded-full mb-2"/>
                        <p className="font-semibold">Nome: Bruno Centurion</p>
                        <p>RM: 556531</p>
                        <p>Turma: 1TDSPO</p>
                        <a href="https://br.linkedin.com/in/bruno-centurion-3804a8301">Linkedin</a>
                        <a href="https://github.com/brunocenturion">Github</a>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default SobreNosPage;