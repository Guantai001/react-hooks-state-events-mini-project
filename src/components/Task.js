import React ,{useEffect,useState}from "react";

function Task(prop) {

s
  return (
    <div className="task" >
    <div className="label">{prop.category}</div>
    <div className="text">{prop.text}</div>

    <button onClick={() => prop.onDelete(prop.id)}>X</button>

    </div>
  );
}

export default Task;
