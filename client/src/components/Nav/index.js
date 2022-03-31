import React from "react";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
//TODO: Change header to be responsive so it doesn't overlap with anything
//TODO: Break the bar so that The links are underneath Freddy's name banner
//TODO: style Logout and Order History?
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <Menu>
          <Menu.Item as={ NavLink } 
            exact to="/orderHistory"> Order History </Menu.Item>
            
            
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          </Menu>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <Menu>
            <Menu.Item as={ NavLink } 
            exact to="/signup">
              Sign Up
            </Menu.Item>

              <Menu.Item as={ NavLink }
              exact to="/login">
            Login
              </Menu.Item>

          </Menu>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1"  style ={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🚜
          </span>
          Fresh Freddy's Produce
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
      
    </header>
    
  );
}

export default Nav;
