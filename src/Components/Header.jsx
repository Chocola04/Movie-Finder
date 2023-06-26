import React from 'react';
import {Link} from "react-router-dom";

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
                <input type="text" placeholder='Search for a movie'/>
            </div>
         </div>
    </header>
  )
}
