// == Imports
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findPostpage } from 'src/selectors/postpage';
import { postsModal, reportPost } from '../../actions';
import PostModal from './PostModal';
import ReportModal from '../PostView/ReportModal';
import './postpage.scss';

// == Composant
function PostPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug, id: postId } = useParams();
  const postpage = useSelector((state) => findPostpage(state.posts, slug));
  if (postpage === undefined) {
    return <Navigate to="/posts" replace />;
  }
  const reportModalIsOpen = useSelector((state) => state.reportModalIsOpen);
  const date = postpage.createdAt;
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
  const showModal = useSelector((state) => state.showModalPost);
  return (
    <div className="postpage">
      <div className="postpage-header">
        <h2 className="postpage-header-title">
          {postpage.title}
        </h2>
        <img
          className="postpage-header-img"
          src={postpage.picture}
          alt={postpage.picture}
        />
        <div className="postpage-header-info">
          <p className="postpage-header-info-asso">
            {postpage.user.name} recherche {postpage.supply.name}
          </p>
          <p className="postpage-header-info-date">
            Publiée le {newDate}
          </p>
        </div>
      </div>
      <p className="postpage-description">
        {postpage.description}
      </p>
      <button
        type="button"
        className="postpage-button"
        onClick={() => {
          dispatch(postsModal());
        }}
      >
        J'apporte mon aide
      </button>
      <button
        type="button"
        className="postpage-goback"
        onClick={() => {
          navigate(-1);
        }}
      >
        Retour aux annonces
      </button>
      <button
        type="button"
        className="postpage-report"
        onClick={() => {
          dispatch(reportPost(postId));
        }}
      >
        Signaler cette annonce
      </button>
      { showModal && <PostModal />}
      { reportModalIsOpen && <ReportModal />}
    </div>
  );
}

// == Export
export default PostPage;
