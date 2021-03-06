import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";
import {} from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handelDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handelReset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };
  handelDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    console.log("hilted delete", { counterId });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        ;
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncrement={this.handelIncrement}
            onDecrement={this.handelDecrement}
            onDelete={this.handelDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
