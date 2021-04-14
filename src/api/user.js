import { post } from "../utils/request";
//注册
export const reqReg = (data) => post("/api/v1/auth/reg", data);

// 登录
export const reqLogin = (data) => post(`/login/cellphone${data}`);

//  获取歌曲详情

export const reqSongDetail = (data) => post(`/song/detail${data}`);

//  获取歌词

export const reqLyric = (data) => post(`/lyric${data}`);

//  获取歌曲url

export const reqSongsUrl = (data) => post(`/song/url${data}`);
