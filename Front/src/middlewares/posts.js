import axios from 'axios';
import {
  GET_POSTS_FROM_API,
  GET_SUPPLIES_FROM_API,
  REPORT_POST,
  resetContentCandidacy,
  savePostsFromApi,
  saveSuppliesFromApi,
  SEND_CANDIDACY_TO_API,
  SEND_NEW_POST_TO_API,
  showNewPostSentModal,
  toggleReportModal,
} from '../actions';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
}
else {
  url = 'http://jimmymorizot-server.eddi.cloud/ariane/Back/public';
}

const posts = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_POSTS_FROM_API: {
      axios.get(`${url}/api/posts`)
        .then((response) => {
          store.dispatch(savePostsFromApi(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_CANDIDACY_TO_API: {
      const token = localStorage.getItem('token');
      const { candidacy: { content, userId, postId } } = store.getState();
      axios({
        method: 'post',
        url: `${url}/api/candidacy`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          content: content,
          post: postId,
          user: userId,
        },
      })
        .then((response) => {
          store.dispatch(resetContentCandidacy());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_NEW_POST_TO_API: {
      const token = localStorage.getItem('token');
      const { user: { id } } = store.getState();
      const {
        newPost: {
          title,
          supply,
          banner,
          description,
        },
      } = store.getState();
      axios({
        method: 'post',
        url: `${url}/api/post`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          title: title,
          description: description,
          user: id,
          supply: supply,
          picture: banner,
        },
      })
        .then((response) => {
          store.dispatch(showNewPostSentModal());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case REPORT_POST: {
      const { postId } = action;
      axios({
        method: 'patch',
        url: `${url}/api/post/${postId}/reported`,
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
    case GET_SUPPLIES_FROM_API: {
      axios.get(`${url}/api/supplies`)
        .then((response) => {
          store.dispatch(saveSuppliesFromApi(response.data));
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

export default posts;
