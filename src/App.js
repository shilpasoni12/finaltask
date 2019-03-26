import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import './App.css';
import './mm.jpg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class Login extends Component {

    btnclick = () => {
        axios.post("https://reqres.in/api/login", {
                email: this.refs.email.value,
                password: this.refs.pwd.value
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="main" style="<img src="Design-3.jpg" width="140px" height="140px"/>">
        <div id="login">
          <p>LOG IN</p>
          <input type="email" id="mail" ref="email" placeholder="Enter Email ID"/>
          <br/>
          <input type="password" id="pwd" ref="pwd" placeholder="Enter Password"/>
          <br/>
          <button onClick={this.btnclick}>Login</button>
        </div>
      </div>
        );
    }
}

export default Login;
