import styles from "./Input.module.css";

export const Input = ({ label, placeholder, value, name, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
