const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
app.use(cors({origin :"http://localhost:3000",
credentials:true,
}));
app.use(express.json());
const db = require ('./src/dbUtils');

const cookieParser =require ('cookie-parser');
app.use(cookieParser());

app.get('/get_products', (request, response) => {
  db.GetMyCart(
    function(error,results){
      response.cookie("monpremiercookie","je te vois",{maxAge:2000000,htppOnly: true});
      console.log("send cookie")
    response.send(results)
    }
  )
})

//ajouter une tache
app.post('/new_product', (request, response) => {
  let formData = [request.body['description'], request.body['name'],request.body['price']]
  db.insertProduct (formData, function(){
  response.redirect ("/get_products")
  })

})

// supprimer un produit
app.post('/delete_product', (request, response) => {
  let formData = [request.body['idproducts']]
  db.deleteProduct (formData, function(){
    response.redirect ("/get_products")
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})