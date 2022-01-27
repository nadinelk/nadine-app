import React from "react";

interface ISegment2 {
  counter: number;
  handleClick: () => number;
}

class Segment2 extends React.Component<any, ISegment2> {
  handleClick = () => {
    this.setState({
      counter: this.props.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Counter: {this.props.counter}</h2>
        <button type="button" onClick={this.handleClick}>
          Click Here
        </button>
      </div>
    );
  }
}

export default Segment2;
