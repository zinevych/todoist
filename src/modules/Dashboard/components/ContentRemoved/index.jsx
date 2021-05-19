/* eslint-disable react/destructuring-assignment */
import React from "react";

import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import TodoCard from "../TodoCard";

const ContentRemoved = ({ binItems }) => {
  // eslint-disable-next-line no-unused-vars

  const items = binItems;

  return (
    <>
      <div>
        <Grid container spacing={1}>
          {items.map((item) => (
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

ContentRemoved.propTypes = {
  binItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  binItems: state.binItems,
});

export default connect(mapStateToProps)(ContentRemoved);
