import React from 'react';
import { connect } from 'dva';
import styles from './TopicDetail.less';
import CommentItem from '../components/CommentItem/CommentItem.js';

function TopicDetail({ topicItem }) {
  const topic = topicItem || {};
  return (
    <div className={styles.topic_detail_contain}>
      <h1 className={styles.topic_title}>{topic.title}</h1>
      <div className={styles.author_info}>
        <span>{topic.author ? topic.author.loginname : ''}</span>
        发布于
        <span>{topic.create_at ? topic.create_at.split('T')[0] : ''}</span>
      </div>
      <div className={styles.topic_content} dangerouslySetInnerHTML={{ __html: topic.content }} />
      <div className={styles.comment_list}>
        <h3 className={styles.comment_top}>评论列表</h3>
        {
          topic.replies && topic.replies.length ? topic.replies.map(comment =>
            <CommentItem key={comment.id} comment={comment} />,
          ) : null
        }

      </div>
    </div>
  );
}

TopicDetail.propTypes = {

};
function mapStateToProps(state) {
  return {
    topicItem: state.topic.topicDetail,
  };
}
export default connect(mapStateToProps)(TopicDetail);
