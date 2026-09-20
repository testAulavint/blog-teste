import styles from "../page.module.css";
import Artigos from "@/lib/services/mocks/News.json";
import CardHome from "../../componentes/cards/cardHome";
import style from "@/style/style-components/Home.module.css";
import Link from "next/link";
export const dynamic = "force-static";

export default function Home() {
  const artPrincipal = Artigos.find((item) => item.principal === true);
  if (!artPrincipal) {
    return;
  }
  const homeArticles = Artigos.filter((item) => item.id !== artPrincipal.id);
  const artigos = homeArticles.slice(0, 5);
  return (
    <>
      <main className={style.main}>
        <Link
          href={`/artigos/jogos/${artPrincipal.slug}`}
          className={style.containerImg}
        >
          <img
            src={artPrincipal.img}
            alt={`Capa do artigo principal: ${artPrincipal.titulo}`}
          />{" "}
          <h2>{artPrincipal.titulo}</h2>{" "}
        </Link>
        <div className={style.containerGrid}>
          {artigos.map((item) => (
            <CardHome key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
