import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './login.css';
import './mm.jpg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


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
          <div>
        <div className="main">
        <div id="login"  className="login">
          <p className="heading"><h2>LOGIN</h2></p>
          <input type="email" id="mail" ref="email" placeholder="Enter Email ID"/>
          <br/>
          <input type="password" id="pwd" ref="pwd" placeholder="Enter Password"/>
          <br/>
          <button onClick={this.btnclick}>Login</button>
        </div>
      </div>
      </div>
        );
    }
}

export default Login;
