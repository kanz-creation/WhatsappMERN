import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import {
  MoreVert,
  SearchOutlined,
  AttachFile,
  InsertEmoticon,
  Mic,
} from '@material-ui/icons';
import axios from './axios';

const Chat = ({ messages }) => {
  const [input, setInput] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: 'Kaneez',
      timestamp: 'Just now!',
      received: false,
    });

    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar alt="" src="" />
        <div className="chat__headerInfo">
          <h3>Thats grape </h3>
          <p> Last seen 1 day ago </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => {
          return (
            <p
              className={`chat__message ${
                message.received && 'chat__reciever'
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          );
        })}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Type a message."
          />
          <button onClick={sendMessage} type="submit">
            Send a Message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
