import { getUserID } from "./../utils/auth";

export const excludeMeFromUsers = (users = []) => {
  const UID = getUserID();
  const data = users.filter((u) => u._id !== UID);
  return data;
};
