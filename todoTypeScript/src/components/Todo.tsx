import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { TodoType } from "../types/Types";
{/*import { CiEdit } from "react-icons/ci";   */}
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/todoSlice'


interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const {id, content} = todoProps
    const dispatch = useDispatch()
    const handleRemoveTodo = () => {
        dispatch(removeTodo(id))
    }
  return (
    <div style={{display: 'flex',  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid lightgray', width: '100%', marginTop:'50px'
    }}>
        <div>{content}</div>
        <div>
        <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons'/>
        <FaCheck className='icons'/>
        {/*<CiEdit />*/}
        </div>
    </div>
  )
}

export default Todo