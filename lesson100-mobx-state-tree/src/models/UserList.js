import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import User from './User';

const UserList = types
  .model('UserList', {
    status: types.string,
    data: types.array(User)
  })
  .actions(self => ({
    getUsers: flow(function* () {
      try {
        // const url = 'http://jsonplaceholder.typicode.com/posts/1';

        self.status = 'pending';

        const url = 'https://randomuser.me/api/?results=10';
        const res = yield axios.get(url);

        const result = res.data.results;

        self.status = 'success';
        self.data = result.map(item => ({
          name: {
            title: item.name.title,
            first: item.name.first,
            last: item.name.last
          },
          email: item.email,
          phone: item.phone,
          picture: {
            large: item.picture.large,
            medium: item.picture.medium,
            thumbnail: item.picture.thumbnail
          }
        }));
      } catch (error) {
        console.log(error);
      }
    })
  }));

export default UserList;
