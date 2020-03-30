const INITIAL_STATE = { value: 'Hello Field Reducer' }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VALUE_CHANGED':
      return { value: action.payload } // Returns an evolved version of the state
    default:
      return state
  }
}