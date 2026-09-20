import { Artigo } from "@/lib/services/types";
import style from "@/style/style-components/cardHome.module.css";
import Link from "next/link";
type Props = {
  item: Artigo;
};

function CardHome({ item }: Props) {
  const { id, slug, img, titulo, categoria } = item;
  return (
    <Link className={style.link} key={id} href={`/artigos/jogos/${slug}`}>
      <div className={style.container}>
        <img src={img} alt={`Imagem do artigo ${titulo}`} />
        <h3 className={style.h3}>{titulo}</h3>
      </div>
    </Link>
  );
}

export default CardHome;
