import React, {useState, createContext} from 'react'
import './List.css'
import ListInfo from './ListInfo'
import Task from './Task'

export const ListContext = createContext()

const List = () => {


    const [todoList, setTodoList] = useState([{id: new Date().getTime(), 
            taskName: 'Task', 
            isCompleted: false,}])
    const [newTask, setNewTask] = useState('')

    // LOCAL STORAGE 

    //  FILTER 

    const [filter, setFilter] = useState(false)
    const [filteredList, setFilteredList] = useState([])


    // **** CRUD ****


    // ADD 

    const addTodo = () => {
        const task = {
            id: new Date().getTime(), 
            taskName: newTask, 
            isCompleted: false, 
        }
        setTodoList([...todoList, task])
        setFilter(false)
        document.querySelector('.todo-add-input').value = ''
    }
    
    // DELETE 

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task)=> task.id !== id))
    }

    // setCOMPLETE

    const completeTask = (id) => {
        setTodoList(
            todoList.map((todo)=>{
                if(todo.id === id ){
                    if(!todo.isCompleted) {
                        return {...todo, isCompleted: true}
                    } else return {...todo, isCompleted: false}
                } 
                else return todo
            })
        )
        if(filter) {
            setFilteredList(
            filteredList.map((todo)=>{
                if(todo.id === id ){
                    if(!todo.isCompleted) {
                        return {...todo, isCompleted: true}
                    } else return {...todo, isCompleted: false}
                } 
                else return todo
            })
        )
        }
    }

    // UPDATE


    // Drag n Drop


    return (
        <ListContext.Provider value={{todoList, setFilter, setFilteredList}}>
        <section className="todo-container">
            <div className="todo-add todo-task">   
            <div className="todo-checkbox todo-add-box" onClick={addTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="hsl(280, 87%, 65%)" className="todo-add-icon" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
            </div>
            <input type="text" onChange={e=>setNewTask(e.target.value)} placeholder="Create a new todo..." 
            className="todo-add-input"/>
            </div>
            <ul className="todo-list">
                { filter ?                
                filteredList.map((task)=> {
                    return <Task task={task} deleteTask={deleteTask} completeTask={completeTask}></Task>
                })
                :
                todoList.map((task)=> {
                    return <Task task={task} deleteTask={deleteTask} completeTask={completeTask}></Task>
                })
            }
                <ListInfo todoList={todoList} setTodoList={setTodoList}
                ></ListInfo>
            </ul>
        </section>
        </ListContext.Provider>
    )
}

export default List
