import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    function decrement(){
        setCount(prevcount => prevcount - 1);
        
    }
    useEffect(() => {console.log(count)}, [count]);

    return(
        <>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        </>
    )
}

render(<App />, document.getElementById("root"))