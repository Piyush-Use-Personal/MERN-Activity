import React, { useState, useEffect } from "react";
import "./product.scss";
import { makeRequest } from "../../Service/requestCall";
import EditProduct from "../EditProduct/EditProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import { ToastsContainer, ToastsStore } from "react-toasts";

/**
 * Created by Piyush on Sat Nov 21 2020 13:11:02 GMT+0530 (India Standard Time)
 * Listing of all products
 * Updated by Piyush on Sat Nov 21 2020 13:11:02 GMT+0530 (India Standard Time)
 * Listing of all products
 */
function ProductItem({ item }) {
  const [isEditPopupOpen, setEditPopup] = useState(false);
  const [isDeletePopupOpen, setDeletePopup] = useState(false);

  const toggleEditPopup = () => {
    setEditPopup(!isEditPopupOpen);
  };
  const toggleDeletePopup = () => {
    setDeletePopup(!isDeletePopupOpen);
  };
  function SelectivePopup() {
    if (isEditPopupOpen) {
      return <EditProduct data={item} handleClose={toggleEditPopup} />;
    } else if (isDeletePopupOpen) {
      return <DeleteProduct data={item} handleClose={toggleDeletePopup} />;
    } else {
      return <React.Fragment />;
    }
  }
  return (
    <div className="card margin-8">
      <div className="card-container">
        <div className="column">
          <div className="row space-between">
            <div className="row">
              <p className="self-center card-title">{item.productName}</p>
              {!item.category || !item.size ? (
                <i className="self-center margin-x-2 yellow fa fa-warning" />
              ) : (
                <React.Fragment />
              )}
            </div>
            <div className="row align-center">
              <div className="margin-8 activity" onClick={setEditPopup}>
                <i className="fa fa-edit"></i>
              </div>
              <div className="margin-8 danger" onClick={setDeletePopup}>
                <i className="fa fa-trash-o"></i>
              </div>
            </div>
          </div>
          <div className="row space-between">
            <p>{item.stock}</p>
            <p>{item.category}</p>
          </div>
          <div className="row space-between">
            <p>{item.price} rs.</p>
            <p>{item.size}</p>
          </div>
          <p>{item.description}</p>
        </div>
      </div>
      <SelectivePopup />
      <ToastsContainer store={ToastsStore} />
    </div>
  );
}

function ProductList() {
  const [isDataLoaded, setLoader] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function getData() {
        let response = await makeRequest({
          method: "GET",
          url: "/v1/getAllProducts",
        });
        setData(response.data.result);
        setLoader(true);
      }
      getData();
    } catch (error) {
      ToastsStore.error(error.message);
    }
  }, []);

  function ListDesign({ data }) {
    return (
      <div className="flex-container">
        <div className="row width-100 space-evenly margin-8">
          {data.map((value) => {
            return <ProductItem item={value} key={value.productId} />;
          })}
        </div>
      </div>
    );
  }

  function NoDataFound(){
    return <div className='column align-center space-evenly height-30-vh black width-100'>
      <h1>No Data Available to Show</h1>
      <div className='row'>
        <h2>Try Adding a Product</h2>
      </div>
    </div>
  }
  if (isDataLoaded) {
    if(data.length !== 0){
      return <ListDesign data={data} />;
    } else {
      return <NoDataFound/>
    }
  } else {
    return <div>Loading..</div>;
  }
}

export default ProductList;
