import React from 'react';
import { Link } from 'react-router';

class EventsList extends React.Component {    
    render() {   
        const { events } = this.props;                            
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
            </div>
        )
    }
};

export default EventsList;