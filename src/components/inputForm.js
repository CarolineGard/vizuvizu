import React from "react";
import ColorButton from "./colorbutton";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { column: [], temp: [] };
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

  render() {
    const { column } = this.state;
    return (
      <div>
        {column.map((
          value, // value is currently set to 0
          index
        ) => (
          <div>
            <ColorButton />
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
