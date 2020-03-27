import React,{Component} from 'react';
import './App.css';
import sign_out from './constants/images/sign-out.png'
class Header extends Component {
    render(){
        return (
            <div >
                <div className="header">
                    <h3 className="name">Hi, Dipika Choudhary !!</h3> 
                    <img className="head_img" src={sign_out}/>
                    <h3 className="name">Sign Out</h3>
                </div>
            </div>
        )
    }
};
export default Header;