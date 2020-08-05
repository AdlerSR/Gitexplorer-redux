export function togglePopup(visibility, loginStatus) {
  return {
    type: 'CHANGE_POPUP',
    payload: { visibility, loginStatus },
  };
}
