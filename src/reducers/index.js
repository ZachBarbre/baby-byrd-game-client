const Reducer = (state, action) => {
  const { _id, name, birthDate, babyWeight, sex } = action.data;
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
    case 'ACTION_GET_DATA':
      return action.data
    default:
      return state;
  }
};

export default Reducer;