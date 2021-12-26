import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Header';
import CreateCustomer from './Pages/CreateCustomer';
import ListCustomer from './Pages/ListCustomer';
import {Router} from './Routes'
import { GlobalStyle } from './Styles';


export function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Router/>
    
      <GlobalStyle/>
      </BrowserRouter>
    </>
  );
}
