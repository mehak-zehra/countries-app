import React, { useState } from 'react';
import logo from '../icons8-compass-48.png'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="" href="/#" >
                    <img src={logo} alt="something"></img>
                </a>
                <div className="logo-section">
                    <h2>Countries</h2>
                </div>
                <button className="btn btn-outline-warning btn-md pl-3 pr-3" id="search-btn" onClick="">Search</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/#">About</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/#">Contact</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/#">Search</a>
                        </li>

                    </ul>
                </div> */}
            </div>
        </nav>

    )

}
export default Navbar