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
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
  },
];

const Content = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, updateItems] = useState(initState);
  const [open, setOpen] = useState(false);

  const addTodoItem = ({ title, description }) => {
    updateItems([
      ...items,
      {
        id: items.length + 1,
        title,
        description,
      },
    ]);
  };

  const removeTodoItem = ({ id }) => {
    let newItems = [...items];
    newItems = newItems.reduce((acc, item) => {
      if (item.id !== id) {
        acc.push(item);
      }
      return acc;
    }, []);

    updateItems(newItems);
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
              id={item.id}
              title={item.title}
              description={item.description}
              key={item.id}
              remove={removeTodoItem}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Content;
