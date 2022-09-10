import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

const App = () => {
    
    const tarefas = [{name: "a"}, {name: "b"}];

    return (
        <>
        {tarefas.map((tarefa) => {
            return(<Comp name={tarefa.name} />)
        })
        }
        </>
    )
    }
const Comp = (props) => {
    return(
        <div>{props.name}</div>
    )
}

render(<App />, document.getElementById("root"))