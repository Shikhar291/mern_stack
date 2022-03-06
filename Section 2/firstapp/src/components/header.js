import { useContext, useState } from "react";
import { Button, Switch } from "@mui/material";
import { UserContext } from "../userContext";

import { NavLink ,useNavigate} from "react-router-dom";
const Header=({darkTheme ,setDarktheme})=>{

  const { loggedin ,setLoggedin , setCurrentUser} = useContext(UserContext);
  const navigate=useNavigate();

  const logout=()=>{

    setCurrentUser(null);
    setLoggedin(false);
    navigate("/login");
  };


  const showLoggedin = () => {
    if (!loggedin) {
      return (
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Button variant="contained" color="error" onClick={logout}>
            Logout
          </Button>
        </li>
      );
    }
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/listproducts">Product Gallery</NavLink>
        </li>
        
        
        <li className="nav-item">
        <NavLink className="nav-link active" to="/addproduct">Add Product</NavLink>  
        </li>

        <li className="nav-item">
        <NavLink className="nav-link active" to="/manageproduct">Manage Product</NavLink>  
        </li>
        
        
        {/*  */}
          {showLoggedin()}
        
        <li className="nav-item">
          <Switch color="secondary" checked={darkTheme} onChange={(e,v)=>{setDarktheme(v)}}/>
        </li>
      
      </ul>
      
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
}
export default Header;