// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeDeletedModal } from '../../actions';
import './postview.scss';

// == Composant
function DeletedMyPostModal() {
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="postview-modal"
      onClick={() => {
        dispatch(closeDeletedModal());
        navigate(`/my-posts/${id}`);
      }}
    >
      <div
        className="postview-modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="postview-modal-content-close"
          onClick={() => {
            dispatch(closeDeletedModal());
            navigate(`/my-posts/${id}`);
          }}
        >
          &#10006;
        </button>
        <h1 className="postview-modal-content-title">
          L'annonce a bien été supprimée.
        </h1>
      </div>
    </div>
  );
}

// == Export
export default DeletedMyPostModal;
