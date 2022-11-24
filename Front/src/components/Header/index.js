// == Imports
import { Link } from 'react-router-dom';
import logo2 from 'src/assets/images/ArianeLogoResize.png';
import HeaderNav from '../HeaderNav';
import './header.scss';

// == Composant
function Header() {
  return (
    <div className="header">
      <Link
        to="/"
        className="header-link"
      >
        <img className="header-logo" src={logo2} alt="Logo Ariane" />
      </Link>
      <q className="header-quote">
        <span>"</span>
        Seuls, nous pouvons faire si peu, ensemble, nous pouvons faire beaucoup.
        <span>"</span><br /> - Helen Keller
      </q>
      <HeaderNav />
    </div>
  );
}

// == Export
export default Header;
