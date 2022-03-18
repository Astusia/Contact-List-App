import styles from "./Toolbar.module.css";

export const Toolbar = ({ children }) => {
  return <div className={styles.info_toolbar}>{children}</div>;
};
