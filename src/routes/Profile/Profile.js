import React from "react";
import './Profile.scss';
import List from "../../components/List/List";
import Chat from "../../components/Chat/Chat";


const Profile= () =>{


    return(
        <div className="profile">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
                        <span>Username: <b>Jhon Doe</b></span>
                        <span>E-mail: <b>doe@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h2>My List</h2>
                        <button>Creata New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h2>Save List</h2> 
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    );
    
}

export default Profile;