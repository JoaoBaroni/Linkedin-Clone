import React from "react";
import "./Login.css";

function Login() {
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
        <form>
          <input type="text" placeholder="Email ou telefone"/>
          <input type="password" placeholder="Psssiu, sua senha"/>
          <button type="submit">Entrar</button>
        </form>
        </div>


      </div>
    </div>
  );
}

export default Login;
