import React from 'react';

const FormaDeBolo = (prosps) => {
    return(
        <div>
            <h1>Bolo de {prosps.sabor} com cobertura de {prosps.cobertura}</h1>
        </div>
    );
};
const FormaDeDoce = ({tipo, sabor}) => {
    return(
        <div>
            <h1>{tipo} de {sabor}</h1>
        </div>

    )
}

export {FormaDeBolo, FormaDeDoce};
