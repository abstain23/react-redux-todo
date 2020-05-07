const defaultState = {
  list:[],
  inputVal: 'hello ccc'
}
export default (state = defaultState, action) => {
  if(action.type === 'change_input') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.payload
    return newState
  }
  return state
}