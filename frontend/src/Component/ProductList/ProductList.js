import React,{ useState, useEffect} from "react";
import "./product.scss";
import {makeRequest} from '../../Service/requestCall';
import EditProduct from '../EditProduct/EditProduct';

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
  }
  const toggleDeletePopup = () => {
    setDeletePopup(!isDeletePopupOpen);
  }
  function SelectivePopup() {
    if(isEditPopupOpen){
      return <EditProduct data={item} handleClose={toggleEditPopup} />
    } else if(isDeletePopupOpen){
      return <EditProduct handleClose={toggleDeletePopup} />
    } else {
      return <React.Fragment/>
    }
  }
  return (
    <div className="card">
      <div className="card-container">
        <div className="column">
          <div className="row">
            <p>{item.productName}</p>
            <div className='row align-center'>
            <div onClick={setEditPopup}><i className="fa fa-edit"></i></div>
            <div onClick={setDeletePopup}><i className="fa fa-trash-o"></i></div>
            </div>
          </div>
          <div className="row">
            <p>{item.stock}</p>
            <p>{item.category}</p>
          </div>
          <p>{item.description}</p>
          <div className="row">
            <p>{item.price}</p>
            <p>{item.size}</p>
          </div>
        </div>
      </div>
      <SelectivePopup/>
      </div>
  );
}

function ProductList() {
  const [isDataLoaded, setLoader] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function getData(){
        let response = await makeRequest({
          method: "GET",
          url: "/v1/getAllProducts",
        });
        setData(response.data.result);
        setLoader(true);
      }
      getData();
    } catch (error) {

    }

  }, []); 

  function ListDesign({data}) {
    return (
      <div className="flex-container">
        <div className="row align-center space-evenly margin-8">
          {data.map((value) => {
            return <ProductItem item={value} key={value.productId} />;
          })}
        </div>
      </div>
    );
  }
  if(isDataLoaded){
    return <ListDesign data={data} />
  } else {
    return <div>Loading..</div>
  }
  
}

export default ProductList;
