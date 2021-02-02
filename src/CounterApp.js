
import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => setCounter( counter + 1 );

    const handleSubs = () => setCounter( counter -1 );

    const handleReset = () => setCounter(value);
    

    return (
      <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={ handleAdd } className="btn btn-plus">+1</button>
        <button onClick={ handleReset } className="btn btn-reset">Reset</button>
        <button onClick={ handleSubs }  className="btn btn-sub">-1</button>
      </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;
