'use strict';

import bcrypt from 'bcrypt';

import Event from '../src/models/event';
import User from '../src/models/user';

import { results as users } from './fixtures/Users.json';
import { results as events } from './fixtures/Events.json';

const usersImport = () => {
  return users.reduce((memo, data) => {
    const { username, email, password, location, interests, isAdmin, createdAt = Date.now(), updatedAt = Date.now() } = data;
    const newUser = new User({
      password: bcrypt.hashSync(password, 10),
      username,
      email,
      location,
      interests,
      isAdmin,
      createdAt,
      updatedAt
    });

    return memo.then(() => {
      return newUser.save()
        .then(user => console.log('User created!', user.email))
        .catch(err => console.log('Error', err));
    });
  }, Promise.resolve());
};

const eventsImport = () => {
  return events.reduce((memo, data) => {
    const { title, headline, description, eventDate, createdAt = Date.now(), updatedAt = Date.now() } = data;
    const newEvent = new Event({
      title,
      headline,
      description,
      eventDate,
      createdAt,
      updatedAt
    });

    return memo.then(() => {
      return newEvent.save()
        .then(event => console.log('Event created!', event.title))
        .catch(err => console.log('Error', err));
    });
  }, Promise.resolve());
};

exports.execute = () => {
  return eventsImport()
    .then(() => {
      return usersImport();
    });
};
