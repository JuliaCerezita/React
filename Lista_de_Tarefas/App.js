/* const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];
  oldArray => [...oldArray, newElement]
  */
import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

const App = () => {
    
    const [task, setTask] = useState("");
    const [TASKS, setTASKS] = useState([]);

    function submitfunction(e){
        e.preventDefault();
        let newobj = {text: [task]};
        setTASKS(oldArray => [...oldArray, newobj])
    }

    function typedtask(e){
        setTask(e.target.value);
    }
    
    return(
        <>
        <form onSubmit={submitfunction}>
            <input type="text" placeholder="Digite uma nova tarefa" onChange={typedtask} />
            <button>Submit</button>
        </form>
        <div>
            {TASKS.map((task) => {
                return <h1>{task.text}</h1>
            })}
        </div>
        
        </>

    )
}

render(<App />, document.getElementById("root"))