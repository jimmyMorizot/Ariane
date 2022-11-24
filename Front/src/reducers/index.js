import {
  CHANGE_INSCRIPTION_VALUE,
  CHANGE_VALUE,
  CHOOSE_INSCRIPTION_PROFILE,
  CLOSE_BURGER,
  LOGOUT,
  SUBMIT_INSCRIPTION_FORM,
  TOGGLE_BURGER,
  CLOSE_INSCRIPTION_MODAL,
  TOGGLE_USER,
  POSTS_MODAL,
  SEND_MODAL,
  SAVE_TOKEN_FROM_API,
  SAVE_POSTS_FROM_API,
  CLOSE_POST_MODAL,
  CONNECT_USER,
  TOGGLE_EDIT_PROFILE_INFO_MODAL,
  CONFIRM_UPDATES_DISPATCH,
  RESET_UPDATES_CONFIRMATION,
  CHANGE_CANDIDACY_TEXT_VALUE,
  SET_UP_CANDIDACY,
  RESET_CONTENT_CANDIDACY,
  SAVE_USER_POSTS_FROM_API,
  SAVE_CANDIDACY_FROM_API,
  CHANGE_NEW_POST_VALUE,
  SHOW_NEW_POST_SENT_MODAL,
  CLOSE_NEW_POST_SENT_MODAL,
  TOGGLE_EDIT_PROFILE_IMAGE_MODAL,
  TOGGLE_EDIT_PROFILE_DESCRIPTION_MODAL,
  INSCRIPTION_FORM_ERROR,
  TOGGLE_REPORT_MODAL,
  TOGGLE_AUTHENTICATION_FAILED_MODAL,
  SHOW_DELETED_MODAL,
  CLOSE_DELETED_MODAL,
  SAVE_ASSOCIATION_CATEGORY,
  SAVE_ASSOCIATION_LIST_FROM_API,
  SAVE_CATEGORIES_FROM_API,
  SAVE_SUPPLIES_FROM_API,
} from '../actions';

const initialState = {
  burgerIsOpen: false,
  userTypes: [
    {
      id: 1,
      title: 'Chercher vos partenaires',
      text1: 'Je suis une association et souhaite exprimer mes besoins et entrer en contact avec de futurs alliés.',
      text2: 'Je suis volontaire et souhaite consulter les annonces des associations pour leur proposer mon aide.',
      thumbnail: '/images/hands1.jpg',
      name: 'give',
      slug: 'posts',
      link: 'Ça commence ici !',
    },
    {
      id: 2,
      title: 'Trouver un accompagnement',
      text1: 'Je rencontre des difficultés et recherche l\'association qui pourra m\'apporter le soutien dont j\'ai besoin.',
      text2: 'Je découvre la liste des associations et accède à leurs coordonnées.',
      thumbnail: '/images/boussole.jpg',
      name: 'search',
      slug: 'associations',
      link: 'Suivez le fil !',
    },
  ],
  give: false,
  search: false,
  about: [
    {
      slug: 'contact',
      title: 'Contact',
    },
    {
      slug: 'mentions-legales',
      title: 'Mentions légales',
    },
  ],
  user: {
    logged: false,
    id: '',
    profil: '',
    name: '',
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    postCode: '',
    country: '',
    phoneNumber: '',
    description: '',
    picture: '',
    email: '',
    password: '',
    category: '',
  },
  editProfileInfoIsOpen: false,
  editProfileImageIsOpen: false,
  editProfileDescriptionIsOpen: false,
  updatesSent: false,
  candidacies: [],
  deleteModal: false,
  userPosts: [],
  posts: [],
  categories: [],
  supplies: [],
  associationList: [],
  reportModalIsOpen: false,
  authenticationFailedModalIsOpen: false,
  inscriptionForm: {
    Association: false,
    Volontaire: false,
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
    passwordcheck: '',
    showModal: false,
    error: false,
    errorText: '',
  },
  showModalPost: false,
  sendModal: false,
  candidacy: {
    postId: '',
    userId: '',
    content: '',
  },
  newPost: {
    title: '',
    supply: '',
    banner: '',
    description: '',
    showSentModal: false,
  },
};
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        burgerIsOpen: !state.burgerIsOpen,
      };
    case TOGGLE_USER:
      return {
        ...state,
        [action.key]: !state[action.key],
      };
    case CLOSE_BURGER:
      return {
        ...state,
        burgerIsOpen: false,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.value,
        },
      };
    case CONNECT_USER:
      return {
        ...state,
        user: {
          ...state.user,
          logged: action.logged,
          id: action.id,
          name: action.name,
          firstname: action.firstname,
          lastname: action.lastname,
          address: action.address,
          city: action.city,
          postCode: action.postCode,
          country: action.country,
          phoneNumber: action.phoneNumber,
          description: action.description,
          picture: action.picture,
          profil: action.profil,
        },
      };
    case SAVE_ASSOCIATION_CATEGORY:
      return {
        ...state,
        user: {
          ...state.user,
          category: action.category,
        },
      };
    case LOGOUT:
      return {
        ...state,
        burgerIsOpen: false,
        user: {
          ...state.user,
          logged: false,
          id: '',
          profil: '',
          name: '',
          firstname: '',
          lastname: '',
          address: '',
          city: '',
          postCode: '',
          country: '',
          phoneNumber: '',
          description: '',
          picture: '',
          email: '',
          password: '',
        },
      };
    case CHOOSE_INSCRIPTION_PROFILE:
      return {
        ...state,
        inscriptionForm: {
          ...state.inscriptionForm,
          Association: false,
          Volontaire: false,
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
        },
      };
    case CHANGE_INSCRIPTION_VALUE:
      return {
        ...state,
        inscriptionForm: {
          ...state.inscriptionForm,
          [action.key]: action.value,
        },
      };
    case SUBMIT_INSCRIPTION_FORM:
      return {
        ...state,
        inscriptionForm: {
          ...state.inscriptionForm,
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
          passwordcheck: '',
          showModal: true,
          error: false,
        },
      };
    case INSCRIPTION_FORM_ERROR:
      return {
        ...state,
        inscriptionForm: {
          ...state.inscriptionForm,
          showModal: true,
          error: true,
          errorText: action.error,
        },
      };
    case CLOSE_INSCRIPTION_MODAL:
      return {
        ...state,
        inscriptionForm: {
          ...state.inscriptionForm,
          showModal: false,
          error: false,
          errorText: '',
        },
      };
    case POSTS_MODAL:
      return {
        ...state,
        showModalPost: !state.showModalPost,
      };
    case SEND_MODAL:
      return {
        ...state,
        sendModal: true,
      };
    case CLOSE_POST_MODAL:
      return {
        ...state,
        showModalPost: false,
        sendModal: false,
      };
    case SAVE_TOKEN_FROM_API:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.token,
        },
      };
    case SAVE_POSTS_FROM_API:
      return {
        ...state,
        posts: action.list,
      };
    case TOGGLE_EDIT_PROFILE_INFO_MODAL:
      return {
        ...state,
        editProfileInfoIsOpen: !state.editProfileInfoIsOpen,
      };
    case TOGGLE_EDIT_PROFILE_IMAGE_MODAL:
      return {
        ...state,
        editProfileImageIsOpen: !state.editProfileImageIsOpen,
      };
    case TOGGLE_EDIT_PROFILE_DESCRIPTION_MODAL:
      return {
        ...state,
        editProfileDescriptionIsOpen: !state.editProfileDescriptionIsOpen,
      };
    case CONFIRM_UPDATES_DISPATCH:
      return {
        ...state,
        updatesSent: true,
      };
    case RESET_UPDATES_CONFIRMATION:
      return {
        ...state,
        updatesSent: false,
      };
    case CHANGE_CANDIDACY_TEXT_VALUE:
      return {
        ...state,
        candidacy: {
          ...state.candidacy,
          content: action.value,
        },
      };
    case SET_UP_CANDIDACY:
      return {
        ...state,
        candidacy: {
          ...state.candidacy,
          postId: action.postId,
          userId: action.userId,
        },
      };
    case RESET_CONTENT_CANDIDACY:
      return {
        ...state,
        candidacy: {
          ...state.candidacy,
          content: '',
        },
      };
    case SAVE_USER_POSTS_FROM_API:
      return {
        ...state,
        userPosts: action.list,
      };
    case SAVE_CANDIDACY_FROM_API:
      return {
        ...state,
        candidacies: action.list,
      };
    case CHANGE_NEW_POST_VALUE:
      return {
        ...state,
        newPost: {
          ...state.newPost,
          [action.key]: action.value,
        },
      };
    case SHOW_NEW_POST_SENT_MODAL:
      return {
        ...state,
        newPost: {
          ...state.newPost,
          showSentModal: true,
        },
      };
    case CLOSE_NEW_POST_SENT_MODAL:
      return {
        ...state,
        newPost: {
          ...state.newPost,
          title: '',
          supply: '',
          banner: '',
          description: '',
          showSentModal: false,
        },
      };
    case TOGGLE_REPORT_MODAL:
      return {
        ...state,
        reportModalIsOpen: !state.reportModalIsOpen,
      };
    case TOGGLE_AUTHENTICATION_FAILED_MODAL:
      return {
        ...state,
        authenticationFailedModalIsOpen: !state.authenticationFailedModalIsOpen,
      };
    case SHOW_DELETED_MODAL:
      return {
        ...state,
        deleteModal: true,
      };
    case CLOSE_DELETED_MODAL:
      return {
        ...state,
        deleteModal: false,
      };
    case SAVE_ASSOCIATION_LIST_FROM_API:
      return {
        ...state,
        associationList: action.list,
      };
    case SAVE_CATEGORIES_FROM_API:
      return {
        ...state,
        categories: action.list,
      };
    case SAVE_SUPPLIES_FROM_API:
      return {
        ...state,
        supplies: action.list,
      };
    default:
      return state;
  }
}
export default reducer;
