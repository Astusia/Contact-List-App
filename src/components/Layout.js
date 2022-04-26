import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.background_image}></div>
      <div className={styles.app}>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
};
