import {
  CHANGE_INSCRIPTION_VALUE,
  CHOOSE_INSCRIPTION_PROFILE,
  CLOSE_INSCRIPTION_MODAL,
  SUBMIT_INSCRIPTION_FORM,
} from '../actions';

const initialState = {
  association: false,
  volontaire: false,
  profile: '',
  name: '',
  firstname: '',
  lastname: '',
  category: '',
  address: '',
  postcode: '',
  city: '',
  country: '',
  phonenumber: '',
  email: '',
  password: '',
  showModal: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHOOSE_INSCRIPTION_PROFILE:
      return {
        ...state,
        association: false,
        volontaire: false,
        name: '',
        firstname: '',
        lastname: '',
        category: '',
        address: '',
        postcode: '',
        city: '',
        country: '',
        phonenumber: '',
        email: '',
        password: '',
        [action.key]: true,
        profile: action.key,
      };
    case CHANGE_INSCRIPTION_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SUBMIT_INSCRIPTION_FORM:
      return {
        ...state,
        association: false,
        volontaire: false,
        profile: '',
        name: '',
        firstname: '',
        lastname: '',
        category: '',
        address: '',
        postcode: '',
        city: '',
        country: '',
        phonenumber: '',
        email: '',
        password: '',
        showModal: true,
      };
    case CLOSE_INSCRIPTION_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}

export default reducer;
