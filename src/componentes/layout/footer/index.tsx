import { menuFooter } from "../../../lib/services/mocks/constanats";
import style from "@/style/style-components/Footer.module.css";
function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.container}>
          {menuFooter.map((item) => (
            <p key={item.href}>{item.label}</p>
          ))}
        </div>
        <p className={style.footerREserver}>
          &copy; Direitos reservados Blog do Marcos
        </p>
      </footer>
    </>
  );
}

export default Footer;
