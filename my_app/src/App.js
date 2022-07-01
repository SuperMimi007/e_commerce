import './App.css';
import LoginPage from './LoginPage';
import MyCart from './MyCart';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import {useState} from 'react';




function App(props){
  let [currentPage, setCurrentPage]= useState('LoginPage')
  
  return(
    <div>
        {currentPage  ==='LoginPage' &&
        <LoginPage
        setCurrentPage={setCurrentPage}
        />}  

        {currentPage  ==='MyCart' && 
        <MyCart
        setCurrentPage={setCurrentPage}
        />}

        {currentPage  ==='AddProduct' &&
        <AddProduct
        setCurrentPage={setCurrentPage}
        />}

        {currentPage  ==='DeleteProduct' &&
        <DeleteProduct
        setCurrentPage={setCurrentPage}
        />}  
    </div>
    )
  }


export default App;
