import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeRequest } from "../../Service/requestCall";
import Typography from "@material-ui/core/Typography";
import { ToastsStore } from "react-toasts";
/**
 * Created by Piyush on Sun Nov 22 2020 16:06:15 GMT+0530 (India Standard Time)
 * Delete Component
 * Updated by Piyush on Sun Nov 22 2020 16:06:15 GMT+0530 (India Standard Time)
 * Delete Component
 */

function DeleteProduct({ data, handleClose }) {
  const handleDelete = (data) => {
    try {
      async function deleteProduct() {
        let response = await makeRequest({
          method: "POST",
          url: "/v1/deleteProduct",
          data: data,
        });
        if (response.data.code === 200) {
          ToastsStore.success("Product removed successfully!");
        } else {
          ToastsStore.error(response.data.message);
        }
      }
      deleteProduct();
      window.location.reload(true);
      handleClose();
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
        <div className="column space-evenly height-30-vh">
          <Typography component="h1" variant="h5">
            Are you sure, You want to delete this product?
          </Typography>
          <div className="row space-between">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(data)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
