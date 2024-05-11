import React, { useState } from "react";
import './Slider.scss';


const Slider= ({images}) =>{

    const [modalShow, setModalShow]= useState(null);

    const changeSlider = (direction)=>{
        if(direction === "left"){

            if(modalShow === 0){
                setModalShow(images.length-1)
            }else{}
                setModalShow(modalShow - 1)
        }else{
            if(modalShow === images.length - 1 ){
                setModalShow(0)
            }else{
                setModalShow(modalShow + 1)
            }

        }

    }

    return(
        <div className="slider">
            <div className="bigImage">
                <img src={images[0]}  alt="imgPrincipal" onClick={()=> setModalShow(0)}/>
            </div>
            <div className="smallImage">
                {images.slice(1).map((image, index)=>(
                    <img src={image} alt="" key={index} onClick={()=> setModalShow(index + 1)}/>
                ))}
            </div>
            
            {modalShow != null && (
            <div className="fullSlider">
                    <div className="arrow" onClick={()=> changeSlider("left")}>
                        <img src="arrow.png"/>
                    </div>
                    <div className="close" onClick={()=> setModalShow(null)}>X</div>
                    <div className="imgContainer">
                        <img src={images[modalShow]} />
                    </div>
                    <div className="arrow" onClick={()=> changeSlider("right")}>
                        <img src="arrow.png" className="right"/>
                    </div>
            </div>
             )}
        </div>
    );
    
}

export default Slider;