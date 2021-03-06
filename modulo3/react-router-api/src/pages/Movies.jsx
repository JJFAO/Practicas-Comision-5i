import Axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";


export default function Movies() {
  const [movies, setMovies] = useState([]);
  // const arrayState = useState([]);
  // const movies = arrayState[0];
  // const setMovies = arrayState[1];
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies();
  }, [page]);

  const cardsMovies = movies.map((movie) => <Card title={movie.Title} image={movie.Poster} key={movie.imdbID} id={movie.imdbID} />);

  const getMovies = async () => {
    try {
      const resp = await Axios.get(`http://www.omdbapi.com/?s=harry`, {
        params: {
          apikey: 'facef525',
          page,
        }
      });
      if (resp.data.Response === 'False') {
        window.alert('Error en el servidor');
        return;
      }
      setMovies(resp.data.Search);
    } catch (error) {
      console.log(error.data);
    }

  }

  const handleClick = (count) => {
    setPage(page + count);
  };

  return (
    <div className="container">
      <h3>Películas de Harry Potter</h3>
      <p>{page}</p>
      {page > 1 && <button onClick={() => handleClick(-1)}>Anterior página</button>}
      <button onClick={() => handleClick(1)}>Siguiente página</button>
      <div className="row">
        {cardsMovies}
      </div>
    </div>
  )
}
