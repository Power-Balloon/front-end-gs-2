import { NextRequest, NextResponse } from 'next/server';

interface Empresa {
    cnpj: number;
    nome: string;
    cep: number;
    plano: string;
}

const API_URL = 'http://localhost:8080/api/empresas';

export async function GET() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar veículos');
    }
    const empresa = (await response.json()) as Empresa[];
    return NextResponse.json(empresa, { status: 200 });
  } catch (error) {
    const errorMessage =
    error instanceof Error ? error.message : 'Erro desconhecido ao criar balão';
    console.error('Erro ao criar balão:', errorMessage);
    
    return NextResponse.json({ error : 'Erro ao buscar balão' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newEmpresa: Empresa = {
        cnpj: body.cnpj,
        nome: body.nome,
        cep: body.cep,
        plano: body.plano
    };
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newEmpresa)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao criar empresa: ${errorText}`);
    }
    const criado = await response.json();
    return NextResponse.json(criado, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido ao criar empresa';
      console.error('Erro ao criar empresa:', errorMessage);
    
    return NextResponse.json({ error: 'Erro ao criar empresa' }, { status: 500 });
  }
}
