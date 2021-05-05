import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    // margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3,
  },
}));

const TodoCard = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography
            className="MuiTypography--heading"
            variant="h6"
            gutterBottom
          >
            Title
          </Typography>
          <Typography className="MuiTypography--subheading" variant="caption">
            Description
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TodoCard;
