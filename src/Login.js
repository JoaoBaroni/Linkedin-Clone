import React, { useState } from "react";
import "./Login.css";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const tryLogin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((userInfo) => {
        console.log(userInfo);
      }).catch(error => {
        console.log(error);
      })
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  return (
    <div className="login">

      <div className="login__form">
        <div className="login__formTop">
          <h1>Entrar</h1>
          <p>Mantenha-se por dentro do seu mundo profissional</p>
        </div>

        <div className="login__content">

          <form onSubmit={tryLogin}>
            <TextField
              style={{marginBottom: '20px'}}
              id="outlined-password-input"
              label="Email"
              onChange={handleEmailChange}
              type="email"
              autoComplete="current-password"
              variant="outlined"
              value={email}
            />

            <TextField
              id="outlined-password-input"
              style={{marginBottom: '20px'}}
              label="Senha"
              onChange={handleSenhaChange}
              type="password"
              autoComplete="current-password"
              variant="outlined"
              value={senha}
            />
            <button type="submit">Entrar</button>
          </form>
        </div>

        <div className="login__information">
        <p>Não possui uma conta? <a href="#"><b>Cadastre-se aqui!</b></a></p>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
