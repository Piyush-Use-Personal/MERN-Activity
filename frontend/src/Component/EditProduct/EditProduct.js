import React,{ useState } from "react";
import "../../Shared/Styles/popup.scss";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SizingDropdown from "../SizingDropdown/SizingDropdown";
import {makeRequest} from '../../Service/requestCall';
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
/**
 * Created by Piyush on Sat Nov 21 2020 15:42:46 GMT+0530 (India Standard Time)
 * popup for product
 * Updated by Piyush on Sat Nov 21 2020 15:42:46 GMT+0530 (India Standard Time)
 * popup for product
 */

function EditProduct({ data, handleClose }) {

  
  const [product, updateItemInProduct] = useState(data);

  const handleChange = (event) => {
    let localProductItem = {...product, ...{[event.target.name] : event.target.value}}
    updateItemInProduct(localProductItem);
    console.log('Product: ', product);
  };
  
  const saveProduct = (product) => {
    try {
      async function saveProduct(){
        let response = await makeRequest({
          method: "POST",
          url: "/v1/addOrUpdateProduct",
          data : product
        });
        console.log('RESPONSE DATA ', response.data);
      }
      saveProduct();
    } catch (error) {

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
              value = {product.productName}
              autoFocus
              onChange={handleChange}
            />
            <div className='row '>
            <SizingDropdown onChangeValue={handleChange} defaultValue = {product.sizeId}></SizingDropdown>
            <CategoryDropdown onChangeValue={handleChange} defaultValue = {product.categoryId}></CategoryDropdown>

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
              value = {product.price}
              autoFocus
              onChange={handleChange}
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
              value = {product.stock}
              onChange={handleChange}
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
              value = {product.description}
              onChange={handleChange}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => saveProduct(product)}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
