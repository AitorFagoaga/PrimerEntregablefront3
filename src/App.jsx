import Form from './components/Form';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  return (
    <div className="App">
      <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:'2rem'}}>
        Elige un vehículo
      </h1>
      <Form/>
      <form>{/* aqui deberias escribir tu codigo */}</form>
    </div>
  );
}

export default App;
