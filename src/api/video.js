import { get } from "../utils/request";
//获取视频
export const reqVideo = (data) => get("/video/timeline/recommend", data);

