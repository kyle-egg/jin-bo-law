import Image from '../assets/jin-logo-gold.png'

function Home() {
  return (
    <section>
      <div id="offcanvas-nav-primary" uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <button id="closebutton" className="uk-offcanvas-close" type="button" uk-close>X</button>
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <img className="sidenavlogo" src={Image}/>
            <li className="uk-nav-divider"></li>
            <li><a id= "navtext" href="/whatson">What&apos;s On</a></li>
            <li><a id= "navtext" href="/menu">Menu</a></li>
            <li><a id= "navtext" href="/giftvouchers">Gift Vouchers</a></li>
            <li><a id= "navtext" href="/events">Private Events</a></li>
            <li><a id= "navtext" href="https://my.matterport.com/show/?m=3LVPz6vi2vA">Virtual Tour</a></li>
            <li><a id= "navtext" href="#">Contact Us</a></li>
            <li className="uk-nav-divider"></li>
            <li><a id= "navtext" href="/book">Book Now</a></li>
          </ul>
        </div>
      </div>
      <section>
        <div id="homehero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
        </div>
        <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
          <div id="whitegradient">
            <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
              <h3 id="abouttitle"className="uk-text-lead">ELEVATE TO BREATHTAKING VIEWS <br></br>OF LONDON&apos;S MOST ICONIC SKYLINE</h3>
              <br></br>
              <p> Explore the rooftop terrace and cast your eyes upon the fantastic views of Tower Bridge, the Shard, the Walkie Talkie, the Gherkin and more. 
                <br></br>
                Browse through the carefully curated cocktail menu that takes you through a journey of mixology, transforming the most unique ingredients into unexpected treasures.
              </p>
            </div>
          </div>     
        </div>
      </section>
      <section>
        <div className="uk-child-width-1-3@s uk-flex" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 120; repeat: true">
          <div>
            <div id="whatson" className="uk-card uk-card-default uk-card-body">
              <h3 id="homethumb" className="uk-card-title">WHAT&apos;S ON</h3>
            </div>
          </div>
          <div>
            <div id="menu"className="uk-card uk-card-default uk-card-body">
              <h3 id="homethumb" className="uk-card-title">MENU</h3>
            </div>
          </div>
          <div>
            <div id="events" className="uk-card uk-card-default uk-card-body">
              <h3 id="homethumb" className="uk-card-title">PRIVATE EVENTS</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="reservations" className="uk-child-width-1-1@s" uk-grid>
          <div id="whitegradient">
            <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
              <h3 id="abouttitle"className="uk-text-lead">RESERVATIONS</h3>
            </div>
          </div>     
        </div>
      </section>
    </section>
  )
}

export default Home
