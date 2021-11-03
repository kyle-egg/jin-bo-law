function NavBar() {

  return (
    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="/"><img className="logo" src="https://github.com/kyle-egg/jin-bo-law/blob/main/src/assets/jin-logo-gold.png?raw=true"/></a>
        <ul className="uk-navbar-nav">
          <li><a href="/whatson">What&apos;s On</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/giftvouchers">Gift Vouchers</a></li>
          <li><a href="/events">Private Events</a></li>
          <li><a href="https://my.matterport.com/show/?m=3LVPz6vi2vA">Virtual Tour</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active booknav"><a href="/book">Book Now</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar