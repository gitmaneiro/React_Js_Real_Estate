import React from "react";
import './SinglePage.scss';
import Slider from "../../components/Slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/Map/Map";

const SinglePage= () =>{


    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="pin" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">$ {singlePostData.price}</div>
                            </div>
                            <div className="user">
                                <img src={userData.img}  alt="userimg"/>
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utility.png" />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" />
                            <div className="featureText">
                                <span>Pet policy</span>
                                <p>Pets allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" />
                            <div className="featureText">
                                <span>Property fees</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" />
                            <span>80 sqft</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" />
                            <span>80 sqft</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" />
                            <span>80 sqft</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/school.png" />
                            <div className="featureText">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/bus.png" />
                            <div className="featureText">
                                <span>Bus stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>250m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="map">
                        <Map  items={[singlePostData]}/>
                    </div>
                    <div className="buttons">
                        <button><img src="/chat.png" /> Send a Message</button>
                        <button><img src="/save.png" /> Save to place</button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default SinglePage;