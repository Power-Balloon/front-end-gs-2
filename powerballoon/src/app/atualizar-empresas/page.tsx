"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "../../components/Spinner/Spinner";

interface Empresa {
  cnpj: string;
  nomeEmpre: string;
  cepEmpre: number;
  planoEmpre: number;
}

const AtualizarEmpresaPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cnpj = searchParams.get("cnpj");
  const [empresa, setEmpresa] = useState<Partial<Empresa>>({});
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (cnpj) {
      const fetchEmpresa = async () => {
        try {
          const response = await fetch(`/api/empresas/${cnpj}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar empresa");
          }
          const data: Empresa = await response.json();
          setEmpresa(data);
        } catch (error) {
          console.error("Erro:", error);
          setErro("Erro ao buscar empresa. Veja o console para mais detalhes.");
        } finally {
          setCarregando(false);
        }
      };

      fetchEmpresa();
    }
  }, [cnpj]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    try {
      const response = await fetch(`/api/empresas/${cnpj}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empresa),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErro(errorData.message || "Erro na requisição");
        return;
      }

      alert("Empresa atualizada com sucesso!");
      router.push("/listar-empresas");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro:", error.message);
        setErro(error.message);
      } else {
        console.error("Erro desconhecido:", error);
        setErro("Erro desconhecido ao atualizar a empresa.");
      }
    } finally {
      setCarregando(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmpresa((prevEmpresa) => ({
      ...prevEmpresa,
      [name]: name === "planoEmpre" ? parseInt(value) : value, // Converte "planoEmpre" para número
    }));
  };

  if (carregando) {
    return <Spinner />;
  }

  return (
    <div className="content-wrap">
      <main>
        <h1 className="text-3xl font-bold mb-8">Atualizar Empresa</h1>
        {erro && <p className="text-red-500">{erro}</p>}
        <form onSubmit={handleSubmit} className="cadastro-veiculo-form">
          <label>
            Cnpj:
            <input
              type="text"
              value={empresa.cnpj || ""}
              name="cnpj"
              onChange={handleChange}
              required
              readOnly
            />
          </label>
          <label>
            Nome da Empresa:
            <input
              type="text"
              value={empresa.nomeEmpre || ""}
              name="nomeEmpre"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Cep:
            <input
              type="text"
              value={empresa.cepEmpre || ""}
              name="cepEmpre"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Plano da Empresa:
            <input
              type="number"
              value={empresa.planoEmpre || ""}
              name="planoEmpre"
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Atualizar Empresa</button>
        </form>
      </main>
    </div>
  );
};

export default AtualizarEmpresaPage;