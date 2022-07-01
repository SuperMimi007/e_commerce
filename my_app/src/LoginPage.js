import './App.css';


function LoginPage(props) {
  return (
    <>
      <nav>
      <h1 id="title">Welcome to Mimi's store</h1>
        <div class="onglets">
          <a class="nav-item" href="#" onClick={event => { props.setCurrentPage('MyCart') }}>My Cart</a>
        </div>
      </nav>
            <div className="containerConnect">
                <form id="formConnect" action ="" method="post">
                <h1 className="LoginTitle">Please login !</h1>
                    <div>
                        <label htmlFor="">email :</label>
                        <input type="email"/>
                    </div>    
                    <div>    
                        <label htmlFor="">password :</label>
                        <input type="password"/>
                    </div>
                        <button>Login</button>
                </form>  
            </div>        
    </>
    )
}

export default LoginPage;