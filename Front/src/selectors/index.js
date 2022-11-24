/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

export function findPage(about, searchedSlug) {
  const page = about.find((testedPage) => {
    return testedPage.slug === searchedSlug;
  });
  return page;
}
