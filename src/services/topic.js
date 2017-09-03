import qs from 'qs';
import request from '../utils/request';
import { baseUrl, userToken } from '../constant.js';

export function getTopics(params) {
  return request(`${baseUrl}/topics?${qs.stringify(params)}`);
}

export function getTopicDetail({ topicId }) {
  return request(`${baseUrl}/topic/${topicId}`);
}

export function createTopic({ title = '', content = '' }) {
  return request(`${baseUrl}/topics?accesstoken=${userToken}`, {
    method: 'POST',
    body: {
      title,
      tab: 'dev',
      content,
    },
  });
}

export function collectTopic({ topic_id }) {  //  主题收藏
  return request(`${baseUrl}/topic_collect/collect?accesstoken=${userToken}`, {
    method: 'POST',
    body: { topic_id },
  });
}

export function cancelTopic({ topic_id }) {    // 取消主题
  return request(`${baseUrl}/topic_collect/de_collect?accesstoken=${userToken}`, {
    method: 'POST',
    body: { topic_id },
  });
}

export function commentTopic({ content = '', topicId }) {  //  主题评论
  const body = topicId ? { content, topicId } : { content };
  return request(`${baseUrl}/topic/${topicId}/replies?accesstoken=${userToken}`, {
    method: 'POST',
    body,
  });
}

export function upTopicComment({ topicId }) {    //  为评论点赞
  return request(`${baseUrl}/reply/${topicId}/ups ?accesstoken=${userToken}`, {
    method: 'POST',
  });
}
