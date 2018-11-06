import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames/bind';
import styles from './UserList.scss';

const cx = classNames.bind(styles);

@inject('userList')
@observer
class ItemList extends Component {
  static propTypes = {
    userList: PropTypes.objectOf(PropTypes.any)
  };

  render() {
    const { userList } = this.props;

    const handlerClick = () => {
      userList.setUserCount(parseInt(this.userCountInput.value, 10));
      userList.getUsers();
    };

    return (
      <div>
        <h2>UserList</h2>
        <div>AXIOS 상태값: {userList.status}</div>
        <div>
          개수:
          <input
            type="text"
            ref={(input) => {
              this.userCountInput = input;
            }}
            id="txtCount"
            defaultValue={userList.count}
          />
          <button type="button" onClick={handlerClick}>
            사용자정보 Get
          </button>
        </div>

        <br />
        <div className={cx('user-list-wrap')}>
          {userList.status === 'pending' && (
            <div className={cx('loading')}>
              <img src="/images/loading.gif" alt="loading" />
            </div>
          )}

          <div className={cx('user-list')}>
            {userList.data.map((user, i) => (
              <div className={cx('user')} key={i}>
                <div className={cx('picture-wrap')}>
                  <div
                    className={cx('picture')}
                    style={{
                      backgroundImage: `url(${user.picture.thumbnail})`
                    }}
                  />
                </div>
                <div>
                  <div>First Name: {user.name.first}</div>
                  <div>Last Name: {user.name.last}</div>
                  <div>Age: {user.dob.age}</div>
                  <div>City: {user.location.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
