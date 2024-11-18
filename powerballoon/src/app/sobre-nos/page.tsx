import React from 'react';
import Image from 'next/image';
import fotoNicolas from '../../img/nicolas.jpg';
import fotoCaio from '../../img/caio.jpg';
import fotoBruno from '../../img/bruno.jpg';

const SobreNosPage: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-6">Sobre Nós</h1>
                <h2 className="text-2xl font-medium text-center text-gray-400 mb-8">
                    Bem-vindo à PowerBalloon
                </h2>
                <p className="text-lg text-center text-gray-300 mb-12">
                    Somos um grupo de entusiastas da tecnologia, com a missão de revolucionar a forma como a energia solar
                    é gerada, aproveitando o potencial dos balões estratosféricos. Abaixo, você pode conhecer os criadores
                    do PowerBalloon.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-72 text-center">
                        <Image
                            src={fotoNicolas}
                            alt="Criador 1"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Nicolas Guinante</h3>
                        <p className="text-sm text-gray-400 mb-2">RM: 557844</p>
                        <p className="text-sm text-gray-400 mb-4">Turma: 1TDSPO</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/nicolas-guinante-036407309/"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/NicolasGCADS"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-72 text-center">
                        <Image
                            src={fotoCaio}
                            alt="Criador 2"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Caio Nyimi</h3>
                        <p className="text-sm text-gray-400 mb-2">RM: 556331</p>
                        <p className="text-sm text-gray-400 mb-4">Turma: 1TDSPO</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/caio-cesar-rosa-nyimi-2588a32b6"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/CaiocrNyimi"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-72 text-center">
                        <Image
                            src={fotoBruno}
                            alt="Criador 3"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Bruno Centurion</h3>
                        <p className="text-sm text-gray-400 mb-2">RM: 556531</p>
                        <p className="text-sm text-gray-400 mb-4">Turma: 1TDSPO</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://br.linkedin.com/in/bruno-centurion-3804a8301"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/brunocenturion"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SobreNosPage;