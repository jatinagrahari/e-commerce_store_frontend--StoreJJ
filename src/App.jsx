import { useState } from "react";
import "./App.css";
import Layout from "./components/layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Layout />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
