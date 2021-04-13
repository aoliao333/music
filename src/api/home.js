import { get } from "../utils/request";
//轮播
export const reqSwipe = (data) => get("/banner", data);
//推荐歌单
export const reqPersonalized = (data) => get("/personalized", data);