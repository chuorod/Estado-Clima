import React, {useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types';


const  Formulario = ({busqueda, guardarBusqueda, guardarConsulta }) => {
    
   

    const [error, guardarError] = useState(false);


    const {ciudad,pais} = busqueda;


    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }   

     const handleSubmit = e => {
         e.preventDefault();
       
         //validar 
            if(ciudad.trim() === '' || pais.trim() === '') {
                guardarError(true);
                return;
            }

            guardarError(false);
         // pasarlo al componente
            guardarConsulta(true);
    }

    return (
       <form onSubmit={handleSubmit}
       >     
       {error ? <Error mensaje="Ambos campos son obligatorio" /> : null}

          <div className="input-field col s12">
              <input
                type="text"  
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
          
              />
             <label htmlFor="ciudad">Seleccion su Ciudad:</label>
          </div>

          <div className="input-field col  s12">
            <select name="pais" id="pais"  value={pais}  onChange={handleChange}>
                
              <option value="">-- Seleccione un Pais --</option>
              <option value="VE">Venezuela</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">España</option>
              <option value="PE">Perú</option>
            </select>
           <label htmlFor="pais">Seleccion el Pais:</label>

          </div>

          <div className="input-field col s12">
               <input type="submit" 
                     value="Buscar Clima"
                     className="waves-effect waves-light btn-large btn-block green accent-4"
               />
         </div> 
          
      </form>
    );
}
Formulario.protoTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsulta: PropTypes.func.isRequired,

}
export default Formulario;