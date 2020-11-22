import React, { useState } from "react";
import "../../Shared/Styles/popup.scss";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ToastsStore } from "react-toasts";
import SizingDropdown from "../SizingDropdown/SizingDropdown";
import { makeRequest } from "../../Service/requestCall";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
/**
 * Created by Piyush on Sat Nov 21 2020 15:42:46 GMT+0530 (India Standard Time)
 * popup for product
 * Updated by Piyush on Sat Nov 21 2020 15:42:46 GMT+0530 (India Standard Time)
 * popup for product
 */

function AddProduct({ handleClose }) {
  const [product, updateItemInProduct] = useState({});

  const handleChange = (event) => {
    let localProductItem = {
      ...product,
      ...{ [event.target.name]: event.target.value },
    };
    updateItemInProduct(localProductItem);
  };

  const saveProduct = (product) => {
    try {
      async function saveProduct() {
        let response = await makeRequest({
          method: "POST",
          url: "/v1/addOrUpdateProduct",
          data: product,
        });
      }
      saveProduct();
    } catch (error) {
      ToastsStore.error(error.message);
    }
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="column">
          <Typography component="h1" variant="h5">
            Add New Product
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
              autoFocus
              onChange={handleChange}
            />
            <div className="row ">
              <SizingDropdown onChangeValue={handleChange}></SizingDropdown>
              <CategoryDropdown onChangeValue={handleChange}></CategoryDropdown>
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              type="number"
              autoComplete="Price"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="stock"
              type="number"
              label="Stock"
              name="stock"
              autoComplete="Stock"
              autoFocus
              onChange={handleChange}
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
              autoFocus
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => saveProduct(product)}
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
