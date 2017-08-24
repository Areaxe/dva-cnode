import request from '../utils/request';
import { baseUrl } from '../constant.js';
export function getTopics() {
  return request(`${baseUrl}/topics` );
}

export function getTopicDetail(topicId) {
  return request(`${baseUrl}/topic/${topicId}` );
}
