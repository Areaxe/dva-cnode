import { getTopics, getTopicDetail } from '../services/topic.js';
export default {

  namespace: 'topic',

  state: {
		topicDetail:null,
	},

  subscriptions: {
    setup({ dispatch, history,params }) {  // eslint-disable-line
			if(history.pathname="/"){
				dispatch({type:"fetchTopics"})
			}
			if(history.pathname="/topic/:id"){
				console.log(history)
				let topicId = ""
				dispatch({type:"getTopicInfo",topicId})
			}
    },
  },

  effects: {
    *fetchTopics({ payload }, { call, put }) {  // eslint-disable-line
			let { data } = yield call( getTopics )
			let topics = data
			console.log(topics)
      yield put({ type: 'save',payload:{ topics:topics.data } });
    },
		*getTopicInfo({topicId},{call,put,select}){
			let topicDetail = yield call(getTopicDetail,{topicId})
			yield put({ type: 'save',payload:{ topicDetail } });
		}
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
		saveTopDetail(state, action){
			return { ...state, ...action.payload };
		}
  },

};
