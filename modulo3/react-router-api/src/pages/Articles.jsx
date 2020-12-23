import CardArticle from "../components/CardArticle";
import { getStorageArray } from "../utils"


export default function Articles() {
  // Traemos de localStorage el array de artículos y lo guardamos en la constante articles.
  const articles = getStorageArray('articles');
  console.log('Articles - articles', articles);

  // Mapeamos el array para obtener un array de jsx para tener los artículos en cards.
  const cardsArticles = articles.map((art, i) => <CardArticle article={art} key={i} />)

  return (
    <div>
      {/* En el retorno del componente, que es lo que se mostrará en pantalla, traemos el contenido de la constante cardArticles. */}
      {cardsArticles}
    </div>
  )
}
