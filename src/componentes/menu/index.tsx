import style from "@/style/style-components/Menu.module.css";
import Link from "next/link";
function Menu() {
  return (
    <div className={style.container}>
      <div className={style.pesquisa}>
        <p>Pesquisa</p>
        <div className={style.inputDiv}>
          <button className={style.btnPesquisa}>
            <img src="/pesquisa.svg" alt="Pesquisar artigos" />
          </button>
          <input type="text" placeholder="Busque em nossos artigos" />
          <button className={style.btnSeta}>
            <img src="/arrow.svg" alt="Ir para a pesquisa" />
          </button>
        </div>
      </div>
      <ul className={style.links}>
        <Link href="/artigos/tecnologia">Tecnologia</Link>
        <Link href="/artigos/jogos">Jogos</Link>
      </ul>
      <div className={style.contatos}>
        <p>siga-nos</p>
      </div>
    </div>
  );
}

export default Menu;
