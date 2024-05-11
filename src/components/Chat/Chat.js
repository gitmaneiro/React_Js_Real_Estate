import React from "react";
import './Chat.scss';

const Chat= () =>{
    return(
        <div className="chat">
            <div className="messages">
                <h2>Messages</h2>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jhon Doe</span>
                    <p>Lorem dfbdf impsum dfgg</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jhon Doe</span>
                    <p>Lorem dfbdf impsum dfgg</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jhon Doe</span>
                    <p>Lorem dfbdf impsum dfgg</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jhon Doe</span>
                    <p>Lorem dfbdf impsum dfgg</p>
                </div>
            </div>
            <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                            Jhon doe

                        </div>
                        <span className="close">X</span>
                    </div>
                    <div className="center">
                        <div className="chatMessage">
                            <p>loren ipsum bla bla</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>loren ipsum bla bla</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>loren ipsum bla bla</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>loren ipsum bla bla</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>loren ipsum bla bla</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>loren ipsum bla bla</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="botton">
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
            </div>
        </div>
    );
    
}

export default Chat;