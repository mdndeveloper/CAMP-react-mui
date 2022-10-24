import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageAsync } from '../../../features/message/thunks';
import { useGetConfigQuery } from '../../../features/userConfig/userConfigApiSlice';
import { getAuthUserId } from '../../../utils/auth';
import CampArea from './CampArea';

const InterView = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [select, setSelect] = useState('');
  const { isLoading } = useSelector((state) => state.messages);
  const { data: config, isSuccess } = useGetConfigQuery(getAuthUserId());
  const dispatch = useDispatch();

  const sendHandler = () => {
    if (!message || !isSuccess || !select) return;

    setLoading(true);
    const data = {
      userId: getAuthUserId(),
      message: `${message} ${config[0].interviewMessage} ${
        select ? select : ''
      }`,
      dateTime: moment(),
      days: 0,
      duration: config[0]?.defaultDuration || 0,
      lastSent: null,
      type: '',
      category: 'interview',
    };
    dispatch(addMessageAsync(data));
    setTimeout(() => {
      setLoading(isLoading);
      setMessage('');
    }, 2000);
  };

  return (
    <div>
      <Stack direction='row' gap={2} alignItems={'start'} flexWrap='wrap'>
        <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            label='Camper Name'
            variant='outlined'
            placeholder='Input here'
            sx={{ width: '100%' }}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
          <CampArea value={select} setValue={setSelect} />
        </Box>
        <div>
          <LoadingButton
            loading={loading}
            onClick={sendHandler}
            sx={{ width: '100px', background: '#9b55d6' }}
            variant='contained'
            // disabled={!message}
          >
            Interview
          </LoadingButton>
        </div>
      </Stack>
    </div>
  );
};

export default InterView;
