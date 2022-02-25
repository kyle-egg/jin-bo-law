import Image from '../assets/jin-logo-rose-gold.png'

function SideNav() {
  return (
    <div id="offcanvas-nav-primary" uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <button id="closebutton" className="uk-offcanvas-close" type="button" uk-close>X</button>
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <a href="/"><img className="sidenavlogo" src={Image}/></a>
          <li className="uk-nav-divider"></li>
          <li><a id= "navtext" href="/whatson">WHAT&apos;S ON</a></li>
          <li><a id= "navtext" href="/menu">MENU</a></li>
          <li><a id= "navtext" href="/giftvouchers">GIFT VOUCHERS</a></li>
          <li><a id= "navtext" href="/events">PRIVATE EVENTS</a></li>
          <li><a id= "navtext" href="https://my.matterport.com/show/?m=3LVPz6vi2vA">VIRTUAL TOUR</a></li>
          <li><a id= "navtext" href="#footnav">CONTACT US</a></li>
          <li className="uk-nav-divider"></li>
          <li><a id= "navtext" href="/#reservations">BOOK NOW</a></li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav
