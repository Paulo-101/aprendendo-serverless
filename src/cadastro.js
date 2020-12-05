import React from 'react';
import { Title, Form, Anchor } from './styles-cadastro';

function Register() {
    return (
        <div className="App">
            <header className="App-header">
                <Title>Cadastro</Title>
            </header>
            <div id="page-home">



                <Form>
                    <input type="text" placeholder="E-mail"></input><br />
                    <input type="password" placeholder="Senha"></input><br />
                    <input type="password" placeholder="Repetir Senha"></input><br />
                    <button type="submit">Cadastrar</button>
                </Form>



            </div>


        </div>
    );
}

export default Register;
