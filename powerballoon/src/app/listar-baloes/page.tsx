"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/Spinner/Spinner";

interface Balao {
    gas: string;
    material: string;
    cabo: string;
    rastreador: number;
    cnpj: number;
}

const ListarBaloesPage: React.FC = () => {
    const [baloes, setBaloes] = useState<Balao[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] = useState<string>('');
    const [rastradorBusca, setRastreadorBusca] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const fetchBalao = async (): Promise<void> => {
            try {
                const response = await fetch('/api/baloes');
                if (!response.ok) {
                    throw new Error('Erro ao buscar balao');
                }
                const data = await response.json() as Balao[];
                console.log('Dados recebidos:', data);
                setBaloes(data);
            } catch (error: unknown) {
                console.error('Erro:', error);
                setErro('Erro ao buscar balões. Veja o console para mais detalhes.');
            } finally {
                setCarregando(false);
            }
        };

        fetchBalao();
    }, []);

    const handleDelete = async (rastreador: number): Promise<void> => {
        if (!confirm("Tem certeza que deseja excluir este Balão?")) return;
    
        try {
            const response = await fetch(`/api/baloes/${rastreador}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status === 204) {
                setBaloes(baloes.filter(balao => balao.rastreador !== rastreador));
                alert('Balão excluído com sucesso!');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro desconhecido ao excluir balão');
            }
        } catch (error: unknown) {
            // Verificar se o erro é uma instância de Error
            const errorMessage =
                error instanceof Error ? error.message : 'Erro desconhecido ao excluir balão';
    
            console.error('Erro ao excluir balão:', errorMessage);
            setErro(`Erro ao excluir balão: ${errorMessage}`);
        }
    };
    

    const handleEdit = (rastreador: number): void => {
        router.push(`/atualizar-balao?rastreador=${rastreador}`);
    };

    const filteredBaloes: Balao[] = baloes.filter(balao => typeof balao.rastreador === 'number' && !isNaN(balao.rastreador));
    
    return (
        <div className="listar-baloes-container">
            <main className="w-full">
                <h1 className="listar-titulo">Listagem de Balões</h1>
                {erro && <p className="text-blue-500">{erro}</p>}
                <input type="text"
                    placeholder="Buscar por rastreador do balão"
                    value={rastradorBusca}
                    onChange={(e) => setRastreadorBusca(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                {carregando ? (
                    <Spinner/>
                ) : (
                    <div className="overflow-x-auto w-full">
                        <table className="baloes-tabela">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Gás</th>
                                    <th className="px-4 py-2">Material</th>
                                    <th className="px-4 py-2">Cabo</th>
                                    <th className="px-4 py-2">Rastreador</th>
                                    <th className="px-4 py-2">Cnpj</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBaloes.length > 0 ? (
                                    filteredBaloes.map(balao => (
                                        <tr key={balao.rastreador}>
                                            <td className="border px-4 py-2">{balao.gas}</td>
                                            <td className="border px-4 py-2">{balao.material}</td>
                                            <td className="border px-4 py-2">{balao.cabo}</td>
                                            <td className="border px-4 py-2">{balao.rastreador}</td>
                                            <td className="border px-4 py-2">{balao.cnpj}</td>
                                            <td className="border px-4 py-2">
                                                <button onClick={() => handleEdit(balao.rastreador)} className="bg-blue-700 text-white px-3 py-1 rounded">
                                                    Editar
                                                </button>
                                                <button onClick={() => handleDelete(balao.rastreador)} className="bg-red-500 text-white px-3 py-1 rounded">
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={10} className="text-center">Nenhum balão encontrado.</td>
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

export default ListarBaloesPage;