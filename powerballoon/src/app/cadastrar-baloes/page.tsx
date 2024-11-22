"use client";
import React, { useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const CadastrarBalaoPage: React.FC = () => {
    const [gas, setGas] = useState('');
    const [matBalao, setMatBalao] = useState('');
    const [caboBalao, setCaboBalao] = useState('');
    const [rastreadorBalao, setRastreadorBalao] = useState(0)
    const [cnpj, setCnpj] = useState(0);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCarregando(true);
        setErro('');

        const balao = {
        gas,
        matBalao,
        caboBalao,
        rastreadorBalao,
        cnpj
        };

        try {
            console.log('Enviando balão:', balao);
            const response = await fetch('/api/baloes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(balao)
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || 'Erro na requisição');
                return;
            }

            alert('Balão cadastrado com sucesso!');
        } catch (error: unknown) {
            const errorMessage =
                error instanceof Error ? error.message : 'Ocorreu um erro desconhecido';
        
            console.error('Erro:', errorMessage);
            alert(errorMessage);
        } finally {
            setCarregando(false);
        }};

    return (
        <div className="bg-gray-500 p-10 max-w-max text-center bg-opacity-80 text-black flex flex-col items-center justify-center gap-4 mt-4">
            <main>
                <h1 className="text-3xl font-bold mb-5">Cadastro de Balão</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <form onSubmit={handleSubmit} className="cadastro-balao-form">
                <label className='block mb-4 text-left w-full'>
                        Gás:
                        <input className='w-full p-2 mt-2 border' type="text" value={gas} onChange={(e) => setGas(e.target.value)} required />
                    </label>
                    <label className='block mb-4 text-left w-full'>
                        Material:
                        <input className='w-full p-2 mt-2 border' type="text" value={matBalao} onChange={(e) => setMatBalao(e.target.value)} required />
                    </label>
                    <label className='block mb-4 text-left w-full'>
                        Cabo:
                        <input className='w-full p-2 mt-2 border' type="text" value={caboBalao} onChange={(e) => setCaboBalao(e.target.value)} required />
                    </label>
                    <label className='block mb-4 text-left w-full'>
                        Rastreador do Balão:
                        <input className='w-full p-2 mt-2 border' type="number" value={cnpj} onChange={(e) => setRastreadorBalao(parseInt(e.target.value))} required />
                    </label>
                    <label className='block mb-4 text-left w-full'>
                        CNPJ:
                        <input className='w-full p-2 mt-2 border' type="number" value={cnpj} onChange={(e) => setCnpj(parseInt(e.target.value))} required />
                    </label>
                    <button className="py-2 px-2 bg-indigo-600 text-white rounded-sm hover:bg-indigo-700" type="submit">Cadastrar Balão</button>
                </form>
                {carregando && <Spinner />}
            </main>
        </div>
    );
};

export default CadastrarBalaoPage;
