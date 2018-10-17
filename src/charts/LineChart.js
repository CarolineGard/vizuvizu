import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
} from "react-vis";

class LineChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    //const sortedData = [].concat(data).sort((a, b) => a.x > b.x);
    return (
      <div className="LineChart">
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default LineChart;
