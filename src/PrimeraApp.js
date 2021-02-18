
import PropTypes from "prop-types";

//functional compontents

const PrimeraApp = ( { nombre, edad, despedida, defol } ) => {

    return (
        <>
            <h1>Hola Mundo!!</h1>
            <p>Mi nombre es { nombre }</p>
            <p>Tengo { edad || "X" } años</p>
            <h3>{ despedida }</h3>
            <p>{ defol }</p>
        </>
    );

}

//defincion de proptypes
PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number,
    despedida: PropTypes.string.isRequired,
}

//definicion de propiedades default, si no son informadas, de esta forma si se ven en Componentes F12
PrimeraApp.defaultProps = {
    defol: "Soy default",
}

export default PrimeraApp;