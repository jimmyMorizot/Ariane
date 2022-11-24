import {
  CHANGE_VALUE,
  LOGIN,
  LOGOUT,
  SAVE_TOKEN_FROM_API,
} from '../actions';

const initialState = {
  token: '',
  logged: false,
  email: '',
  password: '',
  pseudo: '',
  association: true,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        pseudo: '',
      };
    case SAVE_TOKEN_FROM_API:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

export default reducer;
