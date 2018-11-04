import { types } from 'mobx-state-tree';

// const User = types
//   .model('User', {
//     id: types.number,
//     first_name: types.string,
//     last_name: types.string,
//     avatar: types.string
//   });

// const User = types
//   .model('User', {
//     userId: types.number,
//     id: types.number,
//     title: types.string,
//     body: types.string
//   });

const User = types
  .model('User', {
    name: types.model({
      title: types.string,
      first: types.string,
      last: types.string
    }),
    email: types.string,
    phone: types.string,
    picture: types.model({
      large: types.string,
      medium: types.string,
      thumbnail: types.string
    })
  });

export default User;
