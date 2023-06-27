import React, {useState} from "react";
import {Card} from "./Card";
import useBearStore from "../state";

export const SearchBar = () =>{
  const [search,movies,setMovies,setSearch] = useBearStore((state)=>[state.search,state.movies,state.setMovies,state.setSearch])
    
    
    
    // const [query,setQuery] = useState("");
    // const [results, setResults] = useState([]);
    const onChange = (e) =>{
        e.preventDefault();
        // setQuery(e.target.value);
        console.log(e.target.value)
        setSearch(e.target.value)
        

    };

    return (
        <div>
          <input 
                type="text"
                placeholder='Search for a movie'
                value = {search}
                onChange = {onChange}
            />  
            {/* {results.length > 0 &&(
                <ul className="results">
                    {results.map((movie) =>(
                        <li key= {movie.id}>
                            <Card movie = {movie}></Card>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
        
    );
};