import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import styles from "./Toolbar.module.css";

export const Toolbar = ({ children }) => {
  return <div className={styles.info_toolbar}>{children}</div>;
};

export const BackButton = () => {
  return (
    <Link to="/" data-testid="link">
      <Icon tooltip="Back" className={styles.info_back_button}>
        arrow_back_ios
      </Icon>
    </Link>
  );
};
