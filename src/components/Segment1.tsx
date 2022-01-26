import React from "react";
interface ISegment1 {
  nama: string;
  kelas: string;
  pagi: string;
}

class Segment1 extends React.Component<ISegment1> {
  render() {
    return (
      <div>
        <h2>Nama: {this.props.nama}</h2>
        <h2>Kelas: {this.props.kelas}</h2>
        <h2>Pagi: {this.props.pagi}</h2>
      </div>
    );
  }
}

export default Segment1;
