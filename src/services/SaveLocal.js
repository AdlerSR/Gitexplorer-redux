export const loadState = () => {
  try {
    const state = localStorage.getItem('user');
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (user) => {
  try {
    const state = JSON.stringify(user);
    localStorage.setItem('state', state);
  } catch (err) {
    // error
  }
};
