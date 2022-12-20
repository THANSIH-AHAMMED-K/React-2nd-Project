import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/screens/includes/NavBar';
import RightBar from './components/screens/includes/RightBar';
import React from 'react';
import Summary from './components/screens/Summary';
import Products from './components/screens/Products';
import HotSelling from './components/screens/HotSelling';
import ManageOrder from './components/screens/ManageOrder';
import Payments from './components/screens/Payments';
import Settings from './components/screens/Settings';
import styled from 'styled-components';


function App() {
  return (
    <>
    <MainContainer  className='bg'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Summary/>}/>
            <Route path='products' element={<Products/>}/>
            <Route  path='hotselling' element={<HotSelling/>}/>
            <Route  path='Manageorder' element={<ManageOrder/>}/>
            <Route  path='payments' element={<Payments/>}/>
            <Route  path='settings' element={<Settings/>}/>
          </Routes>
          <RightBar/>
        </Router>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer=styled.div`
// padding:40px 0px;
max-width:90%; 
backGround:#fff;
margin: 0 auto;
display:flex;
justify-content:space-between;
font-family: 'Poppins-Regular';


`
