import react from "react";
import "./style.css";
import {useState} from "react";

function CadastraUsuraios () {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome:", nome);
        console.log("Email:", email);
    }
}    
function AdicicionarUsuario(event) {
        event.preventDefault();
        // Lógica para adicionar usuário
        console.log("Usuário adicionado:", nome, email);
        setNome('');
        setEmail('');   
    
    
    }

    return (
        <div className="container">
            <h2>Cadastro de Usuários</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome:</label>    
                    <input 
                        type="text" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
export default CadastraUsuraios;
