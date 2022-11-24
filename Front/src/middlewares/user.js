import axios from 'axios';
import {
  LOGIN,
  connectUser,
  SEND_PROFILE_UPDATES_TO_API,
  confirmUpdatesDispatch,
  toggleAuthenticationFailedModal,
  saveAssociationCategory,
  GET_CATEGORIES_FROM_API,
  saveCatgoriesFromApi,
} from '../actions';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
}
else {
  url = 'http://jimmymorizot-server.eddi.cloud/ariane/Back/public';
}

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { user: { email, password } } = store.getState();
      axios.post(`${url}/api/login_check`, {
        username: email,
        password: password,
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          store.dispatch(connectUser(
            true,
            response.data.data.id,
            response.data.data.name,
            response.data.data.firstname,
            response.data.data.lastname,
            response.data.data.address,
            response.data.data.city,
            response.data.data.postCode,
            response.data.data.country,
            response.data.data.phoneNumber,
            response.data.data.description,
            response.data.data.picture,
            response.data.data.profil,
          ));
          const { user: currentUser } = store.getState();
          const userId = currentUser.id;
          const token = localStorage.getItem('token');
          axios.get(`${url}/api/association/${userId}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              store.dispatch(saveAssociationCategory(response.data.category[0].name));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(toggleAuthenticationFailedModal());
        });
      next(action);
      break;
    }
    case SEND_PROFILE_UPDATES_TO_API: {
      const {
        user: {
          id,
          firstname,
          lastname,
          address,
          postCode,
          city,
          country,
          phoneNumber,
          picture,
          description,
          password,
        },
      } = store.getState();
      const token = localStorage.getItem('token');
      axios({
        method: 'patch',
        url: `${url}/api/user/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          address: address,
          postCode: postCode,
          city: city,
          country: country,
          phoneNumber: phoneNumber,
          picture: picture,
          description: description,
          firstname: firstname,
          lastname: lastname,
          password: password,
        },
      })
        .then((response) => {
          store.dispatch(confirmUpdatesDispatch());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case GET_CATEGORIES_FROM_API: {
      axios.get(`${url}/api/categories`)
        .then((response) => {
          store.dispatch(saveCatgoriesFromApi(response.data));
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

export default user;
