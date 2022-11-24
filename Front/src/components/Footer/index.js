// == Imports
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './footer.scss';

// == Composant
function Footer() {
  const about = useSelector((state) => state.about);
  return (
    <div className="footer-nav">
      <ul className="footer-nav-links">
        {
          about.map((page) => (
            <li key={page.slug}>
              <Link
                to={`/about/${page.slug}`}
                className="footer-nav-link"
              >
                {page.title}
              </Link>
            </li>
          ))
        }
        <li>
          <Link
            to="/qui-sommes-nous"
            className="footer-nav-link"
          >
            Qui sommes-nous ?
          </Link>
        </li>
      </ul>
    </div>
  );
}

// == Export
export default Footer;
