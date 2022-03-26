import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import * as Icons from "@material-ui/icons";

export default function NavBar () {
  return(
    <nav className={`${s.nav}`}>
      <NavLink to={'/'}><Icons.Restaurant /></NavLink>
      <ul>
        <li><NavLink to={'/home'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/recipes'}>Recipes</NavLink></li>
        <li><NavLink to={'/favorites'}>Favorites</NavLink></li>
        {/*aca iria el if esta logueado que muestre log out*/}
        <li><NavLink to={'/login'}>Log In</NavLink></li>
      </ul>
    </nav>
  )
}