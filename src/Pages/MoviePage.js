import {useParams} from "react-router-dom";

const MoviePage = (props) => {
    const params = useParams();
    const titleParam = params.title;

    const foundMovie = props.movieList.find((movie) => {
        if (movie.Title === titleParam){
            console.log(movie.Title)
            return true
        }
    });
    console.log(foundMovie)
    return (
        <div>
            <h1>Movie Page</h1>
            <h2>Title: {foundMovie.Title}</h2>
            <p>Director: {foundMovie.Director}</p>
            <p>Actors: {foundMovie.Actors}</p>
            <p>Plot: {foundMovie.Plot}</p>
        </div>
    )
};

export default MoviePage;