import React from 'react'

import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Button from './components/Button'
import './index.css'

function App() {
  

  return (
    <div className='main-container'>
      <Header title="TODO LIST" />
      <TodoItem text="Eat" />
      <TodoItem text="Sleep" />
      <TodoItem text="Work" />
      <TodoItem text="Repeat" />
      <TodoItem text="Again" />
      <Button />
    </div>
  )
}

export default App
