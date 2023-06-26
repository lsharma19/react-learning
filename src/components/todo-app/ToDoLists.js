import React from "react";

const ToDoLists = (props) => {
    return (
        <>
            <div className="d-flex list-items">
                <button className="del-btn" onClick={() => {props.onSelect(props.id)}}>X</button>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoLists;
