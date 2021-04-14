import { get } from "../utils/request";
//轮播
export const reqSwipe = (data) => get("/banner", data);
//推荐歌单
export const reqPersonalized = (data) => get("/personalized", data);
//最新音乐
export const reqNewsong = (data) => get("/personalized/newsong", data);
// /personalized/privatecontent/list
// 独家放送
export const reqPrivatecontent = (data) => get("/personalized/privatecontent/list", data);
// /personalized/mv
//推荐MV
export const reqMv = (data) => get("/personalized/mv", data);
//主播电台
export const reqDjprogram = (data) => get("/personalized/djprogram", data);

