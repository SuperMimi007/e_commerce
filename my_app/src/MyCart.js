import './App.css';
import ProductPreview from './ProductPreview';
import React, { useEffect, useState } from 'react'



function ChoixUrl(description) {
  if (description === "dress")
    return "dress.jpg"
  if (description === "pants")
    return "pants.jpg"
  if (description === "heel")
    return "loulou.jpg"
  if (description === "basket")
    return "basket.jpg"
  if (description === "top")
    return "top.jpg"
  if (description === "skirt")
    return "skirt.jpg"  
  if (description === "short")
    return "short.jpg" 
}


function MyCart(props) {
  let [products, setProducts] = useState([])
  console.log("avant fetch")
  useEffect(() => {
    //console.log ("fetch envoie une requete au serveur")
    fetch("http://localhost:3001/get_products")
      .then((response) => response.json())
      .then((jsonBackend) => {
        setProducts(jsonBackend)
      })
      // console.log("après fetch")
  }, [])
  return (
    <>
      <div id="CartBand">
        <nav>
        <div class="onglets">
          <a class="nav-item" href="#" onClick={event => { props.setCurrentPage('AddProduct') }}>Add</a>
          <a class="nav-item" href="#" onClick={event => { props.setCurrentPage('DeleteProduct') }}>Delete</a>
          <a class="nav-item" href="#" onClick={event => { props.setCurrentPage('LoginPage') }}>Home Page</a>
        </div>
         </nav>
      </div>    
      <div id="mainContainer">  
        <h1 id="cartTitle">My cart</h1>
          <section>
            <div className="row justify content-center">
              {products.map(product => <ProductPreview
                idproducts={product.idproducts}
                description={product.description}
                name={product.name}
                price={product.price}
                url={ChoixUrl(product.description)} />)
              }
            </div>
         </section>
      </div>
      <div id="Cartfooter">
      <h1 className="LoginTitle">Total of my cart</h1>
      </div>
    </>
    
  );
  
}


export default MyCart;