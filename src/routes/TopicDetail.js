import React from 'react';
import { connect } from 'dva';
import TopicItem from "../components/TopicItem.js";
import styles from './Topic.less';

function TopicDetail({ topic }) {
	console.log(topic)
	topic = topic?topic:{}
  return (
    <div className={styles.topic_contain}>
			<h3>{topic.title}</h3>
      <div  dangerouslySetInnerHTML={{ __html: topic.content }}></div>
    </div>
  );
}

TopicDetail.propTypes = {
	 
};
function mapStateToProps(state) {
  return {
		topic:state.topic.topicDetail,
	}
}
export default connect(mapStateToProps)(TopicDetail);
