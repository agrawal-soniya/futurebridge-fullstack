import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function Home() {

    const [movies, setMovies] = useState<any>();
    const getMoviesData = async () => {
        const moviesData = await axios.get("http://localhost:4000/movies");
        setMovies(moviesData);
        //console.log(movies.data);
    }
    useEffect(() => {
        getMoviesData();
    }, []);
    
 // return <></>;
    return (
<div>
    {
    movies?.data?.forEach((movie: any) => {
        <div key={movie.id}>
            <span>{movie.name}</span>
            <span>{movie.rating}</span>
            <span>{movie.release_date}</span>
        </div>
    })}
</div>
    );
}