/* eslint-disable react/destructuring-assignment */
import { Button, Grid } from "@material-ui/core";

import React, { useState } from "react";
import TodoCard from "../TodoCard";
import EditTodo from "../EditTodo";

const initState = [
  {
    id: 1,
    title: "title1",
    description: "description1",
    type: "personal",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    type: "work",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    type: "study",
  },
];

const Content = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, updateItems] = useState(initState);
  const [open, setOpen] = useState(false);

  const addTodoItem = ({ title, description, type }) => {
    updateItems([
      ...items,
      {
        id: items.length + 1,
        title,
        description,
        type,
      },
    ]);
  };

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
      <EditTodo
        open={open}
        handleClose={handleClose}
        addTodoItem={addTodoItem}
      />
      <div>
        <Grid container spacing={1}>
          {items.map((item) => (
            <TodoCard
              title={item.title}
              description={item.description}
              type={item.type}
              key={item.id}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Content;
