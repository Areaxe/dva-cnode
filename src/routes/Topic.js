import React from 'react';
import { connect } from 'dva';
import TopicItem from "../components/TopicItem.js";
import styles from './Topic.less';

function Topics({ topics, dispatch }) {
	console.log(topics)
	topics = topics&&topics.length?topics:[]
  return (
    <div className={styles.topic_contain}>
      {
				topics.map((item,i)=>{
					return <TopicItem key={"topic"+i} topic={item} onClick={()=>dispatch({type:"topic/saveTopDetail",payload:{ topicDetail:item }})} />
				})
			}
    </div>
  );
}

Topics.propTypes = {
	 
};
function mapStateToProps(state) {
  return {
		topics:state.topic.topics,
	}
}
export default connect(mapStateToProps)(Topics);
