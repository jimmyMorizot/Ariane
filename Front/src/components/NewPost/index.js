// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import oops from 'src/assets/images/oops.png';
import bedroom from 'src/assets/images/bedroom.jpg';
import justice from 'src/assets/images/justice.jpg';
import clothes from 'src/assets/images/clothes.jpg';
import food from 'src/assets/images/food.jpg';
import handling from 'src/assets/images/handling.jpg';
import house from 'src/assets/images/house.jpg';
import mech from 'src/assets/images/mech.jpg';
import medical from 'src/assets/images/medical.jpg';
import tools from 'src/assets/images/tools.jpg';
import transport from 'src/assets/images/transport.jpg';
import { changeNewPostValue, sendNewPostToApi } from '../../actions';
import NewPostModal from './NewPostModal';
import './newpost.scss';

// == Composant
function NewPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logged, profil } = useSelector((state) => state.user);
  if (!logged) {
    return <Navigate to="/authentication" replace />;
  }
  const association = (profil === 'Association');
  const { title, description, showSentModal } = useSelector((state) => state.newPost);
  const supplies = useSelector((state) => state.supplies);
  return (
    <div className="newpost-container">
      { !association && (
        <div className="newpost-warning">
          <img
            className="newpost-warning-img"
            src={oops}
            alt="Wrong direction"
          />
          <h1 className="newpost-warning-title">
            Cette section est réservée aux associations.
          </h1>
          <Link
            to="/"
            className="newpost-warning-returnhome"
          >
            Retour à l'accueil
          </Link>
        </div>
      )}
      { association && (
        <div className="newpost">
          <button
            type="button"
            className="newpost-goback"
            onClick={() => {
              navigate(-1);
            }}
          >
            Retour
          </button>
          <h1 className="newpost-title">
            Créer une nouvelle annonce
          </h1>
          <form
            className="newpost-form"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(sendNewPostToApi());
            }}
          >
            <label className="newpost-form-label" htmlFor="title">
              Titre de l'annonce
              <input
                className="newpost-form-input"
                type="text"
                name="title"
                id="title"
                placeholder="Titre de l'annonce"
                value={title}
                onChange={(event) => {
                  dispatch(changeNewPostValue(event.target.name, event.target.value));
                }}
                required
              />
            </label>
            <label className="newpost-form-label" htmlFor="title">
              Besoin
              <select
                name="supply"
                id="supply"
                onChange={(event) => {
                  dispatch(changeNewPostValue(event.target.name, event.target.value));
                }}
                required
              >
                <option
                  value=""
                >
                  -- Merci de sélectionner une option --
                </option>
                {supplies.map((supply) => (
                  <option
                    key={supply.id}
                    value={supply.id}
                  >
                    {supply.name}
                  </option>
                ))}
              </select>
            </label>
            <fieldset
              className="newpost-form-fieldset"
              name="banner"
              onChange={(event) => {
                dispatch(changeNewPostValue(event.target.name, event.target.value));
              }}
            >
              <legend className="newpost-form-fieldset-legend">Choix d'une illustration :</legend>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner1" value="/images/bedroom.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner1">
                <img className="newpost-form-fieldset-img" src={bedroom} alt="Illustration bedroom" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner2" value="/images/justice.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner2">
                <img className="newpost-form-fieldset-img" src={justice} alt="Illustration justice" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner3" value="/images/clothes.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner3">
                <img className="newpost-form-fieldset-img" src={clothes} alt="Illustration clothes" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner4" value="/images/food.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner4">
                <img className="newpost-form-fieldset-img" src={food} alt="Illustration food" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner5" value="/images/handling.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner5">
                <img className="newpost-form-fieldset-img" src={handling} alt="Illustration handling" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner6" value="/images/house.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner6">
                <img className="newpost-form-fieldset-img" src={house} alt="Illustration house" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner7" value="/images/mech.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner7">
                <img className="newpost-form-fieldset-img" src={mech} alt="Illustration mech" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner8" value="/images/medical.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner8">
                <img className="newpost-form-fieldset-img" src={medical} alt="Illustration medical" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner9" value="/images/tools.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner9">
                <img className="newpost-form-fieldset-img" src={tools} alt="Illustration tools" />
              </label>
              <input className="newpost-form-fieldset-input" type="radio" name="banner" id="banner10" value="/images/transport.jpg" />
              <label className="newpost-form-fieldset-label" htmlFor="banner10">
                <img className="newpost-form-fieldset-img" src={transport} alt="Illustration transport" />
              </label>
            </fieldset>
            <label className="newpost-form-label" htmlFor="description">
              Description de l'annonce
              <textarea
                className="newpost-form-textarea"
                name="description"
                id="description"
                cols="30"
                rows="20"
                placeholder="Préciser ici les raisons de la publication de cette annonce : besoins, contexte, modalités, délais... toutes les informations utiles pour les potentiels volontaires."
                value={description}
                onChange={(event) => {
                  dispatch(changeNewPostValue(event.target.name, event.target.value));
                }}
                required
              />
            </label>
            <button className="newpost-form-submit" type="submit">
              Publier mon annonce
            </button>
          </form>
        </div>
      )}
      { showSentModal && <NewPostModal />}
    </div>
  );
}

// == Export
export default NewPost;
