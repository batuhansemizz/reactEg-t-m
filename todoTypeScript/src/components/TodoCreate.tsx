import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createTodo } from '../redux/todoSlice'
function TodoCreate() {
        const dispatch = useDispatch()

   const [newTodo, setNewTodo] = useState<string>('')


    const handleAddTodo = () => {
        if(newTodo.trim().length === 0){
            alert('Please enter a todo')
            return
               
        }
       
        const payload = {
            id: Math.floor(Math.random() * 1000),
            content: newTodo
        }

        dispatch(createTodo(payload))
        setNewTodo('')

    }
  return (
    <div className='create-app'>
        <input  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}    className='create-input' value={newTodo}  type="text" placeholder='Enter your todo'/>
        <button onClick={handleAddTodo} className='create-btn'>Add Todo</button>
    </div>
  )
}

export default TodoCreate