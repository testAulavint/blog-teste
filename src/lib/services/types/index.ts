export type Artigo = {
  id: number;
  slug: string;
  titulo: string;
  conteudo: string;
  categoria: string; // ← "games", "politica", etc
  autor: string;
  img: string;
  principal: boolean;
};
