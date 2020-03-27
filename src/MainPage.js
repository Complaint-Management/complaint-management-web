/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react';
import './App.css';
import { Card} from 'antd';
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
                    <h1 className="heading">Complaint Management System !</h1>
                    <div><h3 className="heading1"> </h3></div>
                    <div className="container">
                    <Link to="/create-new-ticket"><Card hoverable className="card1" >
                        <img className="img" src={images}/><br/><br/>Create new ticket
                    </Card></Link>
                    <Link to="/view-open-tickets"><Card hoverable className="card2" >
                    <img className="img" src={images1}/><br/><br/>Open tickets
                    </Card></Link>
                    <Link to="/history"><Card hoverable className="card3" >
                    <img className="img" src={images2}/><br/><br/>History
                    </Card></Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
        }
}

export default MainPage;