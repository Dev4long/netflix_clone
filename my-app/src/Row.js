import React, {useState, useEffect} from 'react'
import axios from './axios'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row(props) {
     
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results)
            console.table(request)
        }
        fetchData();
    },[props.fetchUrl]);

    return (
        <div ClassName= "row">
            <h2>{props.title}</h2>

            <div className= "movies_row">
                {movies.map(movies => (
                    <img className="movies" src={`${base_url}${movies.poster_path}`}
                    alt={movies.name} />
                ))}
            </div>


        </div>
    )
}

export default Row
