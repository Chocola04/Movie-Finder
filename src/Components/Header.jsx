import React from 'react';
import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar";

export const Header = () => {
  return (
    <header>
         <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/">Home</Link>
                </div>
                <ul className = "nav-links">
                    <li>
                        <Link to="/Watchlist">Watch List</Link>
                    </li>
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>
                </ul>
                <SearchBar/>
            </div>
         </div>
    </header>
  )
}
