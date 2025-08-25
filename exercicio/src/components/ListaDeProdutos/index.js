import React from "react";
import './styles.css';

const ListaDeProdutos = ({ itens = [] }) => {
    return (
        <ol className="lista-produtos">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
    );
}

export default ListaDeProdutos;