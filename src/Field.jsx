import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
  render() {
    return (
      <div>
        <label>{this.props.value}</label> <br/>
        <input onChange={this.handleChange} value={this.props.value} />
      </div>
    )
  }
}

const mapStateToProps = (state) => // ´state´ is the global state of the application providaded by the Provider component, through its attribute ´store´
  ({ value: state.field.value }) // gets the 'value' from props, which is defined in the reducer, on the index.js file

// the connect() method brings 'value' (defined in the reducer as ´field.value´) from the Store (Provider) in index.js
export default connect(mapStateToProps)(Field)