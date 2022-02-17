import React from 'react'
import { useLocation } from 'react-router-dom'
import Image from '../assets/jin-logo-rose-gold.png'

function Footer() {
  useLocation()

  return (
    <div id="footnav" className="footer uk-flex-between uk-flex uk-flex-between uk-flex-middle">
      <div>
        <a className="uk-navbar-item uk-logo" href="/">
          <img className="navlogo" src= {Image}></img>
        </a>
        <h6 className="address">
        RESERVATIONS@JINBOLAW.CO.UK<br></br>
        +44 (0) 208 947 2582
        </h6>
        <h6 className="address">
        14TH FLOOR DORSETT CITY<br></br>
        9 ALDGATE HIGH STREET<br></br>
        EC3N 1AH</h6>
        <h6 className="address">© 2022 JIN BO LAW SKYBAR ALL RIGHTS RESERVED. PRIVACY POLICY</h6>
      </div>
    </div>

  )
}

export default Footer