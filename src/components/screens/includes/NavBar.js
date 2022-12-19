import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <NavContainer>
     <Heading>Business</Heading>
     <NavBar>
       
        <NavItems>
            <NavLink  className={({isActive})=>isActive ? "active" : ""} to="/summary">Summary</NavLink>
        </NavItems>
        <NavItems>
            <NavLink  className={({isActive})=>isActive ? "active" : ""} to="/products">Products</NavLink>
        </NavItems>
        <NavItems>
            <NavLink  className={({isActive})=>isActive ? "active" : ""} to="/hotselling">Hot Selling</NavLink>
        </NavItems>
        <NavItems>
            <NavLink  className={({isActive})=>isActive ? "active" : ""} to="/manageorder">Manage Order</NavLink>
        </NavItems>
        <NavItems>
            <NavLink  className={({isActive})=>isActive ? "active" : ""} to="/payments">Payments</NavLink>
        </NavItems>
        <NavItems>
            <NavLink  className={({isActive})=>isActive ? "active" : ""} to="/settings">Settings</NavLink>
        </NavItems>
     </NavBar>
    </NavContainer>



    </>
  )
}
