export const setToken = (token) => {
  localStorage.setItem("access_token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("access_token");
  return token;
};

export const clearToken = () => {
  localStorage.removeItem("access_token");
};
