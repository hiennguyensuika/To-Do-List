import React, { useState } from 'react';
import Header from "./components/Header"

import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    {id:"task_1" , title:"Learn JS Fundamental", status: 0},
    {id: "task_2",title:"Code a Todo List Level 2", status: 1},
])
//setTasks (above) => First State, creating tasks
//status default - 0 is not done, 1 is done
  const [showIncomplete, setShowIncomplete] = useState(true)
//The initial State is just true or false, here default is false

const [newTask, setNewTask] = useState("123");
//After creating these tasks, next we will attach the States with UI  
const handleSubmit=(e)=>{
  e.preventDefault();
  if(newTask){
    const task = {
      id: Date.now(),
      title: newTask,
      //this means all the value that users type in 
      status: 0
    }
    setTasks([...tasks, task]) /*Adding new task into old tasks - 
  ...tasks is old task, task is new task in this code line */
    setNewTask("") /* set this setNewTask empty not as default as 123 anymore, 
    so the user can type in input
    */
}}

const handleInputChange = (e) =>{
  setNewTask(e.target.value);
}

const setTaskStatus = (taskId, status) => {
  setTasks(tasks.map(task => {
    if(task.id === taskId){
      return{...task, status: status ? 1 : 0};
    }
    return task;
  }))
}

const removeTask = (taskId) => {
  setTasks(tasks.filter((task) => task.id !== taskId))
}

  return (
<div className="container">
  <Header title="Todo List" subTitle="Get things done"/>
  <Header title="Expenses App" subTitle=""/>

 <TaskList
 tasks={tasks} 
 showIncomplete={showIncomplete} 
 setTaskStatus={setTaskStatus} 
 removeTask={removeTask}
 setShowIncomplete={setShowIncomplete}
 /> 

 <AddTaskForm 
 newTask={newTask} 
 handleSubmit={handleSubmit} 
 handleInputChange={handleInputChange}
 />
 {/*Type out <TaskList - React will automatically import TaskList.js into App js which is line 5 */}
 
  {/*So here we put action = "#" to stop this action to send the data to somewhere-esle */}
</div>
  );
}

export default App;
