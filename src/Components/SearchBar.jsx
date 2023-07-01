import React, {useState} from "react";
import useBearStore from "../state";

export const SearchBar = () =>{
  const [search,movies,setMovies,setSearch] = useBearStore((state)=>[state.search,state.movies,state.setMovies,state.setSearch])
    
    const onChange = (e) =>{
        e.preventDefault();
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
        </div>
        
    );
};