import styles from "../page.module.css";
import Artigos from "@/lib/services/mocks/News.json";
import CardHome from "../../componentes/cards/cardHome";
import style from "@/style/style-components/Home.module.css";

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
        <div className={style.containerImg}>
          <img src={artPrincipal.img} alt="" />{" "}
          <h2>{artPrincipal.titulo}</h2>{" "}
        </div>
        <div className={style.container}>
          {artigos.map((item) => (
            <CardHome key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
