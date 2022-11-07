import { Component } from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the Full React Course" />
    </div>
  );
  //we can also write as <Todo/> <---> <Todo> </Todo>
  //component function MUST start with caps
  //inside return is a JSX code
}

export default App;
