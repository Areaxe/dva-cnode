import React from 'react';
import { connect } from 'dva';
import TopicItem from '../components/TopicItem.js';
import styles from './Topic.less';
import Nav from '../components/TopNav/TopNav';

function Topics({ topics, dispatch, location }) {
  const topicList = topics && topics.length ? topics : [];
  return (
    <div>
      <Nav dispatch={dispatch} tab={location.query.tab} />
      <div className={styles.topic_contain}>
        {
          topicList.map((item, i) => {
            return <TopicItem key={`topic${i}`} topic={item} onClick={() => dispatch({ type: 'topic/saveTopDetail', payload: { topicDetail: item } })} />;
          })
        }
      </div>
    </div>
  );
}

Topics.propTypes = {

};
function mapStateToProps(state) {
  return {
    tab: state.topic.currentTab,
    topics: state.topic[`${state.topic.currentTab}topics`],
  };
}
export default connect(mapStateToProps)(Topics);
