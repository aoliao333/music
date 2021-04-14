import { get } from "../../utils/request";
//排行榜
export const reqToplist = (data) => get("/toplist/detail", data);
