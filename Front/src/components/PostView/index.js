// == Imports
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Appliances from '../Appliances';
import ReportModal from './ReportModal';
import DeletedMyPostModal from './DeletedMyPostModal';
import { findUserpost } from '../../selectors/postview';
import { getCandidacyFromApi, deleteMyPostFromApi } from '../../actions';
import './postview.scss';

// == Composant
function PostView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const postview = useSelector((state) => findUserpost(state.userPosts, id));
  const reportModalIsOpen = useSelector((state) => state.reportModalIsOpen);
  useEffect(() => {
    dispatch(getCandidacyFromApi(id));
  });
  const name = useSelector((state) => state.user.name);
  const date = postview.createdAt;
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
  const showDeletedModal = useSelector((state) => state.deleteModal);
  const handleClickDelete = () => {
    dispatch(deleteMyPostFromApi(id));
  };

  return (
    <>
      <button
        type="button"
        className="goback"
        onClick={() => {
          navigate(-1);
        }}
      >
        Retour aux annonces
      </button>
      <div className="container">
        <button
          type="button"
          className="container-delete"
          onClick={() => {
            handleClickDelete();
          }}
        >
          &#128465; Supprimer l'annonce
        </button>
      </div>
      <div className="postview">
        <div className="postview-header">
          <h2 className="postview-header-title">
            {postview.title}
          </h2>
          <img
            className="postview-header-img"
            src={postview.picture}
            alt={postview.picture}
          />
          <div className="postview-header-info">
            <p className="postview-header-info-asso">
              {name} recherche {postview.supply.name}
            </p>
            <p className="postview-header-info-date">
              Publiée le {newDate}
            </p>
          </div>
        </div>
        <p className="postview-description">
          {postview.description}
        </p>
        <div className="postview-com">
          <Appliances postId={id} />
        </div>
        { showDeletedModal && <DeletedMyPostModal />}
      </div>
      { reportModalIsOpen && <ReportModal />}
    </>
  );
}

// == Export
export default PostView;
