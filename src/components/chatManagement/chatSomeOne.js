import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

// import logo from './logo.svg';

export default class ChatWith extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
    addResponseMessage('Welcome to our store!');
   addResponseMessage('Are you looking for anything in particular?');
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    const response='hello world';
    addResponseMessage(response);
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          titleAvatar='yes'
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />

      </div>
    );
  }
}
