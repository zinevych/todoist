/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

import { connect } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import TodoCard from "../TodoCard";
import EditTodo from "../EditTodo";

const Content = ({ todoItems, filterType }) => {
  // eslint-disable-next-line no-unused-vars

  const items = todoItems;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={handleClickOpen}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <EditTodo open={open} handleClose={handleClose} />
      <div>
        <Grid container spacing={1}>
          {items
            .filter((item) =>
              filterType === "all" ? item : item.type === filterType
            )
            .map((item) => (
              <TodoCard
                title={item.title}
                description={item.description}
                type={item.type}
                key={item.id}
                id={item.id}
              />
            ))}
        </Grid>
      </div>
    </>
  );
};

Content.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  todoItems: state.todoItems,
});

export default connect(mapStateToProps)(Content);
