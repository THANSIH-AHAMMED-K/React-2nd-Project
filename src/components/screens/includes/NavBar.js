import React from 'react'
import { NavLink,Link} from 'react-router-dom'
import styled from 'styled-components'

export default function NavBar() {
  return (
    <>
    <NavContainer>
     
            <NavLogo>
                <Logo src={require("../../../assets/logo.svg").default} />
            </NavLogo>
       
     <NavContent>
       
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/">Summary</NavLinks>
            <NavImage>
                <Img src={require("../../../assets/Book.svg").default}/>
            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/products">Products</NavLinks>
            <NavImage>
                <Img src={require("../../../assets/slide.svg").default}/>
            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/hotselling">Hot Selling</NavLinks>
            <NavImage>
                <Img src={require("../../../assets/fire.svg").default}/>
            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/manageorder">Manage Order</NavLinks>
            <NavImage>
            <Img src={require("../../../assets/oder.svg").default}/>

            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/payments">Payments</NavLinks>
            <NavImage>
            <Img src={require("../../../assets/Wallet.svg").default}/>

            </NavImage>
            
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/settings">Settings</NavLinks>
            <NavImage>
            <Img src={require("../../../assets/Settings.svg").default}/>

            </NavImage>
        </NaveItems>
     </NavContent>
     <NavBottom>
        <NavBottomImage>
            <BottomImg src={require("../../../assets/Group 11.svg").default}/>
                           
        </NavBottomImage>
        <Content>
            Power up your Business
         </Content> 
         <GoBtn>
            Go Pro!
       
                <BtnImg src={require("../../../assets/Settings-1.svg").default}/>
      
         </GoBtn>
    
     </NavBottom>
    </NavContainer>



    </>
  )
}
const NavContainer=styled.section`
border-right:2px solid #F1F1F3;
height: 100vh;
width:17%


`;

const NavLogo=styled(Link)`
margin-top: 30px;
display:block

`;
const  Logo=styled.img`
display:block;

`;


const NavContent=styled.ul`

`;
const NaveItems=styled.li`
list-style: none;
`;
const NavLinks=styled(Link)`
text-decoration: none;
font-size: 20px;
color:#5A5A5A;
`;
const NavImage=styled.div``;
const Img=styled.img``;

const NavBottom=styled.div``;
const NavBottomImage=styled.div``;
const BottomImg=styled.img``;
const Content=styled.div``;
const GoBtn=styled(Link)``;
// const BtnImg=styled.span``;
const BtnImg=styled.img``;




