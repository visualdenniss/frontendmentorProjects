import React,{useContext} from 'react'
import {ListContext} from './List.jsx'
import './Filter.css'

const Filter = () => {
    const {todoList, setFilter, setFilteredList} = useContext(ListContext)

    const filterActives = () => {
        setFilter(true)
       const actives = todoList.filter(item=> item.isCompleted === false)
       setFilteredList(actives)
    }
    const filterCompleted = () => {
        setFilter(true)
       const completed = todoList.filter(item=> item.isCompleted === true)
       setFilteredList(completed)
    }

    return (
        <section className="todo-filters">
        <button className="todo-filter-btn"
        onClick={()=>setFilter(false)}
        >All</button>
        <button className="todo-filter-btn"
        onClick={filterActives}
        >Active</button>
        <button className="todo-filter-btn"
        onClick={filterCompleted}
        >Completed</button>
        </section>
    )
}

export default Filter
