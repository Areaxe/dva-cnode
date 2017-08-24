import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Topic from './routes/Topic';
import TopicDetail from './routes/TopicDetail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/topic" component={Topic} />
      <Route path="/topic/:id" component={TopicDetail} />
    </Router>
  );
}

export default RouterConfig;
