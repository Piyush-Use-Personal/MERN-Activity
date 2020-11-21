import React, { useState } from "react";
import AddCategory from '../AddCategory/AddCategory';
import AddProduct from '../AddProduct/AddProduct';
import AddSizing from '../AddSizing/AddSizing';
/**
 * Created by Piyush on Sat Nov 21 2020 15:25:09 GMT+0530 (India Standard Time)
 * header component
 * Updated by Piyush on Sat Nov 21 2020 15:25:09 GMT+0530 (India Standard Time)
 * header component
 */

function Header() {
  const [isProductPopUpOpen, setProductPopup] = useState(false);
  const [isCategoryPopUpOpen, setCategoryPopup] = useState(false);
  const [isSizingPopUpOpen, setSizingPopup] = useState(false);

  const toggleProductPopup = () => {
    setProductPopup(!isProductPopUpOpen);
  }
  const toggleCategoryPopup = () => {
    setCategoryPopup(!isCategoryPopUpOpen);
  }
  const toggleSizingPopup = () => {
    setSizingPopup(!isSizingPopUpOpen);
  }

  function SeletivePopup(){
    if(isCategoryPopUpOpen){
      return <AddCategory handleClose={toggleCategoryPopup}/>
    } else if(isProductPopUpOpen){
      return <AddProduct handleClose={toggleProductPopup}/>
    } else if(isSizingPopUpOpen){
      return <AddSizing handleClose={toggleSizingPopup}/>
    } else {
      return <React.Fragment/>
    } 
  }

  return (
    <div className="row space-between">
      <p>Sample</p>
      <div className="row space-evenly">
        <button onClick={toggleProductPopup}>New Product</button>
        <button onClick={toggleCategoryPopup}>New Category</button>
        <button onClick={toggleSizingPopup}>New Sizing</button>
      </div>
     <SeletivePopup/>
    </div>
  );
}

export default Header;
