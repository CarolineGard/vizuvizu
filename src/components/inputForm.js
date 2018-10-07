import React from "react";
// import Input from "./inputField";

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

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { column: [], temp: [], btnColor: Colors[0], btnValue: 0 };
  }

  handleClick = () => {
    this.setState({ column: this.state.column + 1 });
  };

  addNewField = () => {
    const { column } = this.state;
    column.push([]); // Adds new empty field array to the big array
    this.setState(column);
  };

  deleteField = index => {
    const { column } = this.state;
    column.splice(index, 1);
    this.setState(column);
  };

  handleInputChange = (event, index) => {
    const { temp } = this.state;
    temp[index] = event.target.value;
    this.setState({ temp }); // sets temp to current value
  };

  addNewValue = index => {
    const { column, temp } = this.state;
    (temp[index] != null || temp[index] !== "") &&
      column[index].push(temp[index]);
    temp[index] = "";
    this.setState({ temp }); // ===> {"temp": temp}
  };

  changeColor = () => {
    var { btnValue, btnColor } = this.state;

    btnValue === btnColor.length ? (btnValue = 0) : (btnValue = btnValue + 1);

    this.setState({
      btnColor: Colors[btnValue],
      btnValue,
    });
  };

  render() {
    const { column } = this.state;
    return (
      <div>
        {column.map((
          value, // value is currently set to 0
          index
        ) => (
          <div>
            <button
              style={{ backgroundColor: this.state.btnColor }}
              onClick={() => this.changeColor()}
            >
              color
            </button>
            <input
              type="text"
              value={this.state.temp[index]}
              onChange={event => this.handleInputChange(event, index)}
            />
            <button onClick={() => this.addNewValue(index)}>Add value</button>
            {/* creates new anonymous function, for not be clicked right away when entering the page */}
            <button onClick={() => this.deleteField(index)}>
              Delete field
            </button>
          </div>
        ))}

        <button onClick={this.addNewField}>Add new field</button>
      </div>
    );
  }
}

export default InputForm;
