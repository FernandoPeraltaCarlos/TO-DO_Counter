import { useState, React } from 'react'
import TodoCounter from './components/todoCounter'
import TodoSearch from './components/todoSearch'
import TodoList from './components/todoList'
import TodoItem from './components/todoItem'
import TodoAdd from './components/todoCreate'

const todo = [
  {
    text: 'Primera tarea',
    check: false
  },
  {
    text: 'Segunda tarea',
    check: false
  },
  {
    text: "Tercer tarea",
    check: false
  }
]

function App () {
  return (
      <main>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
        {
            todo.map((item, key) => (<TodoItem key={key} text={item.text} />))
        }
        </TodoList>
        <TodoAdd/>

    </main>
  )
}

export default App
