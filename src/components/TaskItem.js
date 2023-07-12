import React from 'react'

function TaskItem({task, setTaskStatus, removeTask}) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
    <span className="label">{task.title}</span>
    <div className="action">
      <input 
       type="checkbox" 
       className="btn-action btn-action-done"
       checked={Boolean(task.status)}
       onChange={(e) => setTaskStatus(task.id, e.target.checked)}
      />
      {/*Line 47 - JS usually automatically adjust for us the data type, however to ensure, we just 
      put Boolean ourself as the data type that we want
      */}
      <button onClick ={() => removeTask(task.id)} className="btn-action btn-action-delete">𐄂</button>
    </div>
  </li>
  )
}

export default TaskItem
