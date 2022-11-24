import { createStore, compose, applyMiddleware } from 'redux';

import reducer from '../reducers';
import user from '../middlewares/user';
import posts from '../middlewares/posts';
import inscription from '../middlewares/inscription';
import userposts from '../middlewares/userposts';
import candidacies from '../middlewares/candidacies';
import deletemypost from '../middlewares/deletemypost';
import associations from '../middlewares/associations';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(user, posts, userposts, candidacies, inscription, deletemypost, associations)),
);

export default store;
