export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = () => ({
  type: TOGGLE_BURGER,
});

export const TOGGLE_USER = 'TOGGLE_USER';
export const toggleUser = (key, value) => ({
  type: TOGGLE_USER,
  key,
  value,
});

export const CLOSE_BURGER = 'CLOSE_BURGER';
export const closeBurger = () => ({
  type: CLOSE_BURGER,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key,
  value,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (
  logged,
  id,
  name,
  firstname,
  lastname,
  address,
  city,
  postCode,
  country,
  phoneNumber,
  description,
  picture,
  profil,
) => ({
  type: CONNECT_USER,
  logged,
  id,
  name,
  firstname,
  lastname,
  address,
  city,
  postCode,
  country,
  phoneNumber,
  description,
  picture,
  profil,
});

export const SAVE_ASSOCIATION_CATEGORY = 'SAVE_ASSOCIATION_CATEGORY';
export const saveAssociationCategory = (category) => ({
  type: SAVE_ASSOCIATION_CATEGORY,
  category,
});

export const CHOOSE_INSCRIPTION_PROFILE = 'CHOOSE_INSCRIPTION_PROFILE';
export const chooseInscriptionProfile = (key) => ({
  type: CHOOSE_INSCRIPTION_PROFILE,
  key,
});

export const CHANGE_INSCRIPTION_VALUE = 'CHANGE_INSCRIPTION_VALUE';
export const changeInscriptionValue = (key, value) => ({
  type: CHANGE_INSCRIPTION_VALUE,
  key,
  value,
});

export const SEND_INSCRIPTION_FORM_TO_API = 'SEND_INSCRIPTION_FORM_TO_API';
export const sendInscriptionFormToApi = () => ({
  type: SEND_INSCRIPTION_FORM_TO_API,
});

export const INSCRIPTION_FORM_ERROR = 'INSCRIPTION_FORM_ERROR';
export const inscriptionFormError = (error) => ({
  type: INSCRIPTION_FORM_ERROR,
  error,
});

export const SEND_VOLUNTEER_INSCRIPTION_FORM_TO_API = 'SEND_VOLUNTEER_INSCRIPTION_FORM_TO_API';
export const sendVolunteerInscriptionFormToApi = () => ({
  type: SEND_VOLUNTEER_INSCRIPTION_FORM_TO_API,
});

export const SUBMIT_INSCRIPTION_FORM = 'SUBMIT_INSCRIPTION_FORM';
export const submitInscriptionForm = () => ({
  type: SUBMIT_INSCRIPTION_FORM,
});

export const CLOSE_INSCRIPTION_MODAL = 'CLOSE_INSCRIPTION_MODAL';
export const closeInscriptionModal = () => ({
  type: CLOSE_INSCRIPTION_MODAL,
});

export const POSTS_MODAL = 'POSTS_MODAL';
export const postsModal = () => ({
  type: POSTS_MODAL,
});

export const SEND_MODAL = 'SEND_MODAL';
export const sendModal = () => ({
  type: SEND_MODAL,
});

export const GET_TOKEN_FROM_API = 'GET_TOKEN_FROM_API';
export const getTokenFromApi = () => ({
  type: GET_TOKEN_FROM_API,
});

export const SAVE_TOKEN_FROM_API = 'SAVE_TOKEN_FROM_API';
export const saveTokenFromApi = (token) => ({
  type: SAVE_TOKEN_FROM_API,
  token,
});

export const GET_POSTS_FROM_API = 'GET_POSTS_FROM_API';
export const getPostsFromApi = () => ({
  type: GET_POSTS_FROM_API,
});

export const SAVE_POSTS_FROM_API = 'SAVE_POSTS_FROM_API';
export const savePostsFromApi = (list) => ({
  type: SAVE_POSTS_FROM_API,
  list,
});

export const CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';
export const closePostModal = () => ({
  type: CLOSE_POST_MODAL,
});

export const TOGGLE_EDIT_PROFILE_INFO_MODAL = 'TOGGLE_EDIT_PROFILE_INFO_MODAL';
export const toggleEditProfileInfoModal = () => ({
  type: TOGGLE_EDIT_PROFILE_INFO_MODAL,
});

export const TOGGLE_EDIT_PROFILE_IMAGE_MODAL = 'TOGGLE_EDIT_PROFILE_IMAGE_MODAL';
export const toggleEditProfileImageModal = () => ({
  type: TOGGLE_EDIT_PROFILE_IMAGE_MODAL,
});

export const TOGGLE_EDIT_PROFILE_DESCRIPTION_MODAL = 'TOGGLE_EDIT_PROFILE_DESCRIPTION_MODAL';
export const toggleEditProfileDescriptionModal = () => ({
  type: TOGGLE_EDIT_PROFILE_DESCRIPTION_MODAL,
});

export const SEND_PROFILE_UPDATES_TO_API = 'SEND_PROFILE_UPDATES_TO_API';
export const sendProfileUpdatesToApi = () => ({
  type: SEND_PROFILE_UPDATES_TO_API,
});

export const CONFIRM_UPDATES_DISPATCH = 'CONFIRM_UPDATES_DISPATCH';
export const confirmUpdatesDispatch = () => ({
  type: CONFIRM_UPDATES_DISPATCH,
});

export const RESET_UPDATES_CONFIRMATION = 'RESET_UPDATES_CONFIRMATION';
export const resetUpdatesConfirmation = () => ({
  type: RESET_UPDATES_CONFIRMATION,
});

export const CHANGE_CANDIDACY_TEXT_VALUE = 'CHANGE_CANDIDACY_TEXT_VALUE';
export const changeCandidacyTextValue = (value) => ({
  type: CHANGE_CANDIDACY_TEXT_VALUE,
  value,
});

export const SET_UP_CANDIDACY = 'SET_UP_CANDIDACY';
export const setUpCandidacy = (userId, postId) => ({
  type: SET_UP_CANDIDACY,
  userId,
  postId,
});

export const SEND_CANDIDACY_TO_API = 'SEND_CANDIDACY_TO_API';
export const sendCandidacyToApi = () => ({
  type: SEND_CANDIDACY_TO_API,
});

export const RESET_CONTENT_CANDIDACY = 'RESET_CONTENT_CANDIDACY';
export const resetContentCandidacy = () => ({
  type: RESET_CONTENT_CANDIDACY,
});

export const GET_USER_POSTS_FROM_API = 'GET_USER_POSTS_FROM_API';
export const getUserPostsFromApi = () => ({
  type: GET_USER_POSTS_FROM_API,
});

export const SAVE_USER_POSTS_FROM_API = 'SAVE_USER_POSTS_FROM_API';
export const saveUserPostsFromApi = (list) => ({
  type: SAVE_USER_POSTS_FROM_API,
  list,
});

export const GET_CANDIDACY_FROM_API = 'GET_CANDIDACY_FROM_API';
export const getCandidacyFromApi = (id) => ({
  type: GET_CANDIDACY_FROM_API,
  id,
});

export const SAVE_CANDIDACY_FROM_API = 'SAVE_CANDIDACY_FROM_API';
export const saveCandidacyFromApi = (list) => ({
  type: SAVE_CANDIDACY_FROM_API,
  list,
});

export const CHANGE_NEW_POST_VALUE = 'CHANGE_NEW_POST_VALUE';
export const changeNewPostValue = (key, value) => ({
  type: CHANGE_NEW_POST_VALUE,
  key,
  value,
});

export const SEND_NEW_POST_TO_API = 'SEND_NEW_POST_TO_API';
export const sendNewPostToApi = () => ({
  type: SEND_NEW_POST_TO_API,
});

export const SHOW_NEW_POST_SENT_MODAL = 'SHOW_NEW_POST_SENT_MODAL';
export const showNewPostSentModal = () => ({
  type: SHOW_NEW_POST_SENT_MODAL,
});

export const CLOSE_NEW_POST_SENT_MODAL = 'CLOSE_NEW_POST_SENT_MODAL';
export const closeNewPostSentModal = () => ({
  type: CLOSE_NEW_POST_SENT_MODAL,
});

export const DELETE_MY_POST_FROM_API = 'DELETE_MY_POST_FROM_API';
export const deleteMyPostFromApi = (id) => ({
  type: DELETE_MY_POST_FROM_API,
  id,
});

export const REPORT_POST = 'REPORT_POST';
export const reportPost = (postId) => ({
  type: REPORT_POST,
  postId,
});

export const REPORT_COMMENT = 'REPORT_COMMENT';
export const reportComment = (candidacyId) => ({
  type: REPORT_COMMENT,
  candidacyId,
});

export const TOGGLE_REPORT_MODAL = 'TOGGLE_REPORT_MODAL';
export const toggleReportModal = () => ({
  type: TOGGLE_REPORT_MODAL,
});

export const TOGGLE_AUTHENTICATION_FAILED_MODAL = 'TOGGLE_AUTHENTICATION_FAILED_MODAL';
export const toggleAuthenticationFailedModal = () => ({
  type: TOGGLE_AUTHENTICATION_FAILED_MODAL,
});

export const SHOW_DELETED_MODAL = 'SHOW_DELETED_MODAL';
export const showDeleteModal = () => ({
  type: SHOW_DELETED_MODAL,
});

export const CLOSE_DELETED_MODAL = 'CLOSE_DELETED_MODAL';
export const closeDeletedModal = () => ({
  type: CLOSE_DELETED_MODAL,
});

export const GET_ASSOCIATION_LIST_FROM_API = 'GET_ASSOCIATION_LIST_FROM_API';
export const getAssociationListFromApi = () => ({
  type: GET_ASSOCIATION_LIST_FROM_API,
});

export const SAVE_ASSOCIATION_LIST_FROM_API = 'SAVE_ASSOCIATION_LIST_FROM_API';
export const saveAssociationListFromApi = (list) => ({
  type: SAVE_ASSOCIATION_LIST_FROM_API,
  list,
});

export const GET_CATEGORIES_FROM_API = 'GET_CATEGORIES_FROM_API';
export const getCategoriesFromApi = () => ({
  type: GET_CATEGORIES_FROM_API,
});

export const SAVE_CATEGORIES_FROM_API = 'SAVE_CATEGORIES_FROM_API';
export const saveCatgoriesFromApi = (list) => ({
  type: SAVE_CATEGORIES_FROM_API,
  list,
});

export const GET_SUPPLIES_FROM_API = 'GET_SUPPLIES_FROM_API';
export const getSuppliesFromApi = () => ({
  type: GET_SUPPLIES_FROM_API,
});

export const SAVE_SUPPLIES_FROM_API = 'SAVE_SUPPLIES_FROM_API';
export const saveSuppliesFromApi = (list) => ({
  type: SAVE_SUPPLIES_FROM_API,
  list,
});
