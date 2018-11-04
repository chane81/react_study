import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import User from './User';

const UserList = types
  .model('UserList', {
    status: types.string,
    count: types.number,

    // 1. Complex 타입으로 쓸 때 흔히 쓰는 방식 frozen
    data: types.frozen([])

    // 2. 아래와 같이 쓸경우 User 모델에 데이터를 수동으로 주입
    // data: types.array(User)
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

        // 1. [types.frozen 방식 모델에 넣을 때]
        self.data = result;

        // 2. [type.array(User) 방식 모델에 넣을 때]
        // self.data = result.map(item => ({
        //   name: {
        //     title: item.name.title,
        //     first: item.name.first,
        //     last: item.name.last
        //   },
        //   email: item.email,
        //   phone: item.phone,
        //   dob: {
        //     age: item.dob.age
        //   },
        //   location: {
        //     city: item.location.city
        //   },
        //   picture: {
        //     large: item.picture.large,
        //     medium: item.picture.medium,
        //     thumbnail: item.picture.thumbnail
        //   }
        // }));
      } catch (error) {
        self.status = 'error';
        console.log(error);
      }
    })
  }));

export default UserList;
