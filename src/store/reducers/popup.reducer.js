const INITIAL_STATE = {
  visible: 'hidden',
};

export default function popup(state = INITIAL_STATE, action) {
  if (action.type === 'CHANGE_VISIBILITY') {
    return { ...state, visible: action.payload.visibility };
  }

  return state;
}
