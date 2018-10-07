import React from "react";

const Colors = [
  "#e06b6c",
  "#ed373b",
  "#32a177",
  "#428d88",
  "#f5d9e6",
  "#f6c935",
  "#169776",
  "#8bc5f2",
  "#2ab6fb",
  "#c690dd",
  "#58b2d8",
  "#23313e",
];

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnColor: Colors[0], btnValue: 0 };
  }

  changeColor = () => {
    var { btnValue, btnColor } = this.state;

    btnValue === btnColor.length ? (btnValue = 0) : (btnValue = btnValue + 1);

    this.setState({
      btnColor: Colors[btnValue],
      btnValue,
    });
  };

  render() {
    return (
      <button
        style={{
          backgroundColor: this.state.btnColor,
          width: "30px",
          height: "30px",
        }}
        onClick={() => this.changeColor()}
      />
    );
  }
}

export default ColorButton;
