import LoginForm from "../../modules/Auth/components/LoginForm";
import styles from "./styles.module.css";

const LoginView = () => (
  <div className={styles["login-container"]}>
    <LoginForm />
  </div>
);

export default LoginView;
