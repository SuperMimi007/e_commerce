//importation de la librairie
var mysql = require('mysql');


function connectToMySQL() {
  //établissment de la connection avec la base de donnée
  //envoie du mot de passe / identifiant nécessaire
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mimi1980',
    database: 'ecommerce'
  });
  connection.connect();
  return connection
}

//c'est la connection qui nous permet d'envoyer des
//requêtes à la base de donnée
function GetMyCart(fonction_traitement_resultat_bdd) {
  let connection = connectToMySQL()
  let query = "SELECT * FROM listeproduits"

  connection.query(query, fonction_traitement_resultat_bdd);
  
  connection.end()
}


function insertProduct(values_to_insert, apres_traitement) {
  let connection = connectToMySQL()
  let query = `INSERT INTO  listeproduits (description,name,price) VALUES (?,?,?)`

  connection.query(query, values_to_insert, (error, results) => {
    if (error) {
      console.log(error)
    }

    console.log("results", results)
    console.log("après insertion")

    connection.commit()
    connection.end()

    apres_traitement()
    console.log(apres_traitement)
  })
}

function deleteProduct(values_to_delete, apres_suppression) {
  let connection = connectToMySQL()
  let query = `DELETE FROM listeproduits WHERE idproducts = ?`
  connection.query(query, values_to_delete, (error, results) => {
    if (error) {
      console.log(error)
    }
    connection.commit()
    connection.end()
    apres_suppression()
  })
}

// let totalCart= [];
// for(let m=0;m<GetMyCart.price;m++){
//   let productsPrice = GetMyCart.price[m].price;
// }


module.exports = {
  GetMyCart: GetMyCart,
  insertProduct: insertProduct,
  deleteProduct: deleteProduct,
}