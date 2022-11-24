// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAssociationListFromApi } from '../../actions';
import Association from '../Association';
import './associations.scss';

// == Composant
function Associations() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssociationListFromApi());
  }, []);
  const associations = useSelector((state) => state.associationList);
  return (
    <section className="associations">
      {associations.map((association) => (
        <Association
          key={association.id}
          {...association}
        />
      ))}
    </section>
  );
}

// == Export
export default Associations;
