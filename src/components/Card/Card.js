import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";


const Card= ({item}) =>{

    return(
        <div className="card">
            <Link to={`/${item.id}`} className="imgContainer">
                <img src={item.images} />
            </Link>
            <div className="textContainer">
                <h2 className="tittle">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src="/pin.png" />
                    <span>{item.address}</span>
                </p>
                <p className="price">$ {item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" />
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" />
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png" />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Card;