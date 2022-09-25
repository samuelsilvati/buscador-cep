import { BsSearch } from "react-icons/bs";
import "./components/App.css";

function App() {
  return (
    <div className="container">
      <h1>Buscador de CEP</h1>
      <div className="input">
        <input type="text" placeholder="Digite o cep"></input>
        <button className="search">
          <span>
            <BsSearch size={25} color="#fff" />
          </span>
        </button>
      </div>
      <div id="msgError">
        <p>Preencha um CEP válido</p>
      </div>
      

      <main>
        <h2> CEP: 35850-000</h2>
        <span>Rua Uberlândia</span>
        <span>Complemento: Apartamento</span>
        <span>Bairro: Centro</span>
        <span>Congonhas do Norte - MG</span>
      </main>
    </div>
  );
}

export default App;
