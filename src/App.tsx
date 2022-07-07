import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import EditOrUpdateProduct from "./pages/EditOrUpdateProduct";

const App = () => {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path='login' element={<LoginPage/>} />
          <Route path='signup' element={<RegistrationPage/>} />
          <Route path='add' element={<AddProduct/>} />
          <Route path='edit' element={<EditOrUpdateProduct/>} />
        </Routes>
      </>
    </>
  );
};

export default App;
