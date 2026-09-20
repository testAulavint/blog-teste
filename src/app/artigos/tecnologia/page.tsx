import CardTec from "@/componentes/cards/cardtec";
import Artigos from "@/lib/services/mocks/News.json";
import style from "@/style/style-components/Jogos.module.css";

export const dynamic = "force-static";

function Tecnologia() {
  const tec = Artigos.filter((item) => item.categoria === "tecnologia");

  return (
    <section className={style.container}>
      <h2 className={style.h2}>Tecnologia</h2>
      <p className={style.subTitle}>artigos sobre tecnologia</p>
      <div className={style.line}></div>

      <div className={style.gridJogos}>
        {tec.map((game) => (
          <CardTec key={game.id} item={game} />
        ))}
      </div>
    </section>
  );
}

export default Tecnologia;
