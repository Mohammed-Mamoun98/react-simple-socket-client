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

export const setUserID = (token) => {
  localStorage.setItem("UID", token);
};

export const getUserID = () => {
  const token = localStorage.getItem("UID");
  return token;
};

export const clearUserID = () => {
  localStorage.removeItem("UID");
};
