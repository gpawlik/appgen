import React, { PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const EventPage = ({ event, isAdmin, deleteEvent }) => {
  const { _id, title, headline, description, eventDate, createdAt } = event;
  const eventDateFormatted = moment(eventDate).format('DD/MM/YYYY');
  const timeCreated = moment(createdAt).fromNow();
  const adminLinks = (
    <div className="toolbox">
      <span onClick={() => deleteEvent(_id)} className="button-secondary">delete</span>
      <Link to={'/event/edit/' + _id} className="button-secondary">edit</Link>
    </div>
  );

  return (
    <div className="EventProfile">
      <h3 className="content-wrapper">Event Profile</h3>
      <div className="profile-image"></div>
      <div className="content-wrapper">
        <p>
          <span className="profile-label">Title</span>
          {title}
        </p>
        <p>
          <span className="profile-label">Headline</span>
          {headline}
        </p>
        <p>
          <span className="profile-label">Description</span>
          {description}
        </p>
        <p>
          <span className="profile-label">Event date</span>
          {eventDateFormatted}
        </p>
        <p>
          <span className="profile-label">Created</span>
          {timeCreated}
        </p>
        {isAdmin && adminLinks}
      </div>
    </div>
  );
};

EventPage.propTypes = {
  event: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  deleteEvent: PropTypes.func
};

export default EventPage;
