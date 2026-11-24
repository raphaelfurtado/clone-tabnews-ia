# Biscoitinho da Sorte

Página única em que a pessoa abre um biscoito da sorte, recebe uma frase motivacional aleatória e é convidada a apoiar o autor com um Pix.

## Stack

- Next.js com App Router, publicado na Vercel.
- React e JavaScript, sem TypeScript.
- CSS puro em uma folha de estilos global.
- Biblioteca `qrcode` para gerar o QR Code do Pix.
- Sem banco de dados, autenticação ou API própria.

## Arquitetura

- `app/`: rotas, componentes, conteúdo e estilos da interface.
- `lib/`: lógica sem dependência de interface.
- O Server Component da página gera o código Pix e o QR Code, e entrega os dois prontos ao Client Component.
- O Client Component cuida da interação: abrir o biscoito, sortear a frase, mostrar o Pix e copiar o código.

## Convenções

- Interface, identificadores e commits em português do Brasil.
- Componentes em PascalCase.
- Manter a lógica no servidor sempre que ela não depender do navegador.
- Preservar a acessibilidade da interação, como rótulos, foco e anúncio de conteúdo dinâmico.

## Comandos

- `npm run dev`: servidor de desenvolvimento.
- `npm run build`: build de produção.
