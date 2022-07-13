import axios from "axios";
import React, { useEffect, useState } from "react";
import { Counter } from "../Counter";
import styles from "./task.module.css";

const Task = () => {
  const [item, setItems] = useState([]);
  // NOTE: do not delete `data-testid` key value pair
  useEffect(() => {
    axios
      .get("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((response) => {
        // return response.data;
        setItems(response.data);
        // console.log(response.data);
      });
  }, []);

  console.log("items", item);
  return (
    <>
      <ul className="list-group bg-black">
        {item.map((e, index) => {
          // console.log("e", e);
          return (
            <>
              {" "}
              <li
                data-testid="task"
                className={styles.task}
                key={e.id}
                class="list-group-item d-flex justify-content-around align-items-center bg-glow"
              >
                <input
                  type="checkbox"
                  data-testid="task-checkbox"
                  
                />

                <div data-testid="task-text">{e.TASKDATA}</div>

                <Counter />

                <button data-testid="task-remove-button">Delete</button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Task;
