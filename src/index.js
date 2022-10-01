import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

const firebaseConfig = {
  apiKey: "AIzaSyCsjClYOptlEuYcbU8PDsfRxXZ2feP8rng",
  authDomain: "betme-app.firebaseapp.com",
  projectId: "betme-app",
  storageBucket: "betme-app.appspot.com",
  messagingSenderId: "622855447276",
  appId: "1:622855447276:web:66f154a010a88d8c943bc9",
  measurementId: "G-736NZTCEBH",
};

const app = initializeApp(firebaseConfig);
console.log(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
