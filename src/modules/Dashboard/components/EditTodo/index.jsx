import { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import PropTypes from "prop-types";

const EditTodo = ({ open, handleClose, addTodoItem }) => {
  const [state, setState] = useState({
    title: "",
    desc: "",
  });

  const [errorState, setErrorState] = useState({
    title: { status: false, text: "" },
    desc: { status: false, text: "" },
  });

  const handleChange = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const validateForm = () => {
    let newState = { ...errorState };
    if (!state.title) {
      newState = {
        ...newState,
        title: {
          status: true,
          text: "Title is required",
        },
      };
    }

    if (!state.desc) {
      newState = {
        ...newState,
        desc: {
          status: true,
          text: "Description is required",
        },
      };
    }

    if (state.desc && state.title) {
      newState = {
        title: { status: false, text: "" },
        desc: { status: false, text: "" },
      };
    }

    setErrorState(newState);
    return newState;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const statuses = validateForm();

    if (!statuses.title.status && !statuses.desc.status) {
      addTodoItem({
        title: state.title,
        description: state.desc,
      });

      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>Add/Update todo item</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            onChange={handleChange}
            error={errorState.title.status}
            helperText={errorState.title.text}
          />
          <TextField
            autoFocus
            margin="dense"
            id="desc"
            name="desc"
            label="Description"
            type="text"
            multiline
            rows={4}
            fullWidth
            onChange={handleChange}
            error={errorState.desc.status}
            helperText={errorState.desc.text}
          />
          <InputLabel htmlFor="type-native-simple">Type</InputLabel>
          <Select
            native
            value={state.type}
            onChange={handleChange}
            inputProps={{
              name: "type",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

EditTodo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
};

export default EditTodo;
