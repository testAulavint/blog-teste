import { Artigo } from "@/lib/services/types";
import Link from "next/link";
import style from "@/style/style-components/Recomendados.module.css";

type Props = {
  item: Artigo;
};

function Recomendados({ item }: Props) {
  const { id, slug, titulo, img } = item;

  return (
    <Link className={style.link} href={`/artigos/jogos/${slug}`}>
      <div className={style.container}>
        <div className={style.contaienrImg}>
          <img src={img} alt={`Imagem recomendada do artigo ${titulo}`} />
        </div>
        <div className={style.content}>
          <p>{titulo}</p>
        </div>
      </div>
    </Link>
  );
}

export default Recomendados;
