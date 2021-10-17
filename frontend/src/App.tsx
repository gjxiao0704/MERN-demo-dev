import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { useAppSelector, useAppDispatch } from './app/hooks';
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
import './App.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { selectTodos, getTodosAsync } from './models/todosSlice'
import { Toast } from 'primereact/toast';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './index.css';
import ReactDOM from 'react-dom';


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
  const [selectedProduct6, setSelectedProduct6] = useState(null);
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

      <div className="datatable-selection-demo" >
        <DataTable value={todos} selectionMode="radiobutton" selection={selectedProduct6} onSelectionChange={e => setSelectedProduct6(e.value)} dataKey="name">
          <Column selectionMode="single" headerStyle={{ width: '3em' }}></Column>
          <Column field="name" header="Name"></Column>
          <Column field="description" header="description"></Column>
        </DataTable>
      </div>



    </main>

  )
}

export default App
