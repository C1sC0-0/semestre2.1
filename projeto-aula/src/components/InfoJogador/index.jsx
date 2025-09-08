// src\components\InfoJogador\index.jsx

import { useState } from 'react';
import './style.css'
import logo from '../../assets/images/ecv.png';


function InfoJogador() {
    const [nome, setNome] = useState('');
    const [Numero, setNumero] = useState('');

    const [listaJogadores, setListaJogadores] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();
        setListaJogadores([...listaJogadores, { nome, Numero }]);
        setNome('');
        setNumero('');
    }

    return (
        <div className="info-Jogador">
            <img src= {logo}  alt="Logo da empresa" className="Jogador-icone" />
            <h2>Cadastro de Jogadores</h2>
            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome:</label>
                    <input  type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required />
                </div>
                <div>
                    <label>Numero:</label>
                    <input type="Numero"
                    value={Numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required />
                </div>
                <button type="submit">Adicionar Jogador</button>
            </form>

            <hr />
           
            <h3>Lista de Jogadores</h3>
            <ul>
                {listaJogadores.map((jogador, index) => (
                    <li key={index}>
                        {jogador.nome} - {jogador.Numero}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InfoJogador;