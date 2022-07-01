function Soumission() {
  let formData = {
    name: document.getElementById('product').value,
    description: document.getElementById('typeOfProduct').value,
    price: document.getElementById('price').value
  }

  let jsonData = JSON.stringify(formData)
  let options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  }
  fetch('http://localhost:3001/new_product', options)
}

function AddProduct(props) {
  return (
    <body id="nav">
      <p id="home">
        <a href="#" onClick={event => { props.setCurrentPage('MyCart') }}>My cart</a>
        <a> - </a>
        <a href="#" onClick={event => { props.setCurrentPage('LoginPage') }}>Home Page</a>
      </p>
      <div>
        <form id="formAction" onSubmit={Soumission}>
          <h3> ADDING A NEW PRODUCT</h3>
          <br />
          <label id="labelAction"  htmlFor="description">type of product :</label>
          <select id="typeOfProduct" value={props.description} onChange={props.description}>
            <option value="select">required</option>
            <option value="dress">dress</option>
            <option value="pants">pants</option>
            <option value="top">top</option>
            <option value="heel">heel</option>
            <option value="basket">basket</option>
            <option value="short">short</option>
            <option value="skirt">skirt</option>
          </select>
          <br />
          <br />
          <label id="labelAction" htmlFor="product">name : </label>
          <input id="product" name="product" placeholder="required" required />
          <br />
          <br />
          <label htmlFor="price">price : </label>
          <input  id="price" name="price" placeholder="required" required />
          <br />
          <br />
          <p>
            <input id="submit" type="submit" value="create" />
          </p>
          <br />
        </form>
        <br />
      </div>
    </body>
  );
}


export default AddProduct;
