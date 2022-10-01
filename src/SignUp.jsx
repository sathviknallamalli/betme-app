import React, { useState } from "react";
import styled from "styled-components";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

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

function SignUp() {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirm] = useState("");

  const onLogin = () => {
    if (password == confirmpassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed up");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      console.log("not matching");
    }
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateConfirm = (e) => setConfirm(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <p>Sign Up</p>
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
        <Input
          placeholder="Confirm Password"
          type="password"
          text={confirmpassword}
          onChange={updateConfirm}
        />
        <LoginButton onClick={onLogin}>Sign Up!</LoginButton>
      </header>
    </div>
  );
}

export default SignUp;
