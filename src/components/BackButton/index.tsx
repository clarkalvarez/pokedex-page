import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

function BackButton({ url }: { url: string }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(url);
  };

  return (
    <>
      <div onClick={handleBackClick} className={styles.container}>
        <img className={styles.backImg} src="/back.png" alt="" />
        Back
      </div>
    </>
  );
}

export default BackButton;
