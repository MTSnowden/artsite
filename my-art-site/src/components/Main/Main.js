import React, { Component } from 'react'
import Wasp  from '../../images/main-pic.png'
import './Main.css'
// import { Jumbotron } from 'reactstrap'


const Main = () => {
   return (
        <div className="main-container">
             
             <img id="main-image" src={ Wasp }></img>
             
        </div>
    )
}

export default Main;
