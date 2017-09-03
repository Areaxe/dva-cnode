import React from 'react';
import { connect } from 'dva';
import styles from './Topic.less';

function UserDetail({ topic }) {
  const usertopic = topic || {};
  return (
    <div className={styles.topic_contain}>
      <h3>{usertopic.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: usertopic.content }} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    topic: state.topic.UserDetail,
  };
}
export default connect(mapStateToProps)(UserDetail);
