import Image from '../assets/jin-logo-rose-gold.png'

function NavBar() {

  return (
    <div className="uk-position-relative">

      <nav id="nav" className="uk-navbar-container" uk-navbar="dropbar: true; dropbar-mode: push">

        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="/">
            <img className='navlogo' src={Image}></img>
          </a>
          <ul className="uk-navbar-nav uk-visible@l">
            <li><a id= "navtext" href="/whatson">What&apos;s On</a></li>
            <li><a id= "navtext" href="/menu">Menu</a></li>
            <li><a id= "navtext" href="/giftvouchers">Gift Vouchers</a></li>
            <li><a id= "navtext" href="/events">Private Events</a></li>
            <li><a id= "navtext" href="https://my.matterport.com/show/?m=3LVPz6vi2vA">Virtual Tour</a></li>
            <li><a id= "navtext" href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active booknav uk-visible@l"><a id= "navtext" href="/book">Book Now</a></li>
            <li className="uk-hidden@l">
              <span><a id="bookhidden" className="uk-margin-small-right">BOOK NOW</a></span>
              <img id="hamburger" src="https://img.icons8.com/ios/50/000000/menu--v4.png" className="uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary"/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar