// == Import
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toggleEditProfileDescriptionModal, toggleEditProfileImageModal, toggleEditProfileInfoModal } from '../../actions';
import InfoModal from './InfoModal';
import PictureModal from './PictureModal';
import DescriptionModal from './DescriptionModal';
import './profile.scss';

// == Composant
function Profile() {
  const {
    logged,
    profil,
    name,
    firstname,
    lastname,
    address,
    city,
    country,
    description,
    email,
    phoneNumber,
    picture,
    postCode,
    category,
  } = useSelector((state) => state.user);
  if (!logged) {
    return <Navigate to="/authentication" replace />;
  }
  const dispatch = useDispatch();
  const association = (profil === 'Association');
  const editProfileInfo = useSelector((state) => state.editProfileInfoIsOpen);
  const editProfileImage = useSelector((state) => state.editProfileImageIsOpen);
  const editProfileDescription = useSelector((state) => state.editProfileDescriptionIsOpen);
  return (
    <div className="profile">
      { association && (
        <div className="profile-container">
          <div className="profile-page">
            <h1 className="profile-page-title">
              Profil
            </h1>
            <p className="profile-page-description">
              Voir et mettre à jour mes informations ici.
            </p>
          </div>
          <div className="profile-header">
            <h2 className="profile-header-title">
              {name}
            </h2>
            <h4 className="profile-header-category">
              {category}
            </h4>
            <button
              type="button"
              className="profile-content-info-edit"
              onClick={() => {
                dispatch(toggleEditProfileImageModal());
              }}
            >
              {picture === null ? 'Choisir' : 'Modifier'} mon image de profil &#9998;
            </button>
            <img
              className="profile-header-img"
              src={picture}
              alt={picture}
            />
            <button
              type="button"
              className="profile-content-info-edit"
              onClick={() => {
                dispatch(toggleEditProfileDescriptionModal());
              }}
            >
              {description === null ? 'Rédiger' : 'Modifier'} ma description &#9998;
            </button>
            <p className="profile-header-description">
              {description}
            </p>
          </div>
          <div className="profile-content">
            <button
              type="button"
              className="profile-content-info-edit"
              onClick={() => {
                dispatch(toggleEditProfileInfoModal());
              }}
            >
              Modifier mes informations &#9998;
            </button>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Email
              </h4>
              <p className="profile-content-info-user">
                {email}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Mot de passe
              </h4>
              <p className="profile-content-info-user">
                **********
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Adresse
              </h4>
              <p className="profile-content-info-user">
                {address}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Code postal
              </h4>
              <p className="profile-content-info-user">
                {postCode}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Ville
              </h4>
              <p className="profile-content-info-user">
                {city}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Pays
              </h4>
              <p className="profile-content-info-user">
                {country}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Numéro de téléphone
              </h4>
              <p className="profile-content-info-user">
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      )}
      { !association && (
        <div className="profile-container">
          <div className="profile-page">
            <h1 className="profile-page-title">
              Profil
            </h1>
            <p className="profile-page-description">
              Voir et mettre à jour mes informations ici.
            </p>
          </div>
          <div className="profile-header">
            <button
              type="button"
              className="profile-content-info-edit"
              onClick={() => {
                dispatch(toggleEditProfileImageModal());
              }}
            >
              {picture === null ? 'Choisir' : 'Modifier'} mon image de profil &#128393;
            </button>
            <img
              className="profile-header-img--volunteer"
              src={picture}
              alt={picture}
            />
            <button
              type="button"
              className="profile-content-info-edit"
              onClick={() => {
                dispatch(toggleEditProfileDescriptionModal());
              }}
            >
              {description === null ? 'Rédiger' : 'Modifier'} ma description &#128393;
            </button>
            <p className="profile-header-description">
              {description}
            </p>
          </div>
          <div className="profile-content">
            <button
              type="button"
              className="profile-content-info-edit"
              onClick={() => {
                dispatch(toggleEditProfileInfoModal());
              }}
            >
              Modifier mes informations &#128393;
            </button>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Email
              </h4>
              <p className="profile-content-info-user">
                {email}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Mot de passe
              </h4>
              <p className="profile-content-info-user">
                **********
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Prénom
              </h4>
              <p className="profile-content-info-user">
                {firstname}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Nom
              </h4>
              <p className="profile-content-info-user">
                {lastname}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Adresse
              </h4>
              <p className="profile-content-info-user">
                {address}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Code postal
              </h4>
              <p className="profile-content-info-user">
                {postCode}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Ville
              </h4>
              <p className="profile-content-info-user">
                {city}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Pays
              </h4>
              <p className="profile-content-info-user">
                {country}
              </p>
            </div>
            <div className="profile-content-info">
              <h4 className="profile-content-info-label">
                Numéro de téléphone
              </h4>
              <p className="profile-content-info-user">
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      )}
      { editProfileInfo && <InfoModal association={association} />}
      { editProfileImage && <PictureModal association={association} />}
      { editProfileDescription && <DescriptionModal association={association} />}
    </div>
  );
}

// == Export
export default Profile;
