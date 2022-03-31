import styles from "./Icon.module.css";

export const Icon = ({ className, children, tooltip }) => {
  return (
    <div className={styles.icon}>
      <span className={`${styles.material_icons} ${className}`}>
        {children}
      </span>
      {tooltip && <span className={styles.tooltip}>{tooltip}</span>}
    </div>
  );
};
