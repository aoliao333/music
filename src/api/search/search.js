import {get} from "../../utils/request";
//热门搜索
export const reqhotlist =(data) =>get("/search/hot",data);
//搜索单曲结果
export const reqsinglist =(keywords,type,limit) =>get("/cloudsearch?keywords="+keywords+'&type='+type+'&limit='+limit);