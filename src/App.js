import React, { useEffect, useState } from 'react';
import { Title, Form, Anchor, Header } from './home';
import api from './services/api';


function App() {
  const [login, setLogin] = useState([]);

  useEffect(() => {
    api.post('/logon').then(response => {
      setLogin(response.data);
    })
  }, []);

  function handleLogin() {
    setLogin([...login]);
  }



  return (
    <div className="App">
      <Header>
        <Title>Sistema Login</Title>
      </Header>
      <div id="page-home">



        <Form>
          <input type="text" placeholder="E-mail"> </input><br />
          <input type="password" placeholder="Senha"></input><br />
          <button type="submit">Login</button>
        </Form>

        <div><Anchor href="/cadastro">Cadastro</Anchor></div>

      </div>


    </div>
  );
}

export default App;
