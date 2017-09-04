import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './TopicDetail.less';
import CommentItem from '../components/CommentItem/CommentItem.js';

function TopicDetail({ topicItem }) {
  console.log(topicItem);
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
      <div className={styles.operate_content}>
        <span className={styles.visited_count}>{ topic.visit_count }次浏览</span>
        <div className={styles.user_opera}>
          {
            topic.is_collect ? <Icon className={styles.collected} type="start" />
            : <Icon className={styles.uncollected} type="start-o" />
          }
          <span>分享</span>
          <span>举报</span>
        </div>
      </div>
      <div className={styles.comment_list}>
        <h3 className={styles.comment_top}>{ topic.reply_count } 回复</h3>
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
