// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toggleBurger, logout } from 'src/actions';
import './headernav.scss';

// == Composant
function HeaderNav() {
  const dispatch = useDispatch();
  const { burgerIsOpen } = useSelector((state) => state);
  const handleClick = () => {
    dispatch(toggleBurger());
  };
  const { logged, id } = useSelector((state) => state.user);
  const association = useSelector((state) => state.user.profil) === 'Association';
  const navigate = useNavigate();
  return (
    <nav className="header-nav">
      <ul className={`${burgerIsOpen ? 'header-nav-links' : 'header-nav-links--closed'}`}>
        <li className="header-nav-link">
          <NavLink
            to="/associations"
          >
            Associations
          </NavLink>
        </li>
        <li className="header-nav-link">
          <NavLink
            to="/posts"
          >
            Annonces
          </NavLink>
        </li>
        { !logged && (
          <li className="header-nav-link">
            <NavLink
              to="/authentication"
            >
              Se connecter
            </NavLink>
          </li>
        )}
        { logged && (
          <>
            <li className="header-nav-link">
              <NavLink
                to={`/profile/${id}`}
              >
                Mon profil
              </NavLink>
            </li>
            { association && (
              <li className="header-nav-link">
                <NavLink
                  to={`/my-posts/${id}`}
                >
                  Mes annonces
                </NavLink>
              </li>
            )}
            <li className="header-nav-link">
              <button
                className="header-nav-link-button"
                type="button"
                onClick={() => {
                  navigate('/authentication');
                  dispatch(logout());
                  localStorage.removeItem('token');
                }}
              >
                Se déconnecter
              </button>
            </li>
          </>
        )}
      </ul>
      <button
        aria-label="toggleBurger"
        type="button"
        className={`${burgerIsOpen ? 'header-nav-button' : 'header-nav-button--closed'}`}
        onClick={handleClick}
      />
    </nav>
  );
}

// == Export
export default HeaderNav;
