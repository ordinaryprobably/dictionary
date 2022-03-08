import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [
        ...state,
        ...action.value
      ];
    case 'DELETE_ALL': 
      return [];
    case 'SINGLE_WORD':
      return state.filter(word => word.id === action.id);
  }
}

export default initialState => {
  const [word, dispatch] = useReducer(reducer, initialState);

  return [word, dispatch];
}