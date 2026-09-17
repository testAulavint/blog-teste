import style from "@/style/style-components/Menu.module.css";

function Menu() {
  return (
    <div className={style.container}>
      <div className={style.pesquisa}>
        <p>Pesquisa</p>
        <div className={style.inputDiv}>
          <button className={style.btnPesquisa}>
            <img src="/pesquisa.svg" alt="" />
          </button>
          <input type="text" placeholder="Busque em nossos artigos" />
          <button className={style.btnSeta}>
            <img src="/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <ul className={style.links}>
        <li>Tecnologia</li>
        <li>Jogos</li>
      </ul>
      <div className={style.contatos}>
        <p>siga-nos</p>
      </div>
    </div>
  );
}

export default Menu;
