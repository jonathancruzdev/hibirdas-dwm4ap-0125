import reactLogo from './assets/react.svg'
import logo from '/icon.png'
import './App.css'

import { useState } from 'react'


import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {
  // Estados
  const [ cantidad, setCantidad ] = useState(4);
  const [ user, setUser ] = useState( {name:'Lucas', age:22} );
  const [ tasks, setTasks ] = useState([
    { id:1, title: 'Estudiar Programación', completed: true},
    { id:2, title: 'Salir a Correr', completed: true},
    { id:3, title: 'ir al cine', completed: true},
    { id:4, title: 'Ver una Serie', completed: true}
  ])

  function sumar(){
    setCantidad( cantidad + 1 )
    console.log( { cantidad})
  }

  // Incorrecto ⛔
  /*
  function addTask() {
    const newTask = {id:5, title: 'Otra tarea', completed:false};
    tasks.push(newTask)
    setTasks( tasks )
  }
 */
  function addTask() {
    const newTask = {id:5, title: 'Otra tarea', completed:false};
    setTasks( [...tasks, newTask] )
  }
  function cambiarEstado() {
    //user.name = 'Carlos';
    //user.age = 25;
    //const newUser = {  name: user.name, age: user.age }
    console.log(user);
    setUser( {...user, age: 27 } );
  }

  const cambiar = (id) => {
    console.log(`Desde el Padre ${id}`)
  }
  
  return (
    <>
      <Header title="React APP - ToDo" />
      <main>
        <hr />
        <h4>Usuario</h4>
        <ul>
          <li><strong>Nombre</strong> { user.name }</li>
          <li><strong>Edad</strong> {user.age }</li>
        </ul>
        <hr />
        <h4>Cantidad de tareas { cantidad }</h4>
        <button onClick={ cambiarEstado }  type='button'> Cambiar Estado</button>
        <button onClick={  sumar} type='button'> Sumar </button>
        <button onClick={ addTask} type='button'>AddTask</button>
        {
         
          tasks.length > 0 ? ( <h4> Hay tareas</h4> ) : ( <h2>Sin tarea</h2>)
        }
        <TodoList >
          {
            tasks.map(  task => ( 
              <TodoItem 
                title={task.title} 
                completed={task.completed} 
                key={task.id}
                cambiar={cambiar} 
                /> )  )
          }
        </TodoList>
      </main>
      <Footer/>
    </>
  )
}

export default App
