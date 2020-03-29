import React,{Component} from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import CreateTicketForm from './CreateTicketForm'
class createTicket extends Component {
    render(){
        return (
            <div>
                <Header/>
                <div>
                    <h1 className="heading">Register Your Complaint Here </h1>
                </div>
                <CreateTicketForm/>
                <Footer/>
            </div>
        )
    }
};
export default createTicket;