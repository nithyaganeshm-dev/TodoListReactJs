import React from 'react'
import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'
const TodoItems = ({ no, display, text, setTodos }) => {
  const handleToggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        }
        else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  }

  return (
    <div className='todo-items'>
      <div className={`todo-items-container ${display}`} onClick={() => handleToggle(no)}>
        {display === "" ? <img src={not_tick} alt="notTickImg" className='todos-item-icon' /> : <img src={tick} alt="tickImg" className='todos-item-icon' />}
        <div className="todo-items-text">{text}</div>
      </div>
      <img src={cross} className='todo-items-cross-icon' alt="crossImg" onClick={() => deleteTodo(no)} />
    </div>
  )
}

export default TodoItems
