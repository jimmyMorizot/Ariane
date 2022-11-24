// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeNewPostSentModal } from '../../actions';
import './newpost.scss';

// == Composant
function NewPostModal() {
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="newpost-modal"
      onClick={() => {
        dispatch(closeNewPostSentModal());
        navigate(`/my-posts/${id}`);
      }}
    >
      <div
        className="newpost-modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="newpost-modal-content-close"
          onClick={() => {
            dispatch(closeNewPostSentModal());
            navigate(`/my-posts/${id}`);
          }}
        >
          &#10006;
        </button>
        <h1 className="newpost-modal-content-title">
          L'annonce a bien été publiée.
        </h1>
      </div>
    </div>
  );
}

// == Export
export default NewPostModal;
