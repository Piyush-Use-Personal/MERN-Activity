import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {makeRequest} from '../../Service/requestCall';
import Select from '@material-ui/core/Select';
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
function CategoryDropdown() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [isDataLoaded, toggleLoader] = React.useState(false);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  makeRequest({
    method : 'GET',
    url: `https://jsonplaceholder.typicode.com/todos/1`,   
  }).then(function (res) {
    toggleLoader(true);
  });
  function Design() {
    return (
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    );
  }
  if(isDataLoaded){
    return Design();
  } else {
    return <div>Loading..</div>
  }
}

export default CategoryDropdown;
