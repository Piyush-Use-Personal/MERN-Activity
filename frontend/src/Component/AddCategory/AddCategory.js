import React from "react";
import "../../Shared/Styles/popup.scss";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
/**
 * Created by Piyush on Sat Nov 21 2020 15:42:34 GMT+0530 (India Standard Time)
 * popup for category
 * Updated by Piyush on Sat Nov 21 2020 15:42:34 GMT+0530 (India Standard Time)
 * popup for category
 */

function AddCategory({ handleClose }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="column">
          <Typography component="h1" variant="h5">
            Add New Category
          </Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="categoryName"
              label="Category Name"
              name="categoryName"
              autoComplete="Category Name"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {}}
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
