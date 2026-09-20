import Artigos from "@/lib/services/mocks/News.json";
import { notFound } from "next/navigation";
import style from "@/style/style-components/artigoPage.module.css";
import Recomendados from "@/componentes/cards/recomendados";

import { findSlug } from "../../../../lib/utils/index";

type Props = {
  params: Promise<{ slug: string }>;
};
//tempo que durará a página statica
export const rivalidate = 120;

//faz um html pronto de todas as slugs na build
export const generateStaticParams = () => {
  return Artigos.filter((art) => art.categoria === "games").map((art) => ({
    slug: art.slug,
  }));
};

// metadata dinâmico
export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const artigo = findSlug(Artigos, slug);

  return {
    title: `${artigo?.titulo} | DeTudo`,
    description: artigo?.conteudo,
  };
};

// tsx/ página em exexução
async function Jogos({ params }: Props) {
  const { slug } = await params;
  const artigo = findSlug(Artigos, slug);

  const recomendados = Artigos.slice(1, 5);
  const filtroRec = recomendados.filter((item) => item.slug !== slug);

  if (!artigo) {
    return notFound();
  }

  return (
    <>
      <div className={style.container}>
        <h2> {artigo.titulo}</h2>
        <div className={style.list}></div>
        <p className={style.callAutor}>
          Por: <span className={style.autor}> {artigo.autor}</span>
        </p>
        <section className={style.artigo}>
          <div className={style.containerImg}>
            <img
              src={artigo.img}
              alt={`Imagem ilustrativa do artigo ${artigo.titulo}`}
            />
          </div>
          <p className={style.conteudo}>{artigo.conteudo}</p>
        </section>
        <div className={style.Recomendados}>
          <p>Recomendados</p>
          {filtroRec.map((item) => (
            <Recomendados key={item.id} item={item} />
          ))}
        </div>{" "}
      </div>
    </>
  );
}

export default Jogos;
