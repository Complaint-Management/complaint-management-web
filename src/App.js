/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import { Card} from 'antd';
import images from './constants/images/create-ticket-icon.png'
import images1 from './constants/images/view-ticket.png'
import images2 from './constants/images/history-view.png'
import facebook from './constants/images/facebook.png'
import instagram from './constants/images/instagram.png'
import twitter from './constants/images/twitter.png'
import sign_out from './constants/images/sign-out.png'

function App() {
  return (
    <div >
      <nav className="nav"></nav>
      <div className="header">
        <h2 className="name">Hi, Dipika Choudhary !!</h2> 
        <img className="head_img" src={sign_out}/>
        <h2 className="name">Sign Out</h2>
      </div>
      <div>
        <h1 className="heading">COMPLAINT MANAGEMENT SYSTEM !</h1>
        <div><h3 className="heading1">l3kejfojrp3fo4kfgrmggwttt lendlwend dejdpiwendpieq pqiwmdpo2epd tttttttttssggggsgoajsnoxjnqeur3 iybvcnxijqo3ejry4ycv2b4eiorh</h3></div>
        <div className="container">
          <Card hoverable className="card1" >
            <img className="img" src={images}/><br/><br/>Create new ticket
          </Card>
          <Card hoverable className="card2" >
          <img className="img" src={images1}/><br/><br/>Open tickets
          </Card>
          <Card hoverable className="card3" >
          <img className="img" src={images2}/><br/><br/>History
          </Card>
        </div>
      </div>
    
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
    </div>
  );
}

export default App;