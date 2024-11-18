import React from 'react';

const Funcionalidades: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-8 animate__animated animate__fadeIn">
                    Funcionalidades
                </h1>
                <p className="text-lg text-center text-gray-400 mb-12 max-w-4xl mx-auto">
                    A ideia do PowerBalloon foi criar balões estratosféricos com propriedades resistentes e as devidas
                    seguranças que farão a energia solar ser gerada 24 horas por dia.
                </p>

                <div className="space-y-8">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Materiais dos Balões</h2>
                        <p className="text-lg text-gray-300">
                            Polímeros avançados, como poliéster reforçado, com propriedades resistentes a temperaturas
                            extremas e radiação UV.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Gás de Flutuação</h2>
                        <p className="text-lg text-gray-300">
                            Pensamos em Gás Hélio e Hidrogênio. O Hélio é um gás inerte, seguro e não inflamável, enquanto o
                            Hidrogênio é mais eficiente, mas requer mais segurança devido à sua inflamabilidade.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Paineis Solares</h2>
                        <p className="text-lg text-gray-300">
                            Utilizamos painéis solares de filmes finos ou de perovskita por serem leves, flexíveis e altamente
                            eficientes na conversão da luz solar em eletricidade. Eles serão montados nas superfícies dos balões
                            para maior exposição solar.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Sistema de Transmissão</h2>
                        <p className="text-lg text-gray-300">
                            A energia solar é captada e convertida em micro-ondas ou ondas de rádio em alta frequência, que
                            serão convertidas de volta em eletricidade.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Receptores Terrestres</h2>
                        <p className="text-lg text-gray-300">
                            Usamos antenas receptoras de alta eficiência, que convertem as micro-ondas de volta em eletricidade
                            utilizável, armazenando-a em baterias de grande capacidade para garantir fornecimento contínuo.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Sistema de Segurança</h2>
                        <p className="text-lg text-gray-300">
                            Para qualquer risco ao balão, nossas medidas de segurança incluem:
                        </p>
                        <ul className="list-disc pl-6 text-gray-400">
                            <li><strong>Balão Meteorológico:</strong> Fica perto do PowerBalloon monitorando o clima ao redor do balão.</li>
                            <li><strong>Válvula de Alívio:</strong> Controla a descida ou ajusta a flutuabilidade do balão através da liberação de gás controlada.</li>
                            <li><strong>Manutenção e Reutilização:</strong> Inspeção, reparo e reabastecimento dos balões antes de um novo lançamento.</li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-xl text-gray-300 mt-12 max-w-4xl mx-auto">
                    O PowerBalloon busca proporcionar energia limpa e acessível para transformar sua empresa em uma fonte
                    100% solar!
                </p>
            </div>
        </div>
    );
};

export default Funcionalidades;
