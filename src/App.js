import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const LoginButton = styled.button`
  background: white;
  border: 1px solid black;
  font: black;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

function App() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  const routeChange2 = () => {
    let path = `/signup`;
    navigate(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Bet Me App</p>
        <LoginButton onClick={routeChange}>Login</LoginButton>
        <LoginButton onClick={routeChange2}>Sign Up</LoginButton>
      </header>
    </div>
  );
}

export default App;
