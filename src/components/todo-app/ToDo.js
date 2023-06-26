import React, { useState } from "react";
import "./todo.scss";
import ToDoLists from "./ToDoLists";

const ToDo = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvents = (e) => {
        setInputList(e.target.value)  
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
        setInputList("")
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (    
        <>
            <h1>To Do App</h1>
            <div className="d-flex">
                <input type="text" placeholder="Add a items" onChange={itemEvents} value={inputList} />
                <button className="plus-btn" onClick={listOfItems}>+</button>
            </div>
            <ol>
                {
                    items.map((itemVal, index) => {
                        return <ToDoLists key={index} id={index} text={itemVal} onSelect={deleteItems} />    
                    })
                }
            </ol>
            
        </>
    )
}

export default ToDo;
