import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeRequest } from "../../Service/requestCall";
import Select from "@material-ui/core/Select";
/**
 * Created by Piyush on Sat Nov 21 2020 16:28:23 GMT+0530 (India Standard Time)
 * category dropdown
 * Updated by Piyush on Sat Nov 21 2020 16:28:23 GMT+0530 (India Standard Time)
 * category dropdown
 */

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function CategoryDropdown({defaultValue, onChangeValue}) {
  const classes = useStyles();
  const [category, setCategory] = React.useState(defaultValue);
  const [data, setData] = React.useState([]);
  const [isDataLoaded, toggleLoader] = React.useState(false);
  const handleChange = (event) => {
    setCategory(event.target.value);
    onChangeValue(event);
  };
  useEffect(() => {
    try {
      async function getData(){
        let response = await makeRequest({
          method: "GET",
          url: "/v1/getAllCategories",
        });
        setData(response.data.result);
        toggleLoader(true);
      }
      getData();
    } catch (error) {

    }

  }, []);

  function Design() {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="categoryId"
          id="categoryId"
          name = "categoryId"
          value={category}
          onChange={handleChange}
        >
          {data.map((categoryItem) => {
            return (
              <MenuItem key={categoryItem.categoryId} value={categoryItem.categoryId}>
                {categoryItem.category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
  if (isDataLoaded) {
    return Design();
  } else {
    return <div>Loading..</div>;
  }
}

export default CategoryDropdown;
