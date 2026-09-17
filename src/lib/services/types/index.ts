export type Artigo = {
  id: number;
  titulo: string;
  conteudo: string;
  categoria: string; // ← "games", "politica", etc
  img: string;
  principal: boolean;
};
