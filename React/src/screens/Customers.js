import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axios from "axios";

//const Search = () => <Header title="Search" />
import App from '../App';
class Customers extends React.Component {
    state = {
        customers: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000').then(result => {
            console.log(result);
            this.setState({customers:result.data});
        });
    }

        handleSubmit = (event)=> {
            event.preventDefault();
           const data = new FormData(event.target);
            
        axios.post('http://localhost:5000', data, { 
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }})
                .then((response)=> {
                    //handle success
                    this.setState({customers:[...this.state.customers,response.data]});
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
                event.target.reset();  
        }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" placeholder="First Name" type="text"/>
                    <input name="lastName" placeholder="Last Name" type="text"/>
                    <input name="email" placeholder="Email" type="text"/>
                    <button type="submit">GO!</button>
                 </form>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date Registered</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.customers.map((cus, index) => <tr id={cus.customerID} key={cus.customerID}>
                    <td>{cus.firstName} {cus.lastName}</td> 
                    <td>{cus.emailAddress}</td> 
                    <td>{cus.dateAdded}</td>   
                </tr> )}
                </tbody>
            </table>
            </div>);
    }
}

export default Customers;