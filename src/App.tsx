import React, { Component } from "react";
import Person, { TPersonProps } from "./components/person-component";

type TAppState = {
  persons: TPersonProps[];
  othreState: string;
};

class App extends Component {
  state: TAppState = {
    persons: [
      {
        id: "p0",
        name: "Max",
        age: "25",
        hobbies: "skateboarding, coding",
      },
      {
        id: "p1",
        name: "Syrena",
        age: "30",
      },
      {
        id: "p2",
        name: "Big-Show",
        age: "50",
        hobbies: "skateboarding, coding",
      },
    ],
    othreState: "some other value",
  };

  render() {
    let personsArr: null | JSX.Element = null;
    if (this.state.persons) {
      personsArr = (
        <div>
          {this.state.persons.map((person) => (
            <Person {...person} key={person.id} />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, im yor strugle</h1>
        <button>Switch something</button>
        {personsArr}
      </div>
    );
  }
}
export default App;
