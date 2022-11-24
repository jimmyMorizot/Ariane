import {
  CLOSE_BURGER,
  TOGGLE_BURGER,
  TOGGLE_USER,
} from '../actions';

const initialState = {
  burgerIsOpen: false,
  userTypes: [
    {
      id: 1,
      title: 'Apporter mon aide',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/hands1.jpg',
      name: 'give',
      // isOpen: false,
    },
    {
      id: 2,
      title: 'Rechercher de l\'aide',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit expedita voluptates explicabo totam quis ipsa unde impedit pariatur maxime eaque quos atque dignissimos cum, amet reiciendis sapiente sunt voluptate alias fuga exercitationem aliquid. Ratione quo dolores labore error quas incidunt esse veniam, consequatur officiis eum quibusdam accusantium dolorem aspernatur.',
      thumbnail: '/images/boussole.jpg',
      name: 'search',
      // isOpen: false,
    },
  ],
  give: false,
  search: false,
  about: [
    {
      slug: 'contact',
      title: 'Contact',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus iste maxime exercitationem hic excepturi quo saepe, eius distinctio reiciendis aut minus architecto quos placeat laborum beatae, eos voluptatibus nostrum quis maiores obcaecati laboriosam voluptatum quia iure! Officia ducimus perspiciatis sunt ratione explicabo velit nesciunt! Voluptatem architecto quo rerum eum. Labore sunt architecto aut quam commodi at, assumenda minima veritatis vitae repellendus non temporibus, animi possimus facilis debitis maxime cumque, libero totam vero quae amet fugit neque dolores? Eum repellat ipsam officia temporibus a praesentium. Voluptatibus magnam doloribus autem quo voluptatum nobis consectetur nulla. Saepe eius nostrum mollitia aut nulla ducimus! Molestiae ratione nemo porro rerum distinctio. Reiciendis magni sit provident accusantium vitae ut voluptate cum corporis quibusdam praesentium minus, dolor facilis! Maxime et cupiditate ut a. Porro, perspiciatis atque corrupti maxime alias unde. Nulla sunt inventore aut quidem nemo asperiores laboriosam tenetur excepturi aspernatur! Dolore aperiam maiores recusandae alias mollitia distinctio, sunt porro nisi, iusto, asperiores provident exercitationem nesciunt odit enim aliquam eius. Autem sed aliquam dolorum perspiciatis fuga ab dolores, consequatur harum corporis. Velit accusantium iusto ipsa rerum reprehenderit quos unde repellendus porro dolores ipsum veniam, quaerat reiciendis quae iste, voluptates explicabo quo fugiat obcaecati pariatur ratione dolore.',
    },
    {
      slug: 'qui-sommes-nous',
      title: 'Qui sommes-nous?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus iste maxime exercitationem hic excepturi quo saepe, eius distinctio reiciendis aut minus architecto quos placeat laborum beatae, eos voluptatibus nostrum quis maiores obcaecati laboriosam voluptatum quia iure! Officia ducimus perspiciatis sunt ratione explicabo velit nesciunt! Voluptatem architecto quo rerum eum. Labore sunt architecto aut quam commodi at, assumenda minima veritatis vitae repellendus non temporibus, animi possimus facilis debitis maxime cumque, libero totam vero quae amet fugit neque dolores? Eum repellat ipsam officia temporibus a praesentium. Voluptatibus magnam doloribus autem quo voluptatum nobis consectetur nulla. Saepe eius nostrum mollitia aut nulla ducimus! Molestiae ratione nemo porro rerum distinctio. Reiciendis magni sit provident accusantium vitae ut voluptate cum corporis quibusdam praesentium minus, dolor facilis! Maxime et cupiditate ut a. Porro, perspiciatis atque corrupti maxime alias unde. Nulla sunt inventore aut quidem nemo asperiores laboriosam tenetur excepturi aspernatur! Dolore aperiam maiores recusandae alias mollitia distinctio, sunt porro nisi, iusto, asperiores provident exercitationem nesciunt odit enim aliquam eius. Autem sed aliquam dolorum perspiciatis fuga ab dolores, consequatur harum corporis. Velit accusantium iusto ipsa rerum reprehenderit quos unde repellendus porro dolores ipsum veniam, quaerat reiciendis quae iste, voluptates explicabo quo fugiat obcaecati pariatur ratione dolore.',
    },
    {
      slug: 'mentions-legales',
      title: 'Mentions légales',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus iste maxime exercitationem hic excepturi quo saepe, eius distinctio reiciendis aut minus architecto quos placeat laborum beatae, eos voluptatibus nostrum quis maiores obcaecati laboriosam voluptatum quia iure! Officia ducimus perspiciatis sunt ratione explicabo velit nesciunt! Voluptatem architecto quo rerum eum. Labore sunt architecto aut quam commodi at, assumenda minima veritatis vitae repellendus non temporibus, animi possimus facilis debitis maxime cumque, libero totam vero quae amet fugit neque dolores? Eum repellat ipsam officia temporibus a praesentium. Voluptatibus magnam doloribus autem quo voluptatum nobis consectetur nulla. Saepe eius nostrum mollitia aut nulla ducimus! Molestiae ratione nemo porro rerum distinctio. Reiciendis magni sit provident accusantium vitae ut voluptate cum corporis quibusdam praesentium minus, dolor facilis! Maxime et cupiditate ut a. Porro, perspiciatis atque corrupti maxime alias unde. Nulla sunt inventore aut quidem nemo asperiores laboriosam tenetur excepturi aspernatur! Dolore aperiam maiores recusandae alias mollitia distinctio, sunt porro nisi, iusto, asperiores provident exercitationem nesciunt odit enim aliquam eius. Autem sed aliquam dolorum perspiciatis fuga ab dolores, consequatur harum corporis. Velit accusantium iusto ipsa rerum reprehenderit quos unde repellendus porro dolores ipsum veniam, quaerat reiciendis quae iste, voluptates explicabo quo fugiat obcaecati pariatur ratione dolore.',
    },
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        burgerIsOpen: !state.burgerIsOpen,
      };
    case CLOSE_BURGER:
      return {
        ...state,
        burgerIsOpen: false,
      };
    case TOGGLE_USER:
      return {
        ...state,
        [action.key]: !state[action.key],
      };
    default:
      return state;
  }
}

export default reducer;
