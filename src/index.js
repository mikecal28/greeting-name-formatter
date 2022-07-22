import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
Homework 7/15/2022

Spin up a new react app with CRA (create-react-app)
Parent component that passes a first name and a last name (separately) to a Greeting Component
Greeting should render the user's full first and last name, formatted appropriately, with a little greeting message.
IE: "Hello, Ryan Curtis."

Parent should manage state of first name and last name.
Parent should pass those values via props.

Things I care about for this:
Code splitting
Extraction
Project Structure
Finished Product.
*/
