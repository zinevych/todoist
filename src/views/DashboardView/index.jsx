import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
// import styles from "./styles.module.css";
import Header from "../../modules/Dashboard/components/Header";
import Sidebar from "../../modules/Dashboard/components/Sidebar";
import Content from "../../modules/Dashboard/components/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appContent: theme.mixins.gutters({
    flex: "1 1 100%", // https://github.com/philipwalton/flexbugs#flexbug-17
    maxWidth: "100%", // https://github.com/philipwalton/flexbugs#flexbug-17
    paddingTop: 80, // equal to AppBar height + 16px
    margin: "0 auto",
    // Set the max content width for each breakpoint
    // Content will be centered in the space to the right/left of drawer
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values.lg,
    },
  }),
}));

const DashboardView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />

      <main className={classes.appContent}>
        <Content />
      </main>
    </div>
  );
};

export default DashboardView;
