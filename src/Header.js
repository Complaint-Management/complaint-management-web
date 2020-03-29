import React,{Component} from 'react';
import './App.css';
import sign_out from './constants/images/sign-out.png'
import main from './constants/images/mainImg.png'
import profile from './constants/images/profile.png'
class Header extends Component {
    render(){
        return (
            <div >
                <div className="header">
                    <img className="main_img"src={main}/>
                    <h3 className="name">Complaint Management System</h3> 
                    <img className="head_img" src={sign_out}/>
                    <h3 className="name">Sign Out</h3>
                    <img className="profile_img" src={profile}/>
                    <h3 className="name">Profile</h3>
                </div>
            </div>
        )
    }
};
export default Header;