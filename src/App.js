import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import WhatsOn from './components/WhatsOn.js'
import Menu from './components/Menu.js'
import GiftVouchers from './components/GiftVouchers.js'
import PrivateEvents from './components/PrivateEvents.js'
import ContactUs from './components/ContactUs.js'
import BookNow from './components/BookNow.js'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/whatson">
            <WhatsOn />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/giftvouchers">
            <GiftVouchers />
          </Route>
          <Route path="/events">
            <PrivateEvents />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/book">
            <BookNow />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App