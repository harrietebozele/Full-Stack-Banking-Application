function NavBar(){

  function handleLogout(){
    firebase.auth().signOut()
    .then(()=>{
      let homeLogout = document.getElementById('listLink');
      homeLogout.click();
    })
  }
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className = 'container-xl'>
      <a className="navbar-brand" href="#" title = 'EH Bank'>EH Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item" id = 'listLink'>
            <a className="nav-link" href="#/" id = 'homeLogout' title = 'Home'>Home</a>
          </li>
          <li className="nav-item" id = 'createLink'>
            <a className="nav-link" href="#/CreateAccount/" title = 'Create Account'>Create Account</a>
          </li>
          <li className="nav-item" id = 'loginLink'>
            <a className="nav-link" href="#/login/" title = 'Login'>Login</a>
          </li>
          <li className="nav-item" id = 'depositLink'>
            <a className="nav-link" href="#/deposit/" title = 'Deposit'>Deposit</a>
          </li>
          <li className="nav-item" id = 'withdrawLink'>
            <a className="nav-link" href="#/withdraw/" title = 'Withdraw'>Withdraw</a>
          </li>
          <li className="nav-item" id = 'balanceLink'>
            <a className="nav-link" href="#/balance/" title = 'Balance'>Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title = 'AllData'>AllData</a>
          </li>    
          <li className="nav-item" id = 'logoutLink' >
            <a className="nav-link fw-bold" title = 'Logout' onClick = {handleLogout}>Log Out</a>
          </li>      
        </ul>
      </div>
      <div className = 'float-end'>
        <span className = 'fw bold mt-1 text-black' id = 'loggedInStatus'>No User Logged In</span>
      </div>
      </div>
    </nav>

  );
}