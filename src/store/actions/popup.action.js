export function toggleVisibility(visibility) {
  return {
    type: 'CHANGE_VISIBILITY',
    payload: { visibility },
  };
}
