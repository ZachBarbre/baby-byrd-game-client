const Reducer = (state, action) => {
  const { _id, name, birthDate, babyWeight, sex } = action;
  switch (action.type) {
    case 'ACTION_ADD_GUESS':
      return (
        state.concat(
          {
            _id, 
            name,
            birthDate,
            babyWeight,
            sex
          }
        )
      );
    case 'ACTION_DELETE_GUESS':
        const newState = state.filter(guess => guess._id === _id);
        return newState;
    default:
      return state;
  }
};

export default Reducer;