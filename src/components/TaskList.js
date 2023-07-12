import React from 'react' // r f c e 
import TaskItem from './TaskItem'

function TaskList({tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete}) {
  return (
    <>
    <ul className="task-list">
    {tasks
    .filter(task => showIncomplete ? task.status !== 1 : true)
    .map((task) => (
        <TaskItem 
        key={task.id}
        task={task}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        />
    ))}
  
    {/*Above we use the Array method, map(), we will put in this map "task" as input
    and render out the UI output
    */}
  
    {/* <li>
       <span className="label">Code a Todo List</span>
      <div className="action">
        <input type="checkbox" className="btn-action btn-action-done"/>
        <button className="btn-action btn-action-delete">𐄂</button>
      </div>
    </li> 
    => Only need the task State - line 5 is enough, no need to list this all out like in html
    */}
  </ul>
   <div className="filter-wrapper">
   <label htmlFor="filter" className="filter-label">Show incomplete task only</label>
   <input 
   type="checkbox" 
   id="filter" 
   checked={showIncomplete} 
   onChange ={(e) => setShowIncomplete(e.target.checked)}/>
   {/*Toggle show incomplete tasks only - line 67 we do not use e.target.value, cause we not taking the user's input,
    we choose the one was checked*/}


 </div>
 </>
  )
}

export default TaskList
