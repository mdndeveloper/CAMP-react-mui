import { Divider } from '@mui/material';
import React from 'react';
import MessageForm from '../components/messages/MessageForm';

const Messages = () => {
  return (
    <div>
      <div>
        <h2>Messages</h2>
        <Divider />
        <div>
          <div>
            <h2>Send a PUPDATE</h2>
          </div>
          <div>
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
