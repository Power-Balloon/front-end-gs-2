"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "../../components/Spinner/Spinner";

interface Balao {
  gas: string;
  matBalao: string;
  caboBalao: string;
  rastreadorBalao: number;
  cnpj: number;
}

const AtualizarBalaoPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cnpj = searchParams.get("cnpj");
  const [balao, setBalao] = useState<Partial<Balao>>({});
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (cnpj) {
      const fetchBalao = async () => {
        try {
          const response = await fetch(`/api/baloes/${cnpj}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar balão");
          }
          const data: Balao = await response.json();
          setBalao(data);
        } catch (error) {
          console.error("Erro:", error);
          setErro("Erro ao buscar balão. Veja o console para mais detalhes.");
        } finally {
          setCarregando(false);
        }
      };

      fetchBalao();
    }
  }, [cnpj]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    try {
      const response = await fetch(`/api/baloes/${cnpj}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(balao),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErro(errorData.message || "Erro na requisição");
        return;
      }

      alert("Balão atualizado com sucesso!");
      router.push("/listar-baloes");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro:", error.message);
        setErro(error.message);
      } else {
        console.error("Erro desconhecido:", error);
        setErro("Erro desconhecido ao atualizar o balão.");
      }
    } finally {
      setCarregando(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBalao((prevBalao) => ({
      ...prevBalao,
      [name]: name === "rastreadorBalao" || name === "cnpj" ? parseInt(value) : value, // Converte rastreadorBalao e cnpj para número
    }));
  };

  if (carregando) {
    return <Spinner />;
  }

  return (
    <div className="content-wrap">
      <main>
        <h1 className="text-3xl font-bold mb-8">Atualizar Balão</h1>
        {erro && <p className="text-red-500">{erro}</p>}
        <form onSubmit={handleSubmit} className="cadastro-balao-form">
          <label>
            Gás:
            <input
              type="text"
              value={balao.gas || ""}
              name="gas"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Material do Balão:
            <input
              type="text"
              value={balao.matBalao || ""}
              name="matBalao"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Cabo do Balão:
            <input
              type="text"
              value={balao.caboBalao || ""}
              name="caboBalao"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Rastreador do Balão:
            <input
              type="number"
              value={balao.rastreadorBalao || ""}
              name="rastreadorBalao"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            CNPJ:
            <input
              type="number"
              value={balao.cnpj || ""}
              name="cnpj"
              onChange={handleChange}
              required
              readOnly
            />
          </label>
          <button type="submit">Atualizar Balão</button>
        </form>
      </main>
    </div>
  );
};

export default AtualizarBalaoPage;
