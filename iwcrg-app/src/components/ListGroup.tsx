import { useState } from "react";

function ListGroup() {
  let items = ["Estocolmo", "Sintra", "Madrid", "Tóquio", "Kiev"];

  // Hook
  const [selectIndex, setSelectedIndex] = useState(-1);

  return (
    // Ao deixar <> vazio dizemos ao react para utilizar um Fragment
    //se não teriamos de importar e colocar <Fragment>
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Nenhum item encontrado</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
