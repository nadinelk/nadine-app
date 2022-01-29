import React from "react";

interface ISegment2 {
  counter: number;
}

class Segment2 extends React.Component<{}, ISegment2> {
  state = {
    counter: 0,
  };
  handleClick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button type="button" onClick={this.handleClick}>
          Click Here
        </button>
      </div>
    );
  }
}

export default Segment2;
