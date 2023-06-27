import React, {useState} from "react";
import {Card} from "./Card";
export const SearchBar = () =>{
    const [query,setQuery] = useState("");
    const [results, setResults] = useState([]);
    const onChange = (e) =>{
        e.preventDefault();
        setQuery(e.target.value);
        const api_key = "1ba115c15413cdefa111ceb87e4f8465";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&sort_by=popularity.desc&language=en-US&page=1&include_adult=false&query=${e.target.value}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if(!data.errors){
                setResults(data.results);
            }else{
                setResults([]);
            }
        }); 

    };

    return (
        <div>
          <input 
                type="text"
                placeholder='Search for a movie'
                value = {query}
                onChange = {onChange}
            />  
            {results.length > 0 &&(
                <ul className="results">
                    {results.map((movie) =>(
                        <li key= {movie.id}>
                            <Card movie = {movie}></Card>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        
    );
};