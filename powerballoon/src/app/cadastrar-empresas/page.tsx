"use client";
import React, { useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const CadastrarEmpresaPage: React.FC = () => {
    const [cnpj, setCnpj] = useState(0);
    const [nomEmpre, setNomEmpre] = useState('');
    const [cepEmpre, setCepEmpre] = useState(0);
    const [planoEmpre, setPlanoEmpre] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCarregando(true);
        setErro('');

        const empresa = {
        cnpj,
        nomEmpre,
        cepEmpre,
        planoEmpre
        };

        try {
            console.log('Enviando empresa:', empresa);
            const response = await fetch('/api/empresa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(empresa)
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || 'Erro na requisição');
                return;
            }

            alert('Empresa cadastrado com sucesso!');
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
                <h1 className="text-3xl font-bold mb-5">Cadastro de Empresa</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <form onSubmit={handleSubmit} className="cadastro-veiculo-form">
                    <label className='block mb-4 text-left w-full'>
                        CNPJ:
                        <input className='w-full p-2 mt-2 border' type="number" value={cnpj} onChange={(e) => setCnpj(parseInt(e.target.value))} required />
                    </label>
                    <label className='block mb-4 text-left w-full'>
                        Nome da Empresa:
                        <input className='w-full p-2 mt-2 border' type="text" value={nomEmpre} onChange={(e) => setNomEmpre(e.target.value)} required />
                    </label>
                    <label className='block mb-4 text-left w-full'>
                        Cep:
                        <input className='w-full p-2 mt-2 border' type="number" value={cepEmpre} onChange={(e) => setCepEmpre(parseInt(e.target.value))} required />
                    </label>
                    <label className='block mb-4 text-left w-full'>
                        Plano da Empresa:
                        <input className='w-full p-2 mt-2 border' type="text" value={planoEmpre} onChange={(e) => setPlanoEmpre(e.target.value)} required />
                    </label>
                    <button className="py-2 px-2 bg-indigo-600 text-white rounded-sm hover:bg-indigo-700" type="submit">Cadastrar Empresa </button>
                </form>
                {carregando && <Spinner />}
            </main>
        </div>
    );
};

export default CadastrarEmpresaPage;
