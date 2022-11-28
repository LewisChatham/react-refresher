import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainNavigation from './components/layouts/MainNavigation'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupsPage from './pages/NewMeetup'
import FavouritesPage from './pages/Favourites'


export default function App() {
  return (
    <div>
      <MainNavigation />
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup" exact={true}>
            <NewMeetupsPage />
          </Route>
          <Route path="/favourites" exact={true}>
            <FavouritesPage />
          </Route>
        </Switch>
    </div>
  )
}

