import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Main from './Main';

function App() {
  const info = {
    title: 'Mi título',
    description: 'Some quick example text to build on the card '
  };

  return (
    <div className="App">
      {/*Al componente Header le enviamos la url de la imagen */}
      <Header logo={logo} />
      {/*Al componente Main le enviamos el objeto info */}
      <Main data={info} />
      {/* <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
