export const getUserFromLocalStorage = () =>
  JSON.parse(window.localStorage.getItem('LPT-users'));

export const setUserToLocalStorage = (user) =>
  window.localStorage.setItem('LPT-users', JSON.stringify(user));

export const removeUserFromLocalStorage = () =>
  window.localStorage.removeItem('LPT-users');
