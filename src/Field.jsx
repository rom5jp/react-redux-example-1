import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import changeValue from './fieldActions'

class Field extends Component {
  render() {
    return (
      <div>
        <label>{this.props.value}</label> <br/>
        <input onChange={this.props.changeValue} value={this.props.value} />
      </div>
    )
  }
}

// ´state´ is the global state of the application provided by the Provider component that,
// through its attribute ´store´, gets the 'value' from props, 
// which is defined in 'fieldReducer' called from index.js file
const mapStateToProps = (state) => ({ value: state.field.value }) 

// Maps the action 'changeValue' implemented in the fieldActions.js, to the App Store (Provider component)
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeValue }, dispatch)

// connect() brings 'value' (defined in the reducer as ´field.value´) from the Store (Provider) in index.js
export default connect(mapStateToProps, mapDispatchToProps)(Field)