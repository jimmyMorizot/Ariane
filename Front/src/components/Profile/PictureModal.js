// Imports
import { useDispatch, useSelector } from 'react-redux';
import PropTypesLib from 'prop-types';
import profile1 from 'src/assets/images/profile1.jpg';
import profile2 from 'src/assets/images/profile2.jpg';
import profile3 from 'src/assets/images/profile3.jpg';
import profile4 from 'src/assets/images/profile4.jpg';
import profile5 from 'src/assets/images/profile5.jpg';
import profile6 from 'src/assets/images/profile6.jpg';
import profile7 from 'src/assets/images/profile7.jpg';
import profile8 from 'src/assets/images/profile8.jpg';
import profile9 from 'src/assets/images/profile9.jpg';
import profile10 from 'src/assets/images/profile10.jpg';
import avatar1 from 'src/assets/images/avataaars1.png';
import avatar2 from 'src/assets/images/avataaars2.png';
import avatar3 from 'src/assets/images/avataaars3.png';
import avatar4 from 'src/assets/images/avataaars4.png';
import avatar5 from 'src/assets/images/avataaars5.png';
import avatar6 from 'src/assets/images/avataaars6.png';
import avatar7 from 'src/assets/images/avataaars7.png';
import avatar8 from 'src/assets/images/avataaars8.png';
import {
  changeValue,
  resetUpdatesConfirmation,
  sendProfileUpdatesToApi,
  toggleEditProfileImageModal,
} from '../../actions';
import './profile.scss';

// == Composant
function PictureModal({ association }) {
  const dispatch = useDispatch();
  const updatesSent = useSelector((state) => state.updatesSent);
  return (
    <div
      className="profile-modal"
      onClick={() => {
        dispatch(toggleEditProfileImageModal());
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
            dispatch(toggleEditProfileImageModal());
            dispatch(resetUpdatesConfirmation());
          }}
        >
          &#10006;
        </button>
        { !updatesSent && (
          <>
            <form className="profile-modal-content-form--image">
              { association && (
                <fieldset
                  className="profile-modal-content-form--image-fieldset"
                  name="picture"
                  onChange={(event) => {
                    dispatch(changeValue(event.target.name, event.target.value));
                  }}
                >
                  <legend className="profile-modal-content-form--image-fieldset-legend">
                    Choix d'une image de profil :
                  </legend>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg1" value="/images/profile1.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg1">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile1} alt="Illustration profile1" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg2" value="/images/profile2.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg2">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile2} alt="Illustration profile2" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg3" value="/images/profile3.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg3">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile3} alt="Illustration profile3" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg4" value="/images/profile4.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg4">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile4} alt="Illustration profile4" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg5" value="/images/profile5.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg5">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile5} alt="Illustration profile5" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg6" value="/images/profile6.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg6">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile6} alt="Illustration profile6" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg7" value="/images/profile7.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg7">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile7} alt="Illustration profile7" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg8" value="/images/profile8.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg8">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile8} alt="Illustration profile8" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg9" value="/images/profile9.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg9">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile9} alt="Illustration profile9" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="profileimg10" value="/images/profile10.jpg" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="profileimg10">
                    <img className="profile-modal-content-form--image-fieldset-img" src={profile10} alt="Illustration profile10" />
                  </label>
                </fieldset>
              )}
              { !association && (
                <fieldset
                  className="profile-modal-content-form--image-fieldset"
                  name="picture"
                  onChange={(event) => {
                    dispatch(changeValue(event.target.name, event.target.value));
                  }}
                >
                  <legend className="profile-modal-content-form--image-fieldset-legend">
                    Choix d'une image de profil :
                  </legend>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar1" value="/images/avataaars1.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar1">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar1} alt="Illustration avatar1" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar2" value="/images/avataaars2.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar2">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar2} alt="Illustration avatar2" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar3" value="/images/avataaars3.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar3">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar3} alt="Illustration avatar3" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar4" value="/images/avataaars4.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar4">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar4} alt="Illustration avatar4" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar5" value="/images/avataaars5.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar5">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar5} alt="Illustration avatar5" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar6" value="/images/avataaars6.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar6">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar6} alt="Illustration avatar6" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar7" value="/images/avataaars7.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar7">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar7} alt="Illustration avatar7" />
                  </label>
                  <input className="profile-modal-content-form--image-fieldset-input" type="radio" name="picture" id="avatar8" value="/images/avataaars8.png" />
                  <label className="profile-modal-content-form--image-fieldset-label" htmlFor="avatar8">
                    <img className="profile-modal-content-form--image-fieldset-img" src={avatar8} alt="Illustration avatar8" />
                  </label>
                </fieldset>
              )}
            </form>
            <button
              type="submit"
              className="profile-modal-content-save"
              onClick={() => {
                dispatch(sendProfileUpdatesToApi());
              }}
            >
              Enregistrer l'image de profil
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

PictureModal.propTypes = {
  association: PropTypesLib.bool.isRequired,
};

// == Export
export default PictureModal;
