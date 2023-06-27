import React, { useEffect } from "react";
import useBearStore from "../state";
import { Card } from "./Card";

export const Home = () => {
  const [search,movies,setMovies,setSearch] = useBearStore((state)=>[state.search,state.movies,state.setMovies,state.setSearch])

async function fetchMovies(){
  const api_key = "1ba115c15413cdefa111ceb87e4f8465";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&sort_by=popularity.desc&language=en-US&page=1&include_adult=false&query=${search}`;
        await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if(!data.errors){
              console.log("data :",data.results);  
              setMovies(data.results)
            }
        }); 
}

  // useEffect(()=>{
  //   Promise.all([fetchMovies()])
  // },[search])


  return (
    <div>
     <h1>movies</h1>
      {
        movies.map((movie,index)=>{
          return <Card key={index} movie={movie} ></Card>
        })
      }
    </div>
  );
};
