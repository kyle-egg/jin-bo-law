
  
function Home() {
  return (
    <section>
      <section>
        <div id="homehero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
        </div>
        <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
          <div className="bluecontainer">
            <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
              <h3 id="abouttitle"className="uk-text-lead">ELEVATE TO BREATHTAKING VIEWS <br></br>OF LONDON&apos;S MOST ICONIC SKYLINE</h3>
              <br></br>
              <p className="paratext">Explore the rooftop terrace and cast your eyes upon the fantastic views of Tower Bridge, the Shard, the Walkie Talkie, the Gherkin and more. 
                <br></br>
                Browse through the carefully curated cocktail menu that takes you through a journey of mixology, transforming the most unique ingredients into unexpected treasures.
              </p>
            </div>
          </div>     
        </div>
      </section>
      <section>
        <div className="uk-child-width-1-3@s uk-flex" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 120; repeat: true">
          <div className="goldcontainer">
            <a href="/whatson">
              <div id="whatson" className="uk-card uk-card-default uk-card-body">
                <h3 id="homethumb" className="uk-card-title">WHAT&apos;S ON</h3>
              </div>
            </a>
          </div>
          <div className="goldcontainer">
            <a href="/menu">
              <div id="menu" className="uk-card uk-card-default uk-card-body">
                <h3 id="homethumb" className="uk-card-title">MENU</h3>
              </div>
            </a>
          </div>
          <div className="goldcontainer">
            <a href="/events">
              <div id="events" className="uk-card uk-card-default uk-card-body">
                <h3 id="homethumb" className="uk-card-title">PRIVATE EVENTS</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="goldcontainer uk-child-width-1-1@s" uk-grid>
          <div>
            <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
              <h3 id="reservations" className="uk-text-lead">RESERVATIONS</h3>
            </div>
          </div>     
        </div>
      </section>
    </section>
  )
}

export default Home
