import React, { Component } from 'react';

//Stateless Functional Component
const Navbar = ({totalCounters}) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                ItemsSelected 
                <span className="badge badge-pill badge-secondary m-3">
                    {totalCounters}
                </span>
            </a>
    
        </nav> 
    );
};

 
export default Navbar;