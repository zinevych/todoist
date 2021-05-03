import styles from "./styles.module.css";

const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerItem}>
      <span>Todoist App</span>
    </div>
    <div className={`${styles.headerItem} ${styles.icon}`}>
      <span className="material-icons">face</span>
    </div>
  </div>
);

export default Header;
