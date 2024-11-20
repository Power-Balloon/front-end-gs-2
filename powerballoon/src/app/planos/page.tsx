import React from 'react';

const Planos: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                    <div className="card-title bg-indigo-700 p-6 text-center">
                        <h2 className="text-3xl font-semibold">Basic</h2>
                        <p className="text-xl mt-2">
                            <i className="fa fa-rupee"></i> R$ 99,00/mês
                        </p>
                    </div>
                    <div className="card-content p-6">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                1 PowerBalloon
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                50 painéis solares por Balão
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-times-circle mr-2 text-red-500"></i>
                                Visualização de localidade do seu Balão
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-times-circle mr-2 text-red-500"></i>
                                Manutenção de Balão
                            </li>
                        </ul>
                        <button className="w-full mt-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                            <a href="#">Assine Aqui</a>
                        </button>
                    </div>
                </div>

                <div className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                    <div className="card-title bg-indigo-700 p-6 text-center">
                        <h2 className="text-3xl font-semibold">Standard</h2>
                        <p className="text-xl mt-2">
                            <i className="fa fa-rupee"></i> R$ 199,00/mês
                        </p>
                    </div>
                    <div className="card-content p-6">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                3 PowerBallons
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                80 painéis solares por Balão
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                Cadastrar funcionários para gerenciar
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-times-circle mr-2 text-red-500"></i>
                                Visualização de localidade do seu Balão
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-times-circle mr-2 text-red-500"></i>
                                Manutenção de Balão
                            </li>
                        </ul>
                        <button className="w-full mt-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                            <a href="#">Assine Aqui</a>
                        </button>
                    </div>
                </div>

                <div className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                    <div className="card-title bg-indigo-700 p-6 text-center">
                        <h2 className="text-3xl font-semibold">Premium</h2>
                        <p className="text-xl mt-2">
                            <i className="fa fa-rupee"></i> R$ 299,00/mês
                        </p>
                    </div>
                    <div className="card-content p-6">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                5 PowerBallons
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                200 painéis solares por Balão
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-check-circle mr-2 text-green-500"></i>
                                Cadastrar funcionários para gerenciar
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-times-circle mr-2 text-red-500"></i>
                                Visualização de localidade do seu Balão
                            </li>
                            <li className="flex items-center">
                                <i className="fa fa-times-circle mr-2 text-red-500"></i>
                                Manutenção de Balão
                            </li>
                        </ul>
                        <button className="w-full mt-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                            <a href="#">Assine Aqui</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Planos;
