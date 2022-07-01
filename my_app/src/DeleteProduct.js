
function Soumission() {
  let formData = {
    idproducts: document.getElementById('idproducts').value,
  }
  let jsonData = JSON.stringify(formData)
  let options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  }
  fetch('http://localhost:3001/delete_product', options)
}

function DeleteProduct(props) {
  return (
    <body id="nav">
      <p id="home">
        <a href="#" onClick={event => { props.setCurrentPage('MyCart') }}>My cart</a>
        <a> - </a>
        <a href="#" onClick={event => { props.setCurrentPage('LoginPage') }}>Home Page</a>
      </p>
      <div>
        <form id="formAction" onSubmit={Soumission}>
          <h3> DELETE PRODUCT</h3>
          <br />
          <br />
          <label htmlFor="idproducts"> purchase_nb : </label>
          <input id="idproducts" name="idproducts" placeholder="required" required />
          <br />
          <br />
          <br />
          <input id="submit" type="submit" value="delete" />
          <br />
        </form>
        <br />
      </div>
    </body>
  );
}

export default DeleteProduct;
