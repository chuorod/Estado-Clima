import React from 'react';
import PropTypes from 'prop-types';


const header = ({titulo}) => {
    return (

    <nav> 
        <div className="nav-wrapper light-green darken-2">
        <a href="#!" className="brand-logo"><strong>{titulo}</strong></a>
        </div>
    </nav>

)
}

header.protoType = {
    titulo: PropTypes.string.isRequired

}

export default header;

