import { isEmpty } from 'lodash';
import React, {useState} from 'react'
import shortid from 'shortid';

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const addTask = (e) => {
    e.preventDefault()
    
    if (isEmpty(task)) {
      console.log("Task empty")
      return
    }
    const newTask = {
      id: shortid.generate(),
      name: task
    }
    setTasks([ ...tasks, newTask])
    setTask("")

  }
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="Text-center">Lista De Tareas</h4>
          <ul className="list-group">
          {  
              tasks.map((task) =>(
                   <li className="list-group-item" key={task.id}>
                    <span className="lead">{task.name}</span>
                    <button className="Btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                    <button className="Btn btn-warning btn-sm float-right">Editar</button>
                  </li>

              ))
               
          }
          </ul>
        </div>
        <div className="col-4">
        <h4 className="Text-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input type="text" className="form-control mb2"
            placeholder="Ingrese la tarea"
            onChange={(text)=> setTask(text.target.value)}
            value={task}
            
            />

            <button className="btn btn-dark btn-block" type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
