import styles from "./Icon.module.css";

export const Icon = ({ className, children }) => {
  return (
    <span className={`${styles.material_icons} ${className}`}>{children}</span>
  );
};
