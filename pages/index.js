
import { useState } from 'react';

function Home() {
    return (
        <div> 
            <h3>Home 2</h3>
            <a href="/sobre">Acessar página 'sobre'</a>
            <Contador/>
        </div>
    )
    
}

function Contador() {
    const [contador, setContador] = useState(1);

    function addContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Adicionar</button>
        </div>
    )
}

export default Home