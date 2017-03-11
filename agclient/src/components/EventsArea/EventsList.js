import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const EventsList = ({ events, showCreateLink }) => {
  const createEventLink = (
    <Link to="/create-event" className="button-secondary">Create new event</Link>
  );

  return (
    <div className="EventsListArea">
      <h3>Events list</h3>
      <ul className="EventsList">
        {events.map((event, idx) => {
          return (
            <li key={idx}>
              <Link to={'/event/' + event._id}>
                <span className="list-item-title">{event.title}</span>
                <span className="list-item-headline">{event.headline}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="full-content-wrapper">
        {showCreateLink && createEventLink}
      </div>
    </div>
  );
};

EventsList.propTypes = {
  events: PropTypes.array,
  showCreateLink: PropTypes.bool
};

export default EventsList;
