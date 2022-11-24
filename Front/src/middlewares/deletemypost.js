import axios from 'axios';
import { DELETE_MY_POST_FROM_API, showDeleteModal } from '../actions';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
}
else {
  url = 'http://jimmymorizot-server.eddi.cloud/ariane/Back/public';
}

const detelemypost = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_MY_POST_FROM_API: {
      const token = localStorage.getItem('token');
      const postId = action.id;
      axios.delete(`${url}/api/post/${postId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(showDeleteModal());
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

export default detelemypost;
