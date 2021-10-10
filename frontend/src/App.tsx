import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { useAppSelector, useAppDispatch } from './app/hooks';
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
import './App.css'
import { selectTodos,getTodosAsync } from './models/todosSlice'

const App = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodosAsync())
    
  }, []);


  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData)
      .then(_ => dispatch(getTodosAsync()))
      .catch(err => console.error(err))
  }

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(_ => dispatch(getTodosAsync()))
      .catch(err => console.error(err))
  }

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(() => dispatch(getTodosAsync()))
      .catch(err => console.log(err))
  }

  return (
    
    <main className="App">
      <h1>My Todos</h1>
      
      <AddTodo saveTodo={handleSaveTodo} />
      {
        todos.map((todo: ITodo) => (
          <TodoItem
            key={todo._id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))
      }
      
  
    </main>
    
  )
}

export default App
