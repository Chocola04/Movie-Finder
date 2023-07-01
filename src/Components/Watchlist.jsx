import React from "react";
import { Card } from "./Card";
import useBearStore from "../state";

export const Watchlist = () =>{
    const [search,movies,setMovies,setSearch] = useBearStore((state)=>[state.search,state.movies,state.setMovies,state.setSearch]);
    return (
        <div>
            <Card></Card>
        </div>
    );
};