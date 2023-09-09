import React, { useState } from "react";

function TodoList() {
  // 1. nombre de la variable
  // 2. nombre de ka funcion que cambia la variable, le asigna el valor que tiene dentro del parentesis
  // 3. asigno el valor inicial con lo que este dentro del parentesis del useState
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  function handleInput(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }else {
      alert("El campo no puede estar vacío");
    }
  }

  function handleRemoveItem(tarea) {
    setList(list.filter((item, i) => tarea !== item));
  } 

  return (
    <div>
      <h1>My ToDo's</h1>
      <ul>
        <li>
          <form onSubmit={handleInput}>
            <input
              type="text"
              value={inputValue}
              placeholder="¿Qué necesitas hacer?"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </li>
        {list.map((item, index) => (
          <li className="d-flex justify-content-between box" key={index}>
            {item}
            <span>
              <i
                className="fas fa-trash"
                onClick={() => handleRemoveItem(item)}
              ></i>
            </span>
          </li>
        ))}
        <li>
          {list.length == 0
            ? "No hay tareas, añadir tareas"
            : `Tienes ${list.length} tareas pendientes.`}
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
