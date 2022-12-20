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
border-right:2px solid #D3D3D3;

width:20%;



`;

const NavLogo=styled(Link)`
margin: 60px 0;
display:block

`;
const  Logo=styled.img`
display:block;



`;


const NavContent=styled.ul`
padding: 0px;


`;
const NaveItems=styled.li`
list-style: none;
display:flex;
align-items:center;
margin-bottom:40px;
justify-content:space-between;
margin-right:40px;  



`;
const NavLinks=styled(Link)`
text-decoration: none;
font-size: 18px;
color:#5A5A5A;
font-family:"Poppins-SemiBold";
&:hover {
    color:#333988;
}



`;
const NavImage=styled(Link)`

&:hover {
   

    // background-color: ;
    border-radius:50%                                                                        /
    border:1px solid #D3D3D3; 
    background-color: #D3D3D3;
    transform: scale(1.5);
  
 }
 
display: block;
`;
const Img=styled.img`
display: block;
width:100%;


`;

const NavBottom=styled.div`
   height: 30%;
   width: 80%
`;
const NavBottomImage=styled.div`
padding: 30px;
`;
const BottomImg=styled.img``;
const Content=styled.div`
padding: 30px;
`;
const GoBtn=styled(Link)`
padding: 30px;
`;
// const BtnImg=styled.span``;
const BtnImg=styled.img``;




