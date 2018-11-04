import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import User from './User';

const UserList = types
  .model('UserList', {
    status: types.string,
    count: types.number,
    data: types.array(User)
  })
  .actions(self => ({
    setUserCount(userCount) {
      self.count = userCount;
    },
    getUsers: flow(function* () {
      try {
        self.status = 'pending';

        // const url = 'http://jsonplaceholder.typicode.com/posts/1';
        const url = `https://randomuser.me/api/?results=${self.count}`;
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
        self.status = 'error';
        console.log(error);
      }
    })
  }));

export default UserList;
