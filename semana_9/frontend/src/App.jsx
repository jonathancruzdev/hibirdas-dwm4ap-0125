import viteLogo from '/vite.svg'
import logo from '/component.png'
import './App.css'

function App() {

  let nombre = 'Juan';
  let edad = 28;
  let activo = true;
  const detalleLogo = 'Logo de la aplicación';
  const detalle = <h4> React es una librería de JS</h4>;

  console.log(logo);
  return (
    <>
      <h1 className="info"> Semana 09</h1>
      <p>Sintaxis JSX</p>

      <img src="component.png" alt="foto" title={detalleLogo} />

      <img src={logo} alt="Logo" />

      { detalle }
      <hr />
      <p> Su nombre es { nombre.toUpperCase()  }</p>
      <p>Tu edad es: { sumarEdad(edad) }</p>
    </>
  )
}


function sumarEdad(edad) {
  return edad + 1;
}
export default App
