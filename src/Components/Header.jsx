import React from 'react';
import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar";
import useBearStore from '../state';

export const Header = () => {
  const [search,movies,setMovies,setSearch] = useBearStore((state)=>[state.search,state.movies,state.setMovies,state.setSearch])
  
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
