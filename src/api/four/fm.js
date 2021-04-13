import { get, post } from "../../utils/request";

console.log(get, post);
export const reqPersonalBD = get("/personal_fm");

export const reqLogin = (data) => post("/api/v1/auth/login", data);
