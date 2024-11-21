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
            console.log('Enviando veículo:', empresa);
            const response = await fetch('/api/baloes', {
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
        <div className="content-wrap">
            <main>
                <h1 className="text-3xl font-bold mb-8">Cadastro de Empresa</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <form onSubmit={handleSubmit} className="cadastro-veiculo-form">
                    <label>
                        CNPJ:
                        <input type="number" value={cnpj} onChange={(e) => setCnpj(parseInt(e.target.value))} required />
                    </label>
                    <label>
                        Nome da Empresa:
                        <input type="text" value={nomEmpre} onChange={(e) => setNomEmpre(e.target.value)} required />
                    </label>
                    <label>
                        Cep:
                        <input type="number" value={cepEmpre} onChange={(e) => setCepEmpre(parseInt(e.target.value))} required />
                    </label>
                    <label>
                        Plano da Empresa:
                        <input type="text" value={planoEmpre} onChange={(e) => setPlanoEmpre(e.target.value)} required />
                    </label>
                    <label>
                        CNPJ:
                        <input type="number" value={cnpj} onChange={(e) => setCnpj(parseInt(e.target.value))} required />
                    </label>
                    <button type="submit">Cadastrar Empresa</button>
                </form>
                {carregando && <Spinner />}
            </main>
        </div>
    );
};

export default CadastrarEmpresaPage;
