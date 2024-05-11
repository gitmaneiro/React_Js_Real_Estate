import React from "react";
import './HomePage.scss'
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage= () =>{
    return(
        <div className="HomePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="tittle">Find Real Estate & Get Your Dream Place</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet. Ex architecto nesciunt qui libero 
                        incidunt ea debitis beatae 
                        qui culpa voluptatum qui nisi quia. 
                        Non perferendis ipsa et magni facere et consequuntur 
                        debitis 33 assumenda excepturi.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h2>16+</h2>
                            <h3>year of Experience</h3>
                        </div>
                        <div className="box">
                            <h2>200</h2>
                            <h3>Award Gained</h3>
                        </div>
                        <div className="box">
                            <h2>1200</h2>
                            <h3>Property Ready</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img  src="/bg.png" alt="bannerImg"/>
            </div>
        </div>
    );
    
}

export default HomePage;