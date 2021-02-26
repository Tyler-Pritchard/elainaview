import React, { Component } from 'react';
import {Launcher} from 'react-chat-window';

import dialogflow from "@google-cloud/dialogflow";
import axios from "axios";

import avatar from './elaina_avatar2.jpg';
import '../../assets/css/chatWindowStyle.css';
 
class ChatWindow extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      messageList: []
    };
  }
 
 async sendMessagesToWebhook() {
        try {
            const request = await axios.post(
                "/api/webhook",
                this.state.messageList
            );
            console.log(request);
        } catch (e) {
            console.error(e);
        }
    }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
   this.sendMessageToWebhook(message);
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
