import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import UserList from './pages/UserLists'
import UserCreate from './pages/UserCreate'
import NotFound from './pages/NotFound'
import UserDetails from './pages/UserDetail'
import UserLogin from './pages/UserLogin'
import { AuthProvider } from './contexts/AuthContext'
import './App.css'

function App() {

  const [ count, setCount] = useState(0);

  return (
    <>
      <h3> Rutas</h3>
      <h4> { count }</h4>
      <button onClick={ ()=> { setCount( 2 )  }}> sumar</button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">ABM de Usuario</Link>
          </li>
          <li>
            <Link to="/nuevo">  Registro</Link>
          </li>
          <li>
            <Link to="/login"> Login</Link>
          </li>
        </ul>
      </nav>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/users' element={ <UserList />} />
          <Route path='/nuevo' element={ <UserCreate />} />
          <Route path='/details/:id' element={ <UserDetails />} />
          <Route path='/login' element={ <UserLogin />} />
          <Route path='*'  element={ <NotFound /> } />
        </Routes>
      </AuthProvider>
      
    </>
  )
}

export default App
