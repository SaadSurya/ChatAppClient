import React from 'react';
import Message from './Message/Message'

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css'

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map(message => <div><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    );
};

export default Messages;