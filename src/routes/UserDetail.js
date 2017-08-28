import React from 'react';
import { connect } from 'dva';
import TopicItem from "../components/UserDetail.js";
import styles from './Topic.less';

function UserDetail({ topic }) {
	console.log(topic)
	topic = topic?topic:{}
  return (
    <div className={styles.topic_contain}>
			<h3>{topic.title}</h3>
      <div  dangerouslySetInnerHTML={{ __html: topic.content }}></div>
    </div>
  );
}

UserDetail.propTypes = {
	 
};
function mapStateToProps(state) {
  return {
		topic:state.topic.UserDetail,
	}
}
export default connect(mapStateToProps)(UserDetail);