import Header from "components/Header";
import s from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={s.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
