import { request } from "./request";

export function getHeadline() {
  return request({
    url: '/article/list/T1467284926140/0-20'
  })
}