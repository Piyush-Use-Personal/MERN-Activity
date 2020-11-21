import React,{ useState} from "react";
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
  makeRequest({
    method : 'GET',
    url: `https://jsonplaceholder.typicode.com/todos/1`,   
  }).then(function (res) {
    setLoader(true);
  });
  let data = [
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
    {
      productId: "1",
      productName: "Asus Zenfone Max Pro",
      category: "Electronics",
      price: "100rs",
      size: "Large-XX",
      stock: "500pcs",
      description: "Lorem Ipsum...",
    },
  ];

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
