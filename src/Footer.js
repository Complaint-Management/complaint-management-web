import React,{Component} from 'react';
import './App.css';
import facebook from './constants/images/facebook.png'
import instagram from './constants/images/instagram.png'
import twitter from './constants/images/twitter.png'
class Footer extends Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-contain1">
                <div className="share">
                    <p>SHARE</p>
                    <img className= "fac-size"src={facebook}></img>
                    <img className= "twit-size"src={twitter}></img>
                </div>
                <div className="share">
                    <p>FOLLOW US</p>
                    <img className= "fac-size"src={facebook}></img>
                    <img className= "twit-size"src={twitter}></img>
                    <img className= "ins-size"src={instagram}></img>
                </div>
                <div className="share"><p>EMAIL US</p></div>
                <hr className="hr"/>
                </div>
                <div className="footer-contain1">
                <div className="share1">
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <hr className="hr"/>
                </div>
                <div className="footer-contain1">
                <p className="share">©2019 </p>
                </div>
            </div>
        )
    }
};
export default Footer;