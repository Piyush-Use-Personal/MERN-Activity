import React, { useState, useEffect } from "react";
import "../../Shared/Styles/popup.scss";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeRequest } from "../../Service/requestCall";
import Chip from '@material-ui/core/Chip';
/**
 * Created by Piyush on Sat Nov 21 2020 15:42:34 GMT+0530 (India Standard Time)
 * popup for category
 * Updated by Piyush on Sat Nov 21 2020 15:42:34 GMT+0530 (India Standard Time)
 * popup for category
 */

function AddCategory({ handleClose }) {
  const [data, setData] = useState([]);
  const [categoryItem, setItem] = useState({category : ''});
  useEffect(() => {
    try {
      async function getData(){
        let response = await makeRequest({
          method: "GET",
          url: "/v1/getAllCategories",
        });
       
        if(response.data.code === 200){
          setData(response.data.result);
        }
      }
      getData();
    } catch (error) {

    }
  }, []);
  const saveCategory = (category) => {
    try {
      async function saveCategory(){
        let response = await makeRequest({
          method: "POST",
          url: "/v1/addOrUpdateCategory",
          data : category
        });
      }
      saveCategory();
    } catch (error) {

    }
  };
  
  const handleChange = (event) => {
    setItem({category : event.target.value});
  };
  const handleDelete = (category) => {
    try {
      async function saveCategory(){
        let response = await makeRequest({
          method: "POST",
          url: "/v1/deleteCategory",
          data : category
        });
        if(response.data.code === 200){
          setData((data) => data.filter((c) => c.categoryId !== category.categoryId))
        }
      }
      saveCategory();
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
            Add New Category
          </Typography>
          {data.map((categoryItem) => {
            return (
              <Chip size={'small'} 
              key={categoryItem.categoryId} 
              className='width-content-fit' 
              label={categoryItem.category} 
              onDelete={() => handleDelete(categoryItem)} color="primary" />
            );
          })}
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="category"
              label="Category Name"
              name="category"
              autoComplete="Category Name"
              onChange={handleChange}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => saveCategory(categoryItem)}
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
