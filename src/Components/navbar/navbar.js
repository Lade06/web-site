
const NavBar = () => {
    return(
        <div>
           
<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">Active</a>
      </li>
     {/* <div> */}
     <li className="nav-item mr-5">
        <a className="nav-link" href="/">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Sign Up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/">Logins</a>
      </li>
     {/* </div> */}
    </ul>
  </div>
</nav>

</div>

    )
}

export default NavBar;