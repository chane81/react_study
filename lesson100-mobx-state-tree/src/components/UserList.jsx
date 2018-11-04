import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
import styles from './UserList.scss';
import SvgLoader from './SvgLoader';

const cx = classNames.bind(styles);

@observer
class ItemList extends Component {
  static propTypes = {
    userList: PropTypes.objectOf(PropTypes.any),
  };

  render() {
    const { userList } = this.props;

    return (
      <div>
        <h2>UserList</h2>
        <div>AXIOS 상태값: {userList.status}</div>
        <button
          type="button"
          onClick={() => {
            userList.getUsers();
          }}
        >
          사용자정보 Get
        </button>
        <br />

        {userList.status === 'pending' && (
          <div className={cx('loading')}>
            <SvgLoader />
          </div>
        )}

        <div
          className={cx('user-list', {
            noneDisplay: userList.status === 'pending',
          })}
        >
          {userList.data.map((user, i) => (
            <div className={cx('user')} key={i}>
              <div className={cx('picture-wrap')}>
                <div
                  className={cx('picture')}
                  style={{
                    backgroundImage: `url(${user.picture.thumbnail})`,
                  }}
                />
              </div>
              <div>
                <div>First Name: {user.name.first}</div>
                <div>Last Name: {user.name.last}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default observer(ItemList);
