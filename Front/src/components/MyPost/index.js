// == Import
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';
import './mypost.scss';
import { useSelector } from 'react-redux';

// == Composant
function MyPost({
  id,
  title,
  description,
  supply,
  createdAt,
  picture,
}) {
  const name = useSelector((state) => state.user.name);
  const date = createdAt.split('');
  const newDate = (
    date[8]
    + date[9]
    + date[7]
    + date[5]
    + date[6]
    + date[7]
    + date[0]
    + date[1]
    + date[2]
    + date[3]
  );
  return (
    <article className="mypost">
      <div className="mypost-header">
        <h2 className="mypost-header-title">{title}</h2>
        <img className="mypost-header-img" src={picture} alt={picture} />
        <div className="mypost-header-info">
          <p className="mypost-header-info-asso">{name} recherche {supply.name}</p>
          <p className="mypost-header-info-date">Publiée le {newDate}</p>
        </div>
      </div>
      <p className="mypost-content">{description}</p>
      <Link
        key={id}
        to={`/postview/${id}`}
        className="mypost-link"
      >
        Voir le détail de mon annonce et les commentaires
      </Link>
    </article>
  );
}

MyPost.propTypes = {
  title: PropTypesLib.string.isRequired,
  description: PropTypesLib.string.isRequired,
  supply: PropTypesLib.object.isRequired,
  createdAt: PropTypesLib.string.isRequired,
  id: PropTypesLib.number.isRequired,
  picture: PropTypesLib.string.isRequired,
};

// == Export
export default MyPost;
