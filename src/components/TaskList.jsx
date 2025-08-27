function TaskList({ tasks, onDeleteTask, onToggleCompleted }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <i className="fas fa-clipboard-list"></i>
        <p>No tasks found. Add a new task to get started!</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleCompleted(task.id)}
            className="task-checkbox"
          />
          <span className="task-text">{task.text}</span>
          <button 
            onClick={() => onDeleteTask(task.id)}
            className="delete-btn"
            aria-label="Delete task"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  )
}

export default TaskList