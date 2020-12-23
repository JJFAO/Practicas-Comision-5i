import Axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardArticle from "../components/CardArticle";
import { getStorageArray } from "../utils"


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getMovies();
  }, [page]);

  const cardsMovies = movies.map((movie, i) => <Card title={movie.Title} image={movie.Poster} key={i} />);

  const getMovies = async () => {
    try {
      const resp = await Axios.get(`http://www.omdbapi.com/?apikey=facef525&s=harry&page=${page}`);
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
