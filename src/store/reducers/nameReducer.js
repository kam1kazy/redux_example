/// -------------------------------
/// REDUCER - меняет Store
/// -------------------------------
const initialState = {
  name: "state = initialState from Reducer"
};

// Принимает State и Action
const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state, /// разворачивает объект
        ...action.payload /// получает объект и разворачивает
      };
    default:
      return state;
  }
};

export default nameReducer;
