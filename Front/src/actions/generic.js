// --------------------- DISPLAY --------------------- //
export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = () => ({
  type: TOGGLE_BURGER,
});

export const CLOSE_BURGER = 'CLOSE_BURGER';
export const closeBurger = () => ({
  type: CLOSE_BURGER,
});

export const TOGGLE_USER = 'TOGGLE_USER';
export const toggleUser = (key, value) => ({
  type: TOGGLE_USER,
  key,
  value,
});

// --------------------- DATAS --------------------- //
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
