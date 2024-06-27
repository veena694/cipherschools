import { useState } from "react";
import Task from "../components/Task";
const ToDoScreen = () => {
  // const[taskCount,setTaskCount] = useState(0);
  const[taskList,setTaskList] = useState([]);
  return (
                  <div className = "screen">
                      <h1 className="ui heading center">To Do List</h1>
                      <div>
                      <button onClick={(e)=> {
                          setTaskList([
                              ...taskList,
                              {
                                  title : "go to gym",
                                  description : "going to gym is goood for muscle growth",
                              },
                          ]);
                      }}
                      className="ui secondary button"> Add Task

                      </button>
                      
                      {taskList.map((task) => (
                          <Task/>
                  ))}
                      
                      </div>
                  </div>
              );

};

export default ToDoScreen; 
