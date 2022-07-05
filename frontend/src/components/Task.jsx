import React from "react";
import { useState } from "react";

export default function Task(props) {
  const [vali, setVali] = useState(true);
  function handleDelete() {
    fetch("http://localhost:8989/api/delete-tasks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId: props.id }),
    });

    alert("deleted");
    window.location.reload(false);
  }
  function handleEdit() {
    setVali(!vali);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    setVali(!vali);
    fetch("http://localhost:8989/api/update-task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: props.id,
        taskName: e.target[0].value,
        _id: props._id,
      }),
    });

    window.location.reload(false);
  }

  function handleCheck(){
    fetch("http://localhost:8989/api/update-task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: !props.isDone,
        _id: props._id,

      }),
    });

    window.location.reload(false);
  }
  return (
    <div className="task">
      <div className="task-suka">
        <div className="inputfield">
          <input type="radio" id={`${props.key}`} className="radio-btn" onClick={handleCheck} />
          {vali ? (
            <label
              htmlFor=""
              id={`${props.key}`}
              className={`${props.isDone?  'checkedtask': ''}`}
            >{`#${props.id} ${props.topic} `}</label>
          ) : (
            <form action="" className="input-edit" onSubmit={handleSubmit}>
              <input type="text" placeholder={`${props.topic}`} />
            </form>
          )}
        </div>
        <div className="actions">
          <img
            className="img"
            src="./images/editing.png"
            alt=""
            onClick={handleEdit}
          />
          <img
            className="img"
            src="./images/delete.png"
            alt=""
            onClick={handleDelete}
          />
        </div>
      </div>
      <hr className="hrsd" />
    </div>
  );
}
