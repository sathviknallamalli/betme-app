import React, { useState } from "react";
import styled from "styled-components";
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

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Dashboard</p>
      </header>
    </div>
  );
}

export default Dashboard;
