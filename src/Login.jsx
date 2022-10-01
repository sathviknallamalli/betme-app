import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  width: 50%;
  border-radius: 3px;
`;

const LoginButton = styled.button`
  background: white;
  border: 1px solid black;
  font: black;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

function Login() {
  const auth = getAuth();
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("sign in");
        let path = `/dashboard`;
        navigate(path);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <p>Login</p>
        <Input
          placeholder="Email"
          type="email"
          text={email}
          onChange={updateEmail}
        />
        <Input
          placeholder="Password"
          type="password"
          text={password}
          onChange={updatePassword}
        />
        <LoginButton onClick={onLogin}>Go!</LoginButton>
      </header>
    </div>
  );
}

export default Login;
