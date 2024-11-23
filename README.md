PowerBalloon:

Vídeo: https://youtu.be/XO7noPJGpHs

PowerBalloon é um projeto que utiliza balões solares aéreos para a captação de energia solar na estratosfera e transmissão sem fio para a Terra. O sistema possui front-end construído com Next.js e TypeScript, proporcionando uma interface para o gerenciamento e visualização dos dados relacionados a este sistema.

Visão Geral:

Os balões flutuam na estratosfera, com painéis solares flexíveis, para capturar energia solar contínua e transmiti-la para a Terra sem fio. A solução procura uma abordagem sustentável, minimizando a infraestrutura terrestre e facilitando o fornecimento de energia para áreas de difícil acesso à eletricidade.

Funcionalidades:

Front-end:

- Home: Exibe o logo da empresa, texto e foto de balão.
- Planos: Exibe três tipos de planos para as empresas (Basic, Standard, Premium).
- Funcionalidades: Mostra os benefícios e o processo de venda de energia.
- CRUD de Empresas e Balões: Funcionalidades para gerenciar empresas e balões solares. Contém métodos adicionar, editar, visualizar e remover informações de balões e empresas.
- Sobre nós: Página com informações dos participantes (foto, RM, nome, turma, LinkedIn, GitHub).

Estilo Visual:

- Cores: Preto, azul escuro e branco.

Tecnologias Utilizadas:

- Next.js (com TypeScript)
- React para construção da UI
- Tailwind CSS para o estilo
- API Routes no Next.js para funcionalidades de back-end
- HTTP Requests para comunicar em tempo real com os sistemas que controlam os balões e empresas.
- Vercel para deploy contínuo e hospedagem.

Instalação:

Pré-requisitos:

- Node.js.
- Yarn ou npm.
- Java para rodar o backend e o CRUD de balões e empresas.

Passos para Instalar:

1. Clone o repositório:

   git clone https://github.com/Power-Balloon/front-end-gs-2
   cd powerballoon

2. Instale as dependências:

   Com NPM:
   npm install

   Com Yarn:
   yarn install

3. Instale o Java (caso ainda não tenha).

4. Clone o repositório e inicie o backend em Java:

- Link do repositório: https://github.com/CaiocrNyimi/JavaGS2

- Para o funcionamento do CRUD de balões e empresas, você precisa rodar o servidor backend que está em Java. Verifique se o backend esteja rodando na porta 8080.

Assim vai se iniciar a API backend com os endpoints para o CRUD de balões e empresas disponíveis em:

- http://localhost:8080/api/baloes
- http://localhost:8080/empresas

5. Inicie o servidor de desenvolvimento:

   Com npm:
   npm run dev

   Com Yarn:
   yarn dev

Como Usar:

1. Tela Inicial:

- A primeira página mostra o logo da empresa, imagem de balão e mensagem de boas-vindas.

2. Planos:

- Aqui estão disponíveis as opções de planos (Basic, Standard, Premium).

3. Funcionalidades:

- Exibe como funciona o processo de venda de energia solar via balões e os benefícios da tecnologia.

4. CRUD de Empresas e Balões:

- Adicionar, editar, visualizar e remover informações sobre empresas e balões solares.
- Você pode acessar essa funcionalidade no sistema de forma intuitiva.

5. Sobre Nós:

- Página que apresenta os membros do time com fotos, informações de contato (LinkedIn e GitHub) e detalhes de cada membro.

Estrutura do Projeto

Visão geral da estrutura de diretórios do projeto:

/powerballoon
└── /src
├── /app
│ ├── /api
│ │ ├── /baloes
│ │ │ ├── route.ts
│ │ │ └── /[rastreador]
│ │ │ └── route.ts
│ │ └── /empresas
│ │ ├── route.ts
│ │ └── /[cnpj]
│ │ └── route.ts
│ ├── /atualizar-baloes
│ │ └── page.tsx
│ ├── /atualizar-empresas
│ │ └── page.tsx
│ ├── /cadastrar-baloes
│ │ └── page.tsx
│ ├── /cadastrar-empresas
│ │ └── page.tsx
│ ├── /funcionalidades
│ │ └── page.tsx
│ ├── /listar-baloes
│ │ └── page.tsx
│ ├── /listar-empresas
│ │ └── page.tsx
│ ├── /planos
│ │ └── page.tsx
│ ├── /sobre-nos
│ │ └── page.tsx
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── loading.tsx
│ ├── page.tsx
├── /components
│ ├── /Cabecalho
│ │ └── Cabecalho.tsx
│ ├── /Menu
│ │ └── Menu.tsx
│ ├── /Rodape
│ │ └── Rodape.tsx
│ └── /Spinner
│ └── Spinner.tsx
├── /img
│ ├── balao.jpg
│ ├── bruno.jpg
│ ├── caio.jpg
│ └── nicolas.jpg
└── .eslintrc.json
└── .gitignore
└── next.config.mjs
└── package-lock.json
└── package.json
└── postcss.config.mjs
└── README.md
└── tailwind.config.js
└── tailwind.config.ts
└── tsconfig.json

Deploy na Vercel:

Este projeto foi configurado para deploy na Vercel. Para realizar o deploy, siga os seguintes passos:

1. Entre no site da Vercel.
2. Faça login e clique em "New Project".
3. Conecte o repositório do GitHub que contém o sistema PowerBalloon.
4. Vercel irá configurar o projeto e realizar o deploy.
5. Após o deploy, o aplicativo estará disponível em um domínio da Vercel.

Perguntas Frequentes

1. Qual é a durabilidade dos balões?
   Os balões podem durar vários meses a anos, dependendo do material e do gás utilizado (hélio ou hidrogênio). Manutenções regulares e reabastecimentos são necessários.

2. Como a energia é transmitida sem fio?
   A energia solar captada é convertida em micro-ondas ou ondas de rádio, transmitida para a Terra e convertida de volta em eletricidade por antenas receptoras.

3. Quais são os desafios técnicos?
   Os principais desafios incluem a manutenção a altitude, a eficiência na transmissão de energia sem fio e a segurança no manuseio de hidrogênio.

4. Como garantir a segurança da transmissão?
   Utilizando frequências seguras e tecnologias de controle preciso, diminuindo interferências e garantindo que a transmissão seja segura para todos.

5. Qual é o impacto ambiental?
   A tecnologia contribui para a redução das emissões de gases de efeito estufa e promove o uso de energia limpa, minimizando o impacto ambiental negativo.

6. Como proteger os balões de catástrofes naturais?
   Sensores monitoram clima e condições atmosféricas, como vento, temperatura e pressão, para garantir que os balões subam ou desçam em momentos seguros. O controle automatizado, baseado nos dados coletados, decide quando os balões devem subir ou descer, evitando condições adversas.

Conclusão:

A tecnologia dos Balões Solares Aéreos oferece uma solução sustentável para a captação e transmissão de energia solar. Com pesquisa e desenvolvimento esta abordagem pode superar os desafios técnicos e se tornar uma parte crucial de um futuro mais verde e sustentável.
