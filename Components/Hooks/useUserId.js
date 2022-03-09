import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return action.value;
  }
}

export default initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}