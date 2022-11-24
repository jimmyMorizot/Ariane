import axios from 'axios';
import { GET_CANDIDACY_FROM_API, saveCandidacyFromApi } from '../actions';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
}
else {
  url = 'http://jimmymorizot-server.eddi.cloud/ariane/Back/public';
}

const candidacies = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CANDIDACY_FROM_API: {
      const token = localStorage.getItem('token');
      const postId = action.id;
      axios.get(`${url}/api/post/${postId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveCandidacyFromApi(response.data.candidacies));
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

export default candidacies;
