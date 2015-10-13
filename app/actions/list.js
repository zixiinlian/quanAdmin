import ActionTypes from '../constants/ActionTypes';

export function getQuanList() {
  return async api => ({
    type: ActionTypes.User.getOneByUsername,
    username,
    res: await api(`/users/${username}`)
  });
}