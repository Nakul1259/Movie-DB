import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
const urla =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'



function Movies() {
  const { movies,loading } = useGlobalContext();
  if(loading){
    return <h1 className="loading"></h1>
  }
  return (
      <div className="movies">
        {movies.map((info) => {
            const { Title: title, Year: year, imdbID: id, Poster: image } = info;

          return (
              <Link to={`/movies/${id}`} key={id}>
            <article >
              <img src={image === 'N/A' ? urla : image } alt="" />
              <div className="description">
                <span className="movie-title">{title}</span>
                <p>{year}</p>
              </div>
            </article>
        </Link>
          );
        })}
      </div>
  );
}

export default Movies;
