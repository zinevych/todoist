import styles from "./styles.module.css";
import Header from "../../modules/Dashboard/components/Header";
import Sidebar from "../../modules/Dashboard/components/Sidebar";

const DashboardView = () => (
  <div className={styles.wrapper}>
    <Header />
    <Sidebar />
    {/* <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div> */}
  </div>
);

export default DashboardView;
