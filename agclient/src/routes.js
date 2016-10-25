import React from 'react';
import { Route } from 'react-router';

//import requireAuth from './utils/requireAuth';
import requireAdmin from './utils/requireAdmin';

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import UsersContainer from './components/UsersArea/UsersContainer';
import EventsContainer from './components/EventsArea/EventsContainer';
import EventPageContainer from './components/EventsArea/EventPageContainer';
import ProfileContainer from './components/ProfileArea/ProfileContainer';
import SignupContainer from './components/SignupArea/SignupContainer';
import CreateEventPage from './components/EventsArea/CreateEventPage';
import EditEventPage from './components/EventsArea/EditEventPage';
import ErrorPage from './components/ErrorArea/ErrorPage';
import About from './components/AboutArea/About';
import Login from './components/LoginArea/Login';

export default (
  <Route component={MainLayout}>
    <Route path="/" component={EventsContainer} />
    <Route path="/event/:eventId" component={EventPageContainer} />
    <Route path="/event/edit/:eventId" component={requireAdmin(EditEventPage)} />    
    <Route path="/users" component={UsersContainer} />
    <Route path="/user/:userId" component={ProfileContainer} />
    <Route path="/create-event" component={requireAdmin(CreateEventPage)} />               
    <Route path="/about" component={About} />    
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/404" component={ErrorPage} />
  </Route>
);