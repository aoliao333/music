import { get, post } from "../../utils/request";

console.log(get, post);
// export const reqPersonalFM = get("/personal_fm");
export const tuijianDedan = () => get("/personalized");

export const yonghuGedan = (uid) => get("/user/playlist",uid);
export const tuijianZhuanji = (id) => get("/artist/album?id="+id);
export const shoucanggeshouliebiao = (id) => get("/artist/album?id="+id);

