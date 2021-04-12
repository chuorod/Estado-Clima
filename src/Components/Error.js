import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {

    return(

       <p className="red darken-4 error"><strong>{mensaje}
        </strong></p>    

    );

};

Error.protoType = {
    mesnaje: PropTypes.string.isRequired
}
export default Error;