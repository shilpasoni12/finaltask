import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './login.css';
import './mm.jpg';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';

class Login extends Component {


constructor(props) {
     super(props);
   
     this.state = {
        data: ""
     }
  }
   
   componentDidMount(){
       axios.get('https://reqres.in/api/users')
           .then(function(response) {
               console.log(response.data.data);
               for
           })
           
           .catch(function(error) {
               console.log(error);
           });
   }


    
    render() {
        return (
            <div>
           <div className="main">

               <div className="topnav">
                   <input type="text" ref="search" className="searchfeild" placeholder="Search......"/>
                   <button className="SearchButton">SEARCH</button>
                   <button style={{marginLeft:50+"px"}} className="SearchButton">ADD USER</button>
               </div>
               <div className="card">
               
               </div>
               
           </div>
       </div>
       );
   }
}

export default Login;