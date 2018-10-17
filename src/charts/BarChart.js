import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
} from "react-vis";

class BarChart extends React.Component {
  state = {
    useCanvas: false,
  };

  render() {
    const { data } = this.props;
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot margin={{ left: 75 }} xType="time" width={300} height={300}>
          <BarSeries className="vertical-bar-series-example" data={data} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}

export default BarChart;
