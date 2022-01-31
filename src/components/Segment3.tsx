import React from "react";

interface ISegment3 {
  counter: number;
}

class Segment3 extends React.Component<{}, ISegment3> {
  handleClick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
    if (counter % 2 !== 0) {
      this.render();
      return (
        <div>
          <img src="https://via.placeholder.com/128x128" alt="" />
        </div>
      );
    } else {
      this.render();
      return (
        <div>
          <img src="minisode.jpg" alt="" />
        </div>
      );
    }
  };
}

export default Segment3;
