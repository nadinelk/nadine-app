import React from "react";
import "./App.css";
import Segment1 from "./components/Segment1";
import Segment2 from "./components/Segment2";
// import Segment3 from "./components/Segment3";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      nama: "Nadine",
      kelas: "XII MIPA 1",
      pagi: "true",
      counter: 1,
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Segment1 nama="Nadine" kelas="XII MIPA 1" pagi="true" />
        <Segment2 counter={1} />
      </div>
    );
  }
}

export default App;
