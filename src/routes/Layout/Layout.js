import React from "react";
import './Layout.scss';
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout= () =>{


    return(
        <div className="layout">
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
    
}

export default Layout;