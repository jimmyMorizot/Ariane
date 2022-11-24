// == Imports
import { useDispatch } from 'react-redux';
import { toggleAuthenticationFailedModal } from '../../actions';
import './authentication.scss';

// == Composant
function AuthenticationFailedModal() {
  const dispatch = useDispatch();
  return (
    <div
      className="authentication-modal"
      onClick={() => {
        dispatch(toggleAuthenticationFailedModal());
      }}
    >
      <div
        className="authentication-modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="authentication-modal-content-close"
          onClick={() => {
            dispatch(toggleAuthenticationFailedModal());
          }}
        >
          &#10006;
        </button>
        <p>
          Email ou mot de passe invalide.
        </p>
      </div>
    </div>
  );
}

// == Export
export default AuthenticationFailedModal;
