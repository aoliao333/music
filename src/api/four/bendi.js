import { get, post } from "../../utils/request";

console.log(get, post);
// export const reqPersonalFM = get("/personal_fm");
export const tuijianDedan = () => get("/personalized");

export const yonghuGedan = (uid) => get("/user/playlist?uid="+uid);
export const tuijianZhuanji = (id) => get("/artist/album?id="+id);
export const shoucanggeshouliebiao = (id) => get("/artist/album?id="+id);
export const  xinjiangedan=(name)=>post('/playlist/create?name='+name)
// export const  xinjiangedan=(name)=>post('/playlist/create?name='+name)
export const  shoucanggeshoulist=(uid)=>get('/artist/sublist?uid='+uid)
export const wodezhuanji1 = () => get("/album/sublist");


