// == Import
import { useSelector } from 'react-redux';
import Appliance from '../Appliance';
import './appliances.scss';

// == Composant
function Appliances() {
  const candidacies = useSelector((state) => state.candidacies);
  return (
    <section className="appliances">
      {candidacies.map((candidacy) => (
        <Appliance
          key={candidacy.id}
          {...candidacy}
        />
      ))}
    </section>
  );
}

// == Export
export default Appliances;
