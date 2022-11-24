// == Imports
import './totop.scss';

// == Composant
function ToTop() {
  return (
    <div className="totop">
      <div
        className="totop-content"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        &#9650;
      </div>
    </div>
  );
}

// == Export
export default ToTop;
