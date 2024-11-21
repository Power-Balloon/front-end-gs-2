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
        <div className="content-wrap">
            <main>
                <h1 className="text-3xl font-bold mb-8">Cadastro de Balão</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <form onSubmit={handleSubmit} className="cadastro-balao-form">
                <label>
                        Gás:
                        <input type="text" value={gas} onChange={(e) => setGas(e.target.value)} required />
                    </label>
                    <label>
                        Material:
                        <input type="text" value={matBalao} onChange={(e) => setMatBalao(e.target.value)} required />
                    </label>
                    <label>
                        Cabo:
                        <input type="text" value={caboBalao} onChange={(e) => setCaboBalao(e.target.value)} required />
                    </label>
                    <label>
                        Rastreador do Balão:
                        <input type="number" value={cnpj} onChange={(e) => setRastreadorBalao(parseInt(e.target.value))} required />
                    </label>
                    <label>
                        CNPJ:
                        <input type="number" value={cnpj} onChange={(e) => setCnpj(parseInt(e.target.value))} required />
                    </label>
                    <button type="submit">Cadastrar Balão</button>
                </form>
                {carregando && <Spinner />}
            </main>
        </div>
    );
};

export default CadastrarBalaoPage;
