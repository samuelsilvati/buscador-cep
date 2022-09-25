import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import "./components/App.css";

import api from './services/api.js';
function App() {

  const[input, setInput] = useState('');
  const[cep, capCep ] = useState('');
  
  async function searchChar(){
    const msgError = document.querySelector('#msgError');
    if(input === ''){
        msgError.style.opacity = '1';
        msgError.style.animation= '';
        setTimeout(() => (msgError.style.animation = "flickr .1s ease"), 1);
        return; 
    }
    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      capCep(response.data)
      msgError.style.opacity = "0";
      setInput("");

    }catch{
      msgError.style.opacity = "1";
      msgError.style.animation = "";
      setTimeout(() => (msgError.style.animation = "flickr .1s ease"), 1);
      setInput("");
      capCep("")

    }
  }

  return (
    <div className="container">
      <h1>Consultar CEP</h1>
      <div className="input">
        <input
          type="text"
          maxLength={8}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Digite o CEP"
        ></input>
        <button className="search" onClick={searchChar}>
          <span>
            <BsSearch size={25} color="#fff" />
          </span>
        </button>
      </div>
      <div id="msgError">
        <p>Preencha um CEP válido</p>
      </div>
      
      {Object.keys(cep).length > 0 && (
        <main>
          <h2> CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
