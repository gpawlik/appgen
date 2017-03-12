import React from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import { deleteFlashMessage, cleanFlashMessages } from '../../actions/flash';

class MessageList extends React.Component {

  componentWillUnmount() {
    if(this.props.messages.length) {
      this.props.cleanFlashMessages();
    }
  }

  render() {
    const { messages, deleteMessage } = this.props;
    const items = messages.map(item => {
      return (
        <MessageItem key={item.id} message={item} deleteMessage={deleteMessage} />
      );
    });

    return (
      <ul className="Messages">{items}</ul>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashState
  };
}

export default connect(mapStateToProps, { deleteMessage: deleteFlashMessage, cleanFlashMessages })(MessageList);
