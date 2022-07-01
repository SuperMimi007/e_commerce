
function ProductPreview(props) {
  
  return (
    <>
      <div class="col11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card overflow-hidden shadow">
          <img src={props.url} class="card-img-top" img-fluid height="200px"/>
          <div class="car-body text-center">
            <br />
            <h5 className="card-title">{props.name}</h5>
            <h5 className="card-title"class="card-title"> Ref n°: {props.idproducts}</h5>
            <h5 className="card-title"> {props.price} €</h5>
          </div>
        </div>
      </div>
    </>
  )
}    

export default ProductPreview;