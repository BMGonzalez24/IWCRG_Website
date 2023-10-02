// importar o Message (componente) que criámos na mesma pasta
//import Message from "./Message"

import ListGroup from "./components/ListGroup";

function App() {
  // utilizar o componente importado.
  // TIP: é importante fechar sempre. Podemos utilizar <Message></Message> ou <Message />
  //return <div><Message /></div>

  return (
    <div>
      <ListGroup />
    </div>
  );
}

// para se poder utilizar esta página noutro sitio
export default App;
