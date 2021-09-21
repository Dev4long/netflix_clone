import React, {useState, useEffect} from 'react'
import axios from './axios'
import "./Row.css"
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row(props) {
     
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailer] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results)
            console.log(request)
        }
        fetchData();
    }, [props.fetchUrl]);
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            
            autoplay: 1
        }
    
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailer('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailer(urlParams.get('v'));
                })
            .catch((error) => console.log(error))
        } 
    }

    return (
        <div className= "row">
            <h2>{props.title}</h2>

            <div className= "movies_row">
                {movies.map((movie) => (
                    <img
                        onClick={() =>handleClick(movie)}
                        className={`movie ${props.isLargeRow && "row_posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
