import pathToRegexp from 'path-to-regexp';
import { getTopics, getTopicDetail } from '../services/topic.js';
// import { getTopics, getTopicDetail, createTopic, collectTopic, cancelTopic,
//  commentTopic, upTopicComment } from '../services/topic.js';

export default {
  namespace: 'topic',
  state: {
    topicDetail: null,
    createInfo: {},
    currentTab: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        const tab = query.tab || '';
        if (pathname === '/' || pathname === '/topic') {
          dispatch({ type: 'saveCurrentTab', payload: tab });
          dispatch({ type: 'fetchTopics', payload: { limit: 10, tab, mdrender: false } });
        }
        const match = pathToRegexp('/topic/:id').exec(pathname);
        let topicId = '';
        if (match) {
          topicId = match[1];
          dispatch({ type: 'topicDetail', topicId });
        }
      });
    },
  },

  effects: {
    *fetchTopics({ payload, payload: { tab, limit } }, { call, put, select }) {  // eslint-disable-line
      const oldData = yield select(state => state.topic[`${tab}topics`]);
      put({ type: 'save', payload: { currentTab: tab } });
      if (!oldData) {
        const { data } = yield call(getTopics, { limit, tab });
        yield put({ type: 'save', payload: { [`${tab}topics`]: data.data } });
      }
    },

    *topicDetail({ topicId }, { call, put }) {
      const { data } = yield call(getTopicDetail, { topicId });
      const topicDetail = data.data;
      yield put({ type: 'save', payload: { topicDetail } });
    },

    *createTopic({ payload }, { select }) {
      const createInfo = yield select(state => state.topic.createInfo);
      if (createInfo) {
        const { title, content } = createInfo;
        if (title && content) {
          // let createResult = yield call(createTopic, { title, content });
        }
      }
    },

    *collectTopic({ topic_id }, { put, select }) {
      const { topics } = yield select(state => state.topic);
      // const collectResult = yield call(collectTopic, { topic_id });
      yield put({ type: 'save', payload: { topics } });
    },

    // *cancelTopic({ topic_id }, { call, select }) {
    //   // const { topics } = yield select(state => state.topic);
    //   const cancelResult = yield call(cancelTopic, { topic_id });
    // },

    // *commentTopic({ content, topic_id }, { call, put, select }) {
    //   let commentInfo = yield select(state => state.topic.commentInfo);
    //   yield call(commentTopic, { content: commentInfo, topic_id });
    // },

    // *upTopicComment({ reply_id }, { call, put, select }) {
    //   yield call(upTopicComment, { reply_id });
    // },
    // *saveCurrentTab({ payload }, { put }) {
    //   yield put({ type: 'save', payload: { currentTab: payload } });
    // }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    // createTopInfo(state, action) {
    //   let { payload, payload: { name, value } } = action;
    //   let createInfo = state.createInfo;
    //   createInfo[name] = value;
    //   return { ...state, createInfo };
    // }
  },
};
