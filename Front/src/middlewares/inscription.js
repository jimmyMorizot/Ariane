import axios from 'axios';
import { SEND_INSCRIPTION_FORM_TO_API, SEND_VOLUNTEER_INSCRIPTION_FORM_TO_API, submitInscriptionForm } from '../actions';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
}
else {
  url = 'http://jimmymorizot-server.eddi.cloud/ariane/Back/public';
}

const inscription = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_INSCRIPTION_FORM_TO_API: {
      const {
        inscriptionForm: {
          profile,
          name,
          category,
          address,
          postcode,
          city,
          country,
          phonenumber,
          email,
          password,
        },
      } = store.getState();
      axios.post(`${url}/api/registration`, {
        email: email,
        password: password,
        profil: profile,
        name: name,
        address: address,
        city: city,
        postCode: postcode,
        country: country,
        phoneNumber: phonenumber,
        category: [category],
      })
        .then((response) => {
          store.dispatch(submitInscriptionForm());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_VOLUNTEER_INSCRIPTION_FORM_TO_API: {
      const {
        inscriptionForm: {
          profile,
          firstname,
          lastname,
          address,
          postcode,
          city,
          country,
          phonenumber,
          email,
          password,
        },
      } = store.getState();
      axios.post(`${url}/api/registration`, {
        email: email,
        password: password,
        profil: profile,
        firstname: firstname,
        lastname: lastname,
        address: address,
        city: city,
        postCode: postcode,
        country: country,
        phoneNumber: phonenumber,
      })
        .then((response) => {
          store.dispatch(submitInscriptionForm());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default inscription;
