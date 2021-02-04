import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function NotFound404() {
  return (
      <div>
          <h1>404</h1>
          <Button as={Link} to="/">
              Volver al Inicio
          </Button>
      </div>
  );
}