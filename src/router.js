import React from 'react';
import { Router, Route } from 'dva/router';
import Topic from './routes/Topic';
import TopicDetail from './routes/TopicDetail';
import MyTopic from './routes/MyTopic';
import './assets/style/common.less';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Topic} />
      <Route path="/topic" component={Topic} />
      <Route path="/topic/:id" component={TopicDetail} />
      <Route path="/user/topic" component={MyTopic} />
    </Router>
  );
}

export default RouterConfig;
