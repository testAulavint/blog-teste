"use client";

import Menu from "@/componentes/menu";
import style from "@/style/style-components/Header.module.css";

import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [tema, setTema] = useState<boolean>(false);

  function toogleTema() {
    setTema((prev) => !prev);
  }
  useEffect(() => {
    const thema = localStorage.getItem("tema");
    if (thema === "dark") {
      setTema(true);
    }
  }, []);

  useEffect(() => {
    if (tema) {
      document.body.classList.add("tema");
      localStorage.setItem("tema", "dark");
    } else {
      document.body.classList.remove("tema");
      localStorage.setItem("tema", "sun");
    }
  }, [tema]);

  function toggleMenu(e: React.MouseEvent<HTMLButtonElement>) {
    setOpenMenu((prev) => !prev);
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <button onClick={toggleMenu}>
            <img src={openMenu ? "/x.svg" : "/menu.svg"} alt="" />
          </button>
        </nav>
        <Link className={style.link} href="/">
          <h1 className={style.logo}>LOGO</h1>
        </Link>

        <button className={style.btnTema} onClick={toogleTema}>
          <img className={style.tema} src="/lightmode.svg" alt="" />
        </button>
      </div>
      <div className={style.categorias}>
        <Link href="/artigos/tecnologia">Tecnologia</Link>
        <Link href="/artigos/jogos">Jogos</Link>
      </div>
      {openMenu && <Menu />}
    </header>
  );
}

export default Header;
