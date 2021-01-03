import React, {useState} from "react";
import "./Login.css";
import firebase from 'firebase';

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const tryLogin = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, senha).then(userInfo => {
      console.log(userInfo);
    })
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handleSenhaChange = e => {
    setSenha(e.target.value);
  }


  return (
    <div className="login">
      <img
        style={{ height: "45px", width: "200px" }}
        src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
      />

      <div className="login__form">
        <div className="login__formTop">
          <h1>Entrar</h1>
          <p>Mantenha-se por dentro do seu mundo profissional</p>
        </div>

        <div className="login__content">
        <form onSubmit={tryLogin}>
          <input value={email} onChange={handleEmailChange} type="text" placeholder="Email ou telefone"/>
          <input value={senha} onChange={handleSenhaChange} type="text" placeholder="password" placeholder="Psssiu, sua senha"/>
          <button type="submit">Entrar</button>
        </form>
        </div>


      </div>
    </div>
  );
}

export default Login;
