// == Imports
import PropTypesLib from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../actions';
import './authentication.scss';

// == Composant
function Field({
  type,
  name,
  placeholder,
  value,
}) {
  const dispatch = useDispatch();
  const inputId = `field-${name}`;
  return (
    <div className="field">
      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
      <input
        value={value}
        onChange={(event) => {
          dispatch(changeValue(event.target.name, event.target.value));
        }}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        required
      />
    </div>
  );
}

Field.propTypes = {
  type: PropTypesLib.string.isRequired,
  name: PropTypesLib.string.isRequired,
  placeholder: PropTypesLib.string.isRequired,
  value: PropTypesLib.string.isRequired,
};

// == Export
export default Field;
