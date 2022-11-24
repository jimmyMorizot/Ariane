// == Import
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { findAssociationpage } from '../../selectors/associationpage';
import './associationpage.scss';

// == Composant
function AssociationPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const associationpage = useSelector((state) => findAssociationpage(state.associationList, slug));
  if (associationpage === undefined) {
    return <Navigate to="/associations" replace />;
  }
  return (
    <div className="associationpage">
      <div className="associationpage-block">
        <div className="associationpage-block-header">
          <h2 className="associationpage-block-header-name">
            {associationpage.name}
          </h2>
          <p className="associationpage-block-header-category">
            {associationpage.category[0].name}
          </p>
          <img
            className="associationpage-block-header-img"
            src={associationpage.picture}
            alt={associationpage.picture}
          />
          <p className="associationpage-block-header-description">
            {associationpage.description}
          </p>
        </div>
        <div className="associationpage-block-content">
          <div className="associationpage-block-content-info">
            <p className="associationpage-block-content-info-label">
              Email :
            </p>
            <p>
              {associationpage.email}
            </p>
          </div>
          <div className="associationpage-block-content-info">
            <p className="associationpage-block-content-info-label">
              Adresse :
            </p>
            <p>
              {associationpage.address}
            </p>
          </div>
          <div className="associationpage-block-content-info">
            <p className="associationpage-block-content-info-label">
              Code postal :
            </p>
            <p>
              {associationpage.postCode}
            </p>
          </div>
          <div className="associationpage-block-content-info">
            <p className="associationpage-block-content-info-label">
              Ville :
            </p>
            <p>
              {associationpage.city}
            </p>
          </div>
          <div className="associationpage-block-content-info">
            <p className="associationpage-block-content-info-label">
              Pays :
            </p>
            <p>
              {associationpage.country}
            </p>
          </div>
          <div className="associationpage-block-content-info">
            <p className="associationpage-block-content-info-label">
              Numéro de téléphone :
            </p>
            <p>
              {associationpage.phoneNumber}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="associationpage-goback"
        onClick={() => {
          navigate(-1);
        }}
      >
        Retour aux associations
      </button>
    </div>
  );
}

// == Export
export default AssociationPage;
