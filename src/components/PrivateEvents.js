function PrivateEvents() {

  return (
    <section>
      <div id="eventshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="blackcontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="abouttitle"className="uk-text-lead">CELEBRATE AT LONDON&apos;S<br></br>PREMIER EVENT SPACE</h3>
            <br></br>
            <p className="paratext"> A spectacular event space for special occasions, corporate meetings, intimate parties and beyond. <br></br> Cloak your next event party with charm by celebrating at the top of the world, – a truly one-of-a-kind experience <br></br>that will leave a lasting impression on your guests from start to finish.
            </p>
          </div>
          <div className="goldcontainer">
            <div className="uk-background-cover uk-height-full uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
              <div id="privateevent" className="uk-column-1-1@s uk-column-1-2@l uk-flex-nowrap">
                <div className="left">
                  <form>
                    <fieldset className="uk-fieldset">
                      <h3 id='contacttitle'>CONTACT</h3>
                      <div className="uk-margin">
                        <input className="uk-input" type="text" placeholder="NAME"/>
                        <input className="uk-input" type="text" placeholder="E-MAIL"/>
                        <input className="uk-input" type="text" placeholder="PHONE"/>
                      </div>
                      <div className="uk-margin">
                        <textarea className="uk-textarea" rows="5" placeholder="MESSAGE"></textarea>
                      </div>
                      <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label><input className="uk-checkbox" type="checkbox"/> Subscribe Me To The Jin Bo Law Skybar Newsletter</label>
                      </div>
                    </fieldset>
                    <button id='submit' className="uk-button">SUBMIT</button>
                  </form>
                </div>
                <div className="right">
                  <h3 id="brochuretitle"className="uk-text-lead">EVENT BROCHURE</h3>
                  <br></br>
                  <p className="eventtext"> Discover how we can help you host your next big event. <br></br>Our unique venue with multiple spaces that boasts <br></br>unparalleled views of London&apos;s iconic skyline.
                  </p>
                  <button id='brochure' className="uk-button">DOWNLOAD EVENT BROCHURE</button>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
      <section>
        <div className="uk-child-width-1-3@s uk-flex" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 120; repeat: true">
          <div className="goldcontainer">
            <div id="eventleft" className="uk-card uk-card-default uk-card-body">
            </div>
          </div>
          <div className="goldcontainer">
            <div id="eventcenter" className="uk-card uk-card-default uk-card-body">
            </div>
          </div>
          <div className="goldcontainer">
            <div id="eventright" className="uk-card uk-card-default uk-card-body">
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default PrivateEvents