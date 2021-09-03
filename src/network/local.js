import { request } from "./request";
let KEY ='f404b8051d0fc7cb323bef83b379b419'
// 头条新闻
export function getLocal(page) {
  return request({
    url: '/topnews/index',
    params: {
      // 自己的APIKEY
      key : KEY,
      // 返回的数量
      num: 10,
      // 地区
      word: '长沙',
      // 页码
      page,
    }
  })
}