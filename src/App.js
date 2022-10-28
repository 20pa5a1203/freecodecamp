

import React, { Fragment } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Projects from './Projects';
import Contacts from './Contacts';

function App() {
  // return(
  //   <Fragment>
  //   <Nav></Nav>
  // <BrowserRouter>
  // <Routes>
  //   <Route path='/' element={<Main></Main>} />
  //   <Route path='/p' element={<Projects/>} />
  //   <Route path='/c' element={<Contacts/>} />
  // </Routes>
  // </BrowserRouter>
  // </Fragment>
    return (
      <Fragment>
      <Nav></Nav>
      <Main></Main>
      <Projects></Projects>
      <Contacts></Contacts>
    </Fragment>
    );
  // );
}

export default App;
