// == Imports
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';
import './post.scss';

// == Composant
function Post({
  id,
  slug,
  title,
  description,
  association,
  supply,
  createdAt,
  picture,
}) {
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
  const abstract = description.substring(0, 400);
  return (
    <article className="post">
      <div className="post-header">
        <h2 className="post-header-title">
          {title}
        </h2>
        <img
          className="post-header-img"
          src={picture}
          alt={picture}
        />
        <div className="post-header-info">
          <p className="post-header-info-asso">
            {association} recherche {supply}
          </p>
          <p className="post-header-info-date">
            Publiée le {newDate}
          </p>
        </div>
      </div>
      <p className="post-content">
        {abstract}...
      </p>
      <Link
        key={id}
        to={`/posts/${id}/${slug}`}
        className="post-link"
      >
        Voir le détail de l'annonce
      </Link>
    </article>
  );
}

Post.propTypes = {
  id: PropTypesLib.number.isRequired,
  slug: PropTypesLib.string.isRequired,
  title: PropTypesLib.string.isRequired,
  description: PropTypesLib.string.isRequired,
  association: PropTypesLib.string.isRequired,
  supply: PropTypesLib.string.isRequired,
  createdAt: PropTypesLib.string.isRequired,
  picture: PropTypesLib.string.isRequired,
};

// == Export
export default Post;
