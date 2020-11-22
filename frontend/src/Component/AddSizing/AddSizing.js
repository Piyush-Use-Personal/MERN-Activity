import React, { useState, useEffect } from "react";
import "../../Shared/Styles/popup.scss";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeRequest } from "../../Service/requestCall";
import { ToastsStore } from "react-toasts";
import Chip from '@material-ui/core/Chip';
/**
 * Created by Piyush on Sat Nov 21 2020 15:42:34 GMT+0530 (India Standard Time)
 * popup for size
 * Updated by Piyush on Sat Nov 21 2020 15:42:34 GMT+0530 (India Standard Time)
 * popup for size
 */

function AddSizing({ handleClose }) {
  const [data, setData] = useState([]);
  const [sizeItem, setItem] = useState({size : ''});
  useEffect(() => {
    try {
      async function getData(){
        let response = await makeRequest({
          method: "GET",
          url: "/v1/getAllSizes",
        });
        if(response.data.code === 200){
          setData(response.data.result);
        }
      }
      getData();
    } catch (error) {
      ToastsStore.error(error.message)

    }
  }, []);
  const saveSizing = (size) => {
    try {
      async function saveSizing(){
        let response = await makeRequest({
          method: "POST",
          url: "/v1/addOrUpdateSizing",
          data : size
        });
      }
      saveSizing();
    } catch (error) {
      ToastsStore.error(error.message)

    }
  };
  
  const handleChange = (event) => {
    setItem({size : event.target.value});
  };
  const handleDelete = (size) => {
    try {
      async function saveSizing(){
        let response = await makeRequest({
          method: "POST",
          url: "/v1/deleteSizing",
          data : size
        });
        if(response.data.code === 200){
          setData((data) => data.filter((c) => c.sizeId !== size.sizeId))
        }
      }
      saveSizing();
    } catch (error) {
      ToastsStore.error(error.message)

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
            Add New Sizing
          </Typography>
          <div className='row margin-y-12'>
          {data.map((sizeItem) => {
           return (
            <div className='margin-x-8'>
            <Chip  
            key={sizeItem.sizeId} 
            className='width-content-fit' 
            label={sizeItem.size} 
            onDelete={() => handleDelete(sizeItem)} color="primary" />
            </div>
           );
         })}
          </div>
         
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="size"
              label="Sizing Name"
              name="size"
              autoComplete="Sizing Name"
              onChange={handleChange}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => saveSizing(sizeItem)}
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSizing;
