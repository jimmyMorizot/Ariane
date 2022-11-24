// Imports
import { useSelector } from 'react-redux';
import UserTypes from '../UserTypes';
import Toggle from '../Toggle';
import './home.scss';

// == Composant
function Home() {
  const giveIsOpen = useSelector((state) => state.give);
  const searchIsOpen = useSelector((state) => state.search);
  const userTypes = useSelector((state) => state.userTypes);
  return (
    <div className="home">
      <h2 className="home-title">
        Ariane, la <strong>solidarité</strong> coordonnée
      </h2>
      <p className="home-description">
        S'inspirant du mythique <strong>fil d'Ariane </strong>
        guidant Thésée à travers le labyrinthe de Dédale,
        ce site a pour vocation la mise en relation de tous les acteurs du secteur
        <strong> associatif</strong>.
      </p>
      <p className="home-description">
        Vous êtes une <strong>association</strong> avec des besoins spécifiques ?
        Vous avez des compétences ou des équipements que vous souhaitez mettre à disposition ?
        Vous rencontrez un problème et vous ne savez pas vers qui vous tourner ?
      </p>
      <p className="home-description">
        Vous êtes au bon endroit : <strong>Ariane</strong> vous guide dans toutes vos démarches,
        suivez le fil !
      </p>
      <div className="home-users">
        <UserTypes
          userType={userTypes[0]}
          isOpen={giveIsOpen}
        />
        <Toggle
          userType={userTypes[0]}
          isOpen={giveIsOpen}
        />
      </div>
      <div className="home-users">
        <UserTypes
          userType={userTypes[1]}
          isOpen={searchIsOpen}
        />
        <Toggle
          userType={userTypes[1]}
          isOpen={searchIsOpen}
        />
      </div>
    </div>
  );
}

// == Export
export default Home;
