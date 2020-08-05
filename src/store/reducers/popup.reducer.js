const userStateJson = localStorage.getItem('user');
const userState = JSON.parse(userStateJson);

let logged;
if (userState.user) {
  if (userState.user.profile.length === 0 || !userState) {
    logged = false;
  } else {
    logged = true;
  }
}

const INITIAL_STATE = {
  visible: 'hidden',
  isLogged: logged,
};

export default function popup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_POPUP':
      return {
        ...state,
        visible: action.payload.visibility,
        isLogged: action.payload.loginStatus,
      };
    default:
      return state;
  }
}
