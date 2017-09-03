import React from 'react';
import { Link } from 'react-router';
import styles from './TopNav.less';

const Nav = ({ tab }) => {
  const nav = [
    { title: '全部', value: '' },
    { title: '精华', value: 'good' },
    { title: '问答', value: 'ask' },
    { title: '分享', value: 'share' },
    { title: '招聘', value: 'job' },
  ];
  const navTab = tab || '';
  return (
    <ul className={styles.nav_list}>
      {
        nav.map((item, i) => {
          const tabText = item.value ? `?tab=${item.value}` : '';
          const link = `/topic${tabText}`;
          return (
            <li
              className={item.value === navTab ? styles.selected : ''}
              key={`topItem_${i}`}
            >
              <Link to={link}>{item.title}</Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Nav;
