import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onAdd}
          className="btn btn-primary btn-sm m-2"
        >
          Add
        </button>
        {this.props.counters.map(counter => (
          //onDelete, value, id are props being passed to the counter component
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            /*value={counter.value} id={counter.id} both part of counter object and can be passed together to simplify code, see below*/
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

/* same as class extends: function Counters(props) {
  return (
    <div>
      <button
        onClick={this.props.onReset}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
      {this.props.counters.map(counter => (
        //onDelete, value, id are props being passed to the counter component
        <Counter
          key={counter.id}
          onIncrement={this.props.onIncrememt}
          onDelete={this.props.onDelete}
          //value={counter.value} id={counter.id} both part of counter object and can be passed together to simplify code, see below
          counter={counter}
        />
      ))}
    </div>
  );
}*/
