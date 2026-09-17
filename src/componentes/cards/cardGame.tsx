import { Artigo } from "@/lib/services/types";
import style from "@/style/style-components/CardGame.module.css";

type Props = {
  item: Artigo;
};

function CardGame({ item }: Props) {
  const { id, img, titulo, conteudo } = item;
  return (
    <div key={id} className={style.container}>
      <div className={style.containerImg}>
        <img src={img} alt="" />
      </div>
      <div className={style.artigo}>
        <h3>{titulo}</h3>
        <p>{conteudo}</p>
      </div>
    </div>
  );
}

export default CardGame;
