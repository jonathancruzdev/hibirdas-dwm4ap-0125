import reactLogo from './assets/react.svg'
import logo from '/icon.png'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {
  
  fetch()
  const tasks = [
    { id:1, title: 'Estudiar Programación', completed: true},
    { id:2, title: 'Salir a Correr', completed: true},
    { id:3, title: 'ir al cine', completed: true},
    { id:4, title: 'Ver una Serie', completed: true}
  ]
/* 
   const frutas = ['manzana', 'pera', 'uva'];
  console.table(frutas)
  const nuevo = frutas.map(  item => item.toUpperCase() )
  console.table(nuevo)
  */

  return (
    <>
      <Header />
      <main>
        {
          tasks.length > 0 ? ( <h4> Hay tareas</h4> ) : ( <h2>Sin tarea</h2>)
        }
        <TodoList >
          {
            tasks.map(  task => ( <TodoItem title={task.title} completed={task.completed} key={task.id} /> )  )
          }
        </TodoList>
      </main>
      <Footer/>
    </>
  )
}

export default App
