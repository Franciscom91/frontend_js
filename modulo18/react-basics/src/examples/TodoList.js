import React, { useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [todoValue, setTodoValue] = useState('')
    const addTodo = (e) => {
        e.preventDefault()
        console.log('Se envió')
        setTodos((prevState) => [...prevState, todoValue])
        setTodoValue('')
    }

    console.log(todos)

    return <div className="App">
    <h1>Todo List</h1>
    <br></br>
    <form onSubmit={addTodo}>
        <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)}/>
        <button type="submit">Add Todo</button>
    </form>

    {
        todos.map((todo) => {
            return <div key={todo}> {todo} </div>
        })
    }
    </div>
}

export default TodoList