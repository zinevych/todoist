/* eslint-disable react/destructuring-assignment */
import { Button, Grid } from "@material-ui/core";

import React, { useState } from "react";
import TodoCard from "../TodoCard";

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

  const addTodoItem = () => {
    updateItems([
      ...items,
      {
        id: items.length + 1,
        title: `title${items.length + 1}`,
        description: `description${items.length + 1}`,
      },
    ]);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={addTodoItem}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <div>
        <Grid container spacing={1}>
          {items.map((item) => (
            <TodoCard
              title={item.title}
              description={item.description}
              key={item.id}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Content;
