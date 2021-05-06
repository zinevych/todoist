import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";

import PropTypes from "prop-types";

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

const TodoCard = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <Close />
            </IconButton>
          }
          title={title}
        />
        <CardContent className={classes.content}>
          {/* <Typography
            className="MuiTypography--heading"
            variant="h6"
            gutterBottom
          >
            {title}
          </Typography> */}
          <Typography className="MuiTypography--subheading" variant="caption">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TodoCard;
