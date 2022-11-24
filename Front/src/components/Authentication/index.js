// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../actions';
import Field from './Field';
import AuthenticationFailedModal from './AuthenticationFailedModal';
import './authentication.scss';

// == Composant
function Authentication() {
  const {
    email,
    password,
    logged,
  } = useSelector((state) => state.user);
  const authenticationFailedIsOpen = useSelector((state) => state.authenticationFailedModalIsOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (logged) {
    navigate(-1);
  }
  return (
    <div className="authentication">
      <h1 className="authentication-title">
        Bonjour
      </h1>
      <form
        autoComplete="off"
        className="authentication-form-element"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(login());
        }}
      >
        <Field
          name="email"
          type="email"
          placeholder="Adresse Email"
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={password}
        />
        <button
          type="submit"
          className="authentication-form-button"
        >
          Se connecter
        </button>
      </form>
      <a href="#" className="authentication-forgot">
        Mot de passe oublié ?
      </a>
      <div className="authentication-new">
        <p className="authentication-new-title">
          Pas encore de compte ?
        </p>
        <Link
          to="/registration"
          className="authentication-new-inscription"
        >
          S'inscrire
        </Link>
      </div>
      { authenticationFailedIsOpen && <AuthenticationFailedModal />}
    </div>
  );
}

// == Export
export default Authentication;
