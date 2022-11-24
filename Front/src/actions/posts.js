// --------------------- DATAS --------------------- //
export const GET_POSTS_FROM_API = 'GET_POSTS_FROM_API';
export const getPostsFromApi = () => ({
  type: GET_POSTS_FROM_API,
});

export const SAVE_POSTS_FROM_API = 'SAVE_POSTS_FROM_API';
export const savePostsFromApi = (list) => ({
  type: SAVE_POSTS_FROM_API,
  list,
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

// --------------------- NEW POST --------------------- //
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

// --------------------- POST --------------------- //
export const DELETE_MY_POST_FROM_API = 'DELETE_MY_POST_FROM_API';
export const deleteMyPostFromApi = (id) => ({
  type: DELETE_MY_POST_FROM_API,
  id,
});

export const SHOW_DELETED_MODAL = 'SHOW_DELETED_MODAL';
export const showDeleteModal = () => ({
  type: SHOW_DELETED_MODAL,
});

export const CLOSE_DELETED_MODAL = 'CLOSE_DELETED_MODAL';
export const closeDeletedModal = () => ({
  type: CLOSE_DELETED_MODAL,
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
