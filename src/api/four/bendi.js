import { get, post } from "../../utils/request";

console.log(get, post);
// export const reqPersonalFM = get("/personal_fm");
export const tuijianDedan = () => get("/search/hot");
