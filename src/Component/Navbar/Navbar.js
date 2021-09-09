import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {


    return (
        <header>
            <h1>Account app</h1>
            <div className="nav-bar">
                <div className="nav-link">
                    <NavLink to="/" exact>Account</NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to="/add-account" exact>Add Account</NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to="/edit-delete" exact>Edit/Delete</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar;