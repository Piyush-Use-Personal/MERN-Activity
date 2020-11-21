import React from "react";
import "../../Shared/Styles/popup.scss";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SizingDropdown from "../SizingDropdown/SizingDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
/**
 * Created by Piyush on Sat Nov 21 2020 15:42:46 GMT+0530 (India Standard Time)
 * popup for product
 * Updated by Piyush on Sat Nov 21 2020 15:42:46 GMT+0530 (India Standard Time)
 * popup for product
 */

function EditProduct({ data, handleClose }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="column">
          <Typography component="h1" variant="h5">
            Edit Product Details
          </Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="productName"
              label="Product Name"
              name="productName"
              autoComplete="Product Name"
              value = {data.productName}
              autoFocus
            />
            <div className='row '>
            <SizingDropdown></SizingDropdown>
            <CategoryDropdown></CategoryDropdown>

            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              autoComplete="Price"
              value = {data.price}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="stock"
              label="Stock"
              name="stock"
              autoComplete="Stock"
              value = {data.stock}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="Description"
              value = {data.description}
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

export default EditProduct;