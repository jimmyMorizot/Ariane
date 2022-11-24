import { useDispatch, useSelector } from 'react-redux';
import PropTypesLib from 'prop-types';
import {
  changeValue,
  resetUpdatesConfirmation,
  sendProfileUpdatesToApi,
  toggleEditProfileInfoModal,
} from '../../actions';
import './profile.scss';

// == Composant
function InfoModal({ association }) {
  const user = useSelector((state) => state.user);
  const updatesSent = useSelector((state) => state.updatesSent);
  const dispatch = useDispatch();
  return (
    <div
      className="profile-modal"
      onClick={() => {
        dispatch(toggleEditProfileInfoModal());
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
            dispatch(toggleEditProfileInfoModal());
            dispatch(resetUpdatesConfirmation());
          }}
        >
          &#10006;
        </button>
        { !updatesSent && (
          <>
            <h1 className="profile-modal-content-title">
              Mettre à jour mes données
            </h1>
            <form
              className="profile-modal-content-form"
            >
              { !association && (
                <div className="profile-modal-content-form-field">
                  <label
                    htmlFor="firstname"
                    className="profile-modal-content-form-label"
                  >
                    Prénom
                    <input
                      value={user.firstname}
                      onChange={(event) => {
                        dispatch(changeValue(event.target.id, event.target.value));
                      }}
                      className="profile-modal-content-form-input"
                      id="firstname"
                      placeholder="Prénom"
                      required
                    />
                  </label>
                </div>
              )}
              { !association && (
                <div className="profile-modal-content-form-field">
                  <label
                    htmlFor="lastname"
                    className="profile-modal-content-form-label"
                  >
                    Nom
                    <input
                      value={user.lastname}
                      onChange={(event) => {
                        dispatch(changeValue(event.target.id, event.target.value));
                      }}
                      className="profile-modal-content-form-input"
                      id="lastname"
                      placeholder="Nom"
                      required
                    />
                  </label>
                </div>
              )}
              <div className="profile-modal-content-form-field">
                <label
                  htmlFor="address"
                  className="profile-modal-content-form-label"
                >
                  Adresse
                  <input
                    value={user.address}
                    onChange={(event) => {
                      dispatch(changeValue(event.target.id, event.target.value));
                    }}
                    className="profile-modal-content-form-input"
                    id="address"
                    placeholder="Adresse"
                    required
                  />
                </label>
              </div>
              <div className="profile-modal-content-form-field">
                <label
                  htmlFor="postCode"
                  className="profile-modal-content-form-label"
                >
                  Code postal
                  <input
                    value={user.postCode}
                    onChange={(event) => {
                      dispatch(changeValue(event.target.id, event.target.value));
                    }}
                    className="profile-modal-content-form-input"
                    id="postCode"
                    placeholder="Code postal"
                    required
                  />
                </label>
              </div>
              <div className="profile-modal-content-form-field">
                <label
                  htmlFor="city"
                  className="profile-modal-content-form-label"
                >
                  Ville
                  <input
                    value={user.city}
                    onChange={(event) => {
                      dispatch(changeValue(event.target.id, event.target.value));
                    }}
                    className="profile-modal-content-form-input"
                    id="city"
                    placeholder="Ville"
                    required
                  />
                </label>
              </div>
              <div className="profile-modal-content-form-field">
                <label
                  htmlFor="country"
                  className="profile-modal-content-form-label"
                >
                  Pays
                  <input
                    value={user.country}
                    onChange={(event) => {
                      dispatch(changeValue(event.target.id, event.target.value));
                    }}
                    className="profile-modal-content-form-input"
                    id="country"
                    placeholder="Pays"
                    required
                  />
                </label>
              </div>
              <div className="profile-modal-content-form-field">
                <label
                  htmlFor="phoneNumber"
                  className="profile-modal-content-form-label"
                >
                  Numéro de téléphone
                  <input
                    value={user.phoneNumber}
                    onChange={(event) => {
                      dispatch(changeValue(event.target.id, event.target.value));
                    }}
                    className="profile-modal-content-form-input"
                    id="phoneNumber"
                    placeholder="Numéro de téléphone"
                    required
                  />
                </label>
              </div>
            </form>
            <button
              type="submit"
              className="profile-modal-content-save"
              onClick={() => {
                dispatch(sendProfileUpdatesToApi());
              }}
            >
              Enregistrer les modifications
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

InfoModal.propTypes = {
  association: PropTypesLib.bool.isRequired,
};

// == Export
export default InfoModal;
