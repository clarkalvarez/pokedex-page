import { Outlet } from "react-router-dom";
import styles from "./style.module.css";

function PokedexPage({ title }: { title: string }) {
  return (
    <>
      <div>
        <h1 className={styles.bigblue}>{title}</h1>
      </div>
      <Outlet />
    </>
  );
}

export default PokedexPage;
