// == Imports
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';
import './usertypes.scss';

// == Composant
function UserType({
  text1,
  text2,
  thumbnail,
  className,
  slug,
  link,
}) {
  return (
    <div className={`usertype${className}`}>
      <img
        className={`usertype-img${className}`}
        src={thumbnail}
        alt={thumbnail}
      />
      <div className={`usertype-text${className}`}>
        <p>
          {text1}
        </p>
        <p>
          {text2}
        </p>
      </div>
      <Link
        className={`usertype-button${className}`}
        to={`/${slug}`}
      >{link}
      </Link>
    </div>
  );
}

UserType.propTypes = {
  text1: PropTypesLib.string.isRequired,
  text2: PropTypesLib.string.isRequired,
  thumbnail: PropTypesLib.string.isRequired,
  className: PropTypesLib.string.isRequired,
  slug: PropTypesLib.string.isRequired,
  link: PropTypesLib.string.isRequired,
};

// == Export
export default UserType;
