// == Import
import PropTypesLib from 'prop-types';
import { useDispatch } from 'react-redux';
import { reportComment } from '../../actions';
import './appliance.scss';

// == Composant
function Appliance({
  id,
  content,
  user,
}) {
  const dispatch = useDispatch();
  return (
    <div className="appliance">
      <h3>
        {user.firstname} {user.lastname}
      </h3>
      <h4>
        {user.email} - {user.phoneNumber}
      </h4>
      <p>
        {content}
      </p>
      <button
        type="button"
        id={id}
        className="appliance-report"
        onClick={(event) => {
          dispatch(reportComment(event.target.id));
        }}
      >
        Signaler ce commentaire
      </button>
    </div>
  );
}

Appliance.propTypes = {
  id: PropTypesLib.number.isRequired,
  content: PropTypesLib.string.isRequired,
  user: PropTypesLib.object.isRequired,
};

// == Export
export default Appliance;
