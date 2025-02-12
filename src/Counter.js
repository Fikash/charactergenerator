import React from "react";
import { connect } from 'react-redux';


class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" })
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" })
  };

  render() {
    return (
      <div className="counter">
        <h2>Redux Testing Counter</h2>
        <div>
          <button onClick={this.decrement}>&ndash;</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  count: store.counterReducer.count
})

export default connect(mapStateToProps)(Counter);