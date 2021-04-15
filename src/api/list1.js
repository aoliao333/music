import { get } from "../utils/request";
//获取相应排行榜歌单 /top/list?id=19723756
export const reqPhblist = (data) => get("/top/list", data);

