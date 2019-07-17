import React, { Component } from 'react'
import Wasp  from '../../images/main-pic.png'
// import { Jumbotron } from 'reactstrap'


const Main = () => {
   return (
        <div className="main-container">
            <div className="main-flex">  
             <img id="main-image" src={ Wasp }></img>
            </div>  
        </div>
    )
}

export default Main;
