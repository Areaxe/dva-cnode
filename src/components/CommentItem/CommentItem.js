import React from 'react';
// import { Link } from 'react-router';
import styles from './CommentItem.less';

const CommentItem = ({ comment }) => {
  const com = comment || {};
  return (
    <div className={styles.comment_item}>
      <img alt="userLogo" className={styles.user_logo} src={com.author ? com.author.avatar_url : ''} />
      <div className={styles.comment_base_info}>
        <div>
          <span className={styles.user_name}>{com.author ? com.author.loginname : ''}</span>
          <span className={styles.comment_time}>{com.create_at ? com.create_at.split('T')[0] : ''}</span>
        </div>
        <div
          className={styles.comment_content}
          dangerouslySetInnerHTML={{ __html: comment.content }}
        />
      </div>
    </div>
  );
};

export default CommentItem;
