import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Portfolio from './../components/portfolio.js'
import HomePage from '../components/HomePage.js'
import Header from './../components/Header.js'
import Projects from './../components/Projects.js'
import NotFound from './../components/NotFoundPage.js'
import Contact from './../components/Contact.js'



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio" component={Portfolio} exact={true}/>
        <Route path="/portfolio/:id" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
