import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Main from './Main';
import { useState } from 'react';
import Personas from './Personas';

function App() {
  const info = {
    title: 'Mi título',
    description: 'Some quick example text to build on the card '
  };

  return (
    <div className="App bg-fondo">
      {/*Al componente Header le enviamos la url de la imagen */}
      <Header logo={logo} />
      {/*Al componente Main le enviamos el objeto info */}
      <Main data={info} />
      {/* <Button variant="primary">Primary</Button> */}
      <Example />
      <Personas />
    </div>
  );
}


function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* En este <p> se muestra el valor actual del state 'count'. */}
      <p>You clicked {count} times</p>
      {/* De esta forma asignamos una función o callback para que se ejecute en el evento click del botón */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
