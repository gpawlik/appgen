import React from 'react';
import { connect } from 'react-redux';
import EditProfileForm from './EditProfileForm';
import { getUser, editUser } from '../../actions/userActions';
import { addFlashMessage } from '../../actions/flash';

class EditProfileContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: props.params.userId,
            username: '',
            email: '',
            location: '',
            interests: [],
            errors: {},
            isFormLoading: false,
            isLoading: true
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    } 
    
    onChange (e) {        
        this.setState({ [e.target.name]: e.target.value });
    }  
    
    onSubmit(e) {
        e.preventDefault();
        this.props.editUser(this.state)
            .then(() => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'User succesfully edited!',
                    category: 'user_edited'
                });
                this.context.router.push('/users')
            })
            .catch(
                (err) => {
                    this.setState({ 
                        errors: err.response.data, 
                        isFormLoading: false 
                    })
                }
            );
    }      
    
    componentDidMount() {        
        this.fetchUserData(this.props.params.userId);
    }
    
    componentWillReceiveProps(nextProps) {
        const { username, email } = nextProps.user; 
        this.setState({ 
            username, email
        }); 
    }
    
    fetchUserData(userId) {
        this.props.getUser(userId).then(res => {
            this.setState({ isLoading: false });
        });
    }
    
    render() {
        return (
            <div className="content-wrapper">
                <h3>Edit user</h3>
                <EditProfileForm 
                    onChange={this.onChange}
                    onSubmit={this.onSubmit} 
                    {...this.state} />
            </div>            
        );
    }
    
}

EditProfileContainer.propTypes = {
    getUser: React.PropTypes.func.isRequired,
    editUser: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};

EditProfileContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = function(store) {
    return {
        user: store.profileState.user
    }
}

export default connect(mapStateToProps, { getUser, editUser, addFlashMessage })(EditProfileContainer);