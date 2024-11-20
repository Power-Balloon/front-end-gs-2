import { NextRequest, NextResponse } from 'next/server';

interface Balao {
    gas: string;
    material: string;
    cabo: string;
    rastreador: number;
    cnpj: number;
}

const API_URL = 'http://localhost:8080/api/baloes';

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
    const balao = (await response.json()) as Balao[];
    return NextResponse.json(balao, { status: 200 });
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
    const newBalao: Balao = {
        gas: body.gas,
        material: body.material,
        cabo: body.cabo,
        rastreador: body.rastreador,
        cnpj: body.cnpj
    };
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newBalao)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao criar balao: ${errorText}`);
    }
    const criado = await response.json();
    return NextResponse.json(criado, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido ao criar balão';
      console.error('Erro ao criar balão:', errorMessage);
    
    return NextResponse.json({ error: 'Erro ao criar balao' }, { status: 500 });
  }
}
