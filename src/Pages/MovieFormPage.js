import { useState } from "react";


const MovieFormPage = (props) => {
    const [title, saveTitle] = useState();

    return (
        <div>
            <h1>Movie Form Page</h1>
            <label>Enter movie title here</label>
            <input type="text" value={title} onChange={(e) => {
                saveTitle(e.target.value)
            }}></input>
            <button onClick={() => {
                props.handleAddMovie(title);
                saveTitle("")
            }}>Add Movie</button>
        </div>
    )
};

export default MovieFormPage;