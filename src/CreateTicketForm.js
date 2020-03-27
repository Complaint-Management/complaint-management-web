import React,{Component} from 'react';
import './CreateTicketForm.css'
import './App.css'
import axios from 'axios';
class CreateTicketForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             roll : '',
             complain : ''


        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            headers: {    
                'crossDomain': true,
                'Content-Type': 'application/json',
            },
            url: 'http://localhost:8080/complaint/add/complain',
            data: this.state,
        })
        .then(function(response) {
            alert(response.data);
            
        })
        .catch(function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
        });

        this.setState({
            name : '',
            roll : '',
            complain : ''

        });
    }
    render(){
        const { name, roll, complain} = this.state;
        return (
            <div class="form-style-3">
                <form onSubmit = {this.submitHandler}>
                <fieldset><legend>Register Complain</legend>
                <label for="name"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="name" value = {name} onChange = {this.changeHandler} /></label><br/><br/>
                <label for="roll"><span>Roll <span class="required">*</span></span><input type="text" class="input-field" name="roll" value = {roll} onChange = {this.changeHandler} /></label><br/><br/>
                <label for="complain"><span>Complain <span class="required">*</span></span><input type="text" class="input-field" name="complain" value = {complain} onChange = {this.changeHandler} /></label><br/><br/>
                <label><span> </span><input type="submit" value="Submit" /></label>
                </fieldset> 
                </form>
            </div>
        )
    }
};
export default CreateTicketForm;