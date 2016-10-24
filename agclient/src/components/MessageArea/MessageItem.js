import React from 'react';

class MessageItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.props.deleteMessage(this.props.message.id)
    }
    render() {        
        return (
            <li>{this.props.message.text} <span onClick={this.onClick} className="delete-icon">x</span></li>
        );
    }
}

MessageItem.propTypes = {
    message: React.PropTypes.object.isRequired,
    deleteMessage: React.PropTypes.func.isRequired
}

export default MessageItem;