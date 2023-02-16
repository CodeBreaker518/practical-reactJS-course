import React from 'react'
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout.jsx';
import CreateAccount from '../containers/CreateAccount';
import PasswordRecovery from '../containers/PasswordRecovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/create-account" element={<CreateAccount />}/>
              <Route exact path="/password-recovery" element={<PasswordRecovery/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
