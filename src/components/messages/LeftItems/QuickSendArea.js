import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMessageAsync,
  fetchMessagesAsync,
} from '../../../features/message/thunks';
import { useGetConfigQuery } from '../../../features/userConfig/userConfigApiSlice';
import { getAuthUserId } from '../../../utils/auth';
import QuickSend from './QuickSend';
const QuickSendArea = () => {
  const [isLoading3, setLoading] = useState(false);
  const { isLoading, data: messages } = useSelector((state) => state.messages);
  const { data: config } = useGetConfigQuery(getAuthUserId());
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessagesAsync());
  }, [dispatch]);

  const quickSendHandler = () => {
    if (!value || messages.length === 0) return;
    setLoading(true);

    const dataObj = {
      userId: getAuthUserId(),
      message: value,
      duration: config[0]?.defaultDuration || 0,
      dateTime: moment(),
      days: 0,
      lastSent: null,
      type: '',
      category: 'quicksend',
    };

    dispatch(addMessageAsync(dataObj));
    setValue('');
    setTimeout(() => {
      setLoading(isLoading);
    }, 2000);
  };
  return (
    <div>
      <Stack direction='row' gap={2} alignItems={'center'} flexWrap='wrap'>
        <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
          <QuickSend value={value} setValue={setValue} />
        </Box>
        <div>
          <LoadingButton
            loading={isLoading3}
            onClick={quickSendHandler}
            variant='contained'
            sx={{ background: '#fc74da' }}
          >
            Send
          </LoadingButton>
        </div>
      </Stack>
    </div>
  );
};

export default QuickSendArea;
