import "./App.css";
import { useState } from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleCheck = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="App">
        <ToDoList
          tasks={tasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <ToDoForm addTask={addTask} />
      </div>
    </>
  );
}

export default App;
