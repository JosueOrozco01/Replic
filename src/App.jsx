// src/App.jsx
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'
import useLocalStorage from './hooks/useLocalStorage'
import './App.css'

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>Organize your tasks efficiently</p>
      </header>
      
      <div className="container">
        <TaskForm onAddTask={addTask} />
        
        <FilterButtons 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
        
        <TaskList 
          tasks={filteredTasks} 
          onDeleteTask={deleteTask}
          onToggleCompleted={toggleCompleted}
        />
      </div>
    </div>
  )
}

export default App