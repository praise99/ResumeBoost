export const setLocalUserInstance = (userObj: object) => {
  localStorage.setItem("localUser", JSON.stringify(userObj));
};
export const getCurrentUserInstance = () => {
  //   @ts-ignore
  const localUser = JSON.parse(localStorage.getItem("localUser"));
  return localUser;
};
