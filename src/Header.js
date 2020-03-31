import React,{Component} from 'react';
import './App.css';
import sign_out from './constants/images/sign-out.png'
import main from './constants/images/mainImg.png'
import profile from './constants/images/profile.png';
import {Link} from 'react-router-dom';
class Header extends Component {
    // handleClick(){
    //     localStorage.removeItem("Username");
    //     localStorage.removeItem("Rollnumber");
    //     localStorage.removeItem("access_token");
    //     // window.location.href="/"
    // }
    render(){
        return (
            <div >
                <div className="header">
                    <img className="main_img"src={main}/>
                    <h3 className="name">Complaint Management System</h3> 
                    <img className="head_img" src={sign_out}/>
                    <Link to="/"><button  className="signout">Sign Out</button></Link>
                    <img className="profile_img" src={profile}/>
                    <h3 className="name">Profile</h3>
                </div>
            </div>
        )
    }
};
export default Header;