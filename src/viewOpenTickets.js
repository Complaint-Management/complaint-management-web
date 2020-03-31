import React,{Component} from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Card,Button } from 'antd';

class viewOpenTicket extends Component {
    constructor(props) {
		super(props);
		this.state = {
      data:[],
      isLoading : true
		};
    }
    
    componentDidMount(){
      const config={
        headers:{
          "Authorization":localStorage.getItem("access_token")
        }
      }
        axios.get(`http://localhost:8080/complaint/all/complaint/open/`+localStorage.getItem("Rollnumber"),config)
      .then(res => {
        this.setState({ data:res,isLoading:false });
        console.log("result....",res);
        console.log("state....", this.state.data);
      })
    }
    render(){
        const{data,isLoading} = this.state;
        console.log(data);
          return (
            
            <div>
                <Header/>
                <div className="openCardContainer">
                  <Card style={{ marginTop: 10}} title="Open Tickets">
                     {console.log('data......',data)}
                     {(!isLoading)&& data.data.length !==0?
                      data.data.map (complaint => (
                        <Card style={{ marginTop: 16 }} type="inner" title={'Complaint ID : '+complaint.id} extra={<Button type="primary">Not Resolved</Button>}>
                          {complaint.complain}
                        </Card>)
                      ):<h3 style={{ textAlign:"center"}}>No open complaints at the moment. You can create complaint from create new ticket section</h3>
                    }
                  </Card>
                </div>
                <Footer/>
            </div>
        )
    }
};
export default viewOpenTicket;