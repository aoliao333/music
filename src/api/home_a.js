import { get } from "../utils/request";

export const reqRecommend = (data) => get("/personalized/newsong", data);
