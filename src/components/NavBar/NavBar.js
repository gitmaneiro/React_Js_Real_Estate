import React, { useState } from "react";
import './navbar.scss';
import { Link } from "react-router-dom";


const NavBar= () =>{

    const[open, setOpen]= useState(false);

    const user = true;


    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo"/>
                    <span>ManeiroEstate</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">

                {
                    user ? (
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                            <span>jhon Doe</span>
                            <Link to="/profile" className="profileButton">
                                <div className="notification">3</div>
                                <span>Profile</span>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <a href="">Sign in</a>
                            <a href="" className="registre">Sign up</a>
                        </>
                    )
                }


                <div className="menuIcon">
                    <img src="/menu.png" onClick={()=>setOpen((prev)=> !prev)} />
                </div>
                <div className={open ? 'movilmenu active' : 'movilmenu'}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>
            </div>
        </nav>
    );
    
}

export default NavBar;