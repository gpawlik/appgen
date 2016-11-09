import React from 'react';
import moment from 'moment';
import { Link } from 'react-router'

class Profile extends React.Component {    
    render () {
        const { _id, username, email, createdAt } = this.props.user;
        const timeCreated = moment(createdAt).fromNow();        
        return (
            <div className="UserProfile">            
                <div className="content-wrapper">
                    <h3>User Profile</h3>                
                    <div className="profile-card">
                        <div className="profile-top">
                            <span className="profile-thumbnail"></span>
                        </div>
                        <div className="profile-content">
                            <p className="profile-title">
                                {username}
                            </p>
                            <p>
                                <span className="profile-label">Email</span> 
                                {email}
                            </p>
                            <p>
                                <span className="profile-label">Created</span> 
                                {timeCreated}
                            </p>                      
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