const INITIAL_STATE = {
  profile: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        profile: action.payload.data,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        profile: [],
      };
    default:
      return state;
  }
}
