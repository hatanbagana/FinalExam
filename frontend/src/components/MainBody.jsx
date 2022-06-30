import React from 'react'
import Tasks from './Tasks'
import { taskService } from '../services/taskService'
import { useEffect } from 'react'
import { useState } from 'react'

export default function MainBody() {
        const [tasks, setTasks] = useState([])
        const [newdata, setNewdata] = useState(true)
    useEffect(()=>{

        taskService.getTasks().then(data=> {

            console.log(data);
            let checked = data.data.filter(e => {

                if(!e.isDone){
                    return !e.isDone
                }
            });
            setTasks(checked)

    })
        
    }, [newdata])
    function handleSubmit(e){
        const maxId = tasks.sort(e=>{
            if(e.orderId > 1){
                return -1
            }
        })

        e.preventDefault()
        console.log(maxId[0]);
        taskService.createTask({"taskName":e.target[0].value, orderId: maxId[0].orderId+1, isDone: false })
        .then(res=> res.json())
        .then(data=> {
            if(data.message == 'success') {
                setNewdata(!newdata)
                e.target.reset();
            }
        })
    }

  return (
    <div className='mainBody'>
        <Tasks tasks ={tasks}/>

        <form action="" onSubmit={handleSubmit}>
            <input className='input-text'  placeholder={`What's next? `} type="text" />
            <hr />
            <button type='sumbit' className='submit-btn'> Add task</button>
        </form>
    </div>
  )
}
