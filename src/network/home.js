import { request } from "./request";
let KEY ='f404b8051d0fc7cb323bef83b379b419'
// 头条新闻
export function getHeadline(page) {
  return request({
    url: '/topnews/index',
    params: {
      // 自己的APIKEY
      key : KEY,
      // 返回的数量
      num: 10,
      // 页码
      page,
    }
  })
}

// 社会新闻
export function getSocial(page) {
  return request({
    url: '/social/index',
    params: {
      key: KEY,
      num: 10,
      page,
    }
  })
}

//科技新闻
export function getInternet(page) {
  return request({
    url: '/internet/index',
    params: {
      key: KEY,
      num: 10,
      page,
    }
  })
}

// 体育新闻
export function getSport(page) {
  return request({
    url: '/tiyu/index',
    params: {
      key: KEY,
      num: 10,
      page,
    }
  })
}

// 影视新闻
export function getMovie(page) {
  return  request({
    url: '/film/index',
    params: {
      key: KEY,
      num: 10,
      page,
    }
  })
}

// 汽车新闻
export function getAuto(page) {
  return request({
    url: '/auto/index',
    params: {
      key: KEY,
      num: ''
    }
  })
}

// 旅游新闻
export function getTravel(page) {
  return request({
    url: '/travel/index',
    params: {
      key: KEY,
      num: 10,
      page,
    }
  })
}
