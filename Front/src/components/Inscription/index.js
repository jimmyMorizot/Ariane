// Imports
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  chooseInscriptionProfile,
  changeInscriptionValue,
  sendInscriptionFormToApi,
  sendVolunteerInscriptionFormToApi,
  inscriptionFormError,
} from '../../actions';
import InscriptionModal from './InscriptionModal';
import './inscription.scss';

// TODO voir pour ajouter un symbole pour pouvoir voir le MDP?
// == Composant
function Inscription() {
  const dispatch = useDispatch();
  const {
    Association,
    Volontaire,
    name,
    firstname,
    lastname,
    address,
    postcode,
    city,
    country,
    phonenumber,
    email,
    password,
    passwordcheck,
    showModal,
  } = useSelector((state) => state.inscriptionForm);
  const categories = useSelector((state) => state.categories);
  const { logged } = useSelector((state) => state.user);
  if (logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="inscription">
      <label
        htmlFor="userType"
        className="inscription-label"
      >
        Choix du profil :
        <select
          name="userType"
          id="userType"
          onChange={(event) => {
            dispatch(chooseInscriptionProfile(event.target.value));
          }}
          className="inscription-input"
        >
          <option
            value=""
          >
            -- Merci de sélectionner une option --
          </option>
          <option
            value="Association"
          >
            Association
          </option>
          <option
            value="Volontaire"
          >
            Volontaire
          </option>
        </select>
      </label>
      { Association && (
        <>
          <div className="required">
            * champs obligatoires
          </div>
          <form
            className="inscription-form"
            onSubmit={(event) => {
              event.preventDefault();
              if (password !== passwordcheck) {
                const error = 'Le mot de passe et sa confirmation doivent être identiques.';
                dispatch(inscriptionFormError(error));
              }
              else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/.test(password) === false) {
                const error = 'Le mot de passe n\'est pas assez sécurisé: il doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial (@$!%*?&).';
                dispatch(inscriptionFormError(error));
              }
              else {
                dispatch(sendInscriptionFormToApi());
              }
            }}
          >
            <div className="inscription-field">
              <label
                htmlFor="name"
                className="inscription-label"
              >
                Nom de l'association <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={name}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="name"
                  placeholder="Nom de l'association"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="category"
                className="inscription-label"
              >
                Secteur de l'association <span className="required">*</span>
                <select
                  className="inscription-input"
                  name="category"
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="category"
                  required
                >
                  <option
                    value=""
                  >
                    -- Merci de sélectionner une option --
                  </option>
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="address"
                className="inscription-label"
              >
                Adresse de l'association <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={address}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="address"
                  placeholder="Adresse de l'association"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="postcode"
                className="inscription-label"
              >
                Code postal de l'association <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={postcode}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="postcode"
                  placeholder="Code postal de l'association"
                  type="number"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="city"
                className="inscription-label"
              >
                Ville de l'association <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={city}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="city"
                  placeholder="Ville de l'association"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="country"
                className="inscription-label"
              >
                Pays de l'association <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={country}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="country"
                  placeholder="Pays de l'association"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="phonenumber"
                className="inscription-label"
              >
                Numéro de téléphone de l'association <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={phonenumber}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="phonenumber"
                  placeholder="Numéro de téléphone de l'association"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="email"
                className="inscription-label"
              >
                Email de connexion <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={email}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="email"
                  placeholder="Email de connexion"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="password"
                className="inscription-label"
              >
                Mot de passe <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={password}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  type="password"
                  id="password"
                  placeholder="Mot de passe"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="passwordcheck"
                className="inscription-label"
              >
                Confirmation du mot de passe <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={passwordcheck}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  type="password"
                  id="passwordcheck"
                  placeholder="Confirmation du mot de passe"
                  required
                />
              </label>
              <p className="conditions">
                En m'inscrivant, j'accepte que mon association
                et ses coordonnées apparaissent dans la liste
                des associations présentes sur la plateforme
              </p>
            </div>
            <button
              type="submit"
              className="inscription-form-button"
            >
              S'inscrire
            </button>
          </form>
        </>
      )}
      { Volontaire && (
        <>
          <div className="required">* champs obligatoires</div>
          <form
            className="inscription-form"
            onSubmit={(event) => {
              event.preventDefault();
              if (password !== passwordcheck) {
                const error = 'Le mot de passe et sa confirmation doivent être identiques.';
                dispatch(inscriptionFormError(error));
              }
              else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/.test(password) === false) {
                const error = 'Le mot de passe n\'est pas assez sécurisé: il doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial (@$!%*?&).';
                dispatch(inscriptionFormError(error));
              }
              else {
                dispatch(sendVolunteerInscriptionFormToApi());
              }
            }}
          >
            <div className="inscription-field">
              <label
                htmlFor="firstname"
                className="inscription-label"
              >
                Prénom <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={firstname}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="firstname"
                  placeholder="Prénom"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="lastname"
                className="inscription-label"
              >
                Nom <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={lastname}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="lastname"
                  placeholder="Nom"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="address"
                className="inscription-label"
              >
                Adresse <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={address}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="address"
                  placeholder="Addresse"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="postcode"
                className="inscription-label"
              >
                Code postal <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={postcode}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="postcode"
                  placeholder="Code postal"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="city"
                className="inscription-label"
              >
                Ville <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={city}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="city"
                  placeholder="Ville"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="country"
                className="inscription-label"
              >
                Pays <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={country}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="country"
                  placeholder="Pays"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="phonenumber"
                className="inscription-label"
              >
                Numéro de téléphone <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={phonenumber}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="phonenumber"
                  placeholder="Numéro de téléphone"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="email"
                className="inscription-label"
              >
                Email de connexion <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={email}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  id="email"
                  placeholder="Email de connexion"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="password"
                className="inscription-label"
              >
                Mot de passe <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={password}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  type="password"
                  id="password"
                  placeholder="Mot de passe"
                  required
                />
              </label>
            </div>
            <div className="inscription-field">
              <label
                htmlFor="passwordcheck"
                className="inscription-label"
              >
                Confirmation du mot de passe <span className="required">*</span>
                <input
                  className="inscription-input"
                  value={passwordcheck}
                  onChange={(event) => {
                    dispatch(changeInscriptionValue(event.target.id, event.target.value));
                  }}
                  type="password"
                  id="passwordcheck"
                  placeholder="Confirmation du mot de passe"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="inscription-form-button"
            >
              S'inscrire
            </button>
          </form>
        </>
      )}
      { showModal && <InscriptionModal />}
    </div>
  );
}

// == Export
export default Inscription;
