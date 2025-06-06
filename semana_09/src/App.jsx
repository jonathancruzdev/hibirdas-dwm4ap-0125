import viteLogo from '/vite.svg'
import logo from '/component.png'
import './App.css'
import Card from './components/Card';
function App() {

  let nombre = 'Juan';
  let edad = 28;
  let activo = true;
  const detalleLogo = 'Logo de la aplicación';
  const detalle = <h4> React es una librería de JS</h4>;
  const objeto = {
    cantidad: 100,
    descuento: 10
  }
  return (
    <>
      <h1 className="info"> Semana 09</h1>
      <p>Sintaxis JSX</p>

      <Card precio={54} nombre="Teclado RGB" 
        datos={objeto} descripcion="Teclado mecanico RGB..." foto="https://http2.mlstatic.com/D_NQ_NP_2X_636746-MLA52350707355_112022-F.webp"></Card>

      <Card 
        precio={25} 
        nombre="Mouse" 
        datos={objeto}
      />

      <img src="component.png" alt="foto" title={detalleLogo}  />

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
