# Blog de Jogos e Tecnologia

Site de notícias e artigos sobre jogos, tecnologia e assuntos do universo digital, com uma interface moderna, navegável e responsiva.

## Status da produção

Este projeto está em produção e disponível na plataforma Vercel.

## Tecnologias utilizadas

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- App Router do Next.js
- JSON como base de dados mockada para artigos
- ESLint
- Vercel para deploy

## Recursos e funcionalidades do projeto

- Layout principal com header e footer
- Navegação por categorias:
  - Tecnologia
  - Jogos
- Páginas dinâmicas por artigo
- Listagem de artigos em destaque
- Cards de conteúdo para home e categorias
- Sistema de tema claro/escuro com persistência no localStorage
- Menu lateral/mobile
- SEO com metadata dinâmica por artigo
- Geração estática de páginas de conteúdo
- Imagens de capa via URLs externas e arquivos locais
- Estrutura modular com componentes e estilos organizados por pasta

## Estrutura de pastas principal

- src/app: rotas da aplicação e páginas principais
- src/componentes: componentes reutilizáveis
- src/lib: utilitários e dados
- src/style: estilos CSS Modules
- public: assets e imagens públicas

## Arquivos e dados importantes

- package.json: configuração do projeto e scripts
- src/lib/services/mocks/News.json: base de artigos do site
- src/lib/services/types/index.ts: tipagem dos artigos
- src/app/(public)/page.tsx: página inicial
- src/app/artigos/jogos/page.tsx: página de jogos
- src/app/artigos/tecnologia/page.tsx: página de tecnologia
- src/app/artigos/jogos/[slug]/page.tsx: página detalhada do artigo

## Como executar localmente

```bash
npm install
npm run dev
```

A aplicação fica disponível em:

```bash
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy

O projeto foi pensado para ser implantado na Vercel, aproveitando a compatibilidade nativa com Next.js.

## Recursos visuais e de UX

- Interface com foco em leitura
- Cards com destaque visual para artigos
- Tema alternável para melhor experiência do usuário
- Navegação simples e direta
- Design responsivo para desktop e mobile

## Observações

O site utiliza dados em mock JSON para simular o conteúdo publicado, o que facilita o desenvolvimento, testes e apresentação do projeto em ambiente de produção inicial.
