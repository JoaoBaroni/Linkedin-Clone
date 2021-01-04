import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import "./Register.css";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
import {login} from "./features/counter/userSlice";

function Register() {
  const [email, setEmail] = useState({value: "", error: ""});
  const [senha, setSenha] = useState({value: "", error: ""});
  const [photoUrl, setPhotoUrl] = useState("");
  const [nome, setNome] = useState({value: "", error: ""});
  const dispatch = useDispatch();


  const handleEmailChange = e => {
    setEmail({...email, value: e.target.value});
  }

  const handleNomeChange = e => {
    setNome({...nome, value: e.target.value});
  }

  const handleSenhaChange = e => {
    setSenha({...senha, value: e.target.value});
  }

  const handlePhotoUriChange = e => {
    setPhotoUrl(e.target.value);
  }

  function verifyFields(){
    var check = true;

    
    if(!email.value){
      setEmail({...email, error: "Preencha o email!"});
      check = false;
    }else{
      setEmail({...email, error: ""}); 
    }

    if(!senha.value){
      setSenha({...senha, error: "Preencha a senha!"});
      check = false;
    }else{
      setSenha({...senha, error: ""});
    }

    if(!nome.value){
      setNome({...nome, error: "Preencha o nome!"});
      check = false;
    }else{
      setNome({...nome, error: ""});
    }

  
    return check;
  }

  const tryCreateLogin = e => {
    e.preventDefault();
    if(verifyFields()){
      firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, senha.value).then(usuarioCriado => {
        usuarioCriado.user.updateProfile({
          displayName: nome.value,
          photoURL: photoUrl,
        }).then(() => {
          dispatch(login({
            email: usuarioCriado.user.email,
            displayName: nome.value, 
            uid: usuarioCriado.user.uid,
            photoUrl: photoUrl,
          }));

        });
      });
    }
  }

  

  return (
    <div className="register">
      <div className="register__form">
        <div className="register__formTop">
          <h1>Registrar-se</h1>
          <p>Aproveite sua vida profissional ao máximo!</p>
        </div>

        <div className="register__content">
          <form onSubmit={tryCreateLogin}>
            <TextField
              style={{ marginBottom: "20px" }}
              id="outlined-password-input"
              label="Nome"
              type="text"
              onChange={handleNomeChange}
              autoComplete="current-password"
              variant="outlined"
              error={nome.error !== ""}
              helperText={nome.error}
              value={nome.value}
            />

            <TextField
              style={{ marginBottom: "20px" }}
              id="outlined-password-input"
              label="Email"
              onChange={handleEmailChange}
              type="email"
              helperText={email.error}
              error={email.error !== ""}
              autoComplete="current-password"
              variant="outlined"
              value={email.value}
            />

            <TextField
              id="outlined-password-input"
              style={{ marginBottom: "20px" }}
              label="Senha"
              onChange={handleSenhaChange}
              type="password"
              autoComplete="current-password"
              variant="outlined"
              error={senha.error !== ""}
              helperText={senha.error}
              value={senha.value}
            />

            <TextField
              style={{ marginBottom: "20px" }}
              id="outlined-password-input"
              label="Foto de perfil"
              type="text"
              onChange={handlePhotoUriChange}
              autoComplete="current-password"
              variant="outlined"
              value={photoUrl}
            />
            <button type="submit">Aceite e cadastre-se</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
