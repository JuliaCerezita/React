const Tarefas = (param) => {
    let tarefas1 = param.list;
    return (
      <div className="search">
        {
            tarefas1.map((tarefa) => {
                return(
                    <div>{tarefa}</div>
                )
            })
        }
      </div>
    );
  };

export default Tarefas;