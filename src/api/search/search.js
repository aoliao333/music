import {get} from "../../utils/request";
//热门搜索
export const reqhotlist =(data) =>get("/search/hot",data);
//搜索结果
export const reqsinglist =(keywords,type,limit,offset) =>get("/cloudsearch?keywords="+keywords+'&type='+type+'&limit='+limit+'&offset='+offset);
//特殊电台
export const reqdiantailist =(keywords,type,limit) =>get("/cloudsearch?keywords="+keywords+'&type='+type+'&limit='+limit);
//
export const reqsingerlist =(type,area,limit,initial,offset)=>get("/artist/list?type="+type+'&area='+area+'&limit='+limit+'&initial='+initial+'&offset='+offset);