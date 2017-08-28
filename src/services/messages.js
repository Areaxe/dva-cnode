
export function getUnReadMsg() {  //获取未读消息数
  return request(`${baseUrl}/message/count?accesstoken=${userToken}`);
}

export function getMessages() {  //获取已读和未读消息
  return request(`${baseUrl}/messages?accesstoken=${userToken}`);
}

export function redAllMsg(){  //标记全部已读
 return request(`${baseUrl}/message/mark_all?accesstoken=${userToken}`,{
   method:"POST",
 })
}

export function readOneMsg({msg_id=""}){  // 标记单个消息为已读
 return request(`${baseUrl}/message/mark_one/${msg_id}?accesstoken=${userToken}`,{
   method:"POST",
 })
}