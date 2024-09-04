import React, { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css';
import TodoItems from './TodoItems';
import right_Img from './Assets/right_img.png'
let count = 0;
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const handleAdd = () => {
        if (inputRef.current.value !== "") {
            setTodos([...todos, {
                no: count++,
                text: inputRef.current.value,
                display: ""
            }]);
            inputRef.current.value = "";
            localStorage.setItem("todos_count", count);
        }
        else if (inputRef.current.value === "") {
            alert("Enter Your Task");
        }
    }

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100)
    }, [todos])

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count = localStorage.getItem("todos_count");
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="image-container d-none d-md-block">
                        <img src={right_Img} alt="image" className='w-100' />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className='todo'>
                        <div className="todo-header">To-Do List</div>
                        <div className="todo-add">
                            <input type="text" ref={inputRef} placeholder='Add Your Task' className='todo-input' />
                            <button onClick={() => handleAdd()} className='todo-add-button'>ADD</button>
                        </div>
                        <div className="todo-list">
                            {todos.map((item, index) => {
                                return <TodoItems key={index} no={item.no} display={item.display} text={item.text} setTodos={setTodos} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Todo
