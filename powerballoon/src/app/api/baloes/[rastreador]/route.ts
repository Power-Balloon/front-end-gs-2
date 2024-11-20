import { NextRequest, NextResponse } from 'next/server';

interface Balao {
    gas: string;
    material: string;
    cabo: string;
    rastreador: number;
    cnpj: number;
}

const API_URL = 'http://localhost:3000/api/baloes';

export async function GET(req: NextRequest, { params }: { params: { rastreador: number } }) {
  try {
    console.log(`Fetching Balloon with tracker ${params.rastreador} from API...`);
    const response = await fetch(`${API_URL}/${params.rastreador}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar balao');
    }
    const balao = await response.json() as Balao;
    console.log('Balloon received:', balao);
    return NextResponse.json(balao, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar balão:', error);
    return NextResponse.json({ error: 'Erro ao buscar balão' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { rastreador: number } }) {
  try {
    const body = await req.json();
    const updatedBalao: Balao = {
        gas: body.gas,
        material: body.material,
        cabo: body.cabo,
        rastreador: body.rastreador,
        cnpj: body.cnpj
    };
    console.log('Atualizando Balão:', updatedBalao);
    const response = await fetch(`${API_URL}/${params.rastreador}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBalao)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao atualizar balão: ${errorText}`);
    }
    const balao = await response.json();
    console.log('Balão atualizado:', balao);
    return NextResponse.json(balao, { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar balão:', error);
    return NextResponse.json({ error: 'Erro ao atualizar balão' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { rastreador: number } }) {
  try {
    console.log(`Deleting vehicle with placa ${params.rastreador} from API...`);
    const response = await fetch(`${API_URL}/${params.rastreador}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });

    if (response.status !== 204) {
      const errorText = await response.text();
      throw new Error(`Erro ao deletar veículo: ${errorText}`);
    }
    
    return new Response(null, { status: 204 });
  } catch (error: unknown) {
      const errorMessage =
          error instanceof Error ? error.message : 'Erro desconhecido ao deletar balão';
  
      console.error('Erro ao deletar balão:', errorMessage);
  
      return NextResponse.json(
          { error: errorMessage },
          { status: 500 }
      );
  }
}  