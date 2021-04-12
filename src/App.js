import React,{Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Fomulario';
import Clima from './Components/Clima';
import Error from './Components/Error';



function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
});

const [consulta, guardarConsulta] = useState(false);

const [resultado, guardarResultado] = useState({});

const [error, guardarError] = useState (false);

const {ciudad,pais} = busqueda;

useEffect(() => {
const consutaApi = async (busqueda) => {
    if(consulta){
    const appid='53c669e7e6dc3e8f50e8340b3865885c';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`

     const respuesta = await fetch(url);
     const resultado = await respuesta.json();

      guardarResultado(resultado);
      guardarConsulta(false);

      if(resultado.cod === "404"){
        guardarError(true);
      }else {
        guardarError(false);
      }
    }
}
consutaApi();
  //eslint-disable-next-line 
},[consulta]);

let componente;
if (error){
  componente = <Error mensaje="No se ecuentra el ciudad consultada" />
}else{
  componente = <Clima resultado={resultado}/>
  
}



  return (
    <Fragment>
      <Header
        titulo='Estado del clima  '
      />
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">   
              <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsulta={guardarConsulta}
              
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
