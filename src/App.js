import React, { useState } from "react";
import "./App.css";

function ToDo({ todo, index, completeToDo, removeToDo }) {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ?  "line-through" : ""}}>{todo.text}
      <div>
        <button onClick={ () => completeToDo(index)}>Complete</button>
        <button onClick={ () => removeToDo(index)}> x </button>
      </div>
    </div>
  );
}

function ToDoForm({ addToDo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addToDo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        className="input" 
        value={value} 
        placeholder="Add ToDo" 
        onChange={e=> setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build rerally cool todo app",
      isCompleted: false
    }
  ]);

  const addToDo = text => {
    const newToDos = [...todos, { text, isCompleted: false }];
    console.log(newToDos)
    setTodos(newToDos);
  }

  const removeToDo = index => {
    const newToDos = [...todos];
    console.log(index)
    newToDos.splice(index, 1);
    setTodos(newToDos);
  }

  const completeToDo = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    console.log(newToDos)
    setTodos(newToDos);
  }

  

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo key={index} index={index} todo={todo} completeToDo={completeToDo} removeToDo={removeToDo} />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;