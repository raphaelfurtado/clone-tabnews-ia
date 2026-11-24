# TabNews em construção

Página única "Em construção" do clone do TabNews, com o total de conteúdos publicados no TabNews, um link para o site oficial e uma animação de confete ao carregar.

## Stack

- Next.js com App Router, publicado na Vercel com renderização no servidor.
- React e JavaScript, sem TypeScript.
- CSS puro em uma folha de estilos global.
- Biblioteca `react-confetti` para a animação de confete.
- Sem banco de dados, autenticação ou API própria.

## Arquitetura

- `app/`: rotas, componentes, conteúdo e estilos da interface.
- `lib/`: lógica sem dependência de interface.
- O Server Component da página lê o total de conteúdos da API pública do TabNews a cada acesso, sem cache, e mostra um aviso se a leitura falhar.
- O Client Component `Confete` dispara a animação ao carregar e respeita a preferência por movimento reduzido.

## Convenções

- Interface, identificadores e commits em português do Brasil.
- Componentes em PascalCase.
- Manter a lógica no servidor sempre que ela não depender do navegador.
- Preservar a acessibilidade da interação, como rótulos, foco e anúncio de conteúdo dinâmico.

## Comandos

- `npm run dev`: servidor de desenvolvimento.
- `npm run build`: build de produção.
