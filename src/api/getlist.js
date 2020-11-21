// 处理请求

/**
 * https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all  排行榜
 * https://api.bilibili.com/x/web-interface/popular/series/one?number=86  每周必看
 * https://api.bilibili.com/x/web-interface/popular/precious?page_size=100&page=1 入站必刷
 * https://api.bilibili.com/x/web-interface/popular?ps=20&pn=1  综合热门
 */
import axios from "axios";
// 排行榜
let url =
  "https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/web-interface";
const Ranking = () => {
  return axios({
    method: "get",
    url: `${url}/ranking/v2?rid=0&type=all`,
    timeout: 6000
  });
};
const Eweek = () => {
  return axios({
    method: "get",
    url: `${url}/popular/series/one?number=86`,
    timeout: 6000
  });
};
const Comprehensive = () => {
  return axios({
    method: "get",
    url: `${url}/popular?ps=20&pn=1`,
    timeout: 6000
  });
};
const Brushed = () => {
  return axios({
    method: "get",
    url: `${url}/popular/precious?page_size=100&page=1`,
    timeout: 6000
  });
};
export { Ranking, Eweek, Comprehensive, Brushed };
