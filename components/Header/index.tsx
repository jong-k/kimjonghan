import Link from "next/link";
import { LuSigma } from "react-icons/lu";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <header className={s.wrapper}>
      <h2 className={s.headerTitle}>김종한의</h2>
      <h2 className={s.headerTitle}>
        Tech
        <LuSigma />
      </h2>
      <nav className={s.navContainer}>
        <div className={s.menu}>
          <Link className={s.tab} href={"/"}>
            Blog
          </Link>
        </div>
        <div className={s.menu}>
          <Link className={s.tab} href={"/about"}>
            About
          </Link>
        </div>
        <div className={s.menu}>
          <Link className={s.tab} href={"/projects"}>
            Projects
          </Link>
        </div>
        <div className={s.menu}>
          <Link className={s.tab} href={"/contact"}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
