import axios from 'axios';
import { GET_ASSOCIATION_LIST_FROM_API, saveAssociationListFromApi } from '../actions';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
}
else {
  url = 'http://jimmymorizot-server.eddi.cloud/ariane/Back/public';
}

const associations = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ASSOCIATION_LIST_FROM_API: {
      axios.get(`${url}/api/associations`)
        .then((response) => {
          store.dispatch(saveAssociationListFromApi(response.data));
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

export default associations;
