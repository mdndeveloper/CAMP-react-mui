import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageAsync } from '../../../features/message/thunks';
import { getAuthUserId } from '../../../utils/auth';

const Item = ({ type, text, buttons }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { isLoading } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  const sendHandler = () => {
    if (!message) return;
    setLoading(true);
    const data = {
      userId: getAuthUserId(),
      message,
      dateTime: moment(),
      days: 0,
      duration: 0,
      lastSent: moment(),
      type: '',
      category: type,
    };
    dispatch(addMessageAsync(data));
    setTimeout(() => {
      setLoading(isLoading);
      setMessage('');
    }, 2000);
  };
  return (
    <>
      <Stack direction='row' gap={2} alignItems={'center'} flexWrap='wrap'>
        <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            label='Pet Name'
            variant='outlined'
            placeholder='Input here'
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <div>
          <LoadingButton loading={loading} onClick={sendHandler} {...buttons}>
            {text}
          </LoadingButton>
        </div>
      </Stack>
    </>
  );
};

export default Item;
