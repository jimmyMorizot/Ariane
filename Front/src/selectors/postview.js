/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve l'annonce voulue dans la liste des annonces
 * @param {Array} postview- toutes les annonces
 * @param {number} searchedId - le slug de l'annonce recherchée
 * @return {Object} - L'annonce trouvée
 */
export function findUserpost(userPosts, searchedId) {
  const userpost = userPosts.find((testedUserpost) => {
    return testedUserpost.id == searchedId;
  });
  return userpost;
}
