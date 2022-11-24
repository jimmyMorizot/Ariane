// == Import
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';
import './association.scss';

// == Composant
function Association({
  id,
  slug,
  name,
  picture,
  category,
  city,
  description,
}) {
  return (
    <article className="association">
      <div className="association-header">
        <h2 className="association-header-name">
          {name}
        </h2>
        <img
          className="association-header-img"
          src={picture}
          alt={picture}
        />
        <div className="association-header-info">
          <p className="association-header-info-asso">
            {category[0].name}
          </p>
          <p className="association-header-info-asso">
            {city}
          </p>
        </div>
      </div>
      <p className="association-content">
        {description}
      </p>
      <Link
        key={id}
        to={`/associations/${slug}`}
        className="association-link"
      >
        Contacter cette association
      </Link>
    </article>
  );
}

Association.propTypes = {
  id: PropTypesLib.number.isRequired,
  slug: PropTypesLib.string.isRequired,
  name: PropTypesLib.string.isRequired,
  picture: PropTypesLib.string.isRequired,
  category: PropTypesLib.arrayOf(
    PropTypesLib.shape({
      name: PropTypesLib.string,
    }).isRequired,
  ).isRequired,
  city: PropTypesLib.string.isRequired,
  description: PropTypesLib.string.isRequired,
};

// == Export
export default Association;
