import React from 'react';
import moment from 'moment';
import shortid from 'shortid';
import { Link } from 'react-router'

class Profile extends React.Component {    
    render () {
        const { _id, username, email, location, interests, createdAt } = this.props.user;
        const timeCreated = moment(createdAt).fromNow();    
        
        const emailField = (<p><span className="profile-label">Email</span>{email}</p>);
        const locationField = (<p><span className="profile-label">Location</span>{location}</p>); 
           
        return (
            <div className="UserProfile">            
                <div className="content-wrapper">
                    <h3>User Profile</h3>                
                    <div className="profile-card">
                        <div className="profile-top">
                            <span className="profile-thumbnail"></span>
                        </div>
                        <div className="profile-content">
                        
                            <p className="profile-title">{username}</p>
                            
                            {email && emailField}
                            
                            {location && locationField}
                            
                            <p><span className="profile-label">Interests</span></p>
                            <ul className="profile-interests">
                              {interests && interests.map((interest) => {
                                  return <li key={shortid.generate()} className="button-label">{interest}</li>;
                              })}
                            </ul>
                            
                            <p><span className="profile-label">Created</span>{timeCreated}</p>  
                                                
                        </div>                                            
                    </div> 
                    <Link to={'/user/edit/' + _id} className="button-secondary">Edit my profile</Link>                                    
                </div>
            </div>
        )        
    }
};

Profile.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default Profile;