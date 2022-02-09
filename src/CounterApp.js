import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);
    
    //handleAdd
    const handleAdd = () => setCounter((c) => c + 1);
    const handleminus = () => setCounter((c) => c - 1);
    const handleReset = () => setCounter((c) => value);
  
    return (<>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>add 1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleminus}>minus 1</button>
    </>);
};


CounterApp.propType = {
    value: PropTypes.number
}
export default CounterApp;

