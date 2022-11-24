// == Imports
import PropTypesLib from 'prop-types';
import UserType from './UserType';
import './usertypes.scss';

// == Composant
function UserTypes({ userType, isOpen }) {
  return (
    <div className="usertypes">
      <h3 className="usertypes-title">
        {userType.title}
      </h3>
      <UserType
        {...userType}
        className={`${isOpen ? '' : '--closed'}`}
      />
    </div>
  );
}

UserTypes.propTypes = {
  userType: PropTypesLib.shape({
    id: PropTypesLib.number.isRequired,
    title: PropTypesLib.string.isRequired,
    text1: PropTypesLib.string.isRequired,
    text2: PropTypesLib.string.isRequired,
    thumbnail: PropTypesLib.string.isRequired,
    name: PropTypesLib.string.isRequired,
  }).isRequired,
  isOpen: PropTypesLib.bool.isRequired,
};

// == Export
export default UserTypes;
