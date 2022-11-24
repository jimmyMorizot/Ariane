// == Imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  changeCandidacyTextValue,
  closePostModal,
  sendCandidacyToApi,
  sendModal,
  setUpCandidacy,
} from '../../actions';
import './postpage.scss';

// == Composant
function PostModal() {
  const logged = useSelector((state) => state.user.logged);
  const Modal = useSelector((state) => state.sendModal);
  const content = useSelector((state) => state.candidacy.content);
  const userId = useSelector((state) => state.user.id);
  const { id: postId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUpCandidacy(userId, postId));
  });
  return (
    <div
      className="postpage-modal"
      onClick={() => {
        dispatch(closePostModal());
      }}
    >
      { !logged && (
        <div
          className="postpage-modal-content"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            type="button"
            className="postpage-modal-content-close"
            onClick={() => {
              dispatch(closePostModal());
            }}
          >
            &#10006;
          </button>
          <h2 className="postpage-modal-content-title">
            Tu n'es pas encore connecté
          </h2>
          <p className="postpage-modal-content-text">
            Merci de te connecter ou de créer un compte
            pour pouvoir apporter ton aide aux associations.
          </p>
          <Link
            to="/authentication"
            className="postpage-modal-content-link"
          >
            Je m'identifie / Je m'inscris
          </Link>
        </div>
      )}
      { logged && (
        <>
          { !Modal && (
          <form
            className="postpage-modal-content"
            type="submit"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(sendModal());
              dispatch(sendCandidacyToApi());
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <button
              type="button"
              className="postpage-modal-content-close"
              onClick={() => {
                dispatch(closePostModal());
              }}
            >
              &#10006;
            </button>
            <div className="postpage-modal-content-description">
              En proposant ton aide, tu acceptes que l'association à l'origine
              de l'annonce à laquelle tu postules accède à tes coordonnées
              afin de pouvoir te contacter.
            </div>
            <textarea
              className="postpage-modal-content-area"
              placeholder="Préciser dans quelle mesure vous pouvez apporter votre aide"
              value={content}
              onChange={(event) => {
                dispatch(changeCandidacyTextValue(event.target.value));
              }}
              required
            />
            <button
              type="submit"
              className="postpage-modal-content-button"
            >
              Envoyer ma candidature
            </button>
          </form>
          )}
          { Modal && (
          <div
            className="postpage-modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <button
              type="button"
              className="postpage-modal-content-close"
              onClick={() => {
                dispatch(closePostModal());
              }}
            >
              &#10006;
            </button>
            <h2 className="postpage-modal-content-title">
              Ton message a bien été envoyé !
            </h2>
            <Link
              to="/posts"
              className="postpage-modal-content-link"
            >
              Revenir aux annonces
            </Link>
          </div>
          )}
        </>
      )}
    </div>
  );
}

// == Export
export default PostModal;
