import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeriesCanvas,
  Hint,
} from "react-vis";

const colorRanges = {
  typeA: ["#59E4EC", "#EFC1E3"],
  typeB: ["#EFC1E3", "#B52F93"],
};

class Example extends React.Component {
  state = {
    drawMode: 1 % 2,
    colorType: "typeA",
    value: false,
  };

  render() {
    const { colorType } = this.state;
    const { data } = this.props;
    const markSeriesProps = {
      animation: true,
      className: "mark-series-example",
      sizeRange: [5, 15],
      seriesId: "my-example-scatterplot",
      colorRange: colorRanges[colorType],
      opacityType: "literal",
      data: data,
      onNearestXY: value => this.setState({ value }),
    };

    return (
      <div className="canvas-wrapper">
        <div className="canvas-example-controls" />
        <XYPlot
          onMouseLeave={() => this.setState({ value: false })}
          width={600}
          height={300}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeriesCanvas {...markSeriesProps} />
          <Hint value={this.state.value} />
        </XYPlot>
      </div>
    );
  }
}

export default Example;
