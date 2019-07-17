import React from 'react'
import './Header.css'

import Signature from '../../images/signature.png'


const Header = () => {
  return (
    <div className="header">
      
      <div className="header-flex">
        <img id="signature" src={ Signature } alt="signature"></img>
      </div>

      <div className="header-flex-1">
        <div className="title">
          <p>v i s u a l</p>
        </div>
        <div className="title">
          <p>a r t i s t</p>
        </div>
      </div>
    </div>
  )
}

export default Header;
