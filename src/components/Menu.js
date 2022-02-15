function Menu() {

  const cocktials = [
    { name: 'Action',       description: '' },
    { name: 'Adventure',    description: '' },
    { name: 'Animation',    description: '' },
    { name: 'Biography',    description: '' },
    { name: 'Comedy',       description: '' },
    { name: 'Crime',        description: '' },
    { name: 'Documentary',  description: '' },
    { name: 'Drama',        description: '' },
    { name: 'Family',       description: '' },
    { name: 'Fantasy',      description: '' },
    { name: 'History',      description: '' },
    { name: 'Horror',       description: '' },
    { name: 'Music',        description: '' },
    { name: 'Mystery',      description: '' },
    { name: 'Romance',      description: '' },
    { name: 'Sci-Fi',       description: '' },
    { name: 'Short',        description: '' },
    { name: 'Thriller',     description: '' },
    { name: 'War',          description: '' }
  ]
 
  return (
    <section>
      <div id="menuhero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="bluecontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="abouttitle"className="uk-text-lead">EXPERIENCE UNIQUE EVENTS<br></br>WHERE THE SKY IS THE LIMIT</h3>
            <br></br>
            <p className="paratext"> We are not just your ordinary skybar.<br></br>
            At Jin Bo Law we are determined to provide the highest quality of entertainment and parties to keep you coming back for more.<br></br> From Skyline Sessions to our glamerous champagne parties; we have the ultimate line-up to match our stunning views, cocktails and service.
            </p>
          </div>
        </div>     
      </div>
    </section>
  )
}

export default Menu