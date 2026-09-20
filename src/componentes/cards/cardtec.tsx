import { Artigo } from "@/lib/services/types";
import style from "@/style/style-components/CardGame.module.css";
import Link from "next/link";
type Props = {
  item: Artigo;
};

function CardTec({ item }: Props) {
  const { id, slug, img, titulo, conteudo } = item;
  return (
    <Link className={style.link} key={id} href={`/artigos/tecnologia/${slug}`}>
      <div className={style.container}>
        <div className={style.containerImg}>
          <img src={img} alt={`Imagem do artigo ${titulo}`} />
        </div>
        <div className={style.artigo}>
          <h3>{titulo}</h3>
          <p>{conteudo}</p>
          <p>{item.autor}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardTec;
