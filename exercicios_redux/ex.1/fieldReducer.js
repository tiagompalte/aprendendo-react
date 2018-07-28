const INITIAL_STATE = { value: 'OPA' }

export default function(state = INITIAL_STATE, action) {
  console.log('CHANGED')
  if(action.type = 'VALUE_CHANGED') {
    return { value: action.payload }
  }
  return state
}