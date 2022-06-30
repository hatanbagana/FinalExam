import React from 'react'
import Task from './Task'

export default function Tasks(props) {


  return (
    <div className='tasks'>
      
      {props.tasks.map((e,i)=>{
        return(

          <Task topic={e.taskName} _id={e._id} id={e.orderId} key={i} isDone={e.isDone}/>
        )
      })}

    </div>
  )
}
