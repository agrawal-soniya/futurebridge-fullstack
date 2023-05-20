import axios from 'axios';
import React, {useEffect, useState} from 'react';
export default function Movies() {

    const [movies, setMovies] = useState<any>();
    const getMoviesData = async () => {
        const moviesData = await axios.get("http://localhost:4000/movies");
        setMovies(moviesData);
       // console.log(movies.data);
    }
    useEffect(() => {
        getMoviesData();
    });
    
 // return <></>;
    return (
<div>
    <h1>Movies</h1>
    {
    movies.data?.forEach((movie: any) => {
        <>
        <h1>helo</h1>
        <div key={movie.id}>
            <span>{movie.name}</span>
            <span>{movie.rating}</span>
            <span>{movie.release_date}</span>
        </div>
        </>
    })}
</div>
    );
}