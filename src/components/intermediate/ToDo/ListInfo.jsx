import React from 'react'
import Filter from './Filter'
import './ListInfo.css'

const ListInfo = ({todoList, setTodoList}) => {

const clearCompleted = () => {
    const toBeCompleted = todoList.filter(item=> item.isCompleted === false)
    setTodoList(toBeCompleted)
}

const length = todoList.filter((task)=> task.isCompleted === false).length

    return (
        <section style={{borderRadius: todoList.length === 0 ? '5px' : '0px 0px 5px 5px'}} className='todo-task todo-list-info'>
            <div className="todo-incomplete-counter">
                {length} {length < 2 ? 'item' : 'items'} left
            </div>
            <Filter></Filter>
            <button className='todo-clear-btn' onClick={clearCompleted}>Clear completed</button>
        </section>
    )
}

export default ListInfo
