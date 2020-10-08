import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from 'src/assets/img/elaina_avatar.png';

function ChatWidget() {
    // useEffect(() => {
    //     addResponseMessage('Welcome to this awesome chat!');
    //   }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);

        // addResponseMessage(response);
    }

    return (
        <div className="">
            <Widget 
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="My new awesome title"
                subtitle="And my cool subtitle"
            />
        </div>
    );
}

export default ChatWidget;