import { get } from "../utils/request";
// 获取新歌
export const reqRecommend = (data) => get("/personalized/newsong", data);
