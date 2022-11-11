import React, { Component } from 'react'

export class Suwe extends Component {

  constructor(props) {
    super(props);
    this.state = { count: "zero" };
  }

  increment = () => {
    if (this.state.count === 10) {
      this.setState({ count: "zero" });
      return;
    }
    if (this.state.count === "zero") {
      this.setState({ count: 1 });
      return;
    }
    this.setState({ count: this.state.count + 1 });
  };



  render() {
    return (
      <div className='slate'>
        <label htmlFor='button'>{this.state.count}</label>
        <button id='button' className='btn btn-primary' onClick={this.increment}> Click Me </button>
      </div>
    )
  }
}

export default Suwe