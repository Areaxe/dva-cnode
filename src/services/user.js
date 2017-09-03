import request from '../utils/request';
import { baseUrl, userToken } from '../constant.js';

export function getUserDetail({ loginname }) { 		    //    用户详情
  return request(`${baseUrl}/user/${loginname}?accesstoken=${userToken}`);
}

export function userCollectTopics({ loginname }) {  //   用户所收藏的主题
  return request(`${baseUrl}/topic_collect/${loginname}?accesstoken=${userToken}`);
}
