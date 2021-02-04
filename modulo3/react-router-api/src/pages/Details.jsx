import { useState, useEffect } from 'react';
import { BrowserRouter as useParams } from 'react-router-dom';

import Axios from 'axios';


export default function Details() {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
      getMovie();
  }, []);

  const getMovie = async () => {
      try {
          const resp = await Axios.get(`http://www.omdbapi.com/?i=${idMovie}&apikey=facef525`);
          if (resp.data.Response === 'False') {
              window.alert('Error en el servidor');
              return;
          }
          setMovie(resp.data);
      } catch (error) {
          console.log(error.data);
      }
  };

  return (
      <div>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <span>{movie.imdbRating}</span>
          <br/>
          <img src={movie.Poster} alt=""/>
      </div>
  );
}