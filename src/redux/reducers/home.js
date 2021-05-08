const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST":
      return {
        ...state.data,
        data: action.payload
      };
    default:
      return state;
  }
};
