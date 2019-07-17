import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="top-header-left">
                    <ul>
                        <li className="active"><a href="/">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">gallery</a></li>
                        <li><a href="#">lessons</a></li>
                    </ul>
                    </div>

                    <div className="top-header-right">
                    <ul>
                        <li><a href="#">log in</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                    </div>
            </div>
        )
    }
}

