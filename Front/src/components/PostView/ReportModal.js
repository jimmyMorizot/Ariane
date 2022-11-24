// == Imports
import { useDispatch } from 'react-redux';
import { toggleReportModal } from '../../actions';
import './postview.scss';

// == Composant
function ReportModal() {
  const dispatch = useDispatch();
  return (
    <div
      className="postview-modal"
      onClick={() => {
        dispatch(toggleReportModal());
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
            dispatch(toggleReportModal());
          }}
        >
          &#10006;
        </button>
        <p>
          Merci pour ton signalement.
          Nos équipes de modération se chargent de l'étudier au plus vite.
        </p>
      </div>
    </div>
  );
}

// == Export
export default ReportModal;
