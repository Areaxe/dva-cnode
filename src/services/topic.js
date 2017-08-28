import request from '../utils/request';
import { baseUrl, userToken } from '../constant.js';
export function getTopics() {
  return request(`${baseUrl}/topics` );
}

export function getTopicDetail(topicId) {
  return request(`${baseUrl}/topic/${topicId}` );
}

export function createTopic({title="",content=""}){
 return request(`${baseUrl}/topics?accesstoken=${userToken}`,{
   method:"POST",
   body:{
     title:title,
     tab:"dev",
     content:content
   }
 })
}

export function collectTopic({topic_id}){  //主题收藏
 return request(`${baseUrl}/topic_collect/collect?accesstoken=${userToken}`,{
   method:"POST",
   body:{ topic_id }
 })
}

export function cancelTopic({topic_id}){    //取消主题
 return request(`${baseUrl}/topic_collect/de_collect?accesstoken=${userToken}`,{
   method:"POST",
   body:{ topic_id }
 })
}

export function commentTopic({content= "",topic_id}){  //主题评论
  body = topic_id?{ content, reply_id }:{ content }
 return request(`${baseUrl}/topic/${topic_id}/replies?accesstoken=${userToken}`,{
   method:"POST",
   body
 })
}

export function upTopicComment({reply_id}){    //为评论点赞
 return request(`${baseUrl}/reply/${reply_id}/ups ?accesstoken=${userToken}`,{
   method:"POST",
 })
}