"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/Spinner/Spinner";
import Link from "next/link";
 
interface Empresa {
    cnpj: number;
    nomEmpre: string;
    cepEmpre: number;
    planoEmpre: string;
}
 
const ListarEmpresasPage: React.FC = () => {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] = useState<string>('');
    const [cnpjBusca, setCnpjBusca] = useState<string>('');
    const router = useRouter();
 
    useEffect(() => {
        const fetchEmpresa = async (): Promise<void> => {
            try {
                const response = await fetch('/api/empresas');
                if (!response.ok) {
                    throw new Error('Erro ao buscar empresas');
                }
                const data = await response.json() as Empresa[];
                console.log('Dados recebidos:', data);
                setEmpresas(data);
            } catch (error: unknown) {
                console.error('Erro:', error);
                setErro('Erro ao buscar empresas. Veja o console para mais detalhes.');
            } finally {
                setCarregando(false);
            }
        };
 
        fetchEmpresa();
    }, []);
 
    const handleDelete = async (cnpj: number): Promise<void> => {
        if (!confirm("Tem certeza que deseja excluir esta empresa?")) return;
   
        try {
            const response = await fetch(`/api/empresas/${cnpj}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
   
            if (response.status === 204) {
                setEmpresas(empresas.filter(empresa => empresa.cnpj !== cnpj));
                alert('Empresa excluída com sucesso!');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro desconhecido ao excluir Empresa');
            }
        } catch (error: unknown) {
            const errorMessage =
                error instanceof Error ? error.message : 'Erro desconhecido ao excluir Empresa';
   
            console.error('Erro ao excluir Empresa:', errorMessage);
            setErro(`Erro ao excluir Empresa: ${errorMessage}`);
        }
    };
 
    const handleEdit = (cnpj: number): void => {
        router.push(`/atualizar-empresa?cnpj=${cnpj}`);
    };
 
    const filteredEmpresas: Empresa[] = empresas.filter(empresa => typeof empresa.cnpj === 'number' && !isNaN(empresa.cnpj));
   
    return (
        <div className="listar-empresas-container">
            <main className="w-full">
                <h1 className="listar-titulo text-3xl font-bold">Listagem de Empresas</h1>
                {erro && <p className="text-blue-500 text-2xl mb-4">{erro}</p>}
                <input
                    type="text"
                    placeholder="Buscar por CNPJ da empresa"
                    value={cnpjBusca}
                    onChange={(e) => setCnpjBusca(e.target.value)}
                    className="mb-4 p-2 w-80 border-gray-300 rounded "
                />
                {carregando ? (
                    <Spinner/>
                ) : (
                    <div className="overflow-x-auto w-full">
                        <table className="Empresas-tabela">
                            <thead>
                                <tr className="table-auto">
                                    <th className="px-8 py-2">CNPJ</th>
                                    <th className="px-8 py-2">Nome</th>
                                    <th className="px-8 py-2">CEP</th>
                                    <th className="px-8 py-2">Plano</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmpresas.length > 0 ? (
                                    filteredEmpresas.map(empresa => (
                                        <tr key={empresa.cnpj}>
                                            <td className="border px-4 py-2">{empresa.cnpj}</td>
                                            <td className="border px-4 py-2">{empresa.nomEmpre}</td>
                                            <td className="border px-4 py-2">{empresa.cepEmpre}</td>
                                            <td className="border px-4 py-2">{empresa.planoEmpre}</td>
                                            <td className="border px-4 py-2">
                                                <button onClick={() => handleEdit(empresa.cnpj)} className="bg-blue-700 text-white px-3 py-1 rounded">
                                                    Editar
                                                </button>
                                                <button onClick={() => handleDelete(empresa.cnpj)} className="bg-red-500 text-white px-3 py-1 rounded">
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={10} className="text-center space-x-10 space-y-10">Nenhuma empresa encontrada.</td>
                                        <Link href="/cadastrar-empresas" className="py-2 px-2 bg-indigo-600 text-white rounded-sm hover:bg-indigo-700">Cadastre sua Empresa</Link>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};
 
export default ListarEmpresasPage;
 