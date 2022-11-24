// == Imports
import { Link } from 'react-router-dom';
import './error.scss';

// == Composant
function Error() {
  return (
    <div className="error">
      <h1 className="error-title">
        404
      </h1>
      <p className="error-text">
        La page demandée n'existe pas.
      </p>
      <Link
        to="/"
        className="error-returnhome"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

// == Export
export default Error;
