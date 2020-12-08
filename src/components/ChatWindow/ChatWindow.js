import React, { Component } from 'react';
import {Launcher} from 'react-chat-window';

import avatar from './elaina_avatar2.jpg';
import '../../assets/css/chatWindowStyle.css';
 
class ChatWindow extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      messageList: []
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {
    return (
      <div>
        <Launcher
          agentProfile={{
            teamName: 'Elaina',
            imageUrl: `${avatar}`
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
          className='chatWindow'
        />
      </div>
    )
  }
}

export default ChatWindow;