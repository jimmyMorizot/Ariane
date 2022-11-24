import { SAVE_POSTS_FROM_API } from '../actions';

const initialState = {
  list: [
    {
      id: 1,
      slug: 'blacksmith',
      title: 'Recherche forgeron',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/blacksmith.jpg',
      name: 'blacksmith',
    },
    {
      id: 2,
      slug: 'house',
      title: 'Recherche logement',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/house.jpg',
      name: 'house',
    },
    {
      id: 3,
      slug: 'house',
      title: 'Recherche logement',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/house.jpg',
      name: 'house',
    },
    {
      id: 4,
      slug: 'house',
      title: 'Recherche logement',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/house.jpg',
      name: 'house',
    },
    {
      id: 5,
      slug: 'house',
      title: 'Recherche logement',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/house.jpg',
      name: 'house',
    },
    {
      id: 6,
      slug: 'house',
      title: 'Recherche logement',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/house.jpg',
      name: 'house',
    },
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_POSTS_FROM_API:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
}

export default reducer;
