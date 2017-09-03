import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styles from './TopicItem.less';

const TopicItem = ({ topic, onClick }) => {
  return (
    <div className={styles.topic_item} onClick={onClick} >
      <img alt="" className={styles.user_logo} src={topic.author.avatar_url} />
      <Link className={styles.topic_title} to={`/topic/${topic.id}`} >
        <h3 >{topic.title}</h3>
        <div className={styles.topic_info}>
          <span className={styles.create_time}>{topic.create_at.split('T')[0]}</span>
          <span className={styles.comment_info}>
            <span>{topic.visit_count} 浏览</span>
            <span>{topic.reply_count} 评论</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

TopicItem.propTypes = {
  onClick: PropTypes.func,
};

export default TopicItem;
