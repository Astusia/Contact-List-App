import styles from "./AnimatedLoader.module.css";

export const AnimatedLoader = ({
  width,
  height,
  margin,
  borderRadius = "5px",
}) => {
  return (
    <div
      className={styles.animatedLoader}
      style={{ width, height, margin, borderRadius }}
    ></div>
  );
};
