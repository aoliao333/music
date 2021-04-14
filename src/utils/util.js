// 判断有没有登录
export const isLogined = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};

// 设置token
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// 获取token
export const getToken = () => {
  return localStorage.getItem("token");
};

export function setCookie(c_name, value, expire) {
  var date = new Date();
  date.setSeconds(date.getSeconds() + expire);
  document.cookie =
    c_name + "=" + escape(value) + "; expires=" + date.toGMTString();
  //console.log(document.cookie)
}

export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

export function delCookie(c_name) {
  setCookie(c_name, "", -1);
}
// 移除token

export const removeToken = () => {
  localStorage.removeItem("token");
};
