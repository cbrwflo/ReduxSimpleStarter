// State argument is not application state, only the state
// this reducer is responsible for
// ES6 Syntax for function arguments assigns a value to 'undefined' arguments
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
