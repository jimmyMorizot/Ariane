// == Imports
import PropTypesLib from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleUser } from '../../actions';
import './toggle.scss';

// == Composant
function Toggle({ userType, isOpen }) {
  const dispatch = useDispatch();
  return (
    <button
      className={`${isOpen ? 'user-toggle-close' : 'user-toggle-open'}`}
      type="button"
      aria-label="user-toggle"
      name={userType.name}
      onClick={(event) => {
        dispatch(toggleUser(event.target.name));
      }}
    />
  );
}

Toggle.propTypes = {
  userType: PropTypesLib.shape({
    name: PropTypesLib.string.isRequired,
  }).isRequired,
  isOpen: PropTypesLib.bool.isRequired,
};

// == Export
export default Toggle;
