function Home() {
  return (
    <section>
      <div id="offcanvas-nav-primary" uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <button className="uk-offcanvas-close" type="button" uk-close>X</button>
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li><a href="/whatson">What&apos;s On</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/giftvouchers">Gift Vouchers</a></li>
            <li><a href="/events">Private Events</a></li>
            <li><a href="https://my.matterport.com/show/?m=3LVPz6vi2vA">Virtual Tour</a></li>
            <li><a href="#">Contact Us</a></li>
            <li className="uk-nav-divider"></li>
            <li><a href="/book">Book Now</a></li>
          </ul>
        </div>
      </div>

      <section>
        <div id="homehero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
        </div>
        <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
          <div id="whitegradient">
            <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle uk-text-center">
              <h3 className="uk-text-lead">ELEVATE</h3>
              <br></br>
              <p> Experience the breathtaking views of London&apos;s most iconic skyline. Explore the rooftop terrace and cast your eyes upon the fantastic views of Tower Bridge, the Shard, the Walkie Talkie, the Gherkin and more. Browse through the carefully curated cocktail menu that takes you through a journey of mixology, transforming the most unique ingredients into unexpected treasures.
              </p>
            </div>
          </div>     
        </div>
      </section>
      <section>
        <div className="uk-child-width-1-3@l uk-grid-small uk-grid-match" uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Default</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-primary uk-card-body">
              <h3 className="uk-card-title">Primary</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-secondary uk-card-body">
              <h3 className="uk-card-title">Secondary</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Fade</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Fade</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Fade</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Fade</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Fade</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Fade</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
