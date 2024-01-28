import React, { useState } from "react";

const Main = () => {
  const defaultTask = {
    taskName: "",
    taskDesp: "",
  };
  const [task, setTask] = useState(defaultTask);
  const [listedTask, setListedTask] = useState([]);
  const handleInputs = (event) => {
    setTask((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onAdd = () => {
    if (
      task.taskName.trim().length === 0 ||
      task.taskDesp.trim().length === 0
    ) {
      alert("Please enter valid Task Name and Description");
      return;
    }

    // Update the task object with a unique identifier (id)
    const updatedTask = { ...task, id: Date.now() };

    // Use the updatedTask in setListedTask
    setListedTask((prev) => {
      const newTasks = [...prev, updatedTask];
      console.log(newTasks); // Log the updated tasks
      return newTasks;
    });

    // Reset the task input fields to the default state
    setTask((prev) => ({ ...prev, taskName: "", taskDesp: "" }));
  };
  return (
    <div className="main">
      <h1 className="main--title">Todo List</h1>
      <div className="main--input-div">
        <input
          onChange={(event) => handleInputs(event)}
          className="main--input"
          type="text"
          placeholder="Task Name"
          name="taskName"
          value={task.taskName}
        />
        <input
          onChange={(event) => handleInputs(event)}
          className="main--input"
          type="text"
          placeholder="Description"
          name="taskDesp"
          value={task.taskDesp}
        />
        <button className="main--button" onClick={onAdd}>
          Add
        </button>
      </div>
      <div className="main--input-div">
        {listedTask.length > 0
          ? listedTask.map((list) => {
              return (
                <div key={list.id} >
                  <h3>{list.taskName}</h3>
                  <p>{list.taskDesp}</p>
                </div>
              );
            })
          : "No Task"}
      </div>
    </div>
  );
};

export default Main;
