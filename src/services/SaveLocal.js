export const loadState = () => {
  try {
    const state = localStorage.getItem('user');
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    return err;
  }
};

export const saveState = (user) => {
  try {
    const state = JSON.stringify(user);
    localStorage.setItem('user', state);
  } catch (err) {
    // error
  }
};
