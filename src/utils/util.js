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

// 移除token

export const removeToken = () => {
  localStorage.removeItem("token");
};
