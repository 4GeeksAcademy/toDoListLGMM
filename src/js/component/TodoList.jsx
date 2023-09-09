import React, { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>My ToDos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "enter") {
                console.log("enter was press");
                setList(list.concat(inputValue));
                setInputValue("")
              }
            }}
            placeholder="¿Que necesitas hacer?"
          />
        </li>
        {list.map((item, index) => (
          <li>
            {item} <i class="fas fa-trash" onClick={() => setList(list.filter((t, currenIndex) => index != currenIndex))}></i>
          </li>
        ))}
      </ul>
      <div>23 task</div>
    </div>
    // crear una Ul
    // En esa esa ul se debe agregar de forma dinamica los li al ingresar un input del lado del cliente
    // Esa ul debe tener un li fijo que vaya diciendo la cantidad de li dinamicos que existen en la ul, o sea, sin contar el li fijo.
    // agregar un boton a cada li que borre la li en la cual se hizo click.
  );
}

export default TodoList;
