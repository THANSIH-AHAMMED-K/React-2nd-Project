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
       
        <NaveItems >
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/">Summary</NavLinks>
            <NavImage to="/">
                <Img src={require("../../../assets/Book.svg").default}/>
            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/products">Products</NavLinks>
            <NavImage to="products">
                <Img src={require("../../../assets/slide.svg").default}/>
            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/hotselling">Hot Selling</NavLinks>
            <NavImage to="hotselling">
                <Img src={require("../../../assets/fire.svg").default}/>
            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/manageorder">Manage Order</NavLinks>
            <NavImage to="manageorder">
            <Img src={require("../../../assets/oder.svg").default}/>

            </NavImage>
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/payments">Payments</NavLinks>
            <NavImage to="payments">
            <Img src={require("../../../assets/Wallet.svg").default}/>

            </NavImage>
            
        </NaveItems>
        <NaveItems>
            <NavLinks  className={({isActive})=>isActive ? "active" : ""} to="/settings">Settings</NavLinks>
            <NavImage  to="settings">
            <Img src={require("../../../assets/Settings.svg").default} />

            </NavImage>
        </NaveItems>
     </NavContent>
           <NavBottom>
                    <NavBottomItems>
                        <NavBottomImage>
                            <BottomImg src={require("../../../assets/Group 11.svg").default}/>
                                        
                        </NavBottomImage>
                        <Content>
                            Power up your Business
                        </Content> 
             
                        <ButtonContainer>
                            <SideHeading>Go Pro</SideHeading>
                            <ImageContainer>
                                <Buttonimge src={require("../../../assets/Settings-1.svg").default}/>
                            </ImageContainer>
                        </ButtonContainer>
                    </NavBottomItems>
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
  


   background-color:#D3D3D3;
   padding: 40px;
   width: 50%;
   
  
  


`;
const NavBottomItems=styled.div`
 width: 90%;
 margin:0 auto;


`;
const NavBottomImage=styled.div`
w
   
`;
const BottomImg=styled.img`
display: block;
width:100%;
`;
const Content=styled.div`
text-align:center; 
font-weight:bold;
font-size:18px;
margin-bottom: 30px;
`;








const ButtonContainer = styled.button`
    margin-top: 30px;
    display: flex;
    align-items: center;
    padding: 3px 40px;
    background-color: #333988;
    border-radius: 15px;
    border: none;
    margin: 0 auto;
`;
const SideHeading = styled.p`
    margin-right: 5px;
    color: #fff;
    font-weight: bold;
`;
const ImageContainer = styled.div`
    width: 20%;
    filter: invert(100%);
    transform: rotate(-90deg);
`;
const Buttonimge = styled.img`
    width: 100%;
    display: block;
`;




