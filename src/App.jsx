import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodo] = useState([])

  function addTodo(e) {
    e.preventDefault();

    setTodo(currentTodos => {
      return [
        ...currentTodos, 
        {id:crypto. randomUUID(), title: newItem, completed: false}]
    });
    setNewItem("")
  };

  function toggleTodo(id, completed) {
    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }



  return (
    <>
      <form className="new-item-form" onSubmit={addTodo}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDos</h1>
      <ul className="list">
        {todos.length == 0 && "There are no ToDos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}></input>
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
