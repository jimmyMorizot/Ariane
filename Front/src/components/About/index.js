/* eslint-disable max-len */
// == Imports
import { Link, useParams } from 'react-router-dom';
import './about.scss';

// == Composant
function About() {
  const { slug } = useParams();
  const contact = (slug === 'contact');
  const legals = (slug === 'mentions-legales');
  return (
    <div className="about">
      { contact && (
        <div>
          <h2 className="about-title">
            Vous souhaitez nous contacter ?
          </h2>
          <div className="about-texts">
            <p className="about-text">
              Pour ça rien de plus simple, nous sommes à votre écoute !
            </p>
            <p className="about-text">
              Vous souhaitez nous faire par de votre expérience sur Ariane ?
            </p>
            <p className="about-text">
              Nous faire remonter les difficultés que vous avez pu rencontrer ?
            </p>
            <p className="about-text">
              Alors n’hésitez pas à nous contacter de la façon qui vous convient le mieux !
            </p>
            <h3 className="about-text-subtitle">
              Par mail :
            </h3>
            <p className="about-text">
              ArianeAdministrateur@gmail.com
            </p>
            <h3 className="about-text-subtitle">
              Par courrier à l’adresse suivante :
            </h3>
            <p className="about-text">
              42 Rue du Peuple - Saint-Etienne  42000 - France
            </p>
            <h3 className="about-text-subtitle">
              Par téléphone au :
            </h3>
            <p className="about-text">
              04 00 00 00 01
            </p>
          </div>
        </div>
      )}
      { legals && (
        <div>
          <h2 className="about-title">
            Mentions légales
          </h2>
          <div className="about-texts">
            <h3 className="about-text-subtitle">
              Droits de propriété intellectuelle
            </h3>
            <p className="about-text">
              Le présent site est la propriété d'Ariane, qui en est l'auteur au sens des articles L. 111.1 et suivants du Code de la propriété intellectuelle. Les photographies, textes, slogans, dessins, images, séquences animées sonores ou non ainsi que toutes œuvres intégrées dans le site sont des contenus libre de droits.
            </p>
            <p className="about-text">
              La reproduction, sur un support papier ou informatique, du site www.Ariane.fr est autorisée sous réserve qu'elle soit strictement réservée à un usage personnel, excluant tout usage à des fins publicitaires et/ou commerciales et/ou d'informations, et qu'elle soit conforme aux dispositions de l'article L122-5 du Code de la Propriété Intellectuelle.
            </p>
            <p className="about-text">
              A l'exception des dispositions ci-dessus, toute reproduction, représentation, utilisation ou modification, par quelque procédé que ce soit et sur quelque support que ce soit, de tout ou partie du site, de tout ou partie des contenus qui le composent, sans avoir obtenu l'autorisation préalable d'Ariane, est strictement interdite et constitue un délit de contrefaçon.
            </p>
            <h3 className="about-text-subtitle">
              Liens hypertextes
            </h3>
            <p className="about-text">
              La mise en place d'un lien hypertexte vers le site Ariane.fr nécessite une autorisation préalable écrite aux modérateurs d'Ariane. Faites votre demande à : Ariane@ariane.fr
            </p>
            <p className="about-text">
              Ariane ne peut en aucun cas être tenus pour responsables de la mise à disposition des sites qui font l'objet d'un lien hypertexte à partir du site www.Ariane.fr et ne peuvent supporter aucune responsabilité sur le contenu disponible sur ces sites ou à partir de ces sites.
            </p>
            <h3 className="about-text-subtitle">
              Photos et images utilisées
            </h3>
            <p className="about-text">
              Les visuels utilisés sur notre site sont la propriété des banques d'images unsplash.com, Pixabay.com et/ou d'Ariane
            </p>
            <p className="about-text">
              Au cas contraire, une mention précisant l'auteur de la photo accompagnera celle-ci.
            </p>
            <h3 className="about-text-subtitle">
              Editeur :
            </h3>
            <p className="about-text">
              Le site www.Ariane.fr est édité par Ariane.
            </p>
            <h3 className="about-text-subtitle">
              Directeur de la publication :
            </h3>
            <p className="about-text">
              Mélanie - Jimmy - Sylvain - Kévin
            </p>
            <h3 className="about-text-subtitle">
              Hébergement du site :
            </h3>
            <p className="about-text">
              A déterminer
            </p>
            <h3 className="about-text-subtitle">
              Réalisation du site :
            </h3>
            <p className="about-text">
              Mélanie - Jimmy - Sylvain - Kévin
            </p>
          </div>
        </div>
      )}
      <Link
        to="/"
      >
        <div className="about-returnhome">
          <p className="about-link">
            Suis le fil d'Ariane, il t'emmènera à la page d'accueil
          </p>
        </div>
      </Link>
    </div>
  );
}

// == Export
export default About;
