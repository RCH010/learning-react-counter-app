import React from 'react';
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react';
// functional componets

// const PrimeraApp = () => {
//     // con solo las etiquetas asi, las hace como si fuera un fragment
//     return (
//     <>
//         <h1>Hola Mundo</h1>
//         <p>Mi primera APP</p>
//     </>
//     );
// }
const PrimeraApp = ({saludo, subtitulo}) => {
    return (
    <>
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo2,null,3)}</pre> */}
        <p>{subtitulo}</p>
    </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Bienvenido'
}

export default PrimeraApp;