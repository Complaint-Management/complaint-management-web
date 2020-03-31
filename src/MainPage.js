/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import images from './constants/images/create-ticket-icon.png'
import images1 from './constants/images/view-ticket.png'
import images2 from './constants/images/history-view.png'
import Header from './Header'
import Footer from './Footer'
class MainPage extends Component {
    render(){
        return (
            <div >
                <Header/>
                <div>
                    <h1 className="heading">Hi, {localStorage.getItem("Username")}</h1>
                    <div><p className="heading1">Having Problems at hostel or in studies or any thing else, make your voice heard. Register your complaint here in the create ticket section and get them solved.</p></div>
                    <div className="container">
                    <Link to="/create-new-ticket"><div hoverable className="card1" >
                        <img className="img" src={images}/><br/><br/>Create new ticket
                    </div></Link>
                    <Link to="/view-open-tickets"><div hoverable className="card2" >
                    <img className="img" src={images1}/><br/><br/>Open tickets
                    </div></Link>
                    <Link to="/history"><div hoverable className="card3" >
                    <img className="img" src={images2}/><br/><br/>History
                    </div></Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
        }
}

export default MainPage;