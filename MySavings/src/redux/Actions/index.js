export const setUserActive = user => {
  return {
    type: 'USER_ACTIVE',
    payload: user,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
