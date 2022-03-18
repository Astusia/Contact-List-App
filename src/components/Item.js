import { useNavigate } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`contact/${user.id}`)}>
      <div className={styles.item_image}>
        <img src={user.image} alt="avatar" />
      </div>
      <div className={styles.item_name}>{user.name}</div>
    </div>
  );
};
