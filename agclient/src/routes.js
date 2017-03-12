import React from 'react';
import { Route } from 'react-router';

//import requireAuth from './utils/requireAuth';
import requireAdmin from './utils/requireAdmin';

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import UsersContainer from './components/Users/UsersContainer';
import EventsContainer from './components/Events/EventsContainer';
import EventPageContainer from './components/Events/EventPageContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import EditProfileContainer from './components/Profile/EditProfileContainer';
import SignupContainer from './components/Signup/SignupContainer';
import CreateEventPage from './components/Events/CreateEventPage';
import EditEventPage from './components/Events/EditEventPage';
import ErrorPage from './components/Error/ErrorPage';
import About from './components/About/About';
import Login from './components/Login/Login';

export default (
  <Route component={MainLayout}>
    <Route path="/" component={EventsContainer} />
    <Route path="/event/:eventId" component={EventPageContainer} />
    <Route path="/event/edit/:eventId" component={requireAdmin(EditEventPage)} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/user/:userId" component={ProfileContainer} />
    <Route path="/user/edit/:userId" component={EditProfileContainer} />
    <Route path="/create-event" component={requireAdmin(CreateEventPage)} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/404" component={ErrorPage} />
  </Route>
);
