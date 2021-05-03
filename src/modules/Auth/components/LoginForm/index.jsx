import styles from "./styles.module.css";

const LoginForm = () => (
  <div className={styles.loginWrapper}>
    <form className={styles.loginForm}>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />
    </form>
  </div>
);

export default LoginForm;
