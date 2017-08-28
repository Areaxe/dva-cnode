import React from 'react';
import { connect } from 'dva';
import TopicItem from "../components/TopicItem.js";
import styles from './MyTopic.less';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

// import { Field, reduxForm } from 'redux-form';
// import {createTopic} from ''

function MyTopic({ topics, dispatch }) {
	topics = topics&&topics.length?topics:[]

  return (
    <div className={styles.topic_create}>
      <div>
        <input onChange={(e)=>dispatch({type:"topic/createTopInfo",payload:{name:"title",value:e.target.value}})}></input>
      </div>
      <div>
        <textarea cols="30" rows="10" onChange={(e)=>dispatch({type:"topic/createTopInfo",payload:{name:"content",value:e.target.value}})} />
      </div>
      <button onClick={()=>dispatch({type:"topic/createTopic"})}>submit</button>
    </div>
  );
}


MyTopic.propTypes = {
	 
};
function mapStateToProps(state) {
  return {
		topics:state.topic.topics,
	}
}
export default connect(mapStateToProps)(MyTopic);
