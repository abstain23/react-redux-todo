import React, { Component } from 'react'
// import store from './store'
import {connect} from 'react-redux'

class TodoList extends Component {
  // state = store.getState()
  // handleChange = (e) => {

  // }
  render() {
    return (
      <div>
        <input value={this.props.inputVal} onChange={this.props.handleChange}/>
        <button>提交</button>
        <ul>
          <li>xxx</li>
        </ul>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputVal: state.inputVal
  }
}

const dispatchToProps = (dispatch) => {
  return {
    handleChange(e){
      // console.log(e.target.value)
      const action = {
        type: 'change_input',
        payload:e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)