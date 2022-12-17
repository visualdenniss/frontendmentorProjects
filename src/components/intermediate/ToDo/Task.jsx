import React from 'react'
import './Task.css'
import check from './assets/todo-app-main/images/icon-check.svg'
import cross from './assets/todo-app-main/images/icon-cross.svg'

const Task = ({task,deleteTask, completeTask}) => {

    return (
        <li className='todo-task' key={task.id} id={task.id}>
            <div className={task.isCompleted ? "todo-checkbox todo-checkbox-completed" : "todo-checkbox"} onClick={()=> completeTask(task.id)}>
                {task.isCompleted && <img src={check} alt="" className="checkbox-check"/>}
            </div>
            <p className={task.isCompleted ? 'todo-task-completed': ''}
            onClick={()=> completeTask(task.id)}
            >{task.taskName}</p>
            <button className="todo-task-delete" onClick={()=>deleteTask(task.id)}>
            <img src={cross} alt="" className="todo-task-delete-icon"/>
            </button>
        </li>
    )
}

export default Task
