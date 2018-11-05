//copied from Lesson 7 instructions
import React from 'react';
import axios from 'axios';
import Header from '../components/Header';

class Home extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        axios.post('http://localhost:5000', data, { 
            headers: {
                'Content-Type': 'multipart/form-data' 
            }})
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    render() {
        return (<div>
            <Header title="Home" />
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" placeholder="First Name" type="text"/>
                <input name="lastName" placeholder="Last Name" type="text"/>
                <input name="email" placeholder="Email" type="text"/>
                <button type="submit">GO!</button>
            </form>
        </div>)
    }
};

export default Home;