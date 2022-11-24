// Imports
import { useDispatch, useSelector } from 'react-redux';
import PropTypesLib from 'prop-types';
import {
  resetUpdatesConfirmation,
  toggleEditProfileDescriptionModal,
  changeValue,
  sendProfileUpdatesToApi,
} from '../../actions';
import './profile.scss';

// == Composant
function DescriptionModal({ association }) {
  const dispatch = useDispatch();
  const updatesSent = useSelector((state) => state.updatesSent);
  let description = useSelector((state) => state.user.description);
  if (description === null) {
    description = '';
  }
  return (
    <div
      className="profile-modal"
      onClick={() => {
        dispatch(toggleEditProfileDescriptionModal());
        dispatch(resetUpdatesConfirmation());
      }}
    >
      <div
        className="profile-modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="profile-modal-content-close"
          onClick={() => {
            dispatch(toggleEditProfileDescriptionModal());
            dispatch(resetUpdatesConfirmation());
          }}
        >
          &#10006;
        </button>
        { !updatesSent && (
          <>
            <h1 className="profile-modal-content-title">
              Décris {association ? 'l\'association' : '- toi'} en quelques mots
            </h1>
            <textarea
              value={description}
              name="description"
              className="postpage-modal-content-area"
              placeholder="Place à la créativité ;)"
              onChange={(event) => {
                dispatch(changeValue(event.target.name, event.target.value));
              }}
            />
            <button
              type="submit"
              className="profile-modal-content-save"
              onClick={() => {
                dispatch(sendProfileUpdatesToApi());
              }}
            >
              Enregistrer la description
            </button>
          </>
        )}
        { updatesSent && (
          <h1 className="profile-modal-content-sent">
            Les modifications ont bien été prises en compte.
          </h1>
        )}
      </div>
    </div>
  );
}

DescriptionModal.propTypes = {
  association: PropTypesLib.bool.isRequired,
};

// == Export
export default DescriptionModal;
