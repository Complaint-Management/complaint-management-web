import React,{PureComponent} from 'react';
import './App.css';
import Header1 from './Header1'
import Footer from './Footer'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        localStorage.clear();
    }
     onSubmitHandler(values){
        
        const data={
            "username" : values.username,
            "password":values.password
        }
         axios({
            method: 'post',
            headers: {    
                'Content-Type': 'application/json',
            },
            url: 'http://localhost:8080/login',
            data,
        })
        .then(function(response) {
            console.log(response.headers.authorization);
            if(response.status === 200){
            localStorage.setItem("access_token", response.headers.authorization);
            localStorage.setItem("Username",values.username);
            localStorage.setItem("Rollnumber",values.rollnumber);
            window.location.href="/Home"
            }
        }).catch(function(xhr, ajaxOptions, thrownError){
            console.log(xhr.status);
            alert("Invalid Credential");
        })
    }
    render() {

        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        }
        const onFinish = values => {
            console.log('Success:', values);
            this.onSubmitHandler(values);
        };
        
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        
        return (
            <div>
                <Header1/>
                <div className="formcontainer">
                    <p style={{textAlign:"center",fontSize:'50px'}}>Login</p>
                    <Form style={{marginTop:'80px',marginLeft:'10px',minHeight:'400px'}}
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input placeholder="Enter Username" style={{width:'60%'}} />
                        </Form.Item>

                        <Form.Item
                            label="Roll Number"
                            name="rollnumber"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Roll Number!',
                            },
                            ]}
                        >
                            <Input placeholder="Enter Roll Number" style={{width:'60%'}} />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password 
                            placeholder="Enter Your Password"
                            style={{width:'60%'}}/>
                        </Form.Item>
                        <Form.Item style={{marginLeft:'150px'}}{...tailLayout}>
                            <Button type="primary" htmlType="submit" >Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
                <Footer/>
            </div>
       )    
    }
};
export default Login;