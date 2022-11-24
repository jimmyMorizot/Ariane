import axios from 'axios';
import {
  GET_USER_POSTS_FROM_API,
  REPORT_COMMENT,
  saveUserPostsFromApi,
  toggleReportModal,
} from '../actions';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
}
else {
  url = 'http://jimmymorizot-server.eddi.cloud/ariane/Back/public';
}

const userposts = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_POSTS_FROM_API: {
      const token = localStorage.getItem('token');
      const { user: { id } } = store.getState();

      axios.get(`${url}/api/association/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveUserPostsFromApi(response.data.posts));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case REPORT_COMMENT: {
      const { candidacyId } = action;
      const token = localStorage.getItem('token');
      axios({
        method: 'patch',
        url: `${url}/api/candidacy/${candidacyId}/reported`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          report: true,
        },
      })
        .then((response) => {
          store.dispatch(toggleReportModal());
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

export default userposts;
