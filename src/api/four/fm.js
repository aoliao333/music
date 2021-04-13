import { get } from "../../utils/request";

export const reqPersonalFM = (data) => get("/personal_fm", data);
