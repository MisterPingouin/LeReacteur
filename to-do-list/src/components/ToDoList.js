const ToDoList = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <div className="Tasks">
      {tasks.map((task) => (
        <div key={task.id} className="Task">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheck(task.id)}
          />
          <span className={task.completed ? "completed" : ""}>{task.text}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
