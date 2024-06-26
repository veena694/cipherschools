import { useState } from "react";
const ToDoScreen = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="screen">
      <h1 className="ui heading center">To Do List</h1>
      <div>
      <button
        onClick={(e) => {
          setTaskList([
            ...taskList,
            {
              title: "Go to gym",
              description: "Going to gym is good for muscle growth.",
            },
          ]);
        }}
        className="ui secondary button"
      >
        Add Task
      </button>
      {taskList.map((task) => (
        <task />
      ))}
    </div>
    </div>
  );
};

export default ToDoScreen;
