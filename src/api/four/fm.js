import { get } from "../../utils/request";

export const reqPersonalFM = (data) => get("/personal_fm", data);
export const req1 = (data) => get("/user/playlist", data);

