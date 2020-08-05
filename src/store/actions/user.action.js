import api from '../../services/api';

export const addUser = (name) => async (dispatch) => {
  dispatch({
    type: 'GET_USER_REQUEST',
  });

  try {
    const res = await api.get(`users/${name}`);
    const { data } = res;

    dispatch({
      type: 'GET_USER_SUCCESS',
      payload: {
        data,
      },
    });
  } catch (e) {
    dispatch({
      type: 'GET_USER_ERROR',
      error: 'Fail',
    });
  }
};

export function removeUser() {
  return {
    type: 'REMOVE_USER',
  };
}
