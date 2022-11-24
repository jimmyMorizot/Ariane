/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve l'annonce voulue dans la liste des annonces
 * @param {Array} postpage - toutes les annonces
 * @param {string} searchedSlug - le slug de l'annonce recherchée
 * @return {Object} - L'annonce trouvée
 */
export function findPostpage(postpages, searchedSlug) {
  const postpage = postpages.find((testedPostpage) => {
    return testedPostpage.slug === searchedSlug;
  });
  return postpage;
}
