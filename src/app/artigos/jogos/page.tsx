import CardGame from "@/componentes/cards/cardGame";
import Artigos from "@/lib/services/mocks/News.json";
import style from "@/style/style-components/Jogos.module.css";
type Props = {};

function Jogos({}: Props) {
  const Games = Artigos.filter((item) => item.categoria === "games");

  return (
    <section className={style.container}>
      <h2 className={style.h2}>Games</h2>
      <p className={style.subTitle}>artigos sobre jogos</p>
      <div className={style.line}></div>

      <div className={style.gridJogos}>
        {Games.map((game) => (
          <CardGame key={game.id} item={game} />
        ))}
      </div>
    </section>
  );
}

export default Jogos;
