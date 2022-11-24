// Imports
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeInscriptionModal } from '../../actions';
import './inscription.scss';

// == Composant
function InscriptionModal() {
  const dispatch = useDispatch();
  const { error, errorText } = useSelector((state) => state.inscriptionForm);
  return (
    <div
      className="inscription-modal"
      onClick={() => {
        dispatch(closeInscriptionModal());
      }}
    >
      <div
        className="inscription-modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="inscription-modal-content-close"
          onClick={() => {
            dispatch(closeInscriptionModal());
          }}
        >
          &#10006;
        </button>
        { !error && (
          <>
            <p>
              Merci pour ton inscription !
            </p>
            <p>
              Tu peux dès à présent te connecter pour proposer ton aide.
            </p>
            <Link
              to="/authentication"
              className="inscription-modal-link"
            >
              Se connecter
            </Link>
          </>
        )}
        { error && (
          <>
            <p>
              Une erreur s'est produite
            </p>
            <p>
              {errorText}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// == Export
export default InscriptionModal;
