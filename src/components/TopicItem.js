import React from 'react';
import styles from './TopicItem.less';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const TopicItem = ({ topic, onClick }) => {
  return (
    <div className={styles.topic_item} onClick={onClick} >
      <Link to={`/topic/${topic.id}`} >
      <h3 className={styles.topic_title}>{topic.title}</h3>
      </Link>
    </div>
  );
};

TopicItem.propTypes = {
  onClick:PropTypes.func
};

export default TopicItem;
