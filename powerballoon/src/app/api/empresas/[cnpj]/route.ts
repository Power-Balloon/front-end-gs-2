import { NextRequest, NextResponse } from 'next/server';

interface Empresa {
    cnpj: number;
    nome: string;
    cep: number;
    plano: string;
}

const API_URL = 'http://localhost:3000/api/empresas';

export async function GET(req: NextRequest, { params }: { params: { cnpj: number } }) {
  try {
    console.log(`Fetching Empresa with cnpj ${params.cnpj} from API...`);
    const response = await fetch(`${API_URL}/${params.cnpj}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar empresa');
    }
    const empresa = await response.json() as Empresa;
    console.log('Empresa received:', empresa);
    return NextResponse.json(empresa, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar empresas:', error);
    return NextResponse.json({ error: 'Erro ao buscar empresas' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { cnpj: number } }) {
  try {
    const body = await req.json();
    const updatedEmpresa: Empresa = {
        cnpj: body.cnpj,
        nome: body.nome,
        cep: body.cep,
        plano: body.plano
    };
    console.log('Atualizando Empresa:', updatedEmpresa);
    const response = await fetch(`${API_URL}/${params.cnpj}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedEmpresa)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao atualizar Empresa: ${errorText}`);
    }
    const balao = await response.json();
    console.log('Empresa atualizado:', balao);
    return NextResponse.json(balao, { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar empresa:', error);
    return NextResponse.json({ error: 'Erro ao atualizar empresa' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { cnpj: number } }) {
  try {
    console.log(`Deleting empresa with cnpj ${params.cnpj} from API...`);
    const response = await fetch(`${API_URL}/${params.cnpj}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });

    if (response.status !== 204) {
      const errorText = await response.text();
      throw new Error(`Erro ao deletar empresa: ${errorText}`);
    }
    
    return new Response(null, { status: 204 });
  } catch (error: unknown) {
      const errorMessage =
          error instanceof Error ? error.message : 'Erro desconhecido ao deletar empresa';
  
      console.error('Erro ao deletar empresa:', errorMessage);
  
      return NextResponse.json(
          { error: errorMessage },
          { status: 500 }
      );
  }
}  