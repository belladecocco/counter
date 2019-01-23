import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }
  handleDelete(counterId) {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); //same as this.setState({counters: counters})
  }
  handleReset() {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }
  handleAdd() {
    const counters = [...this.state.counters];
    const counter = { id: counters.length + 1, value: 0 }; 
    counters.push(counter); 
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
