import axios from "axios";
import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [inputData, setInputData] = useState("");
  const [item, setItems] = useState([]);
  const [count, setcount] = useState(0);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTask = (e) => {
    if (!inputData) {
      alert("Necessary to filled data");
      //1.current data stored and updated data stored in array
    } else {
      setItems([inputData, ...item]);
      //2.
      setInputData("");
      setcount(count + 1);
    }
    const payload = {
      TASKDATA: inputData,
    };
    axios
      .post("https://json-server-mocker-masai.herokuapp.com/tasks", payload)
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
        setInputData("");
        alert("Data Added Succesfully   - " + response.status);
      })
      .then((error) => {
        return error;
        // console.log("error", error);
      });
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        value={inputData}
        onChange={handleChange}
      />
      <button data-testid="add-task-button" onClick={(e) => handleAddTask(e)}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
