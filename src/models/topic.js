import { getTopics, getTopicDetail, createTopic, collectTopic, cancelTopic, commentTopic, upTopicComment } from '../services/topic.js';
export default {

  namespace: 'topic',

  state: {
		topicDetail:null,
		createInfo:{}
	},

  subscriptions: {
    setup({ dispatch, history,params }) {  // eslint-disable-line
			if(history.pathname==="/"){
				dispatch({type:"fetchTopics"})
			}
			if(history.pathname==="/topic/:id"){
				console.log(history)
				let topicId = ""
				dispatch({type:"topicDetail",topicId})
			}
    },
  },

  effects: {
    *fetchTopics({ payload }, { call, put }) {  // eslint-disable-line
			let { data } = yield call( getTopics )
			let topics = data
      yield put({ type: 'save',payload:{ topics:topics.data } });
    },

		*topicDetail({topicId},{call,put,select}){
			let topicDetail = yield call(getTopicDetail,{topicId})
			yield put({ type: 'save',payload:{ topicDetail } });
		},

		*createTopic({ payload }, { call, put, select }){
			let createInfo = yield select(state=>state.topic.createInfo)
			if(createInfo){
				let {title,content} = createInfo
				if(title&&content){
					let createResult = yield call( createTopic,{ title,content } )
					yield console.log(createResult)
				}
			}
		},

		*collectTopic({ topic_id },{ call, put, select }){
			let { topics } = yield select(state=>state.topic)
			let collectResult = yield call(collectTopic, { topic_id })
			yield put({ type: 'save',payload:{ topics } });
		},

		*cancelTopic({ topic_id }, { call, put, select }){
			let { topics } = yield select(state=>state.topic)
			let cancelResult = yield call(cancelTopic, { topic_id })
		},

		*commentTopic({ content, topic_id }, { call, put, select }){
			let commentInfo = yield select(state=>state.topic.commentInfo)
			yield call(commentTopic, { content:commentInfo, topic_id })
		},

		*upTopicComment({ reply_id }, { call, put, select }){
			yield call(upTopicComment, { reply_id })
		}
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
		createTopInfo(state,action){
			let {payload,payload:{name,value}} = action
			let createInfo = state.createInfo
			createInfo[name] = value
			return { ...state, createInfo };
		}
  },
};
